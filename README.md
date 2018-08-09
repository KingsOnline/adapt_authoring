# King's Online Adapt

Welcome to [King's Online's](https://twitter.com/kingsonline) soft fork of the Adapt Authoring Tool.

## Why maintain a soft fork?

We want to create the best e-Learning Authoring Tool in the world, that both makes beautiful courses but makes the job of our production team as smooth as possible.

We found several enhancements that we can make to reach this goal. Some of which are specific to our workflows. Others took too long to get merged. These changes generally are either cosmetic, affect libraries the Adapt Authoring Tool uses (CKEditor and ACE editor), or change default settings.

Our Dev team is still creating issues and PRs for the Adapt Authoring Tool on their own Github accounts.

We recommend creating Adapt Framework themes out of [adapt-theme-ko](https://github.com/KingsOnline/adapt-theme-ko) to take advantage of some of the features.

## version 0.5.0 changes

To see all the changes introduced in version 0.5.0 of the Adapt Authoring Tool see here - https://github.com/adaptlearning/adapt_authoring/releases/tag/v0.5.0

###  Added

*  The code editor (Ace Editor) now expands and shrinks between 15 and 45 lines
*  The text editor has additional plugins that enhance pasting from Google Docs and Word. This stops the need to format after pasting from these sources
*  CKEditor's config file has been changed, see [here](https://github.com/KingsOnline/adapt_authoring/blob/master/frontend/src/libraries/ckeditor/config.js)

###  Removed

*  Removed the default value of displayTitle in blocks.

## License
<a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>  Adapt is licensed under the [GNU General Public License, Version 3](https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE).
