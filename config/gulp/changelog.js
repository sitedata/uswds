const message = `
  --------------------------------------------------------------------
  ✉️  USWDS Notifications
  --------------------------------------------------------------------
  2.4.1: Changelog notification was moved to 'changelog.js' and included
  it as part of the introduction task ie 'gulp build'. You can also checkout
  CHANGELOG.md if your setup simply imports the framework.

  - We've removed '$theme-show-notifications' from general settings
  - We've moved '_notifications.scss' to changelog.js and CHANGELOG.md
  --------------------------------------------------------------------
  2.4.0: If your component settings aren't working as expected, make
  sure you're importing the components settings in your Sass entry
  point (often styles.scss) with '@import "uswds-theme-components"'.
  A bug in 2.0 omitted that import.

  - We added '$theme-show-notifications: true' to general settings
  --------------------------------------------------------------------
  2.2.0: We changed the names of some settings.

  - $theme-navigation-width → $theme-header-min-width
  - $theme-megamenu-logo-text-width → $theme-header-logo-text-width
  --------------------------------------------------------------------
  2.0.2: We changed the names of some settings and mixins.

  - $theme-title-font-size → $theme-display-font-size
  - @include title → @include display
  - @include typeset-title → @include typeset-display";

  --------------------------------------------------------------------
  These are notifications from the USWDS team, not necessarily a
  problem with your code.

  For more information see CHANGELOG.md
  --------------------------------------------------------------------`;

module.exports = { changelog: message };
