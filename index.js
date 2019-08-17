const fas = require('@fortawesome/free-solid-svg-icons');

Object.keys(fas).forEach((iconName) => {
  const icon = fas[iconName];
  if (icon && icon.icon) {
    const capitalizedName = iconName.substr(2);
    exports[iconName] = icon;
    exports[`fas${capitalizedName}`] = icon;
    exports[`fad${capitalizedName}`] = {
      prefix: icon.prefix,
      iconName: icon.iconName,
      icon: icon.icon.slice(0, icon.icon.length - 1).concat([[icon.icon[4], icon.icon[4]]]),
    };
  }
});