/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
    config.allowedContent = {
        $1: {
            // Use the ability to specify elements as an object.
            elements: CKEDITOR.dtd,
            attributes: true,
            styles: false,
            classes: true,
        }
    };
    config.disallowedContent = '*[dir]';
    config.autoParagraph = false;
};

CKEDITOR.dtd.$removeEmpty.span = 1;

CKEDITOR.on( 'toDataFormat', function( evt ) {
    var filter = new CKEDITOR.htmlParser.filter( {
        elements: {
            p: function( el ) {
                if ( el.parent && el.parent.name == 'li' ) {
                    delete el.name; // This removes the element and leaves its content.
                }
            }
        }
    } );

    filter.applyTo( evt.data.dataValue );
}, null, 12 );
