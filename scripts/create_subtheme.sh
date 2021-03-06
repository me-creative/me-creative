#!/bin/bash
# Script to quickly create sub-theme.

echo '
+------------------------------------------------------------------------+
| With this script you could quickly create inspiral_theme_bootstap sub-theme     |
| In order to use this:                                                  |
| - inspiral_theme_bootstap theme (this folder) should be in the contrib folder   |
+------------------------------------------------------------------------+
'
echo 'The machine name of your custom theme? [e.g. mycustom_inspiral_theme_bootstap]'
read CUSTOM_BOOTSTRAP_SASS

echo 'Your theme name ? [e.g. My custom inspiral_theme_bootstap]'
read CUSTOM_BOOTSTRAP_SASS_NAME

if [[ ! -e ../../custom ]]; then
    mkdir ../../custom
fi
cd ../../custom
cp -r ../contrib/inspiral_theme_bootstap $CUSTOM_BOOTSTRAP_SASS
cd $CUSTOM_BOOTSTRAP_SASS
for file in *inspiral_theme_bootstap.*; do mv $file ${file//bootstrap_sass/$CUSTOM_BOOTSTRAP_SASS}; done
for file in config/*/*inspiral_theme_bootstap.*; do mv $file ${file//bootstrap_sass/$CUSTOM_BOOTSTRAP_SASS}; done
mv {_,}$CUSTOM_BOOTSTRAP_SASS.theme
grep -Rl inspiral_theme_bootstap .|xargs sed -i '' -e "s/bootstrap_sass/$CUSTOM_BOOTSTRAP_SASS/"
sed -i '' -e "s/SASS Bootstrap Starter Kit Subtheme/$CUSTOM_BOOTSTRAP_SASS_NAME/" $CUSTOM_BOOTSTRAP_SASS.info.yml
echo "# Check the themes/custom folder for your new sub-theme."
