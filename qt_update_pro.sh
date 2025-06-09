#!/bin/bash
# Manually generate project file so GTK sources can be excluded.
# Otherwise use: qmake -project -o avidemux.pro2
if [[ "x${QT_SELECT}" = "x" ]]; then
    export QT_SELECT=5
fi

function findHeader()
{
find "$1" -name "*.h*"  -printf "\"../../../%p\" \\\ \n"   >> $PRODIR/avidemux.pro2

}
function findSource()
{
find "$1" -name "*.c*"  -printf "\"../../../%p\" \\\ \n"   >> $PRODIR/avidemux.pro2

}
function findUI()
{
find "$1" -name "*.ui"  -printf "\"../../../%p\" \\\ \n"   >> $PRODIR/avidemux.pro2

}
#*******************************
export PRODIR=$PWD
cd ../../..
echo "Finding HEADERS..."
echo "HEADERS = \\" > $PRODIR/avidemux.pro2
findHeader avidemux_core 
findHeader avidemux/qt4
findHeader avidemux/common
findHeader avidemux_plugins/
echo "" >> $PRODIR/avidemux.pro2
echo "" >> $PRODIR/avidemux.pro2

echo "Finding SOURCES..."
echo "SOURCES = \\" >> $PRODIR/avidemux.pro2
findSource avidemux_core 
findSource avidemux/qt4
findSource avidemux/common
findSource avidemux_plugins/
echo "" >> $PRODIR/avidemux.pro2
echo "" >> $PRODIR/avidemux.pro2

echo "Finding FORMS..."
echo "FORMS = \\" >> $PRODIR/avidemux.pro2
findUI avidemux_plugins/
findUI avidemux/qt4/
echo "" >> $PRODIR/avidemux.pro2
echo "" >> $PRODIR/avidemux.pro2

echo "Finding TRANSLATIONS..."
echo "TRANSLATIONS = \\" >> $PRODIR/avidemux.pro2
cd $PRODIR
find . -iname 'avidemux_*.ts' -printf "\"%p\" \\\ \n" >> avidemux.pro2
echo "" >> avidemux.pro2
echo "" >> avidemux.pro2
cat avidemux.pro2 | sed 's/"//g' | \
    grep -v attic | \
    grep -v ffmpeg_package | \
    grep -v ADM_videoFilters/ | \
    grep -v DIA_bitrateHisto | \
    grep -v \\.conf | \
    grep -v qtScript | \
    grep -v html | \
    grep -v build | \
    grep -v cmake | \
    grep -v gtk/ | \
    grep -v cli/ | \
    grep -vi spiderMon > avidemux.pro
#
for i in lupdate lupdate-qt${QT_SELECT}; do
    which ${i} > /dev/null 2>&1;
    if [[ "x$?" = "x0" ]]; then
        lupdate_full_version=$(${i} -version | cut -d \  -f 3)
        echo ${i} version ${lupdate_full_version} found as $(which ${i});
        lupdate_heuristic="-disable-heuristic number -disable-heuristic sametext"
        if [[ $(echo "${lupdate_full_version}" | cut -d . -f 1) = "6" ]]; then
            lupdate_heuristic="-disable-heuristic sametext"
        fi
        ${i} ${lupdate_heuristic} -locations relative -pro avidemux.pro && echo "DONE" && exit 0 || \
            echo "Update of translation files failed." && exit 1;
    fi
done
echo "lupdate not found."
