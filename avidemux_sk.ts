<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sk">
    <extra-po-header-language>sk_SK</extra-po-header-language>
    <extra-po-header-language_team>jm</extra-po-header-language_team>
    <extra-po-header-last_translator>Jozef Matta &lt;jozef.m923@gmail.com&gt;</extra-po-header-last_translator>
    <extra-po-header-po_revision_date></extra-po-header-po_revision_date>
    <extra-po-header-pot_creation_date></extra-po-header-pot_creation_date>
    <extra-po-header-project_id_version></extra-po-header-project_id_version>
    <extra-po-header-x_generator>Poedit 3.0.1</extra-po-header-x_generator>
    <extra-po-headers>Project-Id-Version,POT-Creation-Date,PO-Revision-Date,Last-Translator,Language-Team,Language,MIME-Version,Content-Type,Content-Transfer-Encoding,Plural-Forms,X-Language,X-Source-Language,X-Qt-Contexts,X-Generator</extra-po-headers>
<context>
    <name>ADM_Composer</name>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="452"/>
        <source>Cannot find a demuxer for %s</source>
        <translation>Nemožno nájsť rozkladač videa pre %s</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="488"/>
        <source>Attempt to open %s failed!</source>
        <translation>Zlyhalo otvorenie %s!</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="518"/>
        <source>width</source>
        <translation>šírka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="524"/>
        <source>%sheight</source>
        <translation>%svýška</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="525"/>
        <source> and </source>
        <translation> a </translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="528"/>
        <source>%sdifferent between first and this video stream</source>
        <translation>%srozdiel medzi prvým a týmto video tokom</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="529"/>
        <source> are </source>
        <translation> sú </translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="529"/>
        <source> is </source>
        <translation> je </translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="531"/>
        <source>You cannot mix different video dimensions yet. Using the partial video filter later, will not work around this problem. The workaround is:
1.) &quot;resize&quot; / &quot;add border&quot; / &quot;crop&quot; each stream to the same resolution
2.) concatenate them together</source>
        <translation>Nemôžete zmiešať rozdielne rozmery videa. Pomocou čiastkového filtra videa sa neskôr tento problém nevyrieši. Tu je riešenie:
1.) &quot;zmeniť veľkosť&quot; / &quot;pridať okraje&quot; / &quot;orezať&quot; každý tok na rovnaké rozlíšenie
2.) spojiť ich dohromady</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="544"/>
        <source>The width of the video %u px exceeds maximum supported width %u.
</source>
        <translation>Šírka videa %u px presahuje maximálnu podporovanú šírku %u.
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="548"/>
        <source>The height of the video %u px exceeds maximum supported height %u.
</source>
        <translation>Výška videa %u px presahuje maximálnu podporovanú výšku %u.
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="552"/>
        <source>Video dimensions %ux%u exceed maximum supported size %ux%u.
</source>
        <translation>Rozmery videa %ux%u presahujú maximálnu podporovanú veľkosť %ux%u.
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="556"/>
        <source>Unsupported size</source>
        <translation>Nepodporovaná veľkosť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="78"/>
        <source>Checking if timestamps are valid..</source>
        <translation>Kontrola platnosti časových údajov.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="127"/>
        <source>This video contains B-frames, but presentation time stamps (PTS) are either missing or monotonically increasing. Avidemux can try to reconstruct correct PTS by decoding the entire video. This may take a lot of time. Proceed?</source>
        <translation>Toto video obsahuje snímky B, ale časové údaje prezentácie (PTS) chýbajú alebo sa monotónne zvyšujú. Avidemux sa môže pokúsiť rekonštruovať správne PTS dekódovaním celého videa. Môže to ale trvať veľmi dlho. Pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="161"/>
        <source>Decoding video...</source>
        <translation>Rozkladanie videa...</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="324"/>
        <source>Some timing information are incorrect.
It happens with some capture software.
If you re encode video we should drop these informations,
 else it will cause dropped frame/jerky video.
If you just copy the video without reencoding,
 you should keep them.
Drop timing informations ?</source>
        <translation>Niektoré informácie o časovaní sú nesprávne.
Stáva sa to pri niektorom softvéri na zachytávanie.
Ak znova zakódujete video, mali by sme tieto informácie odstrániť,
 inak to spôsobí pokles počtu snímiek a trhanie videa.
Ak práve skopírujete video bez opätovného kódovania,
 mali by ste ich udržať.
Vypustiť časové údaje?</translation>
    </message>
</context>
<context>
    <name>CalculatorDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="16"/>
        <source>Calculator</source>
        <translation>Kalkulačka</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="28"/>
        <source>Target</source>
        <translation>Cieľ</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="56"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="64"/>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="69"/>
        <source>OGM</source>
        <translation>OGM</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="74"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="82"/>
        <source>Medium:</source>
        <translation>Stredný:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="89"/>
        <source>Format:</source>
        <translation>Formát:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="96"/>
        <source>Duration:</source>
        <translation>Trvanie:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="104"/>
        <source>1 x 80 minute CD</source>
        <translation>1 x 80 minútové CD</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="109"/>
        <source>2 x 80 minute CD</source>
        <translation>2 x 80 minútové CD</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="114"/>
        <source>1 x 74 minute CD</source>
        <translation>1 x 74 minútové CD</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="119"/>
        <source>2 x 74 minute CD</source>
        <translation>2 x 74 minútové CD</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="124"/>
        <source>DVD-5</source>
        <translation>DVD-5</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="129"/>
        <source>Custom</source>
        <translation>Vlastný</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="187"/>
        <source>Custom Size:</source>
        <translation>Vlastná veľkosť:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="210"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="408"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="435"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="469"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="252"/>
        <source>Audio Bitrate</source>
        <translation>Prenosová rýchlosť zvuku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="272"/>
        <source>Track 1:</source>
        <translation>1. stopa:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="286"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="323"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="555"/>
        <source>kbps</source>
        <translation>kB/s</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="309"/>
        <source>Track 2:</source>
        <translation>2. stopa:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="348"/>
        <source>Result</source>
        <translation>Výsledok</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="376"/>
        <source>Audio Size:</source>
        <translation>Veľkosť zvuku:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="383"/>
        <source>Video Size:</source>
        <translation>Veľkosť videa:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="398"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="425"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="459"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="527"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="545"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="444"/>
        <source>Total Size:</source>
        <translation>Celková veľkosť:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="564"/>
        <source>Bits Per Pixel:</source>
        <translation>Bitov na pixel:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="571"/>
        <source>Video Bitrate:</source>
        <translation>Prenosová rýchlosť videa:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="632"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="639"/>
        <source>Cancel</source>
        <translation>Zrušiť</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="64"/>
        <source>Indexing</source>
        <translation>Indexovanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="65"/>
        <source>Time Left : Infinity</source>
        <translation>Zostávajúci čas: nekonečno</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="66"/>
        <source># Images :</source>
        <translation># Obrázky:</translation>
    </message>
</context>
<context>
    <name>DialogAudioTracks</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="14"/>
        <source>Audio Tracks Configuration</source>
        <translation>Konfigurácia audio stôp</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="25"/>
        <source>Track 1</source>
        <translation>1. stopa</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="32"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="73"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="114"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="155"/>
        <source>Enabled</source>
        <translation>Povolené</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="48"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="89"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="130"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="171"/>
        <source>Configure</source>
        <translation>Konfigurovať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="55"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="96"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="137"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="178"/>
        <source>Filters</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="66"/>
        <source>Track 2</source>
        <translation>2. stopa</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="107"/>
        <source>Track 3</source>
        <translation>3. stopa</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="148"/>
        <source>Track 4</source>
        <translation>4. stopa</translation>
    </message>
</context>
<context>
    <name>DialogOcr</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="13"/>
        <source>Dialog</source>
        <translation>Dialóg</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="33"/>
        <source>Calibrate</source>
        <translation>Kalibrácia</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="40"/>
        <source>Skip All</source>
        <translation>Preskočiť všetko</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="47"/>
        <source>Skip Glyph</source>
        <translation>Preskočiť glyf</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="54"/>
        <source>Ignore</source>
        <translation>Ignorovať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="74"/>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="92"/>
        <source>Close</source>
        <translation>Zatvoriť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="102"/>
        <source>00:00:00/000</source>
        <translation>00:00:00/000</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="109"/>
        <source>Timecode:</source>
        <translation>Časový kód:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="116"/>
        <source>0/0</source>
        <translation>0/0</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="123"/>
        <source>Nb Lines :</source>
        <translation>Riadok titulkov:</translation>
    </message>
</context>
<context>
    <name>DialogProcessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="14"/>
        <source>Dialog</source>
        <translation>Dialóg</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="20"/>
        <source>TimeLeft</source>
        <translation>Odhadnutý čas</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="33"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="61"/>
        <source>ProcessImages</source>
        <translation>Priebežne snímok</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="84"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="54"/>
        <source>Speed</source>
        <translation>Rýchlosť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="40"/>
        <source>0 fps</source>
        <translation>0 snímok/s</translation>
    </message>
</context>
<context>
    <name>DialogProgress</name>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="17"/>
        <source>Progress</source>
        <translation>Priebeh</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="30"/>
        <source>Current job</source>
        <translation>Súčasná úloha</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="37"/>
        <source>1/1</source>
        <translation>1/1</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="44"/>
        <source>File being written </source>
        <translation>Súbor sa zapisuje </translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="51"/>
        <source>...</source>
        <translation>...</translation>
    </message>
</context>
<context>
    <name>FDK-AAC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="436"/>
        <source>_Profile:</source>
        <translation>_Profil:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="437"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="439"/>
        <source>SBR enabled</source>
        <translation>SRB povolené</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="441"/>
        <source>Afterburner</source>
        <translation>Dodatočné vypálenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="444"/>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="447"/>
        <source>FDK-AAC Configuration</source>
        <translation>Konfigurácia FDK-AAC</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="148"/>
        <source>&amp;Auto</source>
        <translation>Au&amp;tomaticky</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="15"/>
        <source>Avidemux</source>
        <translation>Avidemux</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="110"/>
        <source>&amp;Help</source>
        <translation>&amp;Nápoveda</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="115"/>
        <source>Vi&amp;deo</source>
        <translation>&amp;Video</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="120"/>
        <source>&amp;Edit</source>
        <translation>&amp;Upraviť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="125"/>
        <source>&amp;View</source>
        <translation>&amp;Zobraziť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="129"/>
        <source>&amp;Toolbars</source>
        <translation>&amp;Lišty nástrojov</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="140"/>
        <source>T&amp;heme</source>
        <translation>&amp;Motív</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="153"/>
        <source>&amp;Custom</source>
        <translation>V&amp;lastné</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="158"/>
        <source>&amp;Go</source>
        <translation>&amp;Prejsť na</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="163"/>
        <source>&amp;Tools</source>
        <translation>&amp;Nástroje</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="168"/>
        <source>&amp;Audio</source>
        <translation>&amp;Audio</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="173"/>
        <source>&amp;File</source>
        <translation>Súbor</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="178"/>
        <source>&amp;Recent</source>
        <translation>Ne&amp;dávne</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="224"/>
        <source>Codec O&amp;ptions</source>
        <translation>Nastavenie &amp;kodeku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="257"/>
        <source>&lt;b&gt;Video Decoder&lt;/b&gt;</source>
        <translation>&lt;b&gt;Video dekóder&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="332"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="339"/>
        <source>XXXX</source>
        <translation>XXXX</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="357"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="499"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="668"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="849"/>
        <source>Configure</source>
        <translation>Konfigurovať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="396"/>
        <source>&lt;b&gt;Video Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;Výstupné video&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="482"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="651"/>
        <source>Copy</source>
        <translation>Kopírovať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="515"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="684"/>
        <source>Filters</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="556"/>
        <source>&lt;b&gt;Audio Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;Audio výstup&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="711"/>
        <source>&amp;Shift:</source>
        <translation>&amp;Posun:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="743"/>
        <source>ms</source>
        <translation>ms</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="778"/>
        <source>&lt;b&gt;Output Format&lt;/b&gt;</source>
        <translation>&lt;b&gt;Výstupný formát&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="904"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1939"/>
        <source>&amp;Navigation</source>
        <translation>&amp;Navigácia</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="979"/>
        <source>Play [SPACE]</source>
        <translation>Prehrať [medzerník]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="982"/>
        <source>Play</source>
        <translation>Prehrať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="988"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1011"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1034"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1057"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1080"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1103"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1126"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1152"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1175"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1200"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1223"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1246"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1269"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1292"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1318"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1691"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1008"/>
        <source>Go to previous frame [LEFT]</source>
        <translation>Prejsť na predošlú snímku [šípka vľavo]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1031"/>
        <source>Go to next frame [RIGHT]</source>
        <translation>Prejsť na ďalšiu snímku [šípka vpravo]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1054"/>
        <source>Go to previous keyframe [DOWN]</source>
        <translation>Prejsť na predošlú kľúčovú snímku [šípka dole]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1077"/>
        <source>Go to next keyframe [UP]</source>
        <translation>Prejsť na ďalšiu kľúčovú snímku [šípka hore]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1100"/>
        <source>Set start marker [CTRL+PAGEUP]</source>
        <translation>Nastaviť značku začiatku [Ctrl+Page Up]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1123"/>
        <source>Set end marker [CTRL+PAGEDOWN]</source>
        <translation>Nastaviť značku konca [Ctrl+Page Down]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1197"/>
        <source>Search previous black frame</source>
        <translation>Vyhľadať predošlú čiernu snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1220"/>
        <source>Search next black frame</source>
        <translation>Vyhľadať ďalšiu čiernu snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1243"/>
        <source>Go to first frame [HOME]</source>
        <translation>Prejsť na prvú snímku [Home]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1266"/>
        <source>Go to last frame [END]</source>
        <translation>Prejsť na poslednú snímku [End]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1289"/>
        <source>Backward one minute [CTRL+DOWN]</source>
        <translation>Späť o 1 minútu [Ctrl+šípka dole]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1312"/>
        <source>Forward one minute [CTRL+UP]</source>
        <translation>Vpred o 1 minútu [Ctrl+šípka hore]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1315"/>
        <source>Forward one minute</source>
        <translation>Vpred o 1 minútu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1373"/>
        <source>Time:</source>
        <translation>Čas:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1392"/>
        <source>00:00:00.000</source>
        <translation>00:00:00.000</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1414"/>
        <source>/ 00:00:00.000</source>
        <translation>/ 00:00:00.000</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1443"/>
        <source>Frame type:</source>
        <translation>Typ snímky:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1456"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1506"/>
        <source>Se&amp;lection</source>
        <translation>Vy&amp;brané</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1563"/>
        <source>A:</source>
        <translation>A:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1570"/>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1583"/>
        <source>Go to marker A [PAGE UP]</source>
        <translation>Choď na značku A [Page Up]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1586"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1602"/>
        <source>000000</source>
        <translation>000000</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1599"/>
        <source>Go to Marker B [PAGE DOWN]</source>
        <translation>Choď na značku B [Page Down]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1857"/>
        <source>Play filtered</source>
        <translation>Prehrať filtrované</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1658"/>
        <source>Vol&amp;ume</source>
        <translation>Hlasi&amp;tosť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="566"/>
        <source> (0 tracks)</source>
        <translation> (0 stôp)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1149"/>
        <source>Go to previous cut point [SHIFT+DOWN]</source>
        <translation>Prejsť na predošlý bod strihu [SHIFT+↓]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1172"/>
        <source>Go to next cut point [SHIFT+UP]</source>
        <translation>Prejsť na ďalší bod strihu [SHIFT+UP]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1621"/>
        <source>Selection: 000000</source>
        <translation>Vybrané: 000000</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1771"/>
        <source>Audio &amp;Metre</source>
        <translation>&amp;Audiometer</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1818"/>
        <source>&amp;Open...</source>
        <translation>&amp;Otvoriť...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1821"/>
        <source>Open Video</source>
        <translation>Otvorí video</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1830"/>
        <source>&amp;Information...</source>
        <translation>&amp;Informácia...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1839"/>
        <source>Save &amp;Video...</source>
        <translation>&amp;Uložiť video...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1842"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1845"/>
        <source>Save Video</source>
        <translation>Uloží video</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1866"/>
        <source>&amp;Load/Run Project...</source>
        <translation>N&amp;ačítať/spustiť projekt...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1869"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1872"/>
        <source>Load/Run Project</source>
        <translation>Načíta/spustí projekt</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1881"/>
        <source>Save &amp;Project</source>
        <translation>Uložiť p&amp;rojekt</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1884"/>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1887"/>
        <source>Save Project</source>
        <translation>Uloží projekt</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1902"/>
        <source>&amp;Input</source>
        <translation>&amp;Vstup</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1914"/>
        <source>&amp;Output</source>
        <translation>Vý&amp;stup</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1925"/>
        <source>&amp;Codec Options</source>
        <translation>Nastavenie &amp;kodeku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1928"/>
        <source>Ctrl+Alt+C</source>
        <translation>Ctrl+Alt+C</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1942"/>
        <source>Ctrl+Alt+N</source>
        <translation>Ctrl+Alt+N</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1953"/>
        <source>&amp;Selection</source>
        <translation>&amp;Vybrané</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1956"/>
        <source>Ctrl+Alt+S</source>
        <translation>Ctrl+Alt+S</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1967"/>
        <source>&amp;Volume</source>
        <translation>&amp;Hlasitosť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1970"/>
        <source>Ctrl+Alt+V</source>
        <translation>Ctrl+Alt+V</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1981"/>
        <source>&amp;Toolbar</source>
        <translation>&amp;Panel nástrojov</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1984"/>
        <source>Ctrl+Alt+B</source>
        <translation>Ctrl+Alt+B</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1995"/>
        <source>&amp;Audio Metre</source>
        <translation>&amp;Audiometer</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="1998"/>
        <source>Ctrl+Alt+M</source>
        <translation>Ctrl+Alt+M</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="2010"/>
        <source>&amp;Separate</source>
        <translation>S&amp;amostatne</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="2022"/>
        <source>&amp;Top</source>
        <translation>&amp;Na sebe</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="2034"/>
        <source>Si&amp;de</source>
        <translation>V&amp;edľa seba</translation>
    </message>
</context>
<context>
    <name>Opus</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="277"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
</context>
<context>
    <name>SpiderMonkeyShell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/shell.ui" line="17"/>
        <source>Shell</source>
        <translation>Ulita</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/shell.ui" line="49"/>
        <source>Clear</source>
        <translation>Zmazať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/shell.ui" line="89"/>
        <source>Evaluate</source>
        <translation>Vyhodnotiť</translation>
    </message>
</context>
<context>
    <name>VapourSynthProxy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="14"/>
        <source>VapourSynth Proxy</source>
        <translation>VapourSynth Proxy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="26"/>
        <source>Select VS file</source>
        <translation>Vybrať VS súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="37"/>
        <source>Port to use: </source>
        <translation>Port na použitie: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="61"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="68"/>
        <source>Run!</source>
        <translation>Spustiť!</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="14"/>
        <source>About Avidemux</source>
        <translation>O Avidemuxe</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="107"/>
        <source>Avidemux </source>
        <translation>Avidemux </translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="126"/>
        <source>Multi-platform Video Editor</source>
        <translation>Multiplatformný video editor</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="136"/>
        <source>© 2001 - 2021  Mean / eumagga0x2a</source>
        <translation>© 2001 - 2021 Mean / eumagga0x2a</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="155"/>
        <source>http://www.avidemux.org</source>
        <translation>http://www.avidemux.org&lt;p&gt;Slovenský preklad pripravil: Jozef Matta</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="200"/>
        <source>&amp;License</source>
        <translation>&amp;Licencia</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="220"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>addBorder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="183"/>
        <source>_Left border:</source>
        <translation>_Ľavý okraj:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="184"/>
        <source>_Right border:</source>
        <translation>_Pravý okraj:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="185"/>
        <source>_Top border:</source>
        <translation>_Horný okraj:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="186"/>
        <source>_Bottom border:</source>
        <translation>_Dolný okraj:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="189"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="42"/>
        <source>Add Borders</source>
        <translation>Pridať okraje</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="193"/>
        <source>Incorrect parameters</source>
        <translation>Nesprávne parametre</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="193"/>
        <source>All parameters must be even and within range.</source>
        <translation>Všetky parametre musia byť párne a v platnom rozsahu.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="43"/>
        <source>Add black borders around the image.</source>
        <translation>Pridá čierne okraje okolo obrázka.</translation>
    </message>
</context>
<context>
    <name>adm</name>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="36"/>
        <source>Open</source>
        <translation>Otvoriť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="37"/>
        <source>Append</source>
        <translation>Prepojiť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="38"/>
        <source>Save</source>
        <translation>Uložiť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="39"/>
        <source>Queue</source>
        <translation>Fronta</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="40"/>
        <source>Save as Image</source>
        <translation>Uložiť ako obrázok</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="42"/>
        <source>Save as PNG</source>
        <translation>Uložiť ako PNG</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="44"/>
        <source>Save Selection as JPEG</source>
        <translation>Uložiť výber ako JPEG</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="45"/>
        <source>Close</source>
        <translation>Zatvoriť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="47"/>
        <source>Information</source>
        <translation>Informácia</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="51"/>
        <source>Quit</source>
        <translation>Ukončiť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="59"/>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="61"/>
        <source>Clear recent items</source>
        <translation>Vyčistiť nedávne položky</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="69"/>
        <source>Redo</source>
        <translation>Vpred</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="70"/>
        <source>Reset Edit</source>
        <translation>Obnoviť úpravu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="71"/>
        <source>Cut</source>
        <translation>Vystrihnúť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="72"/>
        <source>Copy</source>
        <translation>Kopírovať</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="73"/>
        <source>Paste</source>
        <translation>Prilepiť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="75"/>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="77"/>
        <source>Delete</source>
        <translation>Odstrániť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="80"/>
        <source>Set Marker A</source>
        <translation>Nastaviť značku A</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="81"/>
        <source>Set Marker B</source>
        <translation>Nastaviť značku B</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="82"/>
        <source>Reset Marker A</source>
        <translation>Obnoviť značku A</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="83"/>
        <source>Reset Marker B</source>
        <translation>Obnoviť značku B</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="84"/>
        <source>Reset Markers</source>
        <translation>Vynulovať značky</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="89"/>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="91"/>
        <source>Save current settings as default</source>
        <translation>Uložiť súčasné nastavenia ako predvolené</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="93"/>
        <source>Load saved settings</source>
        <translation>Nahrať uložené nastavenia</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="99"/>
        <source>Decoder Option</source>
        <translation>Možnosti dekódera</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="100"/>
        <source>PostProcessing</source>
        <translation>Následné spracovanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="101"/>
        <source>HDR tone mapping</source>
        <translation>Mapovanie tónov HDR</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="102"/>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="112"/>
        <source>Filters</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="103"/>
        <source>Add partialized filter</source>
        <translation>Pridanie parciálneho filtra</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="104"/>
        <source>Play filtered</source>
        <translation>Prehrať filtrované</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="110"/>
        <source>Select Track</source>
        <translation>Vybrať stopu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="111"/>
        <source>Save audio</source>
        <translation>Uložiť audio</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="118"/>
        <source>Build Option</source>
        <translation>Možnosti zostavy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="119"/>
        <source>Plugins</source>
        <translation>Plugins</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="127"/>
        <source>About</source>
        <translation>About</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="139"/>
        <source>Previous Cut Point</source>
        <translation>Predošlý bod strihu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="140"/>
        <source>Next Cut Point</source>
        <translation>Ďalší bod strihu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="143"/>
        <source>First Frame</source>
        <translation>Prvá snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="144"/>
        <source>Last Frame</source>
        <translation>Posledná snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="146"/>
        <source>Go To Marker A</source>
        <translation>Prejsť na značku A</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="147"/>
        <source>Go To Marker B</source>
        <translation>Prejsť na značku B</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="149"/>
        <source>Go To Time</source>
        <translation>Prejsť na čas</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="151"/>
        <source>Backward 1 second</source>
        <translation>Späť 1 sekunda</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="152"/>
        <source>Forward 1 second</source>
        <translation>Vpred o 1 sekundu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="153"/>
        <source>Backward 2 seconds</source>
        <translation>Späť 2 sekundy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="154"/>
        <source>Forward 2 seconds</source>
        <translation>Vpred 2 sekundy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="155"/>
        <source>Backward 4 seconds</source>
        <translation>Späť 4 sekundy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="156"/>
        <source>Forward 4 seconds</source>
        <translation>Vpred 4 sekundy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="157"/>
        <source>Backward one minute</source>
        <translation>Späť o 1 minútu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="158"/>
        <source>Forward one minute</source>
        <translation>Vpred o 1 minútu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="165"/>
        <source>Zoom 1:4</source>
        <translation>Priblíženie 1:4</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="166"/>
        <source>Zoom 1:2</source>
        <translation>Priblíženie 1:2</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="167"/>
        <source>Zoom 1:1</source>
        <translation>Priblíženie 1:1</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="168"/>
        <source>Zoom 2:1</source>
        <translation>Priblíženie 2:1</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="170"/>
        <source>Fit to window</source>
        <translation>Prispôsobiť oknu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="34"/>
        <source>R_esampling (Hz):</source>
        <translation>P_revzorkovanie [Hz]:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="34"/>
        <source>Resampling frequency (Hz)</source>
        <translation>Frekvencia prevzorkovania [Hz]</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="38"/>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="63"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="43"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="39"/>
        <source>Film to PAL</source>
        <translation>Film na PAL</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="40"/>
        <source>PAL to Film</source>
        <translation>PAL na film</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="43"/>
        <source>_Frame rate change:</source>
        <translation>_Zmena snímkovej frekvencie:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="47"/>
        <source>No change</source>
        <translation>Bez zmeny</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="48"/>
        <source>Mono</source>
        <translation>Mono</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="49"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="464"/>
        <source>Stereo</source>
        <translation>Stereo</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="50"/>
        <source>Stereo+surround</source>
        <translation>Stereo+okolie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="51"/>
        <source>Stereo+center</source>
        <translation>Stereo+stred</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="52"/>
        <source>Stereo+center+surround</source>
        <translation>Stereo+stred+okolie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="53"/>
        <source>Stereo front+stereo rear</source>
        <translation>Stereo predné+stereo zadné</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="54"/>
        <source>5 channels</source>
        <translation>5 kanálov</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="55"/>
        <source>5.1</source>
        <translation>5.1</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="56"/>
        <source>Dolby Pro Logic</source>
        <translation>Dolby Pro Logic</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="57"/>
        <source>Dolby Pro Logic II</source>
        <translation>Dolby Pro Logic II</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="60"/>
        <source>DRC</source>
        <translation>DRC</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="64"/>
        <source>Automatic</source>
        <translation>Automaticky</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="65"/>
        <source>Manual (dB)</source>
        <translation>Ručne [dB]</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="68"/>
        <source>Gain</source>
        <translation>Zisk</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="69"/>
        <source>_Gain mode:</source>
        <translation>Režim _zisku:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="70"/>
        <source>G_ain value:</source>
        <translation>Hodnota z_isku:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="71"/>
        <source>_Maximum value:</source>
        <translation>_Maximálna hodnota:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="80"/>
        <source>_Mixer:</source>
        <translation>_Zmiešavač:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="82"/>
        <source>Remix</source>
        <translation>Premiešanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="85"/>
        <source>Mixer</source>
        <translation>Zmiešavač</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="90"/>
        <source>Shift audio:</source>
        <translation>Posun zvuku:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="90"/>
        <source>Shift Value (ms):</source>
        <translation>Posun hodnoty [ms]:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="94"/>
        <source>Audio Filters</source>
        <translation>Audio filtre</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="81"/>
        <source>Fontconfig</source>
        <translation>Konfigurácia písma</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="82"/>
        <source>FreeType 2</source>
        <translation>Voľný typ 2</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="83"/>
        <source>Gettext</source>
        <translation>Gettext</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="84"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="415"/>
        <source>SDL</source>
        <translation>SDL</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="85"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="400"/>
        <source>XVideo</source>
        <translation>Xvideo</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="86"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="403"/>
        <source>VDPAU</source>
        <translation>VDPAU</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="88"/>
        <source>x86</source>
        <translation>x86</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="89"/>
        <source>x86-64</source>
        <translation>x86-64</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="96"/>
        <source>Libraries</source>
        <translation>Knižnice</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="97"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="652"/>
        <source>CPU</source>
        <translation>CPU</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="101"/>
        <source>Built-in Support</source>
        <translation>Zabudovaná podpora</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_gototime.cpp" line="33"/>
        <source>TimeStamp:</source>
        <translation>Časová pečiatka:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_gototime.cpp" line="36"/>
        <source>Go to Time</source>
        <translation>Prejsť na čas</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="8"/>
        <source>_Job name:</source>
        <translation>_Názov úlohy:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="11"/>
        <source>Output _File:</source>
        <translation>Výstupný _súbor:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="11"/>
        <source>Select Video To Write</source>
        <translation>Vyberte video na zápis</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="14"/>
        <source>Save Job</source>
        <translation>Uložiť úlohu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="57"/>
        <source>Audio Plugins</source>
        <translation>Rozšírenia audio</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="80"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="536"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="539"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="544"/>
        <location filename="../../common/gui_save.cpp" line="58"/>
        <location filename="../../common/gui_save.cpp" line="68"/>
        <location filename="../../common/gui_save.cpp" line="340"/>
        <location filename="../../common/gui_save.cpp" line="355"/>
        <location filename="../../common/gui_save.cpp" line="374"/>
        <location filename="../../common/gui_save.cpp" line="381"/>
        <location filename="../../common/gui_savenew.cpp" line="436"/>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="86"/>
        <source>Video Encoder Plugins</source>
        <translation>Rozšírenie video kodérov</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="110"/>
        <source>Video Encoder</source>
        <translation>Video kodér</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="115"/>
        <source>Video Decoder Plugins</source>
        <translation>Zásuvné moduly video dekodérov</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="139"/>
        <source>Video Decoder</source>
        <translation>Video dekóder</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="144"/>
        <source>Audio Device Plugins</source>
        <translation>Rozšírenie audio zariadenia</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="166"/>
        <source>Audio Device</source>
        <translation>Audio zariadenie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="173"/>
        <source>Audio Encoder Plugins</source>
        <translation>Rozšírenia audio kodérov</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="195"/>
        <source>Audio Encoders</source>
        <translation>Audio kodéry</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="202"/>
        <source>Demuxer Plugins</source>
        <translation>Zásuvné moduly rozkladu videa</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="224"/>
        <source>Demuxers</source>
        <translation>Rozklad videa</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="232"/>
        <source>Muxer Plugins</source>
        <translation>Zásuvné moduly zmiešavačov</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="254"/>
        <source>Muxers</source>
        <translation>Zmiešavače</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="259"/>
        <source>Plugins Info</source>
        <translation>Informácia o rozšíreniach</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="25"/>
        <source>_Filter strength:</source>
        <translation>_Sila filtra:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="24"/>
        <source>The options above are effective only for software decoding</source>
        <translation>Vyššie uvedené možnosti sú efektívne iba s dekódovaním softvéru</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="37"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="548"/>
        <source>_Horizontal deblocking</source>
        <translation>_Horizontálne odstránenie blokových artefaktov (deblocking)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="38"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="549"/>
        <source>_Vertical deblocking</source>
        <translation>_Vertikálne odstránenie blokových artefaktov (deblocking)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="39"/>
        <source>_Deringing</source>
        <translation>_Odstránenie zvlnenia okolo hrán (deringing)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="40"/>
        <source>De_interlacing (ffmpegdeint)</source>
        <translation>Ro_zkladač (ffmpedeint)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="42"/>
        <source>Deblocking</source>
        <translation>Odblokovanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="617"/>
        <source>Decode video using DXVA2 (windows)</source>
        <translation>Dekódovať video použitím DXVA2 (Windows)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="623"/>
        <source>Decode video using VDPAU (NVIDIA)</source>
        <translation>Dekódovať video použitím VDPAU (NVIDIA)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="624"/>
        <source>Decode video using LIBVA (INTEL)</source>
        <translation>Dekódovať video použitím LIBVA (Intel)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="621"/>
        <source>Decode video using VideoToolbox (macOS)</source>
        <translation>Dekódovať video použitím VideoToolbox (macOS)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="583"/>
        <source>Enable openGl support</source>
        <translation>Povoliť OpenGL podporu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="627"/>
        <source>If you use Hw decoding, it is better to use the matching display driver</source>
        <translation>Ak použijete hardvérové dekódovanie, je lepšie použiť pripôsobený ovládač zobrazovania</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="618"/>
        <source>Ignore driver blacklist (Intel)</source>
        <translation>Ignorovať čiernu listinu (Intel)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="619"/>
        <source>Ignore codec blacklist (Intel, HEVC 10bit)</source>
        <translation>Ignorovať čiernu listinu (Intel, HEVC 10bit)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="629"/>
        <source>Enabling Hw decoding disables multi-threading, restart application to apply changes</source>
        <translation>Povolením hardvérového dekódovania sa zakáže viacvláknové spracovanie, reštartovaním aplikácie sa zmeny aplikujú</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="267"/>
        <source>_Accept non-standard audio frequency for DVD</source>
        <translation>_Akceptovať neštandardnú frekvenciu zvuku pre DVD</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="268"/>
        <source>_Revert to saved default output settings on video load</source>
        <translation>_Vrátiť sa k uloženým pôvodným nastaveniam videa na čítanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="269"/>
        <source>_Enable alternative keyboard shortcuts</source>
        <translation>_Povoliť alternatívne klávesové skratky</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="270"/>
        <source>Re_verse UP and DOWN arrow keys for navigation</source>
        <translation>_Prehodiť klávesy šípka hore a šípka dole pre navigáciu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="271"/>
        <source>Reverse mouse _wheel for navigation</source>
        <translation>Obrátené koliesko myši pre navigáciu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="272"/>
        <source>_Swap markers if marker A is set past marker B or marker B before A in video</source>
        <translation>_Prehodiť značky, ak je značka A nastavená za značkou B alebo značka B pred značkou A vo videu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="273"/>
        <source>_Check for new release</source>
        <translation>_Kontrolovať nové vydania</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="276"/>
        <source>SIMD</source>
        <translation>SIMD</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="278"/>
        <source>Enable all SIMD</source>
        <translation>Povoliť všetky SIMD</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="279"/>
        <source>Enable MMX</source>
        <translation>Povoliť MMX</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="280"/>
        <source>Enable MMXEXT</source>
        <translation>Povoliť MMXEXT</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="281"/>
        <source>Enable 3DNOW</source>
        <translation>Povoliť 3DNOW</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="282"/>
        <source>Enable 3DNOWEXT</source>
        <translation>Povoliť 3DNOWEXT</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="283"/>
        <source>Enable SSE</source>
        <translation>Povoliť SSE</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="284"/>
        <source>Enable SSE2</source>
        <translation>Povoliť SSE2</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="285"/>
        <source>Enable SSE3</source>
        <translation>Povoliť SSE3</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="286"/>
        <source>Enable SSSE3</source>
        <translation>Povoliť SSSE3</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="287"/>
        <source>Enable SSE4</source>
        <translation>Povoliť SSE4</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="288"/>
        <source>Enable SSE4.2</source>
        <translation>Povoliť SSE4.2</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="289"/>
        <source>Enable AVX</source>
        <translation>Povoliť AVX</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="290"/>
        <source>Enable AVX2</source>
        <translation>Povoliť AVX2</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="329"/>
        <source>_lavc threads:</source>
        <translation>Vlákna _LAV kodeku:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="332"/>
        <source>Multi-threading is disabled internally if HW accelerated decoding is enabled, restart application to apply changes</source>
        <translation>Viacvláknové spracovanie je interne vypnuté, ak je povolené dekódovanie s HW akceleráciou, reštartujte aplikáciu, aby ste použili zmeny</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="335"/>
        <source>Multi-threading</source>
        <translation>Viacvláknové spracovanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="340"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="47"/>
        <source>High</source>
        <translation>Vysoké</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="341"/>
        <source>Above normal</source>
        <translation>Nad normálom</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="342"/>
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="343"/>
        <source>Below normal</source>
        <translation>Pod normálom</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="344"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="45"/>
        <source>Low</source>
        <translation>Nízke</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="347"/>
        <source>_Encoding priority:</source>
        <translation>Priorita _kódovania:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="348"/>
        <source>_Indexing/unpacking priority:</source>
        <translation>Priorita i_ndexácie/rozbaľovania:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="349"/>
        <source>_Playback priority:</source>
        <translation>Priorita pr_ehrávania:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="351"/>
        <source>Prioritisation</source>
        <translation>Uprednostňovanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="356"/>
        <source>_Default to the directory of the last read file for saving</source>
        <translation>_Predvoliť priečinok naposledy načítaného súboru na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="357"/>
        <source>De_lete first pass log files by default</source>
        <translation>Odstrániť súbor záznamu prvého prechodu podľa pôvodného</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="360"/>
        <source>Auto-Append Settings</source>
        <translation>Nastavenia automatického pripájania</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="361"/>
        <source>_Use custom fragment size for auto-append of MPEG-TS files</source>
        <translation>_Pre automatické pripojenie súborov MPEG-TS použije vlastnú veľkosť fragmentu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="362"/>
        <source>_Fragment size:</source>
        <translation>_Veľkosť fragmentu:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="368"/>
        <source>Pictures</source>
        <translation>Obrázky</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="369"/>
        <source>_Load sequentially named pictures in reverse order</source>
        <translation>_Načítanie postupne pomenovaných obrázkov v opačnom poradí</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="371"/>
        <source>23.976 (Film)</source>
        <translation>23.976 (Film)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="372"/>
        <source>25 (PAL)</source>
        <translation>25 (PAL)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="373"/>
        <source>29.970 (NTSC)</source>
        <translation>29.970 (NTSC)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="374"/>
        <source>30</source>
        <translation>30</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="375"/>
        <source>50 (PAL)</source>
        <translation>50 (Pal)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="376"/>
        <source>59.940 (NTSC)</source>
        <translation>59.940 (NTSC)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="377"/>
        <source>60</source>
        <translation>60 kHz</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="379"/>
        <source>_Assign following standard frame rate:</source>
        <translation>_Prideliť nasledujúcu štandardnú snímkovú frekvenciu:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="384"/>
        <source>Avisynth</source>
        <translation>Avisynth</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="571"/>
        <source>HDR</source>
        <translation>HDR</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="568"/>
        <source>Default _tone mapping method:</source>
        <translation>Predvolená metóda mapovania _tone (tón):</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="569"/>
        <source>Target peak luminance (nits):</source>
        <translation>Cieľová maximálna svietivosť (nity):</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="391"/>
        <source>Caching of decoded pictures</source>
        <translation>Zásobník dekódovaných obrázkov</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="392"/>
        <source>_Cache size:</source>
        <translation>Veľkosť _zásobníka:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="393"/>
        <source>Use _shared cache</source>
        <translation>Použiť _zdieľaný zásobník</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="418"/>
        <source>Video _display:</source>
        <translation>Zobrazenie _videa:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="438"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="441"/>
        <source>Sdl driver</source>
        <translation>Sdl ovládač</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="447"/>
        <source>No alerts</source>
        <translation>Bez výstrah</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="448"/>
        <source>Display only error alerts</source>
        <translation>Zobrazovať len chybové výstrahy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="449"/>
        <source>Display all alerts</source>
        <translation>Zobrazovať všetky výstrahy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="451"/>
        <source>_Message level:</source>
        <translation>Úroveň _správy:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="456"/>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="217"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="457"/>
        <source>Master</source>
        <translation>Hlavné</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="458"/>
        <source>_Volume control:</source>
        <translation>Ovládač _hlasitosti:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="463"/>
        <source>No downmixing</source>
        <translation>Bez premiešavania</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="465"/>
        <source>Pro Logic</source>
        <translation>Pro Logic</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="466"/>
        <source>Pro Logic II</source>
        <translation>Pro Logic II</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="468"/>
        <source>_Local playback downmixing:</source>
        <translation>_Lokálne premiešavanie prehrávania:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="482"/>
        <source>_AudioDevice</source>
        <translation>_Audio zariadenie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="550"/>
        <source>De_ringing</source>
        <translation>Od_stránenie zvlnenia okolo hrán (deringing)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="551"/>
        <source>_Strength:</source>
        <translation>_Sila:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="553"/>
        <source>Default Postprocessing</source>
        <translation>Východzie dodatočné spracovanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="489"/>
        <source>System language</source>
        <translation>Jazyk systému</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="514"/>
        <source>_Language</source>
        <translation>_Jazyk</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="520"/>
        <source>User Interface</source>
        <translation>Užívateľské rozhranie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="526"/>
        <source>Import</source>
        <translation>Import</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="530"/>
        <source>Output</source>
        <translation>Výstup</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="576"/>
        <source>Post-Processing</source>
        <translation>Následné spracovanie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="579"/>
        <source>_Limit Refresh Rate</source>
        <translation>_Obmedziť obnovovací kmitočet</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="580"/>
        <source>Refresh Rate Cap (ms)</source>
        <translation>Strop obnovovacej frekvencie [ms]</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="584"/>
        <source>OpenGL video display and filters require OpenGL to be enabled and working at application startup to be available</source>
        <translation>Zobrazenie videa OpenGL a filtre vyžadujú, aby bolo OpenGL povolené a funkčné pri spustení aplikácie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="591"/>
        <source>GUI Rendering Options</source>
        <translation>Grafické užívateľské prostredie volieb prevodu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="612"/>
        <source>Display</source>
        <translation>Zobrazenie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="647"/>
        <source>HW Accel</source>
        <translation>HW akcelerácia</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="656"/>
        <source>Threading</source>
        <translation>Vláknenie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="385"/>
        <source>_Always ask which port to use</source>
        <translation>_Vždy sa opýtať, ktorý port sa má použiť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="386"/>
        <source>Default port to use</source>
        <translation>Predvolený port na použitie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="398"/>
        <source>This renderer provides no hardware acceleration</source>
        <translation>Tento prekresľovač neposkytuje hardvérovú akceleráciu</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="406"/>
        <source>DXVA2</source>
        <translation>DXVA2</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="409"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="587"/>
        <source>OpenGL</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="412"/>
        <source>LibVA</source>
        <translation>LibVA</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="674"/>
        <source>Preferences</source>
        <translation>Predvoľby</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="41"/>
        <source>Save as BMP</source>
        <translation>Uložiť ako BMP</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="43"/>
        <source>Save as JPEG</source>
        <translation>Uložiť ako JPEG</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="49"/>
        <source>Connect to avsproxy</source>
        <translation>Pripojiť sa k &amp;avsproxy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="68"/>
        <source>Undo</source>
        <translation>Späť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="86"/>
        <source>Pr&amp;eferences</source>
        <translation>Pre&amp;dvoľby</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="122"/>
        <source>&amp;Advanced</source>
        <translation>Po&amp;kročilé</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="123"/>
        <source>Open Application &amp;Log</source>
        <translation>Otvoriť &amp;záznam aplikácie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="124"/>
        <source>Open Application Data &amp;Folder</source>
        <translation>Otvoriť &amp;priečinok údajov aplikácie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="134"/>
        <source>Play/Stop</source>
        <translation>Prehrať/Zastaviť</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="135"/>
        <source>Previous Frame</source>
        <translation>Predošlá snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="136"/>
        <source>Next Frame</source>
        <translation>Ďalšia snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="137"/>
        <source>Previous Intra Frame</source>
        <translation>Predošlá vnútorná snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="138"/>
        <source>Next Intra Frame</source>
        <translation>Ďalšia vnútorná snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="141"/>
        <source>Previous Black Frame</source>
        <translation>&amp;Predošlá čierna snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="142"/>
        <source>Next Black Frame</source>
        <translation>&amp;Nasledujúca čierna snímka</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="812"/>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="862"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="80"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="144"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="51"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="134"/>
        <location filename="../../common/gui_main.cpp" line="1629"/>
        <location filename="../../common/gui_main.cpp" line="1656"/>
        <location filename="../../common/gui_main.cpp" line="1680"/>
        <location filename="../../common/gui_main.cpp" line="1688"/>
        <location filename="../../common/gui_main.cpp" line="1692"/>
        <location filename="../../common/gui_save.cpp" line="586"/>
        <location filename="../../common/gui_save.cpp" line="678"/>
        <location filename="../../common/gui_save.cpp" line="685"/>
        <location filename="../../common/gui_save.cpp" line="705"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="68"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="812"/>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="862"/>
        <source>You cannot remove *all* the video
</source>
        <translation>Nemôžete odstrániť *všetky* videá
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edFrameType.cpp" line="72"/>
        <source>Updating frametype</source>
        <translation>Aktualizácia typu snímky</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="144"/>
        <source>Core has been compiled without LIBVA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Jadro bolo skompilované bez podpory LIBVA, ale aplikácia bola skompilovaná s ním.
Zmätočná inštalácia</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="51"/>
        <source>Core has been compiled without VDPAU support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Jadro bolo skompilované bez podpory VDPAU, ale aplikácia bola skompilovaná s ním.
Zmätočná inštalácia</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="134"/>
        <source>Core has been compiled without XVBA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Jadro bolo skompilované bez podpory XVBA, ale aplikácia bola skompilovaná s ním.
Zmätočná inštalácia</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="48"/>
        <location filename="../../common/gui_save.cpp" line="58"/>
        <source>No audio track</source>
        <translation>Žiadna audio stopa</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="48"/>
        <source>An audio track is necessary to create such file</source>
        <translation>Pre vytvorenie takéhoto súboru je nutná audio stopa</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="64"/>
        <location filename="../../common/gui_autodrive.cpp" line="78"/>
        <location filename="../../common/gui_autodrive.cpp" line="109"/>
        <location filename="../../common/gui_autodrive.cpp" line="115"/>
        <location filename="../../common/gui_autodrive.cpp" line="130"/>
        <location filename="../../common/gui_autodrive.cpp" line="157"/>
        <location filename="../../common/gui_autodrive.cpp" line="192"/>
        <source>Codec Error</source>
        <translation>Chyba kodeku</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="64"/>
        <source>Cannot select the MPEG-4 SP codec.</source>
        <translation>Nemožno vybrať MPEG-4 SP kodek.</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="78"/>
        <source>No AAC audio encoder plugin found.</source>
        <translation>Nenájdený zásuvný modul AAC enkódera.</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="110"/>
        <source>The MP3 codec does not allow disabling reservoir.
Install lame plugin</source>
        <translation>Kodek MP3 neumožňuje vypnúť zásobník.
Naištalujte rozšírenie lame</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="116"/>
        <source>You don&apos;t have LAME!.
It is needed to create FLV  video.</source>
        <translation>Nemáte LAME!
Je potrebné na vytvorenie FLV videa.</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="130"/>
        <source>Cannot select FLV1  codec.</source>
        <translation>Nemožno vybrať FLV1 kodek.</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="157"/>
        <source>Cannot select MPEG-4 SP codec.</source>
        <translation>Nemožno vybrať MPEG-4 SP kodek.</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="193"/>
        <source>You don&apos;t have FAAC!.
It is needed to create PSP compatible video.</source>
        <translation>Nemáte FAAC!
To je potrebný na vytvorenie PSP kompatibilného videa.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="158"/>
        <source>Select script/project to run</source>
        <translation>Vyberte skript/projekt na spustenie</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="182"/>
        <source>Select script to run</source>
        <translation>Vyberte skript na spustenie</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="186"/>
        <source>Select script to debug</source>
        <translation>Vyberte skript na ladenie</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="190"/>
        <source>Select script to save</source>
        <translation>Vyberte skript na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="257"/>
        <source>You are about to clear the list of recent files and projects. This can&apos;t be undone. Proceed?</source>
        <translation>Chystáte sa vymazať zoznam posledných súborov a projektov. Toto nie je možné vrátiť späť.
Pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="371"/>
        <source>Not coded in this version</source>
        <translation>Nepodporované v tejto verzii</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="382"/>
        <location filename="../../common/gui_main.cpp" line="459"/>
        <source>Select Video File...</source>
        <translation>Vyberte video súbor...</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="411"/>
        <source>No engine</source>
        <translation>Žiadny mechanizmus</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="411"/>
        <source>tinyPy script is not enabled in this build</source>
        <translation>tinyPy skript nie je v tejto zostave povolený</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="462"/>
        <source>Select Video File to Append...</source>
        <translation>Vybrať video na pripojenie...</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="606"/>
        <source>The cut points of the pasted video are not on keyframes.
Video saved in copy mode will be corrupted at these points.
Proceed anyway?</source>
        <translation>Body vystrihnutia vkladaného videa nie sú na kľúčových snímkach.
Video uložené v režime kopírovania bude v týchto bodoch poškodené.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="611"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The cut points of the pasted selection may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>Toto video používa ako kľúčové snímky obnovovacie body bez IDR namiesto IDR. Informácie o zmene poradia obrázkov vo video toku sa nevynulujú v snímkach bez IDR. Body orezania vloženého výberu môžu mať za následok prerušenie prehrávania v dôsledku obráteného poradia zobrazovania snímok, ak sa uložia v režime kopírovania.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="618"/>
        <source>Codec or codec settings across a cut point of the pasted video do not match.
Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>Nastavenia kodeku alebo kodeku v bode prerušenia vloženého videa sa nezhodujú.
Prehrávanie videa uloženého v režime kopírovania sa v tomto bode môže zastaviť.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="623"/>
        <source>Cut points of the pasted video could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation>Body orezania vloženého videa sa nepodarilo skontrolovať. Naznačuje to problém so zdrojovým videom, stav úpravy alebo chybu v programe. Skontrolujte podrobnosti v protokolovom súbore aplikácie alebo na výstupe z konzoly.
Napriek tomu to skúsiť?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="702"/>
        <source>Are you sure?</source>
        <translation>Ste si istý?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="749"/>
        <location filename="../../common/gui_main.cpp" line="770"/>
        <source>Cutting</source>
        <translation>Vystrihnutie</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="750"/>
        <source>It is impossible to cut out the entire video. Please recheck the position of markers A and B.</source>
        <translation>Nemožno vystrihnúť celé video. Znovu skontrolujte polohu značiek A a B.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="753"/>
        <source>Deleting</source>
        <translation>Odstraňovanie</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="754"/>
        <source>It is impossible to delete the entire video. Please recheck the position of markers A and B.</source>
        <translation>Nie je možné zmazať celé video. Znovu skontrolujte polohu značiek A a B.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="770"/>
        <source>Error while cutting out.</source>
        <translation>Pri odstraňovaní sa vyskytla chyba.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="784"/>
        <source>The end point of the cut is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation>Koncový bod vystrihnutia nie je na kľúčovou snímkou.
Video uložené v režime kopírovania bude v tomto bode poškodené.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="788"/>
        <source>The end point of the deletion is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation>Koncový bod odstránenia nie je na kľúčovou snímkou.
Video uložené v režime kopírovania bude v tomto bode poškodené.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="794"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the cut may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>Toto video používa ako kľúčové snímky obnovovacie body bez IDR namiesto IDR. Informácie o zmene poradia obrázkov vo video toku sa nevynulujú v snímkach bez IDR. Zvolené začiatočné a koncové body rezu môžu mať za následok prerušenie prehrávania v dôsledku obráteného poradia zobrazovania snímok, ak sa uložia v režime kopírovania.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="800"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the deletion may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>Toto video používa ako kľúčové snímky obnovovacie body bez IDR namiesto IDR. Informácie o zmene poradia obrázkov vo video prúde sa nevynulujú v snímkach bez IDR. Zvolené začiatočné a koncové body vymazania môžu mať za následok prerušenie prehrávania v dôsledku obráteného poradia zobrazovania snímok, ak sú uložené v režime kopírovania.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="808"/>
        <source>Codec or codec settings across the cut do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>Nastavenia kodeku alebo kodeku naprieč rezom sa nezhodujú. Prehrávanie videa uloženého v režime kopírovania sa v tomto bode môže zastaviť.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="812"/>
        <source>Codec or codec settings across the deletion do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>Nastavenia kodeku alebo kodeku v rámci vymazania sa nezhodujú. Prehrávanie videa uloženého v režime kopírovania sa v tomto bode môže zastaviť.
Napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="817"/>
        <source>Cut points could not be checked.
This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Proceed anyway?</source>
        <translation>Body rezu nebolo možné skontrolovať.
Naznačuje to problém so zdrojovým videom, stav úpravy alebo chybu v programe. Skontrolujte podrobnosti v protokolovom súbore aplikácie alebo výstupe z konzoly.
PNapriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="937"/>
        <source>Permission error</source>
        <translation>Chyba oprávnenia</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="937"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation>Nemožno otvoriť &quot;%s&quot;.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="941"/>
        <source>File error</source>
        <translation>Chyba súboru</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="941"/>
        <source>&quot;%s&quot; does not exist.</source>
        <translation>&quot;%s&quot; neexistuje.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="977"/>
        <source>Cannot open project using the video loader.</source>
        <translation>Otvorením videa nemožno otvoriť projekt.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="978"/>
        <source>Try &apos;File&apos; -&gt; &apos;Load/Run Project...&apos;</source>
        <translation>Skúste &apos;Súbor&apos; -&gt; &apos;Nahrať/Spustiť projekt...&apos;</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="982"/>
        <source>Could not open the file</source>
        <translation>Nemožno otvoriť súbor</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1037"/>
        <source>Multiple Audio Tracks</source>
        <translation>Viacnásobné audio stopy</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1037"/>
        <source>The file you just loaded contains several audio tracks.
Go to Audio-&gt;MainTrack to select the active one.</source>
        <translation>Načítaný súbor obsahuje viacero audio stôp.
V ponuke Audio-&gt;Hlavná stopa vyberte tu aktívnu.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1143"/>
        <source>Something failed when appending</source>
        <translation>Pri pripojovaní niečo zlyhalo</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1462"/>
        <source>Something bad happened (II)</source>
        <translation>Stalo sa niečo zlé (II)</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1261"/>
        <location filename="../../common/gui_main.cpp" line="1304"/>
        <source>The tinypy plugin is missing.
Expect problems.</source>
        <translation>Zásuvný modul tinypy chýba.
Očakávajte problémy.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1406"/>
        <source>Checking video</source>
        <translation>Kontrola videa</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1422"/>
        <source>No error found</source>
        <translation>Nenájdená žiadna chyba</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1426"/>
        <source>Errors found in %u frames</source>
        <translation>Nájdená chyba v %u snímkach</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1442"/>
        <source>Marker A &gt; B</source>
        <translation>Značka A &gt; B</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1442"/>
        <source>Cannot delete the selection.</source>
        <translation>Nemožno odstrániť výber.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1447"/>
        <source>You can&apos;t remove all frames</source>
        <translation>Nemôžete odstrániť všetky snímky</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1455"/>
        <source>Something bad happened</source>
        <translation>Prihodilo sa niečo zlé</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1570"/>
        <source>_Track from video:</source>
        <translation>_Stopa z videa:</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1573"/>
        <source>Main Audio Track</source>
        <translation>Hlavná audio stopa</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1602"/>
        <location filename="../../common/gui_main.cpp" line="1609"/>
        <source>Invalid audio index given</source>
        <translation>Daný neplatný index audia</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1629"/>
        <source>Cannot use that file as audio track</source>
        <translation>Tento súbor nemožno použiť ako zvukovú stopu</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1657"/>
        <source>Audio file not found in list, even though it should be there. Create a bug report!</source>
        <translation>Zvukový súbor sa nenašiel v zozname, aj keď by tam mal byť. Vytvorte správu o chybe!</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1681"/>
        <source>Unable to set the audio language: No video loaded yet!</source>
        <translation>Jazyk zvuku sa nedá nastaviť: Zatiaľ nie je načítané žiadne video!</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1689"/>
        <source>Setting the language for the given track index is not possible: Video has no audio file!</source>
        <translation>Nemožno nastaviť jazyk pre daný index stopy: Video nemá žiadny zvukový súbor!</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1693"/>
        <source>Setting the language for the given track index is not possible: Invalid track index!</source>
        <translation>Nastavený jazyk pre daný index stopy nie je vhodný: Neplatný index stopy!</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1837"/>
        <source>AvsProxy</source>
        <translation>AvsProxy</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1837"/>
        <source>Failed to connect to avsproxy.
Is it running ?</source>
        <translation>Zlyhalo pripojenie k avsproxy.
Je spustené?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1842"/>
        <source>avsproxy</source>
        <translation>avsproxy</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1877"/>
        <source>Frame type:</source>
        <translation>Typ snímky:</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1878"/>
        <source>Frame size:</source>
        <translation>Veľkosť snímky:</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1880"/>
        <source>Frame Hex Dump</source>
        <translation>Hex výpis snímiek</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1993"/>
        <source>Oops</source>
        <translation>Hoplá</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="1993"/>
        <source>This function is disabled or no longer valid</source>
        <translation>Táto funkcia je vypnutá alebo je už neplatná</translation>
    </message>
    <message>
        <location filename="../../common/gui_play.cpp" line="460"/>
        <source>Trouble initializing audio device</source>
        <translation>Chyba inicializácie audio zariadenia</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="112"/>
        <source>No</source>
        <translation>Nie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="112"/>
        <source>No file loaded</source>
        <translation>Nenahraný žiadny súbor</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="122"/>
        <source>Job</source>
        <translation>Úloha</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="122"/>
        <source>Cannot reach database. Do you have Job control running ?</source>
        <translation>Nie je možné získať databázu. Máte spustené ovládače úlohy?</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="129"/>
        <source>Output file</source>
        <translation>Výstupný súbor</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="130"/>
        <source>Job name</source>
        <translation>Názov úlohy</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="133"/>
        <source>Queue job to jobList</source>
        <translation>Zaradené do zoznamu úloh</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="149"/>
        <source>Select Workbench to Save</source>
        <translation>Vyberte projekt na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="161"/>
        <location filename="../../common/gui_save.cpp" line="163"/>
        <source>Select File to Save Audio</source>
        <translation>Vyberte súbor na uloženie audia</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="170"/>
        <source>Select JPEG Sequence to Save</source>
        <translation>Vyberte sekvenciu JPEG súborov na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="176"/>
        <source>Select BMP to Save</source>
        <translation>Vyberte BMP na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="182"/>
        <source>Select JPEG to Save</source>
        <translation>Vyberte JPEG na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="188"/>
        <source>Select PNG to Save</source>
        <translation>Vyberte PNG na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="197"/>
        <source>Select File to Save</source>
        <translation>Vyberte súbor na uloženie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="255"/>
        <source>Saving audio</source>
        <translation>Ukladanie audia</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="355"/>
        <source>Function not implemented
</source>
        <translation>Funkcia nie je nezavedená
</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="374"/>
        <source>Cannot create stream</source>
        <translation>Nemožno vytvoriť tok</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="340"/>
        <location filename="../../common/gui_save.cpp" line="381"/>
        <source>Saving failed</source>
        <translation>Uloženie zlyhalo</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="465"/>
        <source>Jpeg</source>
        <translation>Jpeg</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="465"/>
        <source>Failed to save as JPEG</source>
        <translation>Zlyhalo uloženie ako JPEG</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="552"/>
        <source>Saving selection as set of JPEG images</source>
        <translation>Ukladanie výberu ako sady JPEG obrázkov</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="582"/>
        <source>Warning</source>
        <translation>Upozornenie</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="586"/>
        <source>Saving images failed.</source>
        <translation>Ukladanie obrázku zlyhalo.</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="611"/>
        <source>PNG</source>
        <translation>PNG</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="611"/>
        <source>Failed to save as PNG</source>
        <translation>Zlyhalo uloženie ako PNG</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="678"/>
        <source>Cannot get tinyPy script engine</source>
        <translation>Nie je možné získať skriptový modul tinyPy</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="685"/>
        <source>Output file not specified</source>
        <translation>Výstupný súbor nie je určený</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="698"/>
        <source>Job script %s already exists. Overwrite?</source>
        <translation>Skript úlohy% s už existuje. Prepísať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="584"/>
        <location filename="../../common/gui_save.cpp" line="660"/>
        <source>Done</source>
        <translation>Hotovo</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="68"/>
        <source>Audio encoder index out of bounds</source>
        <translation>Index audio kódovača je mimo hraníc</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="582"/>
        <source>Maximum number of 99999 images reached.</source>
        <translation>Dosiahol sa maximálny počet 99999 obrázkov.</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="584"/>
        <source>Saved %d images.</source>
        <translation>Uložených %d obrázkov.</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="640"/>
        <source>BMP op failed</source>
        <translation>BMP operácia zlyhala</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="640"/>
        <source>Saving %s as a BMP file failed.</source>
        <translation>Uloženie %s ako BMP súboru zlyhalo.</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="660"/>
        <source>File %s has been successfully saved.</source>
        <translation>Súbor %s bol úspešne uložený.</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="664"/>
        <source>Failed</source>
        <translation>Zlyhalo</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="664"/>
        <source>File %s was NOT saved correctly.</source>
        <translation>Súbor %s nebol riadne uložený.</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="705"/>
        <source>Cannot add job %s</source>
        <translation>Nemožno pridať úlohu %s</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="183"/>
        <source>Reuse previous first pass data ?
Warning, the settings must be close.</source>
        <translation>Znova použiť predošlé prvé údaje prechodu?
Upozornenie, nastavenia musia byť uzatvorené.</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="195"/>
        <location filename="../../common/gui_savenew.cpp" line="367"/>
        <location filename="../../common/gui_savenew.cpp" line="379"/>
        <location filename="../../common/gui_savenew.cpp" line="395"/>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="367"/>
        <source>Cannot instantiate video chain</source>
        <translation>Nemožno vytvoriť video reťazec</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="379"/>
        <source>Cannot create encoder</source>
        <translation>Nemožno vytvoriť rozkladač videa</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="436"/>
        <source>Cannot setup audio encoder, make sure your stream is compatible with audio encoder (number of channels, bitrate, format)</source>
        <translation>Nemožno zriadiť audio kódovačdekodér, uistite sa, že váš prúd je kompatibilný s audio kódovačom (počet kanálov, prenosová rýchlosť, formát)</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="464"/>
        <source>The video is in copy mode but the cut points are not on keyframes.
The video will be saved but there will be corruption at cut point(s).
Do you want to continue anyway ?</source>
        <translation>Video je v režime kopírovania, ale body strihu nie sú na kľúčových snímkach.
Video sa uloží, ale v týchto bodoch dôjde k poškodeniu.
Chcete aj tak pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="205"/>
        <location filename="../../common/gui_savenew.cpp" line="497"/>
        <location filename="../../common/gui_savenew.cpp" line="522"/>
        <source>Muxer</source>
        <translation>Zmiešavač</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="195"/>
        <source>Cannot set up encoder for the first pass. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation>Nemožno nastaviť kódovač pre prvý prechod. Konfigurácia dodaná do kódovača môže byť nekompatibilná alebo kódovač môže závisieť od funkcií nedostupných v tomto systéme.</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="205"/>
        <location filename="../../common/gui_savenew.cpp" line="497"/>
        <source>Cannot instantiate muxer</source>
        <translation>Nemožno priradiť zmiešavač</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="395"/>
        <source>Cannot set up encoder. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation>Nemožno nastaviť kódovač. Konfigurácia dodaná do kódovača môže byť nekompatibilná alebo kódovač môže závisieť od funkcií nedostupných v tomto systéme.</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="469"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The choice of cut points may result in playback interruption due to reversed display order of frames if saved in copy mode.
Do you want to continue anyway?</source>
        <translation>Toto video používa ako kľúčové snímky obnovovacie body bez IDR namiesto IDR. Informácie o zmene poradia obrázkov vo video toku sa nevynulujú v snímkach bez IDR. Výber bodov orezania môže mať za následok prerušenie prehrávania v dôsledku obráteného poradia zobrazovania snímok, ak sú uložené v režime kopírovania.
Chcete napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="476"/>
        <source>Codec or codec settings across a cut point do not match. Playback of the video saved in copy mode may stop at this point.
Do you want to continue anyway?</source>
        <translation>Nastavenia kodeku alebo kodeku v bode prerušenia sa nezhodujú. Prehrávanie videa uloženého v režime kopírovania sa v tomto bode môže zastaviť.
Chcete napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="481"/>
        <source>Cut points could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation>Body rezu nebolo možné skontrolovať. Naznačuje to problém so zdrojovým videom, stav úpravy alebo chybu v programe. Skontrolujte podrobnosti v protokolovom súbore aplikácie alebo výstupe z konzoly.
Skúsiť to znovu?</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="522"/>
        <source>Cannot open </source>
        <translation>Nemožno otvoriť </translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="23"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="561"/>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="45"/>
        <source>Disabled</source>
        <translation>Zakázané</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="46"/>
        <source>Auto-detect</source>
        <translation>Automatické zisťovanie</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="47"/>
        <source>Custom</source>
        <translation>Vlastný</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="34"/>
        <source>_Interlaced</source>
        <translation>_Prekladané</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="35"/>
        <source>Ca_rtoon mode</source>
        <translation>_Režim kreslených seriálov</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="36"/>
        <source>_Greyscale</source>
        <translation>_Odtiene sivej</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="37"/>
        <source>Turbo mode</source>
        <translation>Turbo režim</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="38"/>
        <source>C_hroma optimizer</source>
        <translation>Opti_malizácia farebnej zložky</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="40"/>
        <source>Main</source>
        <translation>Hlavné</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="44"/>
        <source>Very Low</source>
        <translation>Veľmi nízka</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="46"/>
        <source>Medium</source>
        <translation>Stredná</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="48"/>
        <source>Very High</source>
        <translation>Veľmi vysoká</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="49"/>
        <source>Ultra High</source>
        <translation>Ultra vysoká</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="50"/>
        <source>Motion Search Precision</source>
        <translation>Presnosť vyhľadávania pohybu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="53"/>
        <source>Off</source>
        <translation>Vyp</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="54"/>
        <source>Mode Decision</source>
        <translation>Rozhodovanie režimu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="55"/>
        <source>Limited Search</source>
        <translation>Obmedzené vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="56"/>
        <source>Medium Search</source>
        <translation>Stredné vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="57"/>
        <source>Wide Search</source>
        <translation>Široké vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="58"/>
        <source>VHQ Mode</source>
        <translation>Režim VHQ</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="62"/>
        <source>Max B Frames</source>
        <translation>Max počet B snímok</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="63"/>
        <source>Quarter Pixel</source>
        <translation>Štvrťpixel</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="64"/>
        <source>GMC</source>
        <translation>GMC</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="65"/>
        <source>BVHQ</source>
        <translation>BVHQ</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="66"/>
        <source>Advanced Simple Profile</source>
        <translation>Prídavný jednoduchý profil</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="74"/>
        <source>4MV</source>
        <translation>4MV</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="75"/>
        <source>Chroma ME</source>
        <translation>Farebná zložka pre predvídanie pohybu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="76"/>
        <source>HQ AC</source>
        <translation>HQ AC</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="77"/>
        <source>More Search</source>
        <translation>Ďalšie možnosti</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="82"/>
        <source>Min Gop Size</source>
        <translation>Min. veľkosť skupiny obrázkov (GOP)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="83"/>
        <source>Max Gop Size</source>
        <translation>Max. veľkosť skupiny obrázkov (GOP)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="84"/>
        <source>GOP Size</source>
        <translation>Veľkosť skupiny obrázkov</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="89"/>
        <source>Motion</source>
        <translation>Pohyb</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="92"/>
        <source>H263</source>
        <translation>H263</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="93"/>
        <source>Mpeg</source>
        <translation>Mpeg</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="94"/>
        <source>Quantization Matrix</source>
        <translation>Kvantifikačná matrica</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="95"/>
        <source>Trellis Quantization</source>
        <translation>Kvantifikácia mriežkového kódovania</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="99"/>
        <source>Quantization</source>
        <translation>Kvantizácia</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="103"/>
        <source>Two Pass Tuning</source>
        <translation>Vyladenie druhého priechodu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="105"/>
        <source>Key Frame Boost(%)</source>
        <translation>Zosilnenie kľúčových snímok [%]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="107"/>
        <source>I-frames closer than...</source>
        <translation>I snímky bližšie než...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="108"/>
        <source>.. are reduced by(%)</source>
        <translation>.. sú redukované o [%]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="109"/>
        <source>Max Overflow Improvement(%)</source>
        <translation>Max. zlepšenie pretečenia [%]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="110"/>
        <source>Max Overglow Degradation(%)</source>
        <translation>Max. zhoršenie pretečenia [%]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="114"/>
        <source>Curve Compression</source>
        <translation>Krivka kompresie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="116"/>
        <source>High Bitrate Scenes (%)</source>
        <translation>Scény s vysokou prenosovou rýchlosťou [%]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="117"/>
        <source>Low Bitrate Scenes (%)</source>
        <translation>Scény s nízkou prenosovou rýchlosťou [%]</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="118"/>
        <source>Overflow Control Strength</source>
        <translation>Intenzita kontroly pretečenia</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="121"/>
        <source>Two Pass</source>
        <translation>Dva prechody</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="128"/>
        <source>Xvid4 Configuration</source>
        <translation>Konfigurácia Xvid4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="23"/>
        <source>%d minute(s)</source>
        <translation>%n minút</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="30"/>
        <source>%d hour(s)</source>
        <translation>%n hodín</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="48"/>
        <source>Less than a minute</source>
        <translation>Menej ako minútu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="50"/>
        <source>A few seconds</source>
        <translation>Niekoľko sekúnd</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="216"/>
        <source>DTS</source>
        <translation>DTS</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="218"/>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="219"/>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="220"/>
        <source>WMAPRO</source>
        <translation>WMAPRO</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="221"/>
        <source>WMA Lossless</source>
        <translation>Bezstratové WMA</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="222"/>
        <source>WMA</source>
        <translation>WMA</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="223"/>
        <source>LPCM</source>
        <translation>LPCM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="224"/>
        <source>AC3</source>
        <translation>AC3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="225"/>
        <source>OPUS</source>
        <translation>OPUS</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="226"/>
        <source>FLAC</source>
        <translation>FLAC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="227"/>
        <source>E-AC3</source>
        <translation>E-AC3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="228"/>
        <source>Float PCM</source>
        <translation>PCM na pohyblivej čiarke</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="229"/>
        <source>Ogg Vorbis</source>
        <translation>Ogg Vorbis</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="230"/>
        <source>MP4</source>
        <translation>MP4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="232"/>
        <source>AAC</source>
        <translation>AAC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="233"/>
        <source>QDM2</source>
        <translation>QDM2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="234"/>
        <source>AMR-NB</source>
        <translation>AMR-NB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="235"/>
        <source>MSADPCM</source>
        <translation>MSADPCM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="236"/>
        <source>A-law</source>
        <translation>A-law</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="237"/>
        <source>ULAW</source>
        <translation>ULAW</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="238"/>
        <source>IMA ADPCM</source>
        <translation>IMA ADPCM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="239"/>
        <source>8-bit PCM</source>
        <translation>8 bitové PCM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="240"/>
        <source>TrueHD</source>
        <translation>TrueHD</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="243"/>
        <source>Unknown codec</source>
        <translation>Neznámy kodek</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStreamMP3.cpp" line="199"/>
        <source>Building time map</source>
        <translation>Vybudovanie časovej mapy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreImage/src/ADM_imageSave.cpp" line="87"/>
        <source>Cannot allocate enough memory</source>
        <translation>Nemožno vyhradiť dostatok pamäte</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreImage/src/ADM_imageSave.cpp" line="120"/>
        <source>Cannot create output file</source>
        <translation>Nemožno vytvoriť výstupný súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreImage/src/ADM_imageSave.cpp" line="366"/>
        <source>Memory error</source>
        <translation>Chyba pamäte</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreMuxer/src/ADM_coreMuxerFfmpeg.cpp" line="512"/>
        <source>Saving</source>
        <translation>Uloženie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreMuxer/src/ADM_coreMuxerFfmpeg.cpp" line="693"/>
        <source>The saved video is incomplete. The error occured at %s (%d%). This may happen as result of invalid time stamps in the video.</source>
        <translation>Ukladané video je nekompletné. Vyskytla sa chyba pri %s (%d%). Mohlo sa to stať z dôvodu neplatných časových údajov vo videu.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreMuxer/src/ADM_coreMuxerFfmpeg.cpp" line="699"/>
        <source>Too short</source>
        <translation>Príliš krátke</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_iso639.cpp" line="17"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="382"/>
        <source>Unknown</source>
        <translation>Neznámy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="64"/>
        <source>can&apos;t open &quot;%s&quot;: %s
%s
</source>
        <translation>nemožno otvoriť &quot;%s&quot;: %s
%s
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="66"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="151"/>
        <source>filesystem full</source>
        <translation>súborový systém je plný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="66"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="151"/>
        <source>quota exceeded</source>
        <translation>prekročená kvóta</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="67"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="152"/>
        <source>Please free up some space and press RETRY to try again.</source>
        <translation>Uvoľnite miesto a stlačte tlačidlo Zopakovať a skúste to znova.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="74"/>
        <source>can&apos;t open &quot;%s&quot;: %u (%s)
</source>
        <translation>nemožno otvoriť &quot;%s&quot;: %u (%s)
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="149"/>
        <source>can&apos;t write to file &quot;%s&quot;: %s
%s
</source>
        <translation>nemožno zapisovať do súboru &quot;%s&quot;: %s
%s
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="150"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="161"/>
        <source>__unknown__</source>
        <translation>__neznáme__</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="153"/>
        <source>Ignore</source>
        <translation>Ignorovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="153"/>
        <source>Retry</source>
        <translation>Zopakovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="160"/>
        <source>can&apos;t write to file &quot;%s&quot;: %u (%s)
</source>
        <translation>nemožno zapisovať do súboru &quot;%s&quot;: %u (%s)
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="375"/>
        <source>NTSC 4:3</source>
        <translation>NTSC 4:3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="376"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="377"/>
        <source>NTSC 16:9</source>
        <translation>NTSC 16:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="378"/>
        <source>PAL 4:3</source>
        <translation>PAL 4:3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="379"/>
        <source>PAL 16:9</source>
        <translation>PAL 16:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="380"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/include/ADM_ffmp43.h" line="187"/>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/include/ADM_ffmp43.h" line="218"/>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/ADM_codecFFsimple.cpp" line="40"/>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/ADM_codecFFsimple.cpp" line="86"/>
        <source>Codec</source>
        <translation>Kodek</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/ADM_codecFFsimple.cpp" line="40"/>
        <source>Internal error finding codec 0x%x</source>
        <translation>Interná chyba hľadania kodeku 0x%x</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/ADM_codecFFsimple.cpp" line="86"/>
        <source>Internal error opening 0x%x</source>
        <translation>Interná chyba otvorenia 0x%x</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="80"/>
        <source>Core has been compiled without DXVA2 support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Jadro bolo skompilované bez podpory DXVA2, ale aplikácia bola skompilovaná s ním. Zmätočná inštalácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="246"/>
        <source>Cannot compile shader</source>
        <translation>Nemožno skompilovať shader</translation>
    </message>
    <message>
        <location filename="../../common/ADM_toolkit/automation.cpp" line="235"/>
        <source>Permission Error</source>
        <translation>Chyba oprávnenia</translation>
    </message>
    <message>
        <location filename="../../common/ADM_toolkit/automation.cpp" line="235"/>
        <source>Cannot open script &quot;%s&quot;.</source>
        <translation>Nemožno otvoriť skript &quot;%s&quot;.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_toolkit/automation.cpp" line="239"/>
        <source>File Error</source>
        <translation>Chyba súboru</translation>
    </message>
    <message>
        <location filename="../../common/ADM_toolkit/automation.cpp" line="239"/>
        <source>Script &quot;%s&quot; does not exist.</source>
        <translation>Skript &quot;%s&quot; neexistuje.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="18"/>
        <source>Changing the options above will results the editor jumping to the nearest prior key frame.</source>
        <translation>Zmena vyššie uvedených možností spôsobí, že editor prejde na najbližšiu predošlú kľúčovú snímku.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="24"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="562"/>
        <source>Fast YUV</source>
        <translation>Rýchly YUV</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="25"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="563"/>
        <source>RGB clipping</source>
        <translation>Orezanie RGB</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="26"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="564"/>
        <source>RGB Reinhard</source>
        <translation>RGB Reinhard</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="27"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="565"/>
        <source>RGB Hable</source>
        <translation>RGB Hable</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="31"/>
        <source>_Tone mapping:</source>
        <translation>_Mapovanie tónov:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="32"/>
        <source>_Saturation:</source>
        <translation>_Nasýtenie:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="33"/>
        <source>_Boost (level multiplier):</source>
        <translation>_Posilovač (násobiteľ úrovne):</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_floatResettable.cpp" line="128"/>
        <source>Reset</source>
        <translation>Znovu nastaviť</translation>
    </message>
</context>
<context>
    <name>admIvtc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="43"/>
        <source>ADM ivtc.</source>
        <translation>ADM ivtc.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="44"/>
        <source>All in one ivtc.</source>
        <translation>Všetko v jednom ivtc.</translation>
    </message>
</context>
<context>
    <name>aften</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/aften/audioencoder_aften.cpp" line="240"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/aften/audioencoder_aften.cpp" line="246"/>
        <source>Aften Configuration</source>
        <translation>Konfigurácia Aften</translation>
    </message>
</context>
<context>
    <name>analyzer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/ADM_vidAnalyzer.cpp" line="32"/>
        <source>Analyzer</source>
        <translation>Analyzátor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/ADM_vidAnalyzer.cpp" line="33"/>
        <source>Null filter. Vectorscope, Waveform scopes and Histograms in Preview.</source>
        <translation>Nulový filter. Zobrazovač vektorov, vlnový rozsah a histogramy v Náhľade.</translation>
    </message>
</context>
<context>
    <name>analyzerDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/qt4/analyzer.ui" line="14"/>
        <source>Analyzer</source>
        <translation>Analyzátor</translation>
    </message>
</context>
<context>
    <name>artCartoon</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/ADM_vidArtCartoon.cpp" line="44"/>
        <source>Cartoon</source>
        <translation>Kreslený</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/ADM_vidArtCartoon.cpp" line="45"/>
        <source>Ported from frei0r.</source>
        <translation>Portované z frei0r.</translation>
    </message>
</context>
<context>
    <name>artCartoonDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/qt4/artCartoon.ui" line="14"/>
        <source>Cartoon</source>
        <translation>Kreslený</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/qt4/artCartoon.ui" line="37"/>
        <source>Threshold</source>
        <translation>Prah</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/qt4/artCartoon.ui" line="73"/>
        <source>Scatter</source>
        <translation>Rozptylovač</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/qt4/artCartoon.ui" line="96"/>
        <source>Color level</source>
        <translation>Úroveň farby</translation>
    </message>
</context>
<context>
    <name>artCharcoal</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/ADM_vidArtCharcoal.cpp" line="41"/>
        <source>Charcoal / Chalkboard</source>
        <translation>Uhlie / Kriedová tabuľa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/ADM_vidArtCharcoal.cpp" line="42"/>
        <source>Ported from MLT.</source>
        <translation>Portované z MLT.</translation>
    </message>
</context>
<context>
    <name>artCharcoalDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="14"/>
        <source>Charcoal / Chalkboard</source>
        <translation>Uhlie / Kriedová tabuľa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="49"/>
        <source>Intensity</source>
        <translation>Intenzita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="72"/>
        <source>Color</source>
        <translation>Farba</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="101"/>
        <source>Vertical scatter</source>
        <translation>Vertikálny rozptyl</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="108"/>
        <source>Horizontal scatter</source>
        <translation>Horizontálny rozptyl</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="174"/>
        <source>Chalkboard</source>
        <translation>Kriedová tabuľa</translation>
    </message>
</context>
<context>
    <name>artChromaHold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/ADM_vidArtChromaHold.cpp" line="41"/>
        <source>Chroma Hold</source>
        <translation>Pridržať farebnosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/ADM_vidArtChromaHold.cpp" line="42"/>
        <source>Monochrome effect with kept color(s).</source>
        <translation>Monochromatický efekt so zachovanou farbou (farbami).</translation>
    </message>
</context>
<context>
    <name>artChromaHoldDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="14"/>
        <source>Chroma Hold</source>
        <translation>Pridržať farebnosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="111"/>
        <source>Tertiary</source>
        <translation>Terciárne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="118"/>
        <source>Secondary</source>
        <translation>Sekundárny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="128"/>
        <source>Primary</source>
        <translation>Primárny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="236"/>
        <source>Distance</source>
        <translation>Vzdialenosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="246"/>
        <source>Cutoff slope</source>
        <translation>Sklon orezania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="256"/>
        <source>Pick Chroma</source>
        <translation>Nabrať farebnosť</translation>
    </message>
</context>
<context>
    <name>artChromaKey</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/ADM_vidArtChromaKey.cpp" line="42"/>
        <source>Chroma Key</source>
        <translation>Kľúčová farebnosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/ADM_vidArtChromaKey.cpp" line="43"/>
        <source>Replace &quot;green screen&quot; with an image.</source>
        <translation>Nahradiť &quot;zelené plátno&quot; obrázkom.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/Q_artChromaKey.cpp" line="287"/>
        <source>Select Background Image</source>
        <translation>Vybrať obrázok pozadia</translation>
    </message>
</context>
<context>
    <name>artChromaKeyDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="14"/>
        <source>Chroma Key</source>
        <translation>Kľúčová farebnosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="63"/>
        <source>Primary</source>
        <translation>Primárny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="117"/>
        <source>Tertiary</source>
        <translation>Terciárne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="124"/>
        <source>Secondary</source>
        <translation>Sekundárny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="207"/>
        <source>Cutoff slope</source>
        <translation>Sklon orezania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="214"/>
        <source>Pick Chroma</source>
        <translation>Nabrať farebnosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="268"/>
        <source>Select image</source>
        <translation>Zvoliť obrázok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="275"/>
        <source>Show calibration background</source>
        <translation>Zobraziť pozadie kalibrácie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="283"/>
        <source>No spill control</source>
        <translation>Žiadna kontrola úniku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="288"/>
        <source>Weighted alpha</source>
        <translation>Vážená alfa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="293"/>
        <source>AVG alpha</source>
        <translation>AVG alfa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="298"/>
        <source>RMS alpha</source>
        <translation>RMS alfa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="303"/>
        <source>MIN alpha</source>
        <translation>MIN alfa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="360"/>
        <source>Distance</source>
        <translation>Vzdialenosť</translation>
    </message>
</context>
<context>
    <name>artColorEffect</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/ADM_vidArtColorEffect.cpp" line="33"/>
        <source>Color Effect</source>
        <translation>Farebný efekt</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/ADM_vidArtColorEffect.cpp" line="34"/>
        <source>Ported from frei0r.</source>
        <translation>Portované z frei0r.</translation>
    </message>
</context>
<context>
    <name>artColorEffectDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="14"/>
        <source>Color Effect</source>
        <translation>Farebný efekt</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="37"/>
        <source>Effect</source>
        <translation>Efekt</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="45"/>
        <source>Sepia</source>
        <translation>Sépia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="50"/>
        <source>Vivid</source>
        <translation>Vivid</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="55"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="60"/>
        <source>Heat</source>
        <translation>Teplo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="65"/>
        <source>Radium</source>
        <translation>Rádium</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="70"/>
        <source>Red-green</source>
        <translation>Červeno-zelená</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="75"/>
        <source>Monochrome</source>
        <translation>Monochromatické</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="80"/>
        <source>Old photo</source>
        <translation>Stará fotografia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="85"/>
        <source>Night vision</source>
        <translation>Nočné videnie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="90"/>
        <source>X-ray</source>
        <translation>Röntgen</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="95"/>
        <source>Shades</source>
        <translation>Tiene</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="100"/>
        <source>XPRO</source>
        <translation>XPRO</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="105"/>
        <source>Yellow-blue</source>
        <translation>Žlto-modrá</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="110"/>
        <source>Yellow-bluish</source>
        <translation>Žlto-modrastá</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="115"/>
        <source>Chrome</source>
        <translation>Chróm</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="120"/>
        <source>Esses</source>
        <translation>Esses</translation>
    </message>
</context>
<context>
    <name>artDynThreshold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/ADM_vidArtDynThreshold.cpp" line="41"/>
        <source>Dynamic Threshold</source>
        <translation>Dynamický prah</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/ADM_vidArtDynThreshold.cpp" line="42"/>
        <source>Adaptive luma thresholding </source>
        <translation>Adaptívne vytváranie prahu svetlosti </translation>
    </message>
</context>
<context>
    <name>artDynThresholdDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/qt4/artDynThreshold.ui" line="14"/>
        <source>Dynamic Threshold</source>
        <translation>Dynamický prah</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/qt4/artDynThreshold.ui" line="71"/>
        <source>Levels</source>
        <translation>Úrovne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/qt4/artDynThreshold.ui" line="91"/>
        <source>Offset</source>
        <translation>Posuv</translation>
    </message>
</context>
<context>
    <name>artGrid</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/ADM_vidArtGrid.cpp" line="35"/>
        <source>Grid</source>
        <translation>Mriežka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/ADM_vidArtGrid.cpp" line="36"/>
        <source>Video wall effect.</source>
        <translation>Efekt videosteny.</translation>
    </message>
</context>
<context>
    <name>artGridDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/qt4/artGrid.ui" line="14"/>
        <source>Grid</source>
        <translation>Mriežka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/qt4/artGrid.ui" line="71"/>
        <source>Grid size</source>
        <translation>Veľkosť mriežky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/qt4/artGrid.ui" line="109"/>
        <source>Roll previous frames</source>
        <translation>Posúvanie predošlých snímok</translation>
    </message>
</context>
<context>
    <name>artMirror</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/ADM_vidArtMirror.cpp" line="41"/>
        <source>Mirror</source>
        <translation>Zrkadlovo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/ADM_vidArtMirror.cpp" line="42"/>
        <source>Mirror horizontally or vertically.</source>
        <translation>Zrkadlenie vo vodorovnej alebo zvislej polohe.</translation>
    </message>
</context>
<context>
    <name>artMirrorDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="14"/>
        <source>Mirror</source>
        <translation>Zrkadlovo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="101"/>
        <source>Displacement</source>
        <translation>Premiestnenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="109"/>
        <source>Horizontal - keep left</source>
        <translation>Horizontálne - zachovať ľavé</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="114"/>
        <source>Horizontal - keep right</source>
        <translation>Horizontálne - zachovať pravé</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="119"/>
        <source>Vertical - keep top</source>
        <translation>Vertikálne - zachovať horné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="124"/>
        <source>Vertical - keep bottom</source>
        <translation>Vertikálne - zachovať spodné</translation>
    </message>
</context>
<context>
    <name>artPixelize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/ADM_vidArtPixelize.cpp" line="59"/>
        <source>Pixelize</source>
        <translation>Pixelizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/ADM_vidArtPixelize.cpp" line="60"/>
        <source>Pixelize image.</source>
        <translation>Pixelizácia obrázka.</translation>
    </message>
</context>
<context>
    <name>artPixelizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/qt4/artPixelize.ui" line="14"/>
        <source>Pixelize</source>
        <translation>Pixelizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/qt4/artPixelize.ui" line="52"/>
        <source>Pixel size</source>
        <translation>Veľkosť pixelu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/qt4/artPixelize.ui" line="72"/>
        <source>x</source>
        <translation>x</translation>
    </message>
</context>
<context>
    <name>artPosterize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/ADM_vidArtPosterize.cpp" line="44"/>
        <source>Posterize</source>
        <translation>Plagátovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/ADM_vidArtPosterize.cpp" line="45"/>
        <source>Ported from frei0r.</source>
        <translation>Portované z frei0r.</translation>
    </message>
</context>
<context>
    <name>artPosterizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/qt4/artPosterize.ui" line="14"/>
        <source>Posterize</source>
        <translation>Plagátovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/qt4/artPosterize.ui" line="76"/>
        <source>Levels</source>
        <translation>Úrovne</translation>
    </message>
</context>
<context>
    <name>artVHS</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/ADM_vidArtVHS.cpp" line="39"/>
        <source>VHS</source>
        <translation>VHS</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/ADM_vidArtVHS.cpp" line="40"/>
        <source>VHS effect. Most authentic at lower resolutions.</source>
        <translation>Efekt VHS. Najautentickejšie pri nižších rozlíšeniach.</translation>
    </message>
</context>
<context>
    <name>artVHSDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="14"/>
        <source>VHS</source>
        <translation>VHS</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="146"/>
        <source>Luma bandwidth</source>
        <translation>Šírka pásma Jasu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="56"/>
        <source>Chroma bandwidth</source>
        <translation>Šírka pásma sfarbnenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="139"/>
        <source>Sync error</source>
        <translation>Chyba synchronizácie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="63"/>
        <source>Use zero delay filter for chroma</source>
        <translation>Použitie filtra s nulovým oneskorením pre sfarbnenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="49"/>
        <source>Use zero delay filter for luma</source>
        <translation>Použitie filtra s nulovým oneskorením pre svetlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="119"/>
        <source>Sync error filter</source>
        <translation>Filter chybovej synchronizácie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="153"/>
        <source>Noise</source>
        <translation>Šum</translation>
    </message>
</context>
<context>
    <name>artVignette</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/ADM_vidArtVignette.cpp" line="43"/>
        <source>Vignette</source>
        <translation>Medailónik</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/ADM_vidArtVignette.cpp" line="44"/>
        <source>Lens vignetting effect, ported from frei0r.</source>
        <translation>Efekt vinety objektívu, portovaný z frei0r.</translation>
    </message>
</context>
<context>
    <name>artVignetteDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/qt4/artVignette.ui" line="14"/>
        <source>Vignette</source>
        <translation>Medailónik</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/qt4/artVignette.ui" line="87"/>
        <source>Size of the unaffected center</source>
        <translation>Veľkosť nezasiahnutého centra</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/qt4/artVignette.ui" line="80"/>
        <source>Softness</source>
        <translation>Mäkkosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/qt4/artVignette.ui" line="57"/>
        <source>Aspect ratio</source>
        <translation>Pomer strán</translation>
    </message>
</context>
<context>
    <name>asciiView</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asciiView/ADM_vidAscii.cpp" line="64"/>
        <source>Ascii View</source>
        <translation>Zobraziť Ascii znaky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asciiView/ADM_vidAscii.cpp" line="65"/>
        <source>Ascii view</source>
        <translation>Zobrazí Ascii znaky</translation>
    </message>
</context>
<context>
    <name>asfdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asf.cpp" line="158"/>
        <source>File Error.</source>
        <translation>Chyba súboru.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asf.cpp" line="158"/>
        <source>Cannot open file
</source>
        <translation>Nemožno otvoriť súbor
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asfHeaders.cpp" line="468"/>
        <source>Indexing</source>
        <translation>Indexovanie</translation>
    </message>
</context>
<context>
    <name>asharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/ADM_vidAsharp.cpp" line="69"/>
        <source>Asharp</source>
        <translation>Asharp</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/ADM_vidAsharp.cpp" line="70"/>
        <source>Adaptative sharpener by MarcFD.</source>
        <translation>Adaptívne doostrenie od MarcFD.</translation>
    </message>
</context>
<context>
    <name>asharpDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="14"/>
        <source>ASharp</source>
        <translation>ASharp</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="141"/>
        <source>High quality block filtering</source>
        <translation>Vysokokvalitné filtrovanie blokov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="45"/>
        <source>Adaptive strength</source>
        <translation>Adaptívna sila</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="130"/>
        <source>Block adaptive</source>
        <translation>Adaptívny blok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="22"/>
        <source>Threshold</source>
        <translation>Prah</translation>
    </message>
</context>
<context>
    <name>ass</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="76"/>
        <source>SSA/ASS/SRT</source>
        <translation>SSA/ASS/SRT</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="77"/>
        <source>Hardcode ASS/SSA/SRT subtitles using libass.</source>
        <translation>Pevné titulky ASS/SSA/SRT použitím knižnice libass.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="168"/>
        <source>Format ?</source>
        <translation>Formátovať?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="168"/>
        <source>Are you sure this is an ASS/SSA file ?</source>
        <translation>Ste si istý, že ide o súbor ASS/SSA?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="208"/>
        <source>_Subtitle file (ASS/SSA):</source>
        <translation>_Súbor s titulkami (ASS/SSA):</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="208"/>
        <source>Select Subtitle File</source>
        <translation>Vybrať súbor s titulkami</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="209"/>
        <source>_Line spacing:</source>
        <translation>_Medzera medzi riadkami:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="210"/>
        <source>_Font scale:</source>
        <translation>_Veľkosť písma:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="211"/>
        <source>_Top margin:</source>
        <translation>V_rchný okraj:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="212"/>
        <source>Botto_m margin:</source>
        <translation>Sp_odný okraj:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="214"/>
        <source>Do not adjust</source>
        <translation>Neupravovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="220"/>
        <source>Adjust for display aspect ratio:</source>
        <translation>Upraviť pomer strán zobrazenia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="224"/>
        <source>ASS</source>
        <translation>ASS</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="231"/>
        <source>This is a SRT file. Convert to SSA ?</source>
        <translation>Toto je súbor SRT. Konvertovať na SSA?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="238"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="243"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="252"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="238"/>
        <source>Cannot load this SRT file.</source>
        <translation>Nemožno načítať tento SRT súbor.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="243"/>
        <source>Cannot convert to SSA.</source>
        <translation>Nemožno konvertovať na SSA.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="252"/>
        <source>Cannot save converted file.</source>
        <translation>Nemožno uložiť konvertovaný súbor.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="313"/>
        <source>Fonts</source>
        <translation>Písma</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="313"/>
        <source>Preparing the fonts can take a few minutes the first time.
This message will not be displayed again.</source>
        <translation>Príprava písma po prvýkrát môže trvať niekoľko minút.
Táto správa sa znova nezobrazí.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="402"/>
        <source>SSA Error</source>
        <translation>Chyba SSA</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="402"/>
        <source>ass_read_file() failed for %s</source>
        <translation>ass_read_file() zlyhalo pre %s</translation>
    </message>
</context>
<context>
    <name>avimuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAvi.cpp" line="75"/>
        <source>Bad Idea</source>
        <translation>Zlá myšlienka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAvi.cpp" line="75"/>
        <source>Using H264/H265 in AVI is a bad idea, MKV is better for that.
 Do you want to continue anyway ?</source>
        <translation>Použitie H264/H265 v AVI je zlá myšlienka, MKV je na to vhodnejšie.
 Chcete napriek tomu pokračovať?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAvi.cpp" line="85"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAvi.cpp" line="85"/>
        <source>Cannot create AVI file</source>
        <translation>Nemožno vytvoriť AVI súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="25"/>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="26"/>
        <source>Auto</source>
        <translation>Automaticky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="27"/>
        <source>Start as legacy AVI and switch to OpenDML mode when approaching the 4 GiB file size limit</source>
        <translation>Spustenie ako staršie AVI a prepnutie do režimu OpenDML, keď sa priblíži limit veľkosti súboru 4 GB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="28"/>
        <source>OpenDML</source>
        <translation>OpenDML</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="30"/>
        <source>Muxing Format</source>
        <translation>Formát zmiešavania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="33"/>
        <source>Avi Muxer</source>
        <translation>Zmiešavač AVI</translation>
    </message>
</context>
<context>
    <name>avsfilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="598"/>
        <source>_wine app file:</source>
        <translation>Súbor aplikácie _wine:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="599"/>
        <source>Select wine filename[wine/cedega/etc.]</source>
        <translation>Vyberte názov súboru wine [wine/cedega/a pod.]</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="601"/>
        <source>_loader file:</source>
        <translation>Súbor _zavádzača:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="602"/>
        <source>Select loader filename[avsload.exe]</source>
        <translation>Vyberte názov zavádzača [avsload.exe]</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="604"/>
        <source>_avs file:</source>
        <translation>Súbor _avs:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="605"/>
        <source>Select avs filename[*.avs]</source>
        <translation>Vyberte názov avs súboru[*.avs]</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="606"/>
        <source>_pipe timeout:</source>
        <translation>Časový _limit rúry:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="610"/>
        <source>AvsFilter config</source>
        <translation>Konfigurácia Avs filtra</translation>
    </message>
</context>
<context>
    <name>bitrate</name>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="51"/>
        <source>Constant Bitrate</source>
        <translation>Konštantná prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="52"/>
        <source>Constant Quantiser</source>
        <translation>Konštantný kvantifikátor</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="53"/>
        <source>Same Quantiser as Input</source>
        <translation>Rovnaký kvantifikátor ako vstup</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="54"/>
        <source>Constant Rate Factor</source>
        <translation>Faktor konštantnej rýchlosti</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="55"/>
        <source>Two Pass - Video Size</source>
        <translation>Dva prechody - veľkosť videa</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="56"/>
        <source>Two Pass - Average Bitrate</source>
        <translation>Dva prechody - priemerná prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="58"/>
        <source>Encoding mode</source>
        <translation>Režim kódovania</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="63"/>
        <source>Bitrate</source>
        <translation>Prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="149"/>
        <source>Target bitrate (kb/s)</source>
        <translation>Cieľová prenosová rýchlosť [kB/s]</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="154"/>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="173"/>
        <source>Quantizer</source>
        <translation>Kvantifikátor</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="159"/>
        <source>Target video size (MB)</source>
        <translation>Cieľová veľkosť videa [MB]</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="164"/>
        <source>Average bitrate (kb/s)</source>
        <translation>Priemerná prenosová rýchlosť [kB/s]</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="169"/>
        <source>-</source>
        <translation>-</translation>
    </message>
</context>
<context>
    <name>black</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="48"/>
        <source>Black</source>
        <translation>Čierne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="49"/>
        <source>Replace a section by black.</source>
        <translation>Nahradí sekciu čiernou.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="61"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="62"/>
        <source>_End time:</source>
        <translation>Čas _konca:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="65"/>
        <source>Replace by Black</source>
        <translation>Nahradiť čiernou</translation>
    </message>
</context>
<context>
    <name>blacken</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/ADM_vidBlackBorder.h" line="43"/>
        <source>Blacken Borders</source>
        <translation>Začiernené okraje</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/ADM_vidBlackBorder.h" line="44"/>
        <source>Remove noisy edge by turning them to black.</source>
        <translation>Odstráni zašumené okraje ich premenou na čiernu.</translation>
    </message>
</context>
<context>
    <name>blackenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="14"/>
        <source>Blacken Borders</source>
        <translation>Začiernené okraje</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="52"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="75"/>
        <source>Right:</source>
        <translation>Vpravo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="59"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="82"/>
        <source>Top:</source>
        <translation>Hore:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="102"/>
        <source>Reset</source>
        <translation>Znovu nastaviť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="123"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="156"/>
        <source>Bottom:</source>
        <translation>Dole:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="130"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="142"/>
        <source>Left:</source>
        <translation>Vľavo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="112"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Skryť gumičku</translation>
    </message>
</context>
<context>
    <name>blackframes</name>
    <message>
        <location filename="../../common/gui_blackframes.cpp" line="113"/>
        <location filename="../../common/gui_blackframes.cpp" line="268"/>
        <source>Searching black frame..</source>
        <translation>Vyhľadávanie čiernej snímky.</translation>
    </message>
</context>
<context>
    <name>blend</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blend/ADM_vidBlendFrames.cpp" line="50"/>
        <source>Blend Frames</source>
        <translation>Snímky zmiešavania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blend/ADM_vidBlendFrames.cpp" line="51"/>
        <source>Blend groups of N frames into a single frame.  Useful for speeding up slow motion footage or creating timelapses.</source>
        <translation>Zmieša skupiny N snímok do jednej snímky. Užitočné pre zrýchlenie záznamu spomaleného pohybu alebo vytvorenie časových oneskorení.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blend/ADM_vidBlendFrames.cpp" line="62"/>
        <source>Frames</source>
        <translation>Snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blend/ADM_vidBlendFrames.cpp" line="64"/>
        <source>Blend</source>
        <translation>Prelínanie</translation>
    </message>
</context>
<context>
    <name>blur</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/ADM_vidBlur.cpp" line="44"/>
        <source>Blur</source>
        <translation>Rozostriť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/ADM_vidBlur.cpp" line="45"/>
        <source>Blur selected area.</source>
        <translation>Rozostriť vybranú oblasť.</translation>
    </message>
</context>
<context>
    <name>blurDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="14"/>
        <source>Blur</source>
        <translation>Rozostriť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="73"/>
        <source>radius</source>
        <translation>polomer</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="119"/>
        <source>Left:</source>
        <translation>Vľavo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="133"/>
        <source>Top:</source>
        <translation>Hore:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="147"/>
        <source>Bottom:</source>
        <translation>Dole:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="161"/>
        <source>Right:</source>
        <translation>Vpravo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="168"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Skryť gumičku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="176"/>
        <source>Box blur</source>
        <translation>Rozostrenie políčka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="181"/>
        <source>Near Gaussian</source>
        <translation>Blízko Gaussovho</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="186"/>
        <source>Gaussian 2 pass</source>
        <translation>Gaussov 2 prechod</translation>
    </message>
</context>
<context>
    <name>changeFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="40"/>
        <source>Custom</source>
        <translation>Vlastný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="41"/>
        <source>25  (PAL)</source>
        <translation>25 (PAL)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="42"/>
        <source>23.976 (Film)</source>
        <translation>23.976 (Film)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="43"/>
        <source>29.97 (NTSC)</source>
        <translation>29.97 (NTSC)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="44"/>
        <source>50 (Pal)</source>
        <translation>50 (Pal)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="45"/>
        <source>59.94  (NTSC)</source>
        <translation>59.94  (NTSC)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="77"/>
        <source>Change FPS</source>
        <translation>Zmeniť snímkovú frekvenciu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="78"/>
        <source>Speed up/slow down the video as if altering fps. This filter changes duration.</source>
        <translation>Zmenou rýchlosti videa, ako keby ste menili snímkovú frekvenciu. Tento filter vytvára trvalé zmeny.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="233"/>
        <source>Source Fps:</source>
        <translation>Snímok/s zdroja:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="234"/>
        <source>Source frame rate:</source>
        <translation>Zdrojová snímková frekvencia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="238"/>
        <source>Destination Fps:</source>
        <translation>Snímok/s cieľa:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="239"/>
        <source>Destination frame rate:</source>
        <translation>Cieľová snímková frekvencia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="247"/>
        <source>Change fps</source>
        <translation>Zmeniť snímkovú frekvenciu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="252"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="252"/>
        <source>Invalid fps</source>
        <translation>Neplatná snímková frekvencia</translation>
    </message>
</context>
<context>
    <name>chromashift</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/ADM_vidChromaShift.cpp" line="35"/>
        <source>ChromaShift</source>
        <translation>Posun farebnej zložky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/ADM_vidChromaShift.cpp" line="36"/>
        <source>Shift chroma U/V to fix badly synced luma/chroma.</source>
        <translation>Posun U/V farebnej zložky pre opravu zle synchronizovanej svetlosti/farebnosti.</translation>
    </message>
</context>
<context>
    <name>chromashiftDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/qt4/chromashift.ui" line="14"/>
        <source>ChromaShift</source>
        <translation>Posun farebnej zložky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/qt4/chromashift.ui" line="35"/>
        <source>V Shift</source>
        <translation>Posun V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/qt4/chromashift.ui" line="28"/>
        <source>U Shift</source>
        <translation>Posun U</translation>
    </message>
</context>
<context>
    <name>colorBalance</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/ADM_vidColorBalance.cpp" line="42"/>
        <source>Color balance</source>
        <translation>Vyvážiť farbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/ADM_vidColorBalance.cpp" line="43"/>
        <source>Adjust shadow, midtone and highlight.</source>
        <translation>Upraviť tiene, stredné tóny a zvýraznenie.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/Q_colorBalance.cpp" line="52"/>
        <source>Peek Ranges</source>
        <translation>Rozsahy špičiek</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/Q_colorBalance.cpp" line="53"/>
        <source>Show shadow, midtone and highlight areas in black,gray and white colors</source>
        <translation>Zobrazenie oblastí tieňov, stredných tónov a zvýraznenia v čiernej, sivej a bielej farbe</translation>
    </message>
</context>
<context>
    <name>colorBalanceDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="20"/>
        <source>Color balance</source>
        <translation>Vyvážiť farbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="55"/>
        <source>Highlight</source>
        <translation>Zvýrazniť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="115"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="247"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="353"/>
        <source>Saturation</source>
        <translation>Nasýtenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="154"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="260"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="366"/>
        <source>Chroma shift</source>
        <translation>Posuv sfarbenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="164"/>
        <source>Shadow</source>
        <translation>Tieň</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="270"/>
        <source>Midtone</source>
        <translation>Stredný tón</translation>
    </message>
</context>
<context>
    <name>colorTemp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/ADM_vidColorTemp.cpp" line="41"/>
        <source>Color temperature</source>
        <translation>Teplota farby</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/ADM_vidColorTemp.cpp" line="42"/>
        <source>Adjust color temperature.</source>
        <translation>Nastavenie teploty farieb.</translation>
    </message>
</context>
<context>
    <name>colorTempDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/qt4/colorTemp.ui" line="14"/>
        <source>Color Temperature</source>
        <translation>Teplota farby</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/qt4/colorTemp.ui" line="49"/>
        <source>Color temperature</source>
        <translation>Teplota farby</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/qt4/colorTemp.ui" line="56"/>
        <source>Chroma shift angle</source>
        <translation>Uhol posunu sfarbenia</translation>
    </message>
</context>
<context>
    <name>coloryuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="62"/>
        <source>Avisynth color filter.</source>
        <translation>Farebný filter Avisynth.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="63"/>
        <source>Color management filter.</source>
        <translation>Filter riadenia farby.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="75"/>
        <source>AutoWhite</source>
        <translation>Automatická biela</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="76"/>
        <source>AutoGain</source>
        <translation>Automatický zisk</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="77"/>
        <source>Clip to Tv Range (16-235)</source>
        <translation>Strih pre Tv rozsah (16-235)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="78"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="79"/>
        <source>PC-&gt;TV</source>
        <translation>PC-&gt;TV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="80"/>
        <source>TV-&gt;PC</source>
        <translation>TV-&gt;PC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="82"/>
        <source>Levels:</source>
        <translation>Úrovne:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="89"/>
        <source>Y gain</source>
        <translation>Y zisk</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="90"/>
        <source>Y Brightness</source>
        <translation>Y Jas</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="91"/>
        <source>Y Gamma</source>
        <translation>Y gama</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="92"/>
        <source>Y Contrast</source>
        <translation>Y kontrast</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="97"/>
        <source>U gain</source>
        <translation>U zisk</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="98"/>
        <source>U Brightness</source>
        <translation>U Jas</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="100"/>
        <source>U Contrast</source>
        <translation>U kontrast</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="106"/>
        <source>V gain</source>
        <translation>V zisk</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="107"/>
        <source>V Brightness</source>
        <translation>V Jas</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="109"/>
        <source>V Contrast</source>
        <translation>V kontrast</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="113"/>
        <source>Flags</source>
        <translation>Príznaky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="114"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="115"/>
        <source>U</source>
        <translation>U</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="116"/>
        <source>V</source>
        <translation>V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="119"/>
        <source>colorYuv</source>
        <translation>farby YUV</translation>
    </message>
</context>
<context>
    <name>contrast</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/ADM_vidContrast.cpp" line="33"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="62"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="138"/>
        <source>Contrast</source>
        <translation>Kontrast</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/ADM_vidContrast.cpp" line="34"/>
        <source>Adjust contrast, brightness and colors.</source>
        <translation>Upraví kontrast,  a farby.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="63"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="139"/>
        <source>Brightness</source>
        <translation>Jas</translation>
    </message>
</context>
<context>
    <name>contrastDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="44"/>
        <source>Contrast</source>
        <translation>Kontrast</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="24"/>
        <source>Contrast  </source>
        <translation>Kontrast  </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="76"/>
        <source>Brightness  </source>
        <translation>Jas  </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="132"/>
        <source>Luma</source>
        <translation>Jasová zložka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="139"/>
        <source>MPEG2-&gt;PC</source>
        <translation>MPEG2-&gt;PC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="125"/>
        <source>ChromaU</source>
        <translation>Farebná zložka U</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="118"/>
        <source>ChromaV</source>
        <translation>Farebná zložka V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="96"/>
        <source>Brightness</source>
        <translation>Jas</translation>
    </message>
</context>
<context>
    <name>convolution</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/ADM_vidFastConvolution.cpp" line="136"/>
        <source>_Process luma</source>
        <translation>Priebeh _svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/ADM_vidFastConvolution.cpp" line="136"/>
        <source>Process luma plane</source>
        <translation>Spracovanie roviny svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/ADM_vidFastConvolution.cpp" line="137"/>
        <source>P_rocess chroma</source>
        <translation>Priebeh _farebnej zložky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/ADM_vidFastConvolution.cpp" line="141"/>
        <source>Fast Convolution</source>
        <translation>Rýchle previnutie</translation>
    </message>
</context>
<context>
    <name>crash</name>
    <message>
        <location filename="../../common/ADM_osSupport/ADM_crashHook.cpp" line="84"/>
        <source>Load it</source>
        <translation>Načítať to</translation>
    </message>
    <message>
        <location filename="../../common/ADM_osSupport/ADM_crashHook.cpp" line="84"/>
        <source>Crash file</source>
        <translation>Uložený súbor po havárii</translation>
    </message>
    <message>
        <location filename="../../common/ADM_osSupport/ADM_crashHook.cpp" line="85"/>
        <source>I have detected a crash file. 
Do you want to load it  ?
(It will be deleted in all cases, you should save it if you want to keep it)</source>
        <translation>Objavil som havarovaný súbor.
Chcete ho načítať?
(V každom prípade bude zmazaný, mali by ste ho uložiť, ak ho chcete zachovať)</translation>
    </message>
</context>
<context>
    <name>crop</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/ADM_vidCrop.cpp" line="58"/>
        <source>Crop</source>
        <translation>Orezať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/ADM_vidCrop.cpp" line="59"/>
        <source>Crop filter</source>
        <translation>Filter orezávania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/ADM_vidCrop.cpp" line="78"/>
        <source>Warning Cropping too much width ! Width reseted !
</source>
        <translation>Upozornenie na prílišnú šírku orezania! Šírka vynulovaná!
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/ADM_vidCrop.cpp" line="83"/>
        <source>Warning Cropping too much height ! Height reseted !
</source>
        <translation>Upozornenie na prílišnú výšku orezania! Výška vynulovaná!
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/DIA_flyCrop.cpp" line="564"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/DIA_flyCrop.cpp" line="922"/>
        <source>Size: </source>
        <translation>Veľkosť: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/DIA_flyCrop.cpp" line="686"/>
        <source>Auto Crop</source>
        <translation>Automatické orezávanie</translation>
    </message>
</context>
<context>
    <name>cropDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="14"/>
        <source>Crop</source>
        <translation>Orezať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="52"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="59"/>
        <source>Right:</source>
        <translation>Vpravo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="59"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="126"/>
        <source>Top:</source>
        <translation>Hore:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="102"/>
        <source>Reset</source>
        <translation>Znovu nastaviť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="123"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="66"/>
        <source>Bottom:</source>
        <translation>Dole:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="130"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="52"/>
        <source>Left:</source>
        <translation>Vľavo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="160"/>
        <source>Auto Crop</source>
        <translation>Automatické orezávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="243"/>
        <source>Size: </source>
        <translation>Veľkosť: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="136"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Skryť gumičku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="182"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="186"/>
        <source>Do not lock</source>
        <translation>Nezamykajte</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="191"/>
        <source>Current selection</source>
        <translation>Aktuálny výber</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="196"/>
        <source>Source</source>
        <translation>Zdroj</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="201"/>
        <source>21:9</source>
        <translation>21:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="206"/>
        <source>18:9</source>
        <translation>18:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="211"/>
        <source>16:9</source>
        <translation>16:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="216"/>
        <source>4:3</source>
        <translation>4:3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="221"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="226"/>
        <source>9:16</source>
        <translation>9:16</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="96"/>
        <source>Lock Aspect Ratio:</source>
        <translation>Uzamknutie pomeru strán:</translation>
    </message>
</context>
<context>
    <name>cubicLUT</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="50"/>
        <source>3D LUT</source>
        <translation>3D LUT</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="51"/>
        <source>Apply cubic lookup table.</source>
        <translation>Použiť kubickú vyhľadávaciu tabuľku.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="123"/>
        <source>Width must match height</source>
        <translation>Šírka musí zodpovedať výške</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="126"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="128"/>
        <source>Invalid resolution</source>
        <translation>Neplatné rozlíšenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="132"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="204"/>
        <source>Invalid file size</source>
        <translation>Neplatná veľkosť súboru</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="136"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="208"/>
        <source>File open error</source>
        <translation>Chyba pri otváraní súborov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="140"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="212"/>
        <source>File read error</source>
        <translation>Chyba čítania súboru</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="147"/>
        <source>Can&apos;t find decoder</source>
        <translation>Nemôžem nájsť dekódovač</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="154"/>
        <source>Decoding error. Only 8-bit PNG files are supported.</source>
        <translation>Chyba dekódovania. Podporované sú len 8-bitové súbory PNG.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="180"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="262"/>
        <source>Memory error</source>
        <translation>Chyba pamäte</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="250"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="253"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="259"/>
        <source>Malformed header</source>
        <translation>Chybná hlavička</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="310"/>
        <source>Incomplete file</source>
        <translation>Neúplný súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="316"/>
        <source>Invalid file</source>
        <translation>Neplatný súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="111"/>
        <source>Load HaldCLUT</source>
        <translation>Načítanie HaldCLUT</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="128"/>
        <source>Load Cube</source>
        <translation>Načítanie kocky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="157"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="183"/>
        <source>Load failed</source>
        <translation>Načítanie zlyhalo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="236"/>
        <source>LUT file is not specified!</source>
        <translation>Súbor LUT nie je zadaný!</translation>
    </message>
</context>
<context>
    <name>cubicLUTDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/cubicLUT.ui" line="14"/>
        <source>3D LUT</source>
        <translation>3D LUT</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/cubicLUT.ui" line="35"/>
        <source>Mask</source>
        <translation>Maskovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/cubicLUT.ui" line="44"/>
        <source>Load HaldCLUT</source>
        <translation>Načítanie HaldCLUT</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/cubicLUT.ui" line="64"/>
        <source>Load Cube</source>
        <translation>Načítanie kocky</translation>
    </message>
</context>
<context>
    <name>dcaenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/dcaenc/audioencoder_dcaenc.cpp" line="272"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/dcaenc/audioencoder_dcaenc.cpp" line="278"/>
        <source>DcaEnc Configuration</source>
        <translation>Konfigurácia DcaEnc</translation>
    </message>
</context>
<context>
    <name>deband</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/ADM_vidDeband.cpp" line="32"/>
        <source>Deband</source>
        <translation>Zrušiť pásmo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/ADM_vidDeband.cpp" line="33"/>
        <source>Reduce banding artifacts.</source>
        <translation>Zníženie artefaktov pásovania.</translation>
    </message>
</context>
<context>
    <name>debandDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/qt4/deband.ui" line="14"/>
        <source>Deband</source>
        <translation>Zrušiť pásmo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/qt4/deband.ui" line="69"/>
        <source>Chroma threshold</source>
        <translation>Prah farebnosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/qt4/deband.ui" line="83"/>
        <source>Luma threshold</source>
        <translation>Prah Jasu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/qt4/deband.ui" line="90"/>
        <source>Range</source>
        <translation>Rozsah</translation>
    </message>
</context>
<context>
    <name>decimate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="56"/>
        <source>Decomb decimate</source>
        <translation>Dekombinácia decimácie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="57"/>
        <source>Donald Graft decimate. Remove duplicate after telecide.</source>
        <translation>Donald Graft decimácia. Odstráni duplikáty po telecide.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="74"/>
        <source>Discard closer</source>
        <translation>Zahodiť bližší</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="75"/>
        <source>Replace (interpolate)</source>
        <translation>Nahradiť (interpolovať)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="76"/>
        <source>Discard longer dupe (animés)</source>
        <translation>Zahodiť dlhšie duplikáty (animé)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="77"/>
        <source>Pulldown dupe removal</source>
        <translation>Odstránenie roletových duplikátov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="80"/>
        <source>Fastest (no chroma, partial luma)</source>
        <translation>Najrýchlejšia (bez farebnosti, čiastočná svetlosť)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="82"/>
        <source>Medium (full luma, no chroma)</source>
        <translation>Stredná (plná svetlosť, bez farebnosti)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="87"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="88"/>
        <source>_Quality:</source>
        <translation>_Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="89"/>
        <source>_Threshold 1:</source>
        <translation>_Prah 1:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="90"/>
        <source>T_hreshold 2:</source>
        <translation>Pra_h 2:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="91"/>
        <source>C_ycle:</source>
        <translation>_Cyklus:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="92"/>
        <source>Sho_w</source>
        <translation>_Ukázať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="95"/>
        <source>Decomb Decimate</source>
        <translation>Dekombinácia decimácie</translation>
    </message>
</context>
<context>
    <name>delogo2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/ADM_vidMPdelogo.cpp" line="41"/>
        <source>MPlayer delogo2</source>
        <translation>Odstránenie loga MPlayer</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/ADM_vidMPdelogo.cpp" line="42"/>
        <source>Blend a logo by interpolating its surrounding box.</source>
        <translation>Vymaže logo interpoláciou jeho okolia.</translation>
    </message>
</context>
<context>
    <name>delogoHQ</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/ADM_vidDelogoHQ.cpp" line="44"/>
        <source>DelogoHQ</source>
        <translation>DelogoHQ</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/ADM_vidDelogoHQ.cpp" line="45"/>
        <source>Clean up arbitrary shaped logo.</source>
        <translation>Vyčistiť logo ľubovoľného tvaru.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/DIA_flyDelogoHQ.cpp" line="41"/>
        <source>The selected image has different width/height.</source>
        <translation>Vybraný obrázok má inú šírku/výšku.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/DIA_flyDelogoHQ.cpp" line="75"/>
        <source>Save failed!</source>
        <translation>Uloženie zlyhalo!</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="105"/>
        <source>Find a frame in the preview with the logo clearly visible and not blending into the background.</source>
        <translation>Nájde v náhľade snímku, v ktorej je logo ne viditeľné a neprelína sa s pozadím.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="110"/>
        <source>Save this frame as a PNG image.</source>
        <translation>Uložte túto snímku ako obrázok PNG.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="115"/>
        <source>Use an appropriate image editor to paint the area of the logo of any shape white and everything else solid black.</source>
        <translation>Použitím vhodného editora obrázkov namaľujte oblasť loga akéhokoľvek tvaru na bielo a všetko ostatné na čierno.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="120"/>
        <source>This black and white image will serve as a mask where white pixels correspond to the logo to be removed.</source>
        <translation>Tento čiernobiely obrázok bude slúžiť ako maska, kde biele pixely zodpovedajú logu, ktoré sa má odstrániť.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="125"/>
        <source>If the logo has fully transparent areas, it is recommended to exclude them from the mask by making them black.</source>
        <translation>Ak má logo úplne priehľadné oblasti, odporúčame ich vylúčiť z masky tak, že ich označíte čiernou farbou.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="130"/>
        <source>Load the mask image.</source>
        <translation>Načítať obrázok masky.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="135"/>
        <source>Note: To remove multiple distant logos (e.g. opposite corners), using separate filter instances for each logo will be much faster.</source>
        <translation>Poznámka: Ak chcete odstrániť viacero vzdialených log (napr. protiľahlé rohy), použitie samostatných inštancií filtra pre každé logo bude oveľa rýchlejšie.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="140"/>
        <source>How to use DelogoHQ</source>
        <translation>Ako používať DelogoHQ</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="157"/>
        <source>Save selected frame...</source>
        <translation>Uložiť vybranú snímku...</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="174"/>
        <source>Load mask</source>
        <translation>Načítať masku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="200"/>
        <source>Load failed!</source>
        <translation>Načítanie zlyhalo!</translation>
    </message>
</context>
<context>
    <name>delogoHQDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="14"/>
        <source>DelogoHQ</source>
        <translation>DelogoHQ</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="35"/>
        <source>Mask</source>
        <translation>Maskovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="44"/>
        <source>Save current frame...</source>
        <translation>Uložiť aktuálnu snímku...</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="64"/>
        <source>Load mask</source>
        <translation>Načítať masku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="74"/>
        <source>Post-processing</source>
        <translation>Následné spracovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="87"/>
        <source>Blur</source>
        <translation>Rozostriť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="80"/>
        <source>Gradient</source>
        <translation>Stupňovitosť</translation>
    </message>
</context>
<context>
    <name>dgbob</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="56"/>
        <source>dgbob</source>
        <translation>dgbob</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="57"/>
        <source>Donald Graft Bob.</source>
        <translation>Bob filter Donalda Grafta.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="68"/>
        <source>Top</source>
        <translation>Zhora</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="69"/>
        <source>Bottom</source>
        <translation>Zdola</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="72"/>
        <source>Keep nb of frames and fps</source>
        <translation>Zachovať počet a frekvenciu snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="73"/>
        <source>Double nb of frames and fps</source>
        <translation>Zdvojnásobiť počet a frekvenciu snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="74"/>
        <source>Double nb of frames (slow motion)</source>
        <translation>Zdvojnásobiť počet snímok (spomalenie)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="77"/>
        <source>_Top Field First:</source>
        <translation>_Horné pole prvé:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="78"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="79"/>
        <source>_Threshold:</source>
        <translation>_Prah:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="80"/>
        <source>_Extra artifact protection (may increase flickering, rarely needed)</source>
        <translation>_Extra ochrana artefaktov (môže zvýšiť blikanie, potrebné zriedkavo)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="83"/>
        <source>DGBob</source>
        <translation>DGBob</translation>
    </message>
</context>
<context>
    <name>dummy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dummy/dummyVideoFilter.cpp" line="44"/>
        <source>Dummy</source>
        <translation>Zdanlivý</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dummy/dummyVideoFilter.cpp" line="45"/>
        <source>Null filter, it does nothing at all.</source>
        <translation>Nulový filter, nič to nerobí.</translation>
    </message>
</context>
<context>
    <name>dummyMuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerDummy/ADM_dummy.cpp" line="28"/>
        <source>Simulated muxing</source>
        <translation>Simulované zmiešavanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerDummy/ADM_dummy.cpp" line="29"/>
        <source>(None)</source>
        <translation>(nie je)</translation>
    </message>
</context>
<context>
    <name>dv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffDv/ADM_ffDv.cpp" line="79"/>
        <source>DV only supports 720*576*25fps and 720*480*29.97fps</source>
        <translation>DV podporuje len 720*576*25snímok/s a 720*480*29.97snímok/s</translation>
    </message>
</context>
<context>
    <name>encodingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="26"/>
        <source>Encoding...</source>
        <translation>Prebieha kódovanie...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="42"/>
        <source>Main</source>
        <translation>Hlavné</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="74"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="360"/>
        <source>Unknown</source>
        <translation>Neznámy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="50"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="346"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="367"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="57"/>
        <source>Phase:</source>
        <translation>Fáza:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="81"/>
        <source>Time Remaining:</source>
        <translation>Zostávajúci čas:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="92"/>
        <source>Shut down computer when finished</source>
        <translation>Po ukončení vypnúť počítač</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="112"/>
        <source>Priority:</source>
        <translation>Priorita:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="123"/>
        <source>High</source>
        <translation>Vysoké</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="128"/>
        <source>Above Normal</source>
        <translation>Nad normálom</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="133"/>
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="138"/>
        <source>Below Normal</source>
        <translation>Pod normálom</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="143"/>
        <source>Low</source>
        <translation>Nízke</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="155"/>
        <source>Keep dialog open when finished</source>
        <translation>Po dokončení ponechajte dialógové okno otvorené</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="179"/>
        <source>Delete first pass log files</source>
        <translation>Odstrániť súbory záznamu prvého prechodu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="209"/>
        <source>Output File:</source>
        <translation>Výstupný súbor:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="240"/>
        <source>Minimize to Tray</source>
        <translation>Minimalizovať na lištu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="260"/>
        <source>Pause / Abort</source>
        <translation>Pozastaviť / Zrušiť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="273"/>
        <source>Advanced</source>
        <translation>Pokročilé</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="353"/>
        <source>Audio Codec:</source>
        <translation>Audio kodek:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="374"/>
        <source>Container:</source>
        <translation>Kontajner:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="424"/>
        <source>Audio Size:</source>
        <translation>Veľkosť zvuku:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="431"/>
        <source>Total Size:</source>
        <translation>Celková veľkosť:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="452"/>
        <source>Video Size:</source>
        <translation>Veľkosť videa:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="505"/>
        <source>Average Bitrate:</source>
        <translation>Priemerná prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="522"/>
        <source>Processed Frames:</source>
        <translation>Spracované snímky:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="529"/>
        <source>Quantiser:</source>
        <translation>Kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="586"/>
        <source>Elapsed:</source>
        <translation>Uplynulý čas:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="610"/>
        <source>Frames/sec:</source>
        <translation>Snímok/sek:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="381"/>
        <source>Video Codec:</source>
        <translation>Video kodek:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="438"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="445"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="459"/>
        <source>0 MB</source>
        <translation>0 MB</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="512"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="543"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="603"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="536"/>
        <source>0 kB/s</source>
        <translation>0 kB/s</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="593"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
</context>
<context>
    <name>eq2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/ADM_vidEq2.cpp" line="44"/>
        <source>MPlayer eq2</source>
        <translation>MPlayer eq2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/ADM_vidEq2.cpp" line="45"/>
        <source>Adjust contrast, brightness, saturation and gamma.</source>
        <translation>Upraví kontrast, , sýtosť a gama.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/Q_eq2.cpp" line="60"/>
        <source>Reset</source>
        <translation>Znovu nastaviť</translation>
    </message>
</context>
<context>
    <name>eq2Dialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="45"/>
        <source>Contrast</source>
        <translation>Kontrast</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="122"/>
        <source>&lt;b&gt;Gamma&lt;/b&gt;</source>
        <translation>&lt;b&gt;Gama&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="85"/>
        <source>Saturation</source>
        <translation>Nasýtenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="65"/>
        <source>Brightness</source>
        <translation>Jas</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="207"/>
        <source>Blue</source>
        <translation>Modrá</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="246"/>
        <source>Red</source>
        <translation>Červená</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="253"/>
        <source>Initial</source>
        <translation>Východzia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="184"/>
        <source>Weight</source>
        <translation>Váha</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="260"/>
        <source>Green</source>
        <translation>Zelená</translation>
    </message>
</context>
<context>
    <name>faac</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/faac/audioencoder_faac.cpp" line="292"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/faac/audioencoder_faac.cpp" line="298"/>
        <source>Faac Configuration</source>
        <translation>Konfigurácia Faac</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="283"/>
        <source>Opus Configuration</source>
        <translation>Konfigurácia Opus</translation>
    </message>
</context>
<context>
    <name>fadeFromImage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/ADM_vidFadeFromImage.cpp" line="38"/>
        <source>Fade from first image</source>
        <translation>Vytrácanie z prvého obrázka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/ADM_vidFadeFromImage.cpp" line="39"/>
        <source>Use image at start time for fading.</source>
        <translation>Použije obrázok v čase spustenia na vytrácanie.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="82"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="83"/>
        <source>_End time:</source>
        <translation>Čas _konca:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="86"/>
        <source>Manual time entry</source>
        <translation>Manuálne zadávanie času</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="162"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="181"/>
        <source>Time scope: </source>
        <translation>Časový rozsah: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="165"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="187"/>
        <source>Duration: </source>
        <translation>Trvanie: </translation>
    </message>
</context>
<context>
    <name>fadeFromImageDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="14"/>
        <source>Fade from first image</source>
        <translation>Vytrácanie z prvého obrázka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="37"/>
        <source>Time scope: </source>
        <translation>Časový rozsah: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="44"/>
        <source>Duration: </source>
        <translation>Trvanie: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="51"/>
        <source>Manual time entry</source>
        <translation>Manuálne zadávanie času</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="58"/>
        <source>Set from A-B markers</source>
        <translation>Nastaviť podľa značiek A-B</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="82"/>
        <source>Effect:</source>
        <translation>Účinok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="96"/>
        <source>Linear blend</source>
        <translation>Lineárne zmiešavanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="101"/>
        <source>Slide</source>
        <translation>Posunúť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="106"/>
        <source>Wipe</source>
        <translation>Stieranie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="111"/>
        <source>Push</source>
        <translation>Stlačiť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="116"/>
        <source>Luma dissolve</source>
        <translation>Rozpustenie Jasu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="121"/>
        <source>Inverse luma dissolve</source>
        <translation>Inverzné rozpustenie svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="126"/>
        <source>Static random dissolve</source>
        <translation>Statické náhodné rozpúšťanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="131"/>
        <source>Dynamic random dissolve</source>
        <translation>Dynamické náhodné rozpúšťanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="140"/>
        <source>Up</source>
        <translation>Hore</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="145"/>
        <source>Right</source>
        <translation>Vpravo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="150"/>
        <source>Down</source>
        <translation>Dole</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="155"/>
        <source>Left</source>
        <translation>Vľavo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="178"/>
        <source>Start preview play before time scope, if you see green.</source>
        <translation>Ak sa zobrazí zelená farba, spustite náhľad hry pred časovým rozsahom.</translation>
    </message>
</context>
<context>
    <name>fadeInOut</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeIn.cpp" line="24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="42"/>
        <source>Fade in</source>
        <translation>Zjavovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeIn.cpp" line="25"/>
        <source>Fade in from color.</source>
        <translation>Zjavovať z farby.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeOut.cpp" line="24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="44"/>
        <source>Fade out</source>
        <translation>Vytrácanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeOut.cpp" line="25"/>
        <source>Fade out to color.</source>
        <translation>Vytrácať z farby.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="86"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="87"/>
        <source>_End time:</source>
        <translation>Čas _konca:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="90"/>
        <source>Manual time entry</source>
        <translation>Manuálne zadávanie času</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="189"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="218"/>
        <source>Time scope: </source>
        <translation>Časový rozsah: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="192"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="224"/>
        <source>Duration: </source>
        <translation>Trvanie: </translation>
    </message>
</context>
<context>
    <name>fadeInOutDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="14"/>
        <source>Fade in/out</source>
        <translation>Zjavovanie/Vytrácanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="37"/>
        <source>Time scope: </source>
        <translation>Časový rozsah: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="44"/>
        <source>Duration: </source>
        <translation>Trvanie: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="51"/>
        <source>Manual time entry</source>
        <translation>Manuálne zadávanie času</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="58"/>
        <source>Set from A-B markers</source>
        <translation>Nastaviť podľa značiek A-B</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="82"/>
        <source>Pick color:</source>
        <translation>Nabrať farbu:</translation>
    </message>
</context>
<context>
    <name>fadeThrough</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeThrough.cpp" line="32"/>
        <source>Fade through</source>
        <translation>Vytrácať podľa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeThrough.cpp" line="33"/>
        <source>Fade through combination of multiple effects.</source>
        <translation>Vytrácanie podľa kombinácie viacerých efektov.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="162"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="163"/>
        <source>_End time:</source>
        <translation>Čas _konca:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="166"/>
        <source>Manual time entry</source>
        <translation>Manuálne zadávanie času</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="198"/>
        <source>Not possible!
Start and/or end time would be out of range</source>
        <translation>To nie je možné!
Čas začiatku a/alebo konca by bol mimo rozsahu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="368"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="554"/>
        <source>Time scope: </source>
        <translation>Časový rozsah: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="371"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="567"/>
        <source>Duration: </source>
        <translation>Trvanie: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="562"/>
        <source>Center: </source>
        <translation>Stred: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeIn.cpp" line="32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="44"/>
        <source>Fade in</source>
        <translation>Zjavovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeIn.cpp" line="33"/>
        <source>Fade in from combination of multiple effects.</source>
        <translation>Zjavovanie podľa kombinácie viacerých efektov.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeOut.cpp" line="32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="46"/>
        <source>Fade out</source>
        <translation>Vytrácanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeOut.cpp" line="33"/>
        <source>Fade out to combination of multiple effects.</source>
        <translation>Vytrácanie podľa kombinácie viacerých efektov.</translation>
    </message>
</context>
<context>
    <name>fadeThroughDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="20"/>
        <source>Fade through</source>
        <translation>Vytrácať podľa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="43"/>
        <source>Time scope: </source>
        <translation>Časový rozsah: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="50"/>
        <source>Center: </source>
        <translation>Stred: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="57"/>
        <source>Duration: </source>
        <translation>Trvanie: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="64"/>
        <source>Manual time entry</source>
        <translation>Manuálne zadávanie času</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="71"/>
        <source>Set from A-B markers</source>
        <translation>Nastaviť podľa značiek A-B</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="78"/>
        <source>Set center as A marker, duration is 2×|A-B|</source>
        <translation>Nastaví stred ako značku A, trvanie je 2×|A-B|</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="112"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="131"/>
        <source>Brightness</source>
        <translation>Jas</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="120"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="248"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="376"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="576"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="701"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="827"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="958"/>
        <source>Enable</source>
        <translation>Povoliť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="168"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="296"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="496"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="621"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="752"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="878"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1078"/>
        <source>Transient</source>
        <translation>Prechodné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="182"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="310"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="510"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="635"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="766"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="892"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1092"/>
        <source>Raised cosine</source>
        <translation>Zvýšený kosínus</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="187"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="315"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="515"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="640"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="771"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="897"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1097"/>
        <source>Ramp</source>
        <translation>Spád</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="192"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="320"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="520"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="645"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="776"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="902"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1102"/>
        <source>Quadratic</source>
        <translation>Kvadratický</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="197"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="325"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="525"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="650"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="781"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="907"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1107"/>
        <source>Inverse quadratic</source>
        <translation>Inverzne kvadratické</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="202"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="330"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="530"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="655"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="912"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1112"/>
        <source>Exponential</source>
        <translation>Exponenciálne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="210"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="338"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="538"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="663"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="789"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="920"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1120"/>
        <source>duration</source>
        <translation>trvanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="240"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="259"/>
        <source>Saturation</source>
        <translation>Nasýtenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="368"/>
        <source>Color blend</source>
        <translation>Prelínanie farieb</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="399"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="981"/>
        <source>Pick color</source>
        <translation>Nabrať farbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="465"/>
        <source>Peak amount</source>
        <translation>Množstvo špičky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="568"/>
        <source>Blur</source>
        <translation>Rozostriť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="587"/>
        <source>Blur radius</source>
        <translation>Polomer rozostrenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="693"/>
        <source>Rotate</source>
        <translation>Otáčať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="712"/>
        <source>Peak angle</source>
        <translation>Uhol špičky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="819"/>
        <source>Zoom</source>
        <translation>Priblížiť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="838"/>
        <source>Peak zoom</source>
        <translation>Priblíženie špičky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="950"/>
        <source>Vignette</source>
        <translation>Medailónik</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="1047"/>
        <source>Peak opening</source>
        <translation>Otvorené špičky</translation>
    </message>
</context>
<context>
    <name>fadeTo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="59"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="82"/>
        <source>Fade</source>
        <translation>Vytrácanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="60"/>
        <source>Fade.</source>
        <translation>Vytrácanie.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="73"/>
        <source>From</source>
        <translation>Od</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="73"/>
        <source>Fade from the first picture into movie</source>
        <translation>Vytrácanie prvého obrázka vo filme</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="74"/>
        <source>To</source>
        <translation>Do</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="74"/>
        <source>Fade from movie to the first picture</source>
        <translation>Vytrácanie filmu po prvý obrázok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="77"/>
        <source>_Fade direction:</source>
        <translation>Smer _vytrácania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="78"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="79"/>
        <source>_End time:</source>
        <translation>Čas _konca:</translation>
    </message>
</context>
<context>
    <name>fadeToBlack</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="55"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="75"/>
        <source>Fade to black</source>
        <translation>Zčernanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="56"/>
        <source>Fade to black in/out.</source>
        <translation>Zčernanie od/do.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="66"/>
        <source>Out</source>
        <translation>Von</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="66"/>
        <source>Fade out</source>
        <translation>Vytrácanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="66"/>
        <source>In</source>
        <translation>Vnútri</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="66"/>
        <source>Fade in</source>
        <translation>Zjavovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="70"/>
        <source>_Fade type:</source>
        <translation>_Typ vytrácania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="71"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="72"/>
        <source>_End time:</source>
        <translation>Čas _konca:</translation>
    </message>
</context>
<context>
    <name>ffVAEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="345"/>
        <source>Baseline</source>
        <translation>Základné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="346"/>
        <source>Main</source>
        <translation>Hlavné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="347"/>
        <source>High</source>
        <translation>Vysoké</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="350"/>
        <source>Constant Rate Factor</source>
        <translation>Faktor konštantnej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="351"/>
        <source>Constant Bitrate</source>
        <translation>Konštantná prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="353"/>
        <source>Variable Bitrate</source>
        <translation>Premenlivá prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="359"/>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="361"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="364"/>
        <source>Rate Control:</source>
        <translation>Riadenie rýchlosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="366"/>
        <source>GOP Size:</source>
        <translation>Veľkosť skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="371"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>Maximum následných B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="372"/>
        <source>Quality:</source>
        <translation>Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="373"/>
        <source>Bitrate (kbps):</source>
        <translation>Prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="362"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Maximálna prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="374"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="375"/>
        <source>Frame Control</source>
        <translation>Riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="396"/>
        <source>FFmpeg VA-API H.264 Encoder Configuration</source>
        <translation>Konfigurácia kódovača FFmpeg VA-API H.264</translation>
    </message>
</context>
<context>
    <name>ffVAEncHEVC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="353"/>
        <source>GOP Size:</source>
        <translation>Veľkosť skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="354"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>Maximum následných B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="357"/>
        <source>Bitrate (kbps):</source>
        <translation>Prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="349"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Maximálna prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="338"/>
        <source>Constant Rate Factor</source>
        <translation>Faktor konštantnej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="339"/>
        <source>Constant Bitrate</source>
        <translation>Konštantná prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="341"/>
        <source>Variable Bitrate</source>
        <translation>Premenlivá prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="348"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="351"/>
        <source>Rate Control:</source>
        <translation>Riadenie rýchlosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="356"/>
        <source>Quality:</source>
        <translation>Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="359"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="360"/>
        <source>Frame Control</source>
        <translation>Riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="379"/>
        <source>FFmpeg VA-API HEVC Encoder Configuration</source>
        <translation>Konfigurácia kódovača FFmpeg VA-API HEVC</translation>
    </message>
</context>
<context>
    <name>ffmpeg2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="264"/>
        <source>Normal (4:3)</source>
        <translation>Normálne (4:3)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="265"/>
        <source>Wide (16:9)</source>
        <translation>Širokouhlé (16:9)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="270"/>
        <source>Default</source>
        <translation>Predvolené</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="271"/>
        <source>Tmpgenc</source>
        <translation>Tmpgenc</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="272"/>
        <source>Animes</source>
        <translation>Kreslené</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="273"/>
        <source>KVCD</source>
        <translation>KVCD</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="277"/>
        <source>MB comparison</source>
        <translation>Porovnanie MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="278"/>
        <source>Fewest bits (vhq)</source>
        <translation>Najmnšie bity (vhq)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="279"/>
        <source>Rate distortion</source>
        <translation>Miera skreslenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="282"/>
        <source>One thread</source>
        <translation>Jedno vlákno</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="283"/>
        <source>Two threads</source>
        <translation>Dve vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="284"/>
        <source>Three threads</source>
        <translation>Tri vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="285"/>
        <source>Auto (#cpu)</source>
        <translation>Automaticky (počet CPU)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="289"/>
        <source>Progressive</source>
        <translation>Progresívny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="290"/>
        <source>Interlaced</source>
        <translation>Prekladaný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="293"/>
        <source>Top Field First</source>
        <translation>Najprv horná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="294"/>
        <source>Bottom Field First</source>
        <translation>Najprv spodná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="303"/>
        <source>Threading</source>
        <translation>Vláknenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="304"/>
        <source>Mi_n. quantizer:</source>
        <translation>Mi_n. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="305"/>
        <source>Ma_x. quantizer:</source>
        <translation>Ma_x. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="306"/>
        <source>Max. quantizer _difference:</source>
        <translation>Max. r_ozdiel kvantfikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="307"/>
        <source>VBV Buffer Size:</source>
        <translation>Veľkosť VBV zásobníka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="308"/>
        <source>Max bitrate (kb/s):</source>
        <translation>Maximálna prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="310"/>
        <source>_Trellis quantization</source>
        <translation>_Kvantifikácia mriežkového kódovania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="312"/>
        <source>_Number of B frames:</source>
        <translation>_Počet B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="316"/>
        <source>_Macroblock decision:</source>
        <translation>_Rozhodovanie makroblokov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="317"/>
        <source>Aspect ratio:</source>
        <translation>Pomer strán:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="318"/>
        <source>Matrices:</source>
        <translation>Matrice:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="319"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Tolerancia veľkosti súboru [kB]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="321"/>
        <source>_Quantizer compression:</source>
        <translation>_Kompresia kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="322"/>
        <source>Quantizer _blur:</source>
        <translation>_Rozostrenie kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="324"/>
        <source>_Gop Size:</source>
        <translation>Veľkosť _skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="326"/>
        <source>_Interlaced:</source>
        <translation>_Prekladané:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="327"/>
        <source>Field Order:</source>
        <translation>Poradie polsnímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="333"/>
        <source>Basic Settings</source>
        <translation>Základné nastavenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="337"/>
        <source>Adv. Settings</source>
        <translation>Rozšírené nastavenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="341"/>
        <source>Interlacing</source>
        <translation>Prekladanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="346"/>
        <source>Quantization</source>
        <translation>Kvantizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="351"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="354"/>
        <source>libavcodec MPEG-2 configuration</source>
        <translation>Konfigurácia libavcodec MPEG-2</translation>
    </message>
</context>
<context>
    <name>ffmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="198"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="199"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="203"/>
        <source>MB comparison</source>
        <translation>Porovnanie MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="204"/>
        <source>Fewest bits (vhq)</source>
        <translation>Najmnšie bity (vhq)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="205"/>
        <source>Rate distortion</source>
        <translation>Miera skreslenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="208"/>
        <source>One thread</source>
        <translation>Jedno vlákno</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="209"/>
        <source>Two threads</source>
        <translation>Dve vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="210"/>
        <source>Three threads</source>
        <translation>Tri vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="211"/>
        <source>Auto (#cpu)</source>
        <translation>Automaticky (počet CPU)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="220"/>
        <source>Threading</source>
        <translation>Vláknenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="221"/>
        <source>Mi_n. quantizer:</source>
        <translation>Mi_n. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="222"/>
        <source>Ma_x. quantizer:</source>
        <translation>Ma_x. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="223"/>
        <source>Max. quantizer _difference:</source>
        <translation>Max. r_ozdiel kvantfikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="225"/>
        <source>4_MV</source>
        <translation>4_MV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="226"/>
        <source>_Trellis quantization</source>
        <translation>_Kvantifikácia mriežkového kódovania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="228"/>
        <source>_Quarter pixel</source>
        <translation>Štvrť _pixel</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="230"/>
        <source>_Number of B frames:</source>
        <translation>_Počet B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="231"/>
        <source>_Quantization type:</source>
        <translation>_Typ kvantifikácie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="233"/>
        <source>_Macroblock decision:</source>
        <translation>_Rozhodovanie makroblokov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="235"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Tolerancia veľkosti súboru [kB]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="237"/>
        <source>_Quantizer compression:</source>
        <translation>_Kompresia kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="238"/>
        <source>Quantizer _blur:</source>
        <translation>_Rozostrenie kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="240"/>
        <source>_Gop Size:</source>
        <translation>Veľkosť _skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="243"/>
        <source>User Interface</source>
        <translation>Užívateľské rozhranie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="246"/>
        <source>Advanced Simple Profile</source>
        <translation>Prídavný jednoduchý profil</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="252"/>
        <source>Motion Estimation</source>
        <translation>Odhad pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="256"/>
        <source>Quantization</source>
        <translation>Kvantizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="261"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="264"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation>Konfigurácia libavcodec MPEG-4</translation>
    </message>
</context>
<context>
    <name>ffmsmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="224"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="225"/>
        <source>Full</source>
        <translation>Plná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="226"/>
        <source>Log</source>
        <translation>Záznam hlásenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="227"/>
        <source>Phods</source>
        <translation>Phods</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="228"/>
        <source>EPZS</source>
        <translation>EPZS</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="229"/>
        <source>X1</source>
        <translation>X1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="233"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="234"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="238"/>
        <source>MB comparison</source>
        <translation>Porovnanie MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="239"/>
        <source>Fewest bits (vhq)</source>
        <translation>Najmnšie bity (vhq)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="240"/>
        <source>Rate distortion</source>
        <translation>Miera skreslenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="249"/>
        <source>Mi_n. quantizer:</source>
        <translation>Mi_n. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="250"/>
        <source>Ma_x. quantizer:</source>
        <translation>Ma_x. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="251"/>
        <source>Max. quantizer _difference:</source>
        <translation>Max. r_ozdiel kvantfikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="252"/>
        <source>_Trellis quantization</source>
        <translation>_Kvantifikácia mriežkového kódovania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="253"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Tolerancia veľkosti súboru [kB]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="255"/>
        <source>_Quantizer compression:</source>
        <translation>_Kompresia kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="256"/>
        <source>Quantizer _blur:</source>
        <translation>_Rozostrenie kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="258"/>
        <source>_Gop Size:</source>
        <translation>Veľkosť _skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="261"/>
        <source>User Interface</source>
        <translation>Užívateľské rozhranie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="266"/>
        <source>Quantization</source>
        <translation>Kvantizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="271"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="274"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation>Konfigurácia libavcodec MPEG-4</translation>
    </message>
</context>
<context>
    <name>ffnvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="326"/>
        <source>Controlled by Preset</source>
        <translation>Ovládané predvoľbou</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="328"/>
        <source>Constant Bitrate</source>
        <translation>Konštantná prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="329"/>
        <source>Variable Bitrate</source>
        <translation>Premenlivá prenosová rýchlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="338"/>
        <source>High Quality</source>
        <translation>Vysoká kvalita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="339"/>
        <source>BluRay</source>
        <translation>Blu-ray</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="340"/>
        <source>Low Latency</source>
        <translation>Nízka odozva</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="342"/>
        <source>Low Latency (HQ)</source>
        <translation>Nízka odozva (HQ)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="352"/>
        <source>Baseline</source>
        <translation>Základné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="349"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="353"/>
        <source>Main</source>
        <translation>Hlavné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="327"/>
        <source>Constant Quantizer</source>
        <translation>Konštantný kvantovač</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="333"/>
        <source>Default</source>
        <translation>Predvolené</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="334"/>
        <source>Slow</source>
        <translation>Pomaly</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="335"/>
        <source>Medium</source>
        <translation>Stredná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="336"/>
        <source>Fast</source>
        <translation>Rýchle</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="337"/>
        <source>High Performance</source>
        <translation>Vysoký výkon</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="341"/>
        <source>Low Latency (HP)</source>
        <translation>Nízka odozva (HP)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="343"/>
        <source>Lossless</source>
        <translation>Bezstratová</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="344"/>
        <source>Lossless (HP)</source>
        <translation>Bezstratové (HP)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="350"/>
        <source>Main10</source>
        <translation>Hlavné10</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="354"/>
        <source>High</source>
        <translation>Vysoké</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="359"/>
        <source>Disabled</source>
        <translation>Zakázané</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="361"/>
        <source>Each</source>
        <translation>Každý</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="363"/>
        <source>Middle</source>
        <translation>Stred</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="370"/>
        <source>RC Mode:</source>
        <translation>Režim RC:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="371"/>
        <source>Preset:</source>
        <translation>Predvoľba:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="372"/>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="373"/>
        <source>Use B-Frames as References:</source>
        <translation>Použiť B-snímky ako referencie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="375"/>
        <source>Quality:</source>
        <translation>Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="376"/>
        <source>Bitrate (kbps):</source>
        <translation>Prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="377"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Maximálna prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="379"/>
        <source>GOP Size:</source>
        <translation>Veľkosť skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="380"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>Maximum následných B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="382"/>
        <source>Lookahead:</source>
        <translation>Výhľadovo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="383"/>
        <source>AQ Strength:</source>
        <translation>Sila AQ:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="385"/>
        <source>Spatial AQ</source>
        <translation>Priestorový AQ</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="386"/>
        <source>Temporal AQ</source>
        <translation>Časový AQ</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="387"/>
        <source>Weighted Prediction</source>
        <translation>Vážená predpoveď</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="389"/>
        <source>Even with HEVC encoding support present, lossless presets and B-frames may be unavailable with older hardware</source>
        <translation>Dokonca aj s podporou kódovania HEVC môžu byť bezstratové predvoľby a B-snímky nedostupné so starším hardvérom</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="392"/>
        <source>Even with H.264 encoding support present, lossless presets may be unavailable with older hardware</source>
        <translation>Dokonca aj s podporou kódovania H.264 môžu byť bezstratové predvoľby na staršom hardvéri nedostupné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="395"/>
        <source>Lookahead and Adaptive Quantization may be unavailable with older hardware</source>
        <translation>Funkcie Výhľadovo a Adaptívna kavantizácia nemusia byť so starším hardvérom k dispozícii</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="397"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="398"/>
        <source>Frame Control</source>
        <translation>Riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="424"/>
        <source>Basic Settings</source>
        <translation>Základné nastavenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="428"/>
        <source>Advanced Settings</source>
        <translation>Rozšírené nastavenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="435"/>
        <source>NVENC H.264 configuration</source>
        <translation>Konfigurácia NVENC H.264</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="433"/>
        <source>NVENC HEVC configuration</source>
        <translation>Konfigurácia NVENC HEVC</translation>
    </message>
</context>
<context>
    <name>ffpsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="64"/>
        <source>[Mismatch]</source>
        <translation>[Zmätočné]</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="164"/>
        <source>Saving mpeg PS (ff)</source>
        <translation>Uloženie mpeg PS (ff)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="209"/>
        <source> video not compatible
</source>
        <translation> nekompatibilné video
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="218"/>
        <source> Bad width/height for VCD
</source>
        <translation> Neplatná šírka/výška pre VCD
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="224"/>
        <source> Bad width/height for SVCD
</source>
        <translation> Neplatná šírka/výška pre SVCD
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="230"/>
        <source> Bad width/height for DVD
</source>
        <translation> Neplatná šírka/výška pre DVD
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="247"/>
        <source> VCD : only MP2 audio accepted
</source>
        <translation> VCD: akcetpované len MP2 audio
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="252"/>
        <source> VCD : only 44.1 khz audio accepted
</source>
        <translation> VCD: akceptované len 44.1 kHz audio
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="259"/>
        <source> DVD : only 48 khz audio accepted
</source>
        <translation> DVD: akceptované len 48 kHz audio
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="265"/>
        <source>[ffPS] DVD : only MP2/AC3/DTS audio accepted
</source>
        <translation>[ffPS] DVD: akceptované len MP2/AC3/DTS audio
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="54"/>
        <source>Free</source>
        <translation>Voľný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="57"/>
        <source>Muxing Format</source>
        <translation>Formát zmiešavania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="58"/>
        <source>Allow non compliant stream</source>
        <translation>Povoliť nezhodný tok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="59"/>
        <source>Total Muxrate (kbits)</source>
        <translation>Celková miera zmiešavania (kB)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="60"/>
        <source>Video Muxrate (kbits)</source>
        <translation>Podiel videa zmiešavania (kB)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="61"/>
        <source>VBV size (kBytes)</source>
        <translation>Veľkosť VBV (kB)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="62"/>
        <source>Advanced</source>
        <translation>Pokročilé</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="75"/>
        <source>Mpeg PS Muxer</source>
        <translation>Zmiešavač Mpeg PS zmiešavač</translation>
    </message>
</context>
<context>
    <name>fftsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTS.cpp" line="162"/>
        <source>Saving mpeg TS (ff)</source>
        <translation>Uloženie mpeg TS (ff)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTSConfig.cpp" line="28"/>
        <source>VBR muxing</source>
        <translation>VBR zmiešavanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTSConfig.cpp" line="29"/>
        <source>Mux rate (MBits/s)</source>
        <translation>Frekvencia zmiešavania [mB/s]</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTSConfig.cpp" line="34"/>
        <source>TS Muxer</source>
        <translation>Zmiešavač TS</translation>
    </message>
</context>
<context>
    <name>ffv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="139"/>
        <source>Golomb-Rice</source>
        <translation>Golomb-Rice</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="140"/>
        <source>Range Coder</source>
        <translation>Kódovač rozsahu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="143"/>
        <source>Small</source>
        <translation>Malé</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="144"/>
        <source>Large</source>
        <translation>Veľké</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="147"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="148"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="149"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="152"/>
        <source>Coder:</source>
        <translation>Kódovač:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="153"/>
        <source>Context:</source>
        <translation>Kontext:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="154"/>
        <source>Threads:</source>
        <translation>Vlákna:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="155"/>
        <source>Error correction/detection</source>
        <translation>Oprava/detekcia chýb</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="158"/>
        <source>FFV1 Configuration</source>
        <translation>Konfigurácia FFV1</translation>
    </message>
</context>
<context>
    <name>ffvtenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="157"/>
        <source>Baseline</source>
        <translation>Základné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="158"/>
        <source>Main</source>
        <translation>Hlavné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="159"/>
        <source>High</source>
        <translation>Vysoké</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="164"/>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="165"/>
        <source>GOP Size:</source>
        <translation>Veľkosť skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="166"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>Maximum následných B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="167"/>
        <source>Bitrate (kbps):</source>
        <translation>Prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="168"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Maximálna prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="169"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="170"/>
        <source>Frame Control</source>
        <translation>Riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="181"/>
        <source>VideoToolbox H.264 Encoder Configuration</source>
        <translation>Video nástroje konfigurácie kódovača H.264</translation>
    </message>
</context>
<context>
    <name>filesel</name>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="150"/>
        <source>File error</source>
        <translation>Chyba súboru</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="150"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation>Nemožno otvoriť &quot;%s&quot;.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="163"/>
        <source>%s already exists.

Do you want to replace it?</source>
        <translation>%s už existuje.

Chcete ho nahradiť?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="190"/>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="204"/>
        <source>It is possible that you are trying to overwrite an input file!</source>
        <translation>Je možné, že sa snažíte prepísať vstupný súbor!</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="215"/>
        <source>Cannot write the file</source>
        <translation>Nemožno zapísať súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="215"/>
        <source>No write access to &quot;%s&quot;.</source>
        <translation>Bez prístupu zápisu do &quot;% s&quot;.</translation>
    </message>
</context>
<context>
    <name>fitToSize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/ADM_vidFitToSize.cpp" line="58"/>
        <source>Fit to size</source>
        <translation>Prispôsobiť na veľkosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/ADM_vidFitToSize.cpp" line="59"/>
        <source>Resize and pad to the specified size.</source>
        <translation>Zmení veľkosť a podklad na zadanú veľkosť.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/Q_fitToSize.cpp" line="186"/>
        <source>Width and height cannot be odd</source>
        <translation>Šírka a výška nemôžu byť nepárne</translation>
    </message>
</context>
<context>
    <name>fitToSizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="14"/>
        <source>Fit to size</source>
        <translation>Prispôsobiť na veľkosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="35"/>
        <source>Output settings</source>
        <translation>Nastavenia výstupu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="73"/>
        <source>Width:</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="109"/>
        <source>Height:</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="149"/>
        <source>No rounding</source>
        <translation>Nezaokrúhľovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="154"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation>Zaokrúhliť na najbližší násobok 16</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="159"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>Zaokrúhliť na najbližší násobok čísla 8</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="164"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>Zaokrúhliť na najbližší násobok čísla 4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="191"/>
        <source>Resize Method:</source>
        <translation>Metóda zmeny veľkosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="199"/>
        <source>Bilinear</source>
        <translation>Bilineárna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="204"/>
        <source>Bicubic</source>
        <translation>Bikubická</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="209"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="214"/>
        <source>Spline</source>
        <translation>Drážka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="240"/>
        <source>Aspect ratio tolerance</source>
        <translation>Tolerancia pomeru strán</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="314"/>
        <source>0%</source>
        <translation>0%</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="334"/>
        <source>Percent</source>
        <translation>Percento</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="354"/>
        <source>100%</source>
        <translation>100%</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="401"/>
        <source>Padding</source>
        <translation>Výplň</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="410"/>
        <source>black bars</source>
        <translation>čierne pruhy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="415"/>
        <source>echo</source>
        <translation>echo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="441"/>
        <source>Details</source>
        <translation>Detaily</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="463"/>
        <source>Current input dimensions:</source>
        <translation>Aktuálne vstupné rozmery:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="470"/>
        <source>Resized to:</source>
        <translation>Zmeniť veľkosť na:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="484"/>
        <source>Required padding:</source>
        <translation>Vyžadované odsadenie:</translation>
    </message>
</context>
<context>
    <name>flip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/ADM_vidFlip.cpp" line="36"/>
        <source>Flip</source>
        <translation>Preklopiť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/ADM_vidFlip.cpp" line="37"/>
        <source>Vertically/Horizontally flip the image.</source>
        <translation>Vertikálne/horizontálne preklopenie obrázka.</translation>
    </message>
</context>
<context>
    <name>flipDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/qt4/flip.ui" line="14"/>
        <source>Flip</source>
        <translation>Preklopiť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/qt4/flip.ui" line="50"/>
        <source>Horizontal flip</source>
        <translation>Preklopiť horizontálne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/qt4/flip.ui" line="55"/>
        <source>Vertical flip</source>
        <translation>Preklopiť vertikálne</translation>
    </message>
</context>
<context>
    <name>flux</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="37"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="93"/>
        <source>FluxSmooth</source>
        <translation>FluxSmooth</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="38"/>
        <source>Spatio-temporal cleaner by Ross Thomas.</source>
        <translation>Priestorovo-časové vyhladenie obrazu od Rossa Thomasa.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="88"/>
        <source>_Temporal threshold:</source>
        <translation>Doč_asný prah:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="89"/>
        <source>_Spatial threshold:</source>
        <translation>_Priestorový prah:</translation>
    </message>
</context>
<context>
    <name>flv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="162"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="163"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="167"/>
        <source>MB comparison</source>
        <translation>Porovnanie MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="168"/>
        <source>Fewest bits (vhq)</source>
        <translation>Najmnšie bity (vhq)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="169"/>
        <source>Rate distortion</source>
        <translation>Miera skreslenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="177"/>
        <source>Mi_n. quantizer:</source>
        <translation>Mi_n. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="178"/>
        <source>Ma_x. quantizer:</source>
        <translation>Ma_x. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="179"/>
        <source>Max. quantizer _difference:</source>
        <translation>Max. r_ozdiel kvantfikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="180"/>
        <source>_Trellis quantization</source>
        <translation>_Kvantifikácia mriežkového kódovania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="181"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Tolerancia veľkosti súboru [kB]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="183"/>
        <source>_Quantizer compression:</source>
        <translation>_Kompresia kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="184"/>
        <source>Quantizer _blur:</source>
        <translation>_Rozostrenie kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="186"/>
        <source>_Gop Size:</source>
        <translation>Veľkosť _skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="189"/>
        <source>User Interface</source>
        <translation>Užívateľské rozhranie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="194"/>
        <source>Quantization</source>
        <translation>Kvantizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="199"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="202"/>
        <source>libavcodec FLV1 configuration</source>
        <translation>Konfigurácia libavcodec FLV1</translation>
    </message>
</context>
<context>
    <name>flvdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Flv/ADM_flv.cpp" line="622"/>
        <source>Warning</source>
        <translation>Upozornenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Flv/ADM_flv.cpp" line="622"/>
        <source>This FLV file says it has no video.
I will assume it has and try to continue</source>
        <translation>Tento súbor FLV tvrdí, že nemá žiadne video.
Je predpoklad, že má a pokúsiť sa pokračovať</translation>
    </message>
</context>
<context>
    <name>flvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="68"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="78"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="84"/>
        <source>Unsupported</source>
        <translation>Nepodporované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="68"/>
        <source>Only FLV1 &amp; VP6 supported for video</source>
        <translation>Podporované len pre video FLV1 &amp; VP6</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="78"/>
        <source>Only AAC &amp; mpegaudio supported for audio</source>
        <translation>Podporované len pre audio AAC &amp; mpegaudio</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="84"/>
        <source>Only 44.1, 22.050 and 11.025 kHz supported</source>
        <translation>Pordporované len 44.1, 22.050 a 11.025 kHz</translation>
    </message>
</context>
<context>
    <name>gaussian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Gauss.cpp" line="26"/>
        <source>Gaussian convolution.</source>
        <translation>Gaussova konvolúcia.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Gauss.cpp" line="27"/>
        <source>3x3 convolution filter :gaussian.</source>
        <translation>3x3 konvolučný gausov filter.</translation>
    </message>
</context>
<context>
    <name>glBenchmark</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glBenchmark/benchGl.cpp" line="61"/>
        <source>OpenGl ReadBack benchmark</source>
        <translation>Vykoná skúšobný test spätného čítania OpenGl</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glBenchmark/benchGl.cpp" line="62"/>
        <source>Check how fast readback is.</source>
        <translation>Kontroluje aké rýchle je spätné čítanie.</translation>
    </message>
</context>
<context>
    <name>glFragment</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment/sampleGl.cpp" line="68"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation>Príklad fragmentácie shaderov OpenGL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment/sampleGl.cpp" line="69"/>
        <source>Run a fragment shader.</source>
        <translation>Spustí fragmentáciu shaderov.</translation>
    </message>
</context>
<context>
    <name>glFragment2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment2/sampleGl.cpp" line="66"/>
        <source>OpenGl Fragment Shader Sample2</source>
        <translation>2. príklad fragmentácie shaderov OpenGL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment2/sampleGl.cpp" line="67"/>
        <source>Run a fragment shader.</source>
        <translation>Spustí fragmentáciu shaderov.</translation>
    </message>
</context>
<context>
    <name>glResize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="66"/>
        <source>OpenGl Resize</source>
        <translation>Zmena veľkosti OpenGL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="67"/>
        <source>Resize using openGl.</source>
        <translation>Zmení použitie OpenGL.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="213"/>
        <source>Width :</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="214"/>
        <source>Height :</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="218"/>
        <source>glResize</source>
        <translation>glResize</translation>
    </message>
</context>
<context>
    <name>glRotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glRotate/rotateGl.cpp" line="57"/>
        <source>OpenGl Rotate</source>
        <translation>Rotácia OpenGL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glRotate/rotateGl.cpp" line="58"/>
        <source>Rotate image by a small amount.</source>
        <translation>Krátko pootočí obrázok.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glRotate/rotateGl.cpp" line="176"/>
        <source>Angle (°):</source>
        <translation>Uhol pootočenia [°]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glRotate/rotateGl.cpp" line="181"/>
        <source>glRotate</source>
        <translation>glRotate</translation>
    </message>
</context>
<context>
    <name>glSample</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glGlyphy/glGlyphy.cpp" line="68"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation>Príklad fragmentácie shaderov OpenGL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glGlyphy/glGlyphy.cpp" line="69"/>
        <source>Run a fragment shader.</source>
        <translation>Spustí fragmentáciu shaderov.</translation>
    </message>
</context>
<context>
    <name>glShader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="64"/>
        <source>Shader Loader</source>
        <translation>Zavádzač shaderov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="65"/>
        <source>Run an external shader program.</source>
        <translation>Spustí externý program pre shadery.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="257"/>
        <source>ShaderFile to load</source>
        <translation>Súbor shadrov na načítanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="261"/>
        <source>ShaderLoader</source>
        <translation>ShaderLoader</translation>
    </message>
</context>
<context>
    <name>glSmooth</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glSmooth/glSmooth.cpp" line="61"/>
        <source>OpenGl Smooth</source>
        <translation>Vyhladenie OpenGL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glSmooth/glSmooth.cpp" line="62"/>
        <source>Smooth image while preserving edge.</source>
        <translation>Vyhladí hrany obrázka.</translation>
    </message>
</context>
<context>
    <name>glVdpaufilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="84"/>
        <source>vdpauDeintGl</source>
        <translation>vdpauDeintGl</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="85"/>
        <source>VDPAU deinterlacer+resize, openGl version (faster).</source>
        <translation>Rozkladač VDPAU + zmena veľkosti, verzia OpenGL (rýchle).</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="263"/>
        <source>Keep Top Field</source>
        <translation>Zachovať hornú polsnímku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="264"/>
        <source>Keep Bottom Field</source>
        <translation>Dodržať dolnú polsnímku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="265"/>
        <source>Double framerate</source>
        <translation>Dvojitá snímková frakvencia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="269"/>
        <source>_Resize:</source>
        <translation>_Zmena veľkosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="270"/>
        <source>_Deint Mode:</source>
        <translation>Režim _rozkladu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="271"/>
        <source>Width :</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="272"/>
        <source>Height :</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="276"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
</context>
<context>
    <name>glVertex</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_vertex/sampleGl.cpp" line="59"/>
        <source>OpenGl Vertex Shader</source>
        <translation>Vrcholové shadery OpenGL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_vertex/sampleGl.cpp" line="60"/>
        <source>Run a simple vertex shader.</source>
        <translation>Spustí jednotlivé vrcholy shaderov.</translation>
    </message>
</context>
<context>
    <name>glWave</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_distort/sampleGl.cpp" line="59"/>
        <source>OpenGl wave </source>
        <translation>Kmitočet OpenGL </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_distort/sampleGl.cpp" line="60"/>
        <source>Simple wave filter.</source>
        <translation>Jednoduchý filter kmitočtu.</translation>
    </message>
</context>
<context>
    <name>glYadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="77"/>
        <source>Yadif (openGl)</source>
        <translation>Yadif (OpenGl)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="78"/>
        <source>Yet another deinterlacer, using shaders.</source>
        <translation>Ešte ďalší rozkladač, používanie shaderu.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="260"/>
        <source>Temporal &amp; spatial check</source>
        <translation>Časová a priestorová kontrola</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="261"/>
        <source>Bob, temporal &amp; spatial check</source>
        <translation>Bob, časová a priestorová kontrola</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="262"/>
        <source>Skip spatial temporal check</source>
        <translation>Vynechať priestorovú časovú kontrolu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="263"/>
        <source>Bob, skip spatial temporal check</source>
        <translation>Bob, vynechať priestorovú časovú kontrolu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="266"/>
        <source>Bottom field first</source>
        <translation>Najskôr dolná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="267"/>
        <source>Top field first</source>
        <translation>Najskôr horná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="270"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="271"/>
        <source>_Order:</source>
        <translation>_Poradie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="275"/>
        <source>yadif</source>
        <translation>yadif</translation>
    </message>
</context>
<context>
    <name>hflip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/horizontalFlip/horizontalFlip.cpp" line="44"/>
        <source>Horizontal Flip</source>
        <translation>Preklopiť horizontálne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/horizontalFlip/horizontalFlip.cpp" line="45"/>
        <source>Horizontally flip the image.</source>
        <translation>Preklopí obrázok horizontálne.</translation>
    </message>
</context>
<context>
    <name>hue</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/ADM_vidHue.cpp" line="36"/>
        <source>Mplayer Hue</source>
        <translation>Mplayer odtieň</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/ADM_vidHue.cpp" line="37"/>
        <source>Adjust hue and saturation.</source>
        <translation>Upraví odtieň a sýtosť.</translation>
    </message>
</context>
<context>
    <name>hueDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/qt4/hue.ui" line="14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/qt4/hue.ui" line="39"/>
        <source>Hue</source>
        <translation>Odtieň</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/qt4/hue.ui" line="59"/>
        <source>Saturation</source>
        <translation>Nasýtenie</translation>
    </message>
</context>
<context>
    <name>huff</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/huff/ADM_huffEncoder.cpp" line="108"/>
        <source>HUFFYUV</source>
        <translation>HuffYUV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/huff/ADM_huffEncoder.cpp" line="109"/>
        <source>FF HUFFYUV</source>
        <translation>FF HuffYUV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/huff/ADM_huffEncoder.cpp" line="112"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/huff/ADM_huffEncoder.cpp" line="115"/>
        <source>HuffYUV Configuration</source>
        <translation>Konfigurácia HuffYUV</translation>
    </message>
</context>
<context>
    <name>hzstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/hzStackField.cpp" line="52"/>
        <source>Horizontal Stack Fields</source>
        <translation>Horizontálne pole zásobníkov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/hzStackField.cpp" line="53"/>
        <source>Put fields side by side.</source>
        <translation>Pokladať polia vedľa seba.</translation>
    </message>
</context>
<context>
    <name>imageStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/ADM_vidImageStab.cpp" line="41"/>
        <source>Image stabilizer</source>
        <translation>Stabilizátor obrazu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/ADM_vidImageStab.cpp" line="42"/>
        <source>Reduce camera shakiness.</source>
        <translation>Zníženie chvenia kamery.</translation>
    </message>
</context>
<context>
    <name>imageStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="14"/>
        <source>Image stabilizer</source>
        <translation>Stabilizátor obrazu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="37"/>
        <source>Smoothing</source>
        <translation>Vyhladenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="54"/>
        <source>Gravity</source>
        <translation>Gravitácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="75"/>
        <source>Interpolation</source>
        <translation>Interpolácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="89"/>
        <source>Bilinear</source>
        <translation>Bilineárna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="94"/>
        <source>Bicubic</source>
        <translation>Bikubická</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="102"/>
        <source>Motion estimation</source>
        <translation>Odhad pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="110"/>
        <source>accurate</source>
        <translation>presne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="115"/>
        <source>fast</source>
        <translation>rýchlo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="136"/>
        <source>Auto Gravity</source>
        <translation>Automatická gravitácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="160"/>
        <source>Scene threshold</source>
        <translation>Prah scény</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="167"/>
        <source>Zoom</source>
        <translation>Priblížiť</translation>
    </message>
</context>
<context>
    <name>indexing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="82"/>
        <source>Continue indexing</source>
        <translation>Priebežné indexovanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="82"/>
        <source>Abort Requested</source>
        <translation>Zrušiť požadované</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="82"/>
        <source>Do you want to abort indexing ?</source>
        <translation>Chcete zrušiť indexovanie?</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="158"/>
        <source>Time Left :%02d:%02d:%02d</source>
        <translation>Zostávajúci čas: %02d:%02d:%02d</translation>
    </message>
</context>
<context>
    <name>ivtcRemover</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="91"/>
        <source>Remove IVTC dupe.</source>
        <translation>Odstrániť IVTC duplikáty.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="92"/>
        <source>Remove the duplicate frames present after ivtc.</source>
        <translation>Odstráni duplicitné snímky vyskytujúce sa po ivtc.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="178"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="425"/>
        <source>_Noise:</source>
        <translation>Š_um:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="179"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="426"/>
        <source>_Show:</source>
        <translation>Zobraziť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="180"/>
        <source>_Remove duplicate:</source>
        <translation>_Odstrániť duplikáty:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="183"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="429"/>
        <source>Full</source>
        <translation>Plná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="184"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="430"/>
        <source>Fast</source>
        <translation>Rýchle</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="185"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="431"/>
        <source>VeryFast</source>
        <translation>Veľmi rýchla</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="188"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="434"/>
        <source>_Frame rate change:</source>
        <translation>_Zmena snímkovej frekvencie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="191"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="437"/>
        <source>DupeRemover</source>
        <translation>Odstraňovač duplicít</translation>
    </message>
</context>
<context>
    <name>jobs</name>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="17"/>
        <source>Avidemux Jobs</source>
        <translation>Úlohy programu Avidemux</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="28"/>
        <source>Run all pending jobs</source>
        <translation>Spustiť všetky čakajúce úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="31"/>
        <source>Run jobs</source>
        <translation>Spustiť úlohu</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="38"/>
        <source>Delete already executed jobs</source>
        <translation>Odstrániť už vykonané úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="41"/>
        <source>Cleanup</source>
        <translation>Vymazať</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="48"/>
        <source>If you use VDPAU you cannot use CLI version</source>
        <translation>Ak používate VDPAU, nemôžete používať verziu CLI</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="51"/>
        <source>use Qt version</source>
        <translation>použiť Qt verziu</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="71"/>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="182"/>
        <source>Quit</source>
        <translation>Ukončiť</translation>
    </message>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="36"/>
        <source>Oops</source>
        <translation>Hoplá</translation>
    </message>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="36"/>
        <source>Something very wrong happened when building joblist.</source>
        <translation>Pri zostavovaní zoznamu úloh sa stalo niečo veľmi zlé.</translation>
    </message>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="41"/>
        <source>There are no jobs stored</source>
        <translation>Nie sú uložené žiadne úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="61"/>
        <source>Job</source>
        <translation>Úloha</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="62"/>
        <source>Output</source>
        <translation>Výstup</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="63"/>
        <source>Status</source>
        <translation>Stav</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="64"/>
        <source>Start Time</source>
        <translation>Čas štartu</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="65"/>
        <source>End Time</source>
        <translation>Čas konca</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="66"/>
        <source>Duration</source>
        <translation>Trvanie</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="101"/>
        <source>Ready</source>
        <translation>Priravený</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="104"/>
        <source>Running....</source>
        <translation>Spustené...</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="107"/>
        <source>Success</source>
        <translation>Úspešne</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="115"/>
        <source>Failed</source>
        <translation>Zlyhalo</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="122"/>
        <source>???</source>
        <translation>???</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="165"/>
        <source>Delete</source>
        <translation>Delete</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="166"/>
        <source>Run Now</source>
        <translation>Spustiť hneď</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="167"/>
        <source>Force Status to success</source>
        <translation>Vynútiť stav na úspech</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="168"/>
        <source>Force Status to ready</source>
        <translation>Vynútiť stav na pripravený</translation>
    </message>
</context>
<context>
    <name>jobsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="13"/>
        <source>Jobs</source>
        <translation>Úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="50"/>
        <source>Delete Sel. Job</source>
        <translation>Odstrániť vybranú úlohu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="57"/>
        <source>Delete All Jobs</source>
        <translation>Odstrániť všetky úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="64"/>
        <source>Run All Jobs</source>
        <translation>Spustiť všetky úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="71"/>
        <source>Run Selected Job</source>
        <translation>Spustiť vybranú úlohu</translation>
    </message>
</context>
<context>
    <name>jpeg</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="95"/>
        <source>YUV422</source>
        <translation>YUV422</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="96"/>
        <source>YUV420</source>
        <translation>YUV420</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="99"/>
        <source>_Quantizer:</source>
        <translation>_Kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="100"/>
        <source>_Pixel format:</source>
        <translation>_Formát pixelov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="104"/>
        <source>Mjpeg Configuration</source>
        <translation>Konfigurácia Mjpeg</translation>
    </message>
</context>
<context>
    <name>kerneldeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="50"/>
        <source>Kernel Deint.</source>
        <translation>Rozkladač jadra.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="51"/>
        <source>Port of Donald Graft Kernel Deinterlacer.</source>
        <translation>Rozkladač matrice jadra portovaný od Donalda Grafta.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="65"/>
        <source>Top</source>
        <translation>Zhora</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="66"/>
        <source>Bottom</source>
        <translation>Zdola</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="70"/>
        <source>_Field order:</source>
        <translation>Por_adie polsnímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="71"/>
        <source>_Threshold:</source>
        <translation>_Prah:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="71"/>
        <source>Smaller means more deinterlacing</source>
        <translation>Menšie číslo znamená väčšiu mieru rozkladu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="72"/>
        <source>_Sharp</source>
        <translation>_Ostré</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="72"/>
        <source>_Sharper engine:</source>
        <translation>_Ostrejšie spracovanie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="73"/>
        <source>T_woway</source>
        <translation>_Dvojcestný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="73"/>
        <source>Extrapolate better (better not to use it)</source>
        <translation>Lepšia extrapolácia (radšej nepoužívať)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="74"/>
        <source>_Map</source>
        <translation>_Mapovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="74"/>
        <source>Show interlaced areas (for test!)</source>
        <translation>Zobrazovať prekladané miesta (len pre testovanie)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="78"/>
        <source>KernelDeint</source>
        <translation>Rozklad matrice Kernel</translation>
    </message>
</context>
<context>
    <name>lame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="310"/>
        <source>CBR</source>
        <translation>CBR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="311"/>
        <source>ABR</source>
        <translation>ABR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="313"/>
        <source>Bit_rate mode:</source>
        <translation>Režim _prenosovej rýchlosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="331"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="333"/>
        <source>_Quality:</source>
        <translation>_Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="335"/>
        <source>_Disable reservoir</source>
        <translation>_Zakázať rezervoár</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="339"/>
        <source>LAME Configuration</source>
        <translation>Konfigurácia LAME</translation>
    </message>
</context>
<context>
    <name>largemedian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="36"/>
        <source>Large Median (5x5).</source>
        <translation>Veľký Median (5x5).</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="37"/>
        <source>Median filter on 5x5 matrix.</source>
        <translation>Filter Median s matricou 5x5.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="71"/>
        <source>_Process luma</source>
        <translation>Priebeh _svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="71"/>
        <source>Process luma plane</source>
        <translation>Spracovanie roviny svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="72"/>
        <source>P_rocess chroma</source>
        <translation>Priebeh _farebnej zložky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="76"/>
        <source>Fast Convolution</source>
        <translation>Rýchle previnutie</translation>
    </message>
</context>
<context>
    <name>lavcodec</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lavcodec/audioencoder_lavcodec.cpp" line="470"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
</context>
<context>
    <name>lavdecoder</name>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/DIA_lavDecoder.cpp" line="23"/>
        <source>_Swap U and V</source>
        <translation>_Prehodiť U a V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/DIA_lavDecoder.cpp" line="25"/>
        <source>Decoder Options</source>
        <translation>Možnosti dekódera</translation>
    </message>
</context>
<context>
    <name>lavdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="71"/>
        <source>Libavdec Deinterlacers</source>
        <translation>Rozkladač Libavcodec</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="72"/>
        <source>Lavcodec deinterlacer family.</source>
        <translation>Rodina rozkladačov Lavcodec.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="188"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="189"/>
        <source>Linear blend</source>
        <translation>Lineárne zmiešavanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="190"/>
        <source>Linear interpolate</source>
        <translation>Lineárna interpolácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="191"/>
        <source>Cubic interpolate</source>
        <translation>Kubická interpolácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="192"/>
        <source>Median interpolate</source>
        <translation>Interpolácia Median</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="193"/>
        <source>FFmpeg deint</source>
        <translation>Rozkladač FFmpeg</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="197"/>
        <source>_Deinterlacing:</source>
        <translation>_Rozklad:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="198"/>
        <source>_Autolevel</source>
        <translation>_Automatické úrovne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="202"/>
        <source>libavcodec deinterlacer</source>
        <translation>Rozkladač libavcodec</translation>
    </message>
</context>
<context>
    <name>licenseDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/license.ui" line="16"/>
        <source>License</source>
        <translation>Licencia</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/license.ui" line="62"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>logo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/ADM_vidLogo.cpp" line="22"/>
        <source>Add logo</source>
        <translation>Pridať logo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/ADM_vidLogo.cpp" line="23"/>
        <source>Put a logo on top of video, with alpha blending.</source>
        <translation>Vloží logo na vrchol videa metódou alfa zmiešavania.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/Q_logo.cpp" line="99"/>
        <source>Image:</source>
        <translation>Obrázok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/Q_logo.cpp" line="106"/>
        <source>No image selected</source>
        <translation>Nevybraný žiadny obrázok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/Q_logo.cpp" line="123"/>
        <source>Select Logo Image</source>
        <translation>Vybrať obrázok loga</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/Q_logo.cpp" line="190"/>
        <source> s</source>
        <translation> s</translation>
    </message>
</context>
<context>
    <name>logoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="14"/>
        <source>Logo</source>
        <translation>Logo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="22"/>
        <source>Select Image...</source>
        <translation>Výber obrázku...</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="36"/>
        <source>No image selected</source>
        <translation>Nevybraný žiadny obrázok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="60"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="77"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="117"/>
        <source>Fade-in/out</source>
        <translation>Zjavovanie/Vytrácanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="169"/>
        <source>You can click in the image to approximately position the logo</source>
        <translation>Kliknutím na obrázok môžete umiestniť logo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="97"/>
        <source>Alpha</source>
        <translation>Alfa</translation>
    </message>
</context>
<context>
    <name>lumaStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/ADM_vidLumaStab.cpp" line="41"/>
        <source>Luma stabilizer</source>
        <translation>Stabilizátor svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/ADM_vidLumaStab.cpp" line="42"/>
        <source>Reduce flickering.</source>
        <translation>Zníženie blikania.</translation>
    </message>
</context>
<context>
    <name>lumaStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="14"/>
        <source>Luma stabilizer</source>
        <translation>Stabilizátor svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="78"/>
        <source>Filter length</source>
        <translation>Dĺžka filtra</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="85"/>
        <source>Scene threshold</source>
        <translation>Prah scény</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="118"/>
        <source>frames</source>
        <translation>snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="144"/>
        <source>Adjust chroma</source>
        <translation>Úprava farebnosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="187"/>
        <source>Adjust target</source>
        <translation>Úprava cieľa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="194"/>
        <source>Prefer contrast</source>
        <translation>Preferovať kontrast</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="214"/>
        <source>Prefer brightness</source>
        <translation>Preferovať jas</translation>
    </message>
</context>
<context>
    <name>lumaonly</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaOnly/lumaOnly.cpp" line="44"/>
        <source>GreyScale</source>
        <translation>Stupne sivej</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaOnly/lumaOnly.cpp" line="45"/>
        <source>Remove color, only key grey image.</source>
        <translation>Odstráni farbu, zobrazí sa len kľúčová sivá.</translation>
    </message>
</context>
<context>
    <name>mainFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="20"/>
        <source>Video Filter Manager</source>
        <translation>Správca video filtrov</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="239"/>
        <source>&lt;big&gt;&lt;b&gt;Active Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Aktívne filtre&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="207"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Dostupné filtre&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="108"/>
        <source>Transform</source>
        <translation>Transformovať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="117"/>
        <source>Transition</source>
        <translation>Prechod</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="126"/>
        <source>Interlacing</source>
        <translation>Prekladanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="135"/>
        <source>Colors</source>
        <translation>Farby</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="144"/>
        <source>Noise</source>
        <translation>Šum</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="153"/>
        <source>Sharpness</source>
        <translation>Ostrosť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="162"/>
        <source>Subtitles</source>
        <translation>Titulky</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="171"/>
        <source>OpenGl</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="180"/>
        <source>Artistic</source>
        <translation>Umelecký</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="189"/>
        <source>Miscellaneous</source>
        <translation>Rôzne</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="300"/>
        <source>Press Ctrl + Enter to accept the dialog</source>
        <translation>Stlačte Ctrl + Enter pre akceptáciu dialógu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="320"/>
        <source>&amp;Preview</source>
        <translation>&amp;Náhľad</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="331"/>
        <source>&amp;Close</source>
        <translation>&amp;Zavrieť</translation>
    </message>
</context>
<context>
    <name>matroskademuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Matroska/ADM_mkvIndexer.cpp" line="630"/>
        <source>Indexing Matroska Video Track</source>
        <translation>Indexovanie videostopy Matroska</translation>
    </message>
</context>
<context>
    <name>mcdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="81"/>
        <source>MCDeint</source>
        <translation>Rozkladač MC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="82"/>
        <source>Motion compensation deinterlacer. Ported from MPlayer.</source>
        <translation>Rokladač kompenzáciou pohybu. Portovaný z MPlayeru.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="120"/>
        <source>Fast</source>
        <translation>Rýchle</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="121"/>
        <source>Medium</source>
        <translation>Stredná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="122"/>
        <source>Slow iterative motion search</source>
        <translation>Pomalé interaktívne hľadanie pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="123"/>
        <source>Extra slow (same as 3+multiple reference frames)</source>
        <translation>Extra pomalé (rovnako ako 3 + viacnásobné referenčné snímky)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="126"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="127"/>
        <source>Bottom :</source>
        <translation>Dole:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="128"/>
        <source>_Qp:</source>
        <translation>_Qp:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="132"/>
        <source>mcDeinterlace</source>
        <translation>Rozkladač mc</translation>
    </message>
</context>
<context>
    <name>mean</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Mean.cpp" line="27"/>
        <source>Mean convolution.</source>
        <translation>Konvolúcia Mean.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Mean.cpp" line="28"/>
        <source>3x3 convolution filter :mean.</source>
        <translation>Konvolučný filter 3x3 :mean.</translation>
    </message>
</context>
<context>
    <name>median</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Median.cpp" line="28"/>
        <source>Median convolution.</source>
        <translation>Konvolúcia Median.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Median.cpp" line="29"/>
        <source>3x3 convolution filter :median.</source>
        <translation>Konvolučný filter 3x3 :median.</translation>
    </message>
</context>
<context>
    <name>mergeFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidMergeField.cpp" line="52"/>
        <source>Merge Fields</source>
        <translation>Spájanie polsnímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidMergeField.cpp" line="53"/>
        <source>Merge two pictures as if they were two fields.</source>
        <translation>Spojí dva obrazy tak, ako keby to boli dve polsnímky.</translation>
    </message>
</context>
<context>
    <name>mkvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkv.cpp" line="84"/>
        <source>Unsupported Video.
Only VP8/VP9/AV1 video and Vorbis/Opus audio supported</source>
        <translation>Nepodporované video.
Podporované iba video VP8/VP9/AV1 a zvuk Vorbis/Opus</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkv.cpp" line="223"/>
        <source>Saving WebM</source>
        <translation>Uloženie WebM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkv.cpp" line="225"/>
        <source>Saving Mkv</source>
        <translation>Uloženie MKV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="33"/>
        <source>Derived from display width</source>
        <translation>Odvodené od šírky displeja</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="37"/>
        <source>0: sRGB</source>
        <translation>0: sRGB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="38"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="60"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="81"/>
        <source>1: ITU-R BT.709</source>
        <translation>1: ITU-R BT.709</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="39"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="61"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="82"/>
        <source>2: Unspecified</source>
        <translation>2: Nešpecifikované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="40"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="62"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="83"/>
        <source>3: Reserved</source>
        <translation>3: Vyhradené</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="41"/>
        <source>4: US FCC 73.682</source>
        <translation>4: US FCC 73.682</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="42"/>
        <source>5: ITU-R BT.470BG</source>
        <translation>5: ITU-R BT.470BG</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="43"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="65"/>
        <source>6: SMPTE 170M</source>
        <translation>6: SMPTE 170M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="44"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="66"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="87"/>
        <source>7: SMPTE 240M</source>
        <translation>7: SMPTE 240M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="45"/>
        <source>8: YCoCg</source>
        <translation>8: YCoCg</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="46"/>
        <source>9: BT2020 Non-constant Luminance</source>
        <translation>9: BT2020 Bez konštantného Jasu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="47"/>
        <source>10: BT2020 Constant Luminance</source>
        <translation>10: BT2020 Konštantný </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="48"/>
        <source>11: SMPTE ST 2085</source>
        <translation>11: SMPTE ST 2085</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="49"/>
        <source>12: Chroma-derived Non-constant Luminance</source>
        <translation>12: Bez konštantného Jasu odvodeného od sfarbenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="50"/>
        <source>13: Chroma-derived Constant Luminance</source>
        <translation>13: Konštantný  odvodený od sfarbenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="51"/>
        <source>14: ITU-R BT.2100-0</source>
        <translation>14: ITU-R BT.2100-0</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="54"/>
        <source>0: Unspecified</source>
        <translation>0: Nešpecifikované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="55"/>
        <source>1: Limited</source>
        <translation>1: Limitované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="56"/>
        <source>2: Full</source>
        <translation>2: Úplný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="59"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="80"/>
        <source>0: Reserved</source>
        <translation>0: Rezervované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="63"/>
        <source>4: Gamma 2.2 curve - BT.470M</source>
        <translation>4: Krivka gama 2.2 - BT.470M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="64"/>
        <source>5: Gamma 2.8 curve - BT.470BG</source>
        <translation>5: Krivka gama 2,8 - BT.470BG</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="67"/>
        <source>8: Linear</source>
        <translation>8: Lineárne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="68"/>
        <source>9: Logarithmic (100:1 range)</source>
        <translation>9: Logaritmické (rozsah 100:1)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="69"/>
        <source>10: Logarithmic (100 * Sqrt(10) : 1 range)</source>
        <translation>10: Logaritmické (100 * Sqrt(10) : 1 rozsah)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="70"/>
        <source>11: IEC 61966-2-4</source>
        <translation>11: IEC 61966-2-4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="71"/>
        <source>12: ITU-R BT.1361 Extended Colour Gamut</source>
        <translation>12: ITU-R BT.1361 Rozšírená farebná stupnica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="72"/>
        <source>13: IEC 61966-2-1</source>
        <translation>13: IEC 61966-2-1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="73"/>
        <source>14: ITU-R BT.2020 10 bit</source>
        <translation>14: ITU-R BT.2020 10 bitov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="74"/>
        <source>15: ITU-R BT.2020 12 bit</source>
        <translation>15: ITU-R BT.2020 12 bitov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="75"/>
        <source>16: ITU-R BT.2100 Perceptual Quantization</source>
        <translation>16: ITU-R BT.2100 Vnímavostná kvantizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="76"/>
        <source>17: SMPTE ST 428-1</source>
        <translation>17: SMPTE ST 428-1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="77"/>
        <source>18: ARIB STD-B67 (HLG)</source>
        <translation>18: ARIB STD-B67 (HLG)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="84"/>
        <source>4: ITU-R BT.470M</source>
        <translation>4: ITU-R BT.470M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="85"/>
        <source>5: ITU-R BT.470BG - BT.601 625</source>
        <translation>5: ITU-R BT.470BG - BT.601 625</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="86"/>
        <source>6: ITU-R BT.601 525 - SMPTE 170M</source>
        <translation>6: ITU-R BT.601 525 - SMPTE 170M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="88"/>
        <source>8: Film</source>
        <translation>8: Film</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="89"/>
        <source>9: ITU-R BT.2020</source>
        <translation>9: ITU-R BT.2020</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="90"/>
        <source>10: SMPTE ST 428-1</source>
        <translation>10: SMPTE ST 428-1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="91"/>
        <source>11: SMPTE RP 431-2</source>
        <translation>11: SMPTE RP 431-2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="92"/>
        <source>12: SMPTE EG 432-2</source>
        <translation>12: SMPTE EG 432-2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="93"/>
        <source>22: JEDEC P22 phosphors</source>
        <translation>22: JEDEC P22 luminofory</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="101"/>
        <source>Force aspect ratio</source>
        <translation>Vynútený pomer strán</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="102"/>
        <source>Display width:</source>
        <translation>Šírka displeja:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="103"/>
        <source>Aspect Ratio (DAR):</source>
        <translation>Pomer strán (DAR):</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="108"/>
        <source>Add color info</source>
        <translation>Pridať informácie o farbe</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="109"/>
        <source>Matrix Coefficients:</source>
        <translation>Koeficienty matrice:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="110"/>
        <source>Range:</source>
        <translation>Rozsah:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="111"/>
        <source>Transfer Characteristic:</source>
        <translation>Charakteristika prenosu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="112"/>
        <source>Color Primaries:</source>
        <translation>Základné farby:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="120"/>
        <source>Basic Settings</source>
        <translation>Základné nastavenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="123"/>
        <source>Advanced Settings</source>
        <translation>Rozšírené nastavenia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="128"/>
        <source>WebM Muxer</source>
        <translation>Zmiešavač WebM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="130"/>
        <source>MKV Muxer</source>
        <translation>Zmiešavač MKV</translation>
    </message>
</context>
<context>
    <name>mp3d</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="201"/>
        <source>Mplayer Denoise 3D HQ</source>
        <translation>Odstraňovač šumu 3D HQ MediaPlayer</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="202"/>
        <source>Reduce noise, smooth image, increase compressibility. HQ Version.</source>
        <translation>Zníži šum, vyhladí obraz, zvýši kompresiu. Verzia HQ.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="234"/>
        <source>_Spatial luma strength:</source>
        <translation>_Priestorový prah svetlosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="235"/>
        <source>S_patial chroma strength:</source>
        <translation>P_riestorový prah farebnej zložky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="236"/>
        <source>_Temporal luma strength:</source>
        <translation>Dočasná intenzita _svetlosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="237"/>
        <source>T_emporal chroma strength:</source>
        <translation>Dočasná intenzita _farebnej zložky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="241"/>
        <source>MPlayer Denoise 3D HQ</source>
        <translation>Odstraňovač šumu 3D HQ MediaPlayer</translation>
    </message>
</context>
<context>
    <name>mp3dlow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="36"/>
        <source>Mplayer Denoise 3D</source>
        <translation>Odstraňovač šumu 3D MediaPlayer</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="37"/>
        <source>Reduce noise, smooth image, increase compressibility.</source>
        <translation>Zníži šum, vyhladí obraz, zväčší kompresiu.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="69"/>
        <source>_Spatial luma strength:</source>
        <translation>_Priestorový prah svetlosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="70"/>
        <source>S_patial chroma strength:</source>
        <translation>P_riestorový prah farebnej zložky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="71"/>
        <source>_Temporal strength:</source>
        <translation>Doč_asná intenzita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="75"/>
        <source>MPlayer Denoise 3D</source>
        <translation>Odstraňovač šumu 3D MediaPlayer</translation>
    </message>
</context>
<context>
    <name>mp4demuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4Analyzer.cpp" line="1076"/>
        <source>Problem reading SVQ3 headers</source>
        <translation>Chyba čítania hlavičky SVQ3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4.cpp" line="509"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4.cpp" line="620"/>
        <source>Decoding frame type</source>
        <translation>Dekódovanie typu snímky</translation>
    </message>
</context>
<context>
    <name>mp4muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="157"/>
        <source>Unsupported</source>
        <translation>Nepodporované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="108"/>
        <source>Video track is incompatible</source>
        <translation>Video stopa je nekompatibilná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="129"/>
        <source>Audio track %d out of %u is incompatible</source>
        <translation>Zvuková stopa %d z %u je nekompatibilná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="141"/>
        <source>Only MPEG-4, H264, H265, AV1, DNxHD and ProRes supported for video</source>
        <translation>Pre video sú podporované iba formáty MPEG-4, H264, H265, AV1, DNxHD a ProRes</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="143"/>
        <source>Only MPEG-1/2/4, H264, H265 and AV1 supported for video</source>
        <translation>Podporované len pre video MPEG-1/2/4, H264, H265 a AV1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="150"/>
        <source>Only AAC, AC3, DTS, E-AC3, (L)PCM, MP2, MP3 and Vorbis supported for audio</source>
        <translation>Podporované len pre audio AAC, AC3, DTS, E-AC3, (L)PCM, MP2, MP3 a Vorbis</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="152"/>
        <source>Only AAC, AC3, DTS, E-AC3, MP2, MP3 and Vorbis supported for audio</source>
        <translation>Podporované len pre audio AAC, AC3, DTS, E-AC3, MP2, MP3 a Vorbis</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="355"/>
        <source>Saving mp4</source>
        <translation>Uloženie mp4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="356"/>
        <source>Saving PSP</source>
        <translation>Uloženie PSP</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="358"/>
        <source>Saving mov</source>
        <translation>Uloženie mov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="371"/>
        <source>Optimizing...</source>
        <translation>Optimalizácia...</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="38"/>
        <source>Muxing Format</source>
        <translation>Formát zmiešavania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="40"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="46"/>
        <source>No optimization</source>
        <translation>Bez optimalizácie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="41"/>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="47"/>
        <source>Move index to the beginning of the file</source>
        <translation>Presunúť index na začiatok súboru</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="42"/>
        <source>Use fragmentation</source>
        <translation>Použiť fragmentáciu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="59"/>
        <source>Optimize for Streaming</source>
        <translation>Optimalizácia audiovizuálneho prenosu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="60"/>
        <source>Force aspect ratio</source>
        <translation>Vynútený pomer strán</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="66"/>
        <source>Derived from display width</source>
        <translation>Odvodené od šírky displeja</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="68"/>
        <source>Aspect Ratio (DAR)</source>
        <translation>Pomer strán (DAR)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="69"/>
        <source>Display Width</source>
        <translation>Šírka displeja</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="73"/>
        <source>Do not rotate</source>
        <translation>Bez otáčania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="74"/>
        <source>90°</source>
        <translation>90°</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="75"/>
        <source>180°</source>
        <translation>180°</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="76"/>
        <source>270°</source>
        <translation>270°</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="78"/>
        <source>Rotate video</source>
        <translation>Otáčať video</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="81"/>
        <source>Auto</source>
        <translation>Automaticky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="82"/>
        <source>24 kHz</source>
        <translation>24 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="83"/>
        <source>25 kHz</source>
        <translation>25 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="84"/>
        <source>30 kHz</source>
        <translation>30 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="85"/>
        <source>50 kHz</source>
        <translation>50 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="86"/>
        <source>60 kHz</source>
        <translation>60 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="87"/>
        <source>90 kHz</source>
        <translation>90 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="88"/>
        <source>180 kHz</source>
        <translation>180 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="90"/>
        <source>Time scale</source>
        <translation>Časová mierka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="98"/>
        <source>MOV Muxer</source>
        <translation>Zmiešavač MOV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="95"/>
        <source>MP4 Muxer</source>
        <translation>Zmiešavač MP4</translation>
    </message>
</context>
<context>
    <name>mp4v2muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="181"/>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="181"/>
        <source>Audio format not supported, only AAC/MP3/AC3</source>
        <translation>Audio formát nie je podporovaný, len AAC/MP3/AC3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="227"/>
        <source>Saving</source>
        <translation>Uloženie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="241"/>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="241"/>
        <source>Video does not have enough timing information. Are you copying from AVI?</source>
        <translation>Video nemá dostatok informácií o časovaní. Kopírujete z AVI?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="302"/>
        <source>Optimizing</source>
        <translation>Optimalizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="306"/>
        <source>Cannot rename file (optimize)</source>
        <translation>Nemožno premenovať súbor (optimalizovať)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="53"/>
        <source>Invalid frequency for AC3. Only 32, 44.1 &amp; 48 kHz</source>
        <translation>Neplatná frekvencia pre AC3. Len 32, 44,1 &amp; 48 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="72"/>
        <source>Invalid bitrate for AC3</source>
        <translation>Neplatná prenosová rýchlosť pre AC3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="85"/>
        <source>Invalid number of channels for AC3</source>
        <translation>Neplatné číslo kanálu pre AC3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="133"/>
        <source>Cannot get AAC Extra data
</source>
        <translation>Nemožno získať údaje AAC Extra
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Config.cpp" line="31"/>
        <source>Optimize for streaming (SLOW)</source>
        <translation>Optimalizácia pre audiovizuálny prenos (pomalé)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Config.cpp" line="32"/>
        <source>Add ipod metadata</source>
        <translation>Pridať iPod metaúdaje</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Config.cpp" line="36"/>
        <source>MP4V2 Settings</source>
        <translation>Natavenia MP4V2</translation>
    </message>
</context>
<context>
    <name>mpdelogoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="14"/>
        <source>Mplayer Delogo</source>
        <translation>Logo odstraňovača prekladania MediaPlayer</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="22"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="26"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="42"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="63"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="65"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="46"/>
        <source>Width</source>
        <translation>Šírka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="85"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="53"/>
        <source>Height</source>
        <translation>Výška</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="105"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="39"/>
        <source>Border Width</source>
        <translation>Šírka okraja</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="155"/>
        <source>Preview. Click in the image above to coarsly set the box coordinates</source>
        <translation>Náhľad. Kliknite na obrázok vyššie a nahrubo nastavte súradnice</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/DIA_flyMpDelogo.cpp" line="472"/>
        <source>You can resize the red rectangle using the grips </source>
        <translation>Veľkosť červeného obdĺžnika môžete meniť pomocou úchytiek </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="113"/>
        <source>Preview</source>
        <translation>Náhľad</translation>
    </message>
</context>
<context>
    <name>msharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/ADM_vidMSharpen.cpp" line="48"/>
        <source>Msharpen</source>
        <translation>Filter Msharpen</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/ADM_vidMSharpen.cpp" line="49"/>
        <source>Sharpen edges without amplifying noise. By Donald Graft.</source>
        <translation>Zaostrí obrysy bez toho, aby sa zväčšil šum. Od Donalda Grafta.</translation>
    </message>
</context>
<context>
    <name>msharpenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="14"/>
        <source>MSharpen</source>
        <translation>Filter MSharpen</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="73"/>
        <source>Mask</source>
        <translation>Maskovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="52"/>
        <source>Strength</source>
        <translation>Sila</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="66"/>
        <source>Threshold</source>
        <translation>Prah</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="59"/>
        <source>HighQuality</source>
        <translation>Vysoká kvalita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="45"/>
        <source>Process chroma</source>
        <translation>Proces farabnosti</translation>
    </message>
</context>
<context>
    <name>navigate</name>
    <message>
        <location filename="../../common/gui_navigate.cpp" line="378"/>
        <source>Cannot go to next keyframe</source>
        <translation>Nemožno prejsť ďalšiu snímku</translation>
    </message>
    <message>
        <location filename="../../common/gui_navigate.cpp" line="444"/>
        <source>Cannot go to previous keyframe</source>
        <translation>Nemožno prejsť na predošlú snímku</translation>
    </message>
    <message>
        <location filename="../../common/gui_navigate.cpp" line="843"/>
        <source>Seek</source>
        <translation>Hľadať</translation>
    </message>
    <message>
        <location filename="../../common/gui_navigate.cpp" line="930"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
</context>
<context>
    <name>negative</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="46"/>
        <source>Negative</source>
        <translation>Negatívne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="47"/>
        <source>Invert Y,U or V plane</source>
        <translation>Invertovať úroveň Y, U alebo V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="159"/>
        <source>Invert Y Plane</source>
        <translation>Invertovať úroveň Y</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="159"/>
        <source>Process luma plane</source>
        <translation>Spracovanie roviny svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="160"/>
        <source>Invert U Plane</source>
        <translation>Invertovať úroveň U</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="160"/>
        <source>Process chromaU plane</source>
        <translation>Spracovanie úrovne farebnej zložky U</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="161"/>
        <source>Invert V Plane</source>
        <translation>Invertovať úroveň V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="161"/>
        <source>Process chromaV plane</source>
        <translation>Spracovanie úrovne farebnej zložky V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="166"/>
        <source>Invert plane</source>
        <translation>Invertovať úroveň</translation>
    </message>
</context>
<context>
    <name>nvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="136"/>
        <source>Low Quality</source>
        <translation>Nízka kvalita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="137"/>
        <source>High Quality</source>
        <translation>Vysoká kvalita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="138"/>
        <source>BluRay</source>
        <translation>Blu-ray</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="139"/>
        <source>Low Latency</source>
        <translation>Nízka odozva</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="140"/>
        <source>Low Latency (LQ)</source>
        <translation>Nízka odozva (LQ)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="141"/>
        <source>Low Latency (HQ)</source>
        <translation>Nízka odozva (HQ)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="148"/>
        <source>Preset:</source>
        <translation>Predvoľba:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="149"/>
        <source>Bitrate (kbps):</source>
        <translation>Prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="150"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Maximálna prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="154"/>
        <source>Nvidia H264 Encoder configuration</source>
        <translation>Konfigurácia kódovača Nvidia H264</translation>
    </message>
</context>
<context>
    <name>opendmldemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDML.cpp" line="342"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDML.cpp" line="418"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDML.cpp" line="687"/>
        <source>Malformed header</source>
        <translation>Chybná hlavička</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDMLDepack.cpp" line="85"/>
        <source>Unpacking bitstream</source>
        <translation>Rozbaľujem bitstream</translation>
    </message>
</context>
<context>
    <name>partial</name>
    <message>
        <location filename="../../common/ADM_videoFilter2/src/ADM_vidPartial.cpp" line="388"/>
        <source>Partialize &quot;%s&quot;</source>
        <translation>Čiastočný &quot;%s&quot;</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoFilter2/src/ADM_vidPartial.cpp" line="391"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoFilter2/src/ADM_vidPartial.cpp" line="392"/>
        <source>_End time:</source>
        <translation>Čas _konca:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoFilter2/src/ADM_vidPartial.cpp" line="393"/>
        <source>Configure filter</source>
        <translation>Konfigurácia filtra</translation>
    </message>
</context>
<context>
    <name>pcm</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/pcm/audioencoder_pcm.cpp" line="205"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/pcm/audioencoder_pcm.cpp" line="206"/>
        <source>LPCM</source>
        <translation>LPCM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/pcm/audioencoder_pcm.cpp" line="208"/>
        <source>Output format:</source>
        <translation>Výstupný formát:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/pcm/audioencoder_pcm.cpp" line="212"/>
        <source>PCM Configuration</source>
        <translation>Konfigurácia PCM</translation>
    </message>
</context>
<context>
    <name>printinfo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/printInfo/printInfo.cpp" line="44"/>
        <source>PrintInfo</source>
        <translation>Tlačové informácie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/printInfo/printInfo.cpp" line="45"/>
        <source>Display some informations on Screen.</source>
        <translation>Zobrazí niektoré informácie na obrazovke.</translation>
    </message>
</context>
<context>
    <name>propsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="14"/>
        <source>Properties</source>
        <translation>Vlastnosti</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="20"/>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="86"/>
        <source>Frame Rate:</source>
        <translation>Snímková frekvencia:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="114"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="340"/>
        <source>Total Duration:</source>
        <translation>Celkové trvanie:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="51"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="65"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="79"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="93"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="107"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="121"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="142"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="156"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="170"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="184"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="198"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="229"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="291"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="305"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="319"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="333"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="347"/>
        <source>n/a</source>
        <translation>nedostupné</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="72"/>
        <source>Aspect Ratio:</source>
        <translation>Pomer strán:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="58"/>
        <source>Image Size:</source>
        <translation>Veľkosť obrázka:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="44"/>
        <source>Codec 4CC:</source>
        <translation>Kodek 4CC:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="100"/>
        <source>Average Bitrate:</source>
        <translation>Priemerná prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="135"/>
        <source>Pixel format:</source>
        <translation>_Formát pixelov:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="149"/>
        <source>Color range:</source>
        <translation>Rozsah farieb:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="163"/>
        <source>Color primaries:</source>
        <translation>Základné farby:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="177"/>
        <source>Transfer characteristics:</source>
        <translation>Charakteristika prevodu:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="191"/>
        <source>Color space:</source>
        <translation>Farebný priestor:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="208"/>
        <source>Video Codec Extradata</source>
        <translation>Špeciálne údaje videokodeku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="236"/>
        <source>Size:</source>
        <translation>Veľkosť:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="250"/>
        <source>Extradata:</source>
        <translation>Špeciálne údaje:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="260"/>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="326"/>
        <source>Frequency:</source>
        <translation>Frekvencia:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="312"/>
        <source>Bitrate:</source>
        <translation>Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="298"/>
        <source>Channels:</source>
        <translation>Kanály:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="284"/>
        <source>Codec:</source>
        <translation>Kodek:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="359"/>
        <source>Copy to Clipboard</source>
        <translation>Kopírovať do schránky</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="388"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>psdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_psIndex.cpp" line="243"/>
        <source>Indexing</source>
        <translation>Indexovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_psIndex.cpp" line="211"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>Existuje niekoľko súborov s postupnými názvami súborov. Majú byť všetky načítané?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_ps.cpp" line="78"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation>Index tohto súboru bol vytvorený pomocou staršej verzie avidemuxu.
Súbor musí byť preindexovaný. Pokračovať?</translation>
    </message>
</context>
<context>
    <name>qaudiotracks</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="134"/>
        <source>Select audio file</source>
        <translation>Vybrať audio súbor</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="156"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="317"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="156"/>
        <source>Cannot use that file as audio track</source>
        <translation>Tento súbor nemožno použiť ako zvukovú stopu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="317"/>
        <source>Some tracks are used multiple times</source>
        <translation>Niektoré stopy sú použité viackrát</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="445"/>
        <source>Track </source>
        <translation>Stopa </translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="445"/>
        <source> from video</source>
        <translation> z videa</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="453"/>
        <source>File </source>
        <translation>Súbor </translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="488"/>
        <source>.... Add audio track</source>
        <translation>.... Pridať audio stopu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="522"/>
        <source>copy</source>
        <translation>kopírovať</translation>
    </message>
</context>
<context>
    <name>qencoding</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="65"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="85"/>
        <source>Privileges Required</source>
        <translation>Požadované výhradné práva</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="65"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="85"/>
        <source>Root privileges are required to perform this operation.</source>
        <translation>Na túto operáciu sú vyžadované základné výhradné práva.</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="228"/>
        <source>First Pass</source>
        <translation>Prvý prechod</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="235"/>
        <source>Second Pass</source>
        <translation>Druhý prechod</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="236"/>
        <source>Encoding...</source>
        <translation>Prebieha kódovanie...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="468"/>
        <source>The encoding is paused. Do you want to resume or abort?</source>
        <translation>Kódovanie je pozastavené. Chcete v ňom pokračovať, alebo ho ukončiť?</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="469"/>
        <source>Resume</source>
        <translation>Zhrnúť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="469"/>
        <source>Abort</source>
        <translation>Zrušiť</translation>
    </message>
</context>
<context>
    <name>qfile</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="45"/>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="197"/>
        <source>All files (*.*)</source>
        <translation>Všetky súbory (*.*)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="128"/>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="244"/>
        <source> files (*.</source>
        <translation> súbory (*.</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="161"/>
        <source>Overwrite file </source>
        <translation>Prepísať súbor </translation>
    </message>
</context>
<context>
    <name>qgui2</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="271"/>
        <source>&lt;b&gt;New version available&lt;/b&gt;&lt;br&gt; Version %1&lt;br&gt;Released on %2.&lt;br&gt;You can download it here&lt;br&gt; &lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt; You can disable autoupdate in preferences.&lt;/small&gt;</source>
        <translation>&lt;b&gt;Dostupná nová verzia&lt;/b&gt;&lt;br&gt; verzia %1&lt;br&gt;uvoľnená od %2.&lt;br&gt;Môžete si ju stiahnuť tu&lt;br&gt; &lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt; Automatickú aktualizáciu môžete zakázať v predvoľbách.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="731"/>
        <source>Recent Files</source>
        <translation>Nedávne súbory</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="732"/>
        <source>Recent Projects</source>
        <translation>Nedávne projekty</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="764"/>
        <source>Restore defaults</source>
        <translation>Obnovenie predvoleného</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="780"/>
        <source>Default theme</source>
        <translation>Predvolený motív</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="787"/>
        <source>Light theme</source>
        <translation>Svetlý motív</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="793"/>
        <source>Dark theme</source>
        <translation>Tmavý motív</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1390"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1632"/>
        <source>Play/Stop</source>
        <translation>Prehrať/Zastaviť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1636"/>
        <source>Go to previous frame</source>
        <translation>Prejsť na predošlú snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1640"/>
        <source>Go to next frame</source>
        <translation>Prejsť na ďalšiu snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1644"/>
        <source>Go to previous keyframe</source>
        <translation>Prejsť na predošlú kľúčovú snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1648"/>
        <source>Go to next keyframe</source>
        <translation>Prejsť na ďalšiu kľúčovú snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1652"/>
        <source>Set start marker</source>
        <translation>Nastaviť značku začiatku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1656"/>
        <source>Set end marker</source>
        <translation>Nastaviť značku konca</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1660"/>
        <source>Go to previous cut point</source>
        <translation>Prejsť na predošlý bod rezu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1664"/>
        <source>Go to next cut point</source>
        <translation>Prejsť na ďalší bod rezu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1670"/>
        <source>Go to first frame</source>
        <translation>Presjť na prvú snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1674"/>
        <source>Go to last frame</source>
        <translation>Prejsť na poslednú snímku</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1678"/>
        <source>Go to marker A</source>
        <translation>Prejsť na značku A</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1682"/>
        <source>Go to marker B</source>
        <translation>Prejsť na značku B</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1701"/>
        <source>Backward one minute</source>
        <translation>Späť o 1 minútu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="1704"/>
        <source>Forward one minute</source>
        <translation>Vpred o 1 minútu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="2282"/>
        <source>Zoom: </source>
        <translation>Priblíženie: </translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="2722"/>
        <source>The application has encountered a fatal problem
The current editing has been saved and will be reloaded at next start</source>
        <translation>Aplikácia sa stretla s fatálnym problémom
Súčasná úprava bola uložená a pri ďalšom štarte bude znovu načítaná</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="2974"/>
        <source>%c-%s</source>
        <translation>%c-%s</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="2976"/>
        <source>%c-%s (%02d)</source>
        <translation>%c-%s (%02d)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="3054"/>
        <source>Selection: </source>
        <translation>Výber: </translation>
    </message>
    <message numerus="yes">
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="3398"/>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="3400"/>
        <source> (%n track(s))</source>
        <translation>
            <numerusform> (%n stopa)</numerusform>
            <numerusform> (%n stopy)</numerusform>
            <numerusform> (%n stôp)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>qgui2menu</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="51"/>
        <source>Project Script</source>
        <translation>&amp;Skript projektu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="55"/>
        <source> Project</source>
        <translation> projekt</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="61"/>
        <source>&amp;Run Project...</source>
        <translation>&amp;Spustiť projekt...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="66"/>
        <source>&amp;Debug Project...</source>
        <translation>&amp;Ladiť projekt...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="71"/>
        <source>Save &amp;As Project...</source>
        <translation>&amp;Uložiť projekt ako...</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="91"/>
        <source>Scripting Shell</source>
        <translation>&amp;Prostredie skriptovania</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="95"/>
        <source> Shell</source>
        <translation> Prostredie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="117"/>
        <source>Scripting Reference</source>
        <translation>Odporúčania skriptovania</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="121"/>
        <source> Reference</source>
        <translation> Odporúčania</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="297"/>
        <source>Restore previous session</source>
        <translation>&amp;Obnoviť predošlú reláciu</translation>
    </message>
</context>
<context>
    <name>qjobs</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="13"/>
        <source>Ready</source>
        <translation>Priravený</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="13"/>
        <source>Succeeded</source>
        <translation>Dokončené</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="13"/>
        <source>Failed</source>
        <translation>Zlyhalo</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="13"/>
        <source>Deleted</source>
        <translation>Odstránené</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="13"/>
        <source>Running</source>
        <translation>Spustené</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="37"/>
        <source>Job Name</source>
        <translation>Názov úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="37"/>
        <source>Status</source>
        <translation>Stav</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="37"/>
        <source>Start Time</source>
        <translation>Čas štartu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="37"/>
        <source>End Time</source>
        <translation>Čas konca</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="101"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="116"/>
        <source>Sure!</source>
        <translation>Naisto!</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="101"/>
        <source>Delete job</source>
        <translation>Odstrániť úlohu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="101"/>
        <source>Are you sure you want to delete %s job?</source>
        <translation>Naozaj chcete odstrániť úlohu %s?</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="116"/>
        <source>Delete *all* job</source>
        <translation>Zmazať všetky úlohy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="116"/>
        <source>Are you sure you want to delete ALL jobs?</source>
        <translation>Naozaj chcete zmazať všetky úlohy?</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="141"/>
        <source>Already done</source>
        <translation>Už je to hotové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="141"/>
        <source>This script has already been successfully executed.</source>
        <translation>Tento skript už bol úspešne vykonaný.</translation>
    </message>
</context>
<context>
    <name>qlicense</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_license.cpp" line="25"/>
        <source>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;&lt;html&gt;&lt;head&gt;  &lt;title&gt;Avidemux is free software; you can redistribute it and/or  modify it under the terms of the GNU General Public License  version 2 as published by the Free Software Foundation&lt;/title&gt;&lt;style type=&quot;text/css&quot;&gt;&lt;!-- /* Style Definitions */ p.licenseStyle, li.licenseStyle, div.licenseStyle        {margin:0cm;        margin-bottom:.0001pt;        font-size:12.0pt;        font-family:&quot;Times New Roman&quot;;} /* Page Definitions */ @page Section1        {size:612.0pt 792.0pt;        margin:72.0pt 90.0pt 72.0pt 90.0pt;}div.Section1        {page:Section1;}--&gt;&lt;/style&gt;&lt;/head&gt;&lt;body lang=&quot;EN-GB&quot; style=&apos;text-justify-trim:punctuation&apos;&gt;  &lt;div class=&quot;Section1&quot;&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;Avidemux is    free software; you can redistribute it and/or modify it under    the terms of the GNU General Public License version 2 as    published by the Free Software Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;b&gt;&lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;    &lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Version 2, June    1991&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Copyright (C) 1989, 1991    Free Software Foundation, Inc.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;59 Temple Place, Suite    330, Boston, MA  02111-1307  USA&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Everyone is permitted to    copy and distribute verbatim copies of this license document,    but changing it is not allowed.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Preamble&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The licenses for most    software are designed to take away your freedom to share and    change it.  By contrast, the GNU General Public License is    intended to guarantee your freedom to share and change free    software--to make sure the software is free for all its users.     This General Public License applies to most of the Free    Software Foundation&apos;s software and to any other program whose    authors commit to using it.  (Some other Free Software    Foundation software is covered by the GNU Library General    Public License instead.)  You can apply it to your programs,    too.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;When we speak of free    software, we are referring to freedom, not price.  Our General    Public Licenses are designed to make sure that you have the    freedom to distribute copies of free software (and charge for    this service if you wish), that you receive source code or can    get it if you want it, that you can change the software or use    pieces of it in new free programs; and that you know you can do    these things.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;To protect your rights, we    need to make restrictions that forbid anyone to deny you these    rights or to ask you to surrender the rights. These    restrictions translate to certain responsibilities for you if    you distribute copies of the software, or if you modify    it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;For example, if you    distribute copies of such a program, whether gratis or for a    fee, you must give the recipients all the rights that you have.     You must make sure that they, too, receive or can get the    source code.  And you must show them these terms so they know    their rights.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;We protect your rights    with two steps: (1) copyright the software, and (2) offer you    this license which gives you legal permission to copy,    distribute and/or modify the software.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Also, for each author&apos;s    protection and ours, we want to make certain that everyone    understands that there is no warranty for this free software.     If the software is modified by someone else and passed on, we    want its recipients to know that what they have is not the    original, so that any problems introduced by others will not    reflect on the original authors&apos; reputations.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Finally, any free program    is threatened constantly by software patents.  We wish to avoid    the danger that redistributors of a free program will    individually obtain patent licenses, in effect making the    program proprietary.  To prevent this, we have made it clear    that any patent must be licensed for everyone&apos;s free use or not    licensed at all.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The precise terms and    conditions for copying, distribution and modification    follow.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;TERMS AND CONDITIONS FOR    COPYING, DISTRIBUTION AND MODIFICATION&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;0. This License applies to    any program or other work which contains a notice placed by the    copyright holder saying it may be distributed under the terms    of this General Public License.  The &quot;Program&quot;, below, refers    to any such program or work, and a &quot;work based on the Program&quot;    means either the Program or any derivative work under copyright    law: that is to say, a work containing the Program or a portion    of it, either verbatim or with modifications and/or translated    into another language.  (Hereinafter, translation is included    without limitation in the term &quot;modification&quot;.)  Each licensee    is addressed as &quot;you&quot;.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Activities other than    copying, distribution and modification are not covered by this    License; they are outside its scope.  The act of running the    Program is not restricted, and the output from the Program is    covered only if its contents constitute a work based on the    Program (independent of having been made by running the    Program). Whether that is true depends on what the Program    does.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;1. You may copy and    distribute verbatim copies of the Program&apos;s source code as you    receive it, in any medium, provided that you conspicuously and    appropriately publish on each copy an appropriate copyright    notice and disclaimer of warranty; keep intact all the notices    that refer to this License and to the absence of any warranty;    and give any other recipients of the Program a copy of this    License along with the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;You may charge a fee for    the physical act of transferring a copy, and you may at your    option offer warranty protection in exchange for a    fee.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;2. You may modify your    copy or copies of the Program or any portion of it, thus    forming a work based on the Program, and copy and distribute    such modifications or work under the terms of Section 1 above,    provided that you also meet all of these conditions:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) You must cause the    modified files to carry prominent notices stating that you    changed the files and the date of any change.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) You must cause any work    that you distribute or publish, that in whole or in part    contains or is derived from the Program or any part thereof, to    be licensed as a whole at no charge to all third parties under    the terms of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) If the modified program    normally reads commands interactively when run, you must cause    it, when started running for such interactive use in the most    ordinary way, to print or display an announcement including an    appropriate copyright notice and a notice that there is no    warranty (or else, saying that you provide a warranty) and that    users may redistribute the program under these conditions, and    telling the user how to view a copy of this License.     (Exception: if the Program itself is interactive but does not    normally print such an announcement, your work based on the    Program is not required to print an announcement.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;These requirements apply    to the modified work as a whole.  If identifiable sections of    that work are not derived from the Program, and can be    reasonably considered independent and separate works in    themselves, then this License, and its terms, do not apply to    those sections when you distribute them as separate works.  But    when you distribute the same sections as part of a whole which    is a work based on the Program, the distribution of the whole    must be on the terms of this License, whose permissions for    other licensees extend to the entire whole, and thus to each    and every part regardless of who wrote it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Thus, it is not the intent    of this section to claim rights or contest your rights to work    written entirely by you; rather, the intent is to exercise the    right to control the distribution of derivative or collective    works based on the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;In addition, mere    aggregation of another work not based on the Program with the    Program (or with a work based on the Program) on a volume of a    storage or distribution medium does not bring the other work    under the scope of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;3. You may copy and    distribute the Program (or a work based on it, under Section 2)    in object code or executable form under the terms of Sections 1    and 2 above provided that you also do one of the    following:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) Accompany it with the    complete corresponding machine-readable source code, which must    be distributed under the terms of Sections 1 and 2 above on a    medium customarily used for software interchange;    or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) Accompany it with a    written offer, valid for at least three years, to give any    third party, for a charge no more than your cost of physically    performing source distribution, a complete machine-readable    copy of the corresponding source code, to be distributed under    the terms of Sections 1 and 2 above on a medium customarily    used for software interchange; or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) Accompany it with the    information you received as to the offer to distribute    corresponding source code.  (This alternative is allowed only    for noncommercial distribution and only if you received the    program in object code or executable form with such an offer,    in accord with Subsection b above.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The source code for a work    means the preferred form of the work for making modifications    to it.  For an executable work, complete source code means all    the source code for all modules it contains, plus any    associated interface definition files, plus the scripts used to    control compilation and installation of the executable.     However, as a special exception, the source code distributed    need not include anything that is normally distributed (in    either source or binary form) with the major components    (compiler, kernel, and so on) of the operating system on which    the executable runs, unless that component itself accompanies    the executable.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If distribution of    executable or object code is made by offering access to copy    from a designated place, then offering equivalent access to    copy the source code from the same place counts as distribution    of the source code, even though third parties are not compelled    to copy the source along with the object code.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;4. You may not copy,    modify, sublicense, or distribute the Program except as    expressly provided under this License.  Any attempt otherwise    to copy, modify, sublicense or distribute the Program is void,    and will automatically terminate your rights under this    License. However, parties who have received copies, or rights,    from you under this License will not have their licenses    terminated so long as such parties remain in full    compliance.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;5. You are not required to    accept this License, since you have not signed it.  However,    nothing else grants you permission to modify or distribute the    Program or its derivative works.  These actions are prohibited    by law if you do not accept this License.  Therefore, by    modifying or distributing the Program (or any work based on the    Program), you indicate your acceptance of this License to do    so, and all its terms and conditions for copying, distributing    or modifying the Program or works based on it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;6. Each time you    redistribute the Program (or any work based on the Program),    the recipient automatically receives a license from the    original licensor to copy, distribute or modify the Program    subject to these terms and conditions.  You may not impose any    further restrictions on the recipients&apos; exercise of the rights    granted herein. You are not responsible for enforcing    compliance by third parties to this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;7. If, as a consequence of    a court judgment or allegation of patent infringement or for    any other reason (not limited to patent issues), conditions are    imposed on you (whether by court order, agreement or otherwise)    that contradict the conditions of this License, they do not    excuse you from the conditions of this License.  If you cannot    distribute so as to satisfy simultaneously your obligations    under this License and any other pertinent obligations, then as    a consequence you may not distribute the Program at all.  For    example, if a patent license would not permit royalty-free    redistribution of the Program by all those who receive copies    directly or indirectly through you, then the only way you could    satisfy both it and this License would be to refrain entirely    from distribution of the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If any portion of this    section is held invalid or unenforceable under any particular    circumstance, the balance of the section is intended to apply    and the section as a whole is intended to apply in other    circumstances.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;It is not the purpose of    this section to induce you to infringe any patents or other    property right claims or to contest validity of any such    claims; this section has the sole purpose of protecting the    integrity of the free software distribution system, which is    implemented by public license practices.  Many people have made    generous contributions to the wide range of software    distributed through that system in reliance on consistent    application of that system; it is up to the author/donor to    decide if he or she is willing to distribute software through    any other system and a licensee cannot impose that    choice.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;This section is intended    to make thoroughly clear what is believed to be a consequence    of the rest of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;8. If the distribution    and/or use of the Program is restricted in certain countries    either by patents or by copyrighted interfaces, the original    copyright holder who places the Program under this License may    add an explicit geographical distribution limitation excluding    those countries, so that distribution is permitted only in or    among countries not thus excluded.  In such case, this License    incorporates the limitation as if written in the body of this    License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;9. The Free Software    Foundation may publish revised and/or new versions of the    General Public License from time to time.  Such new versions    will be similar in spirit to the present version, but may    differ in detail to address new problems or    concerns.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Each version is given a    distinguishing version number.  If the Program specifies a    version number of this License which applies to it and &quot;any    later version&quot;, you have the option of following the terms and    conditions either of that version or of any later version    published by the Free Software Foundation.  If the Program does    not specify a version number of this License, you may choose    any version ever published by the Free Software    Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;10. If you wish to    incorporate parts of the Program into other free programs whose    distribution conditions are different, write to the author to    ask for permission.  For software which is copyrighted by the    Free Software Foundation, write to the Free Software    Foundation; we sometimes make exceptions for this.  Our    decision will be guided by the two goals of preserving the free    status of all derivatives of our free software and of promoting    the sharing and reuse of software generally.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;NO WARRANTY&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;11. BECAUSE THE PROGRAM IS    LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM,    TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN    OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER    PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY    KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED    TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A    PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND    PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM    PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY    SERVICING, REPAIR OR CORRECTION.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;12. IN NO EVENT UNLESS    REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY    COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR    REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU    FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR    CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO    USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR    DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR    THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY    OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;END OF TERMS AND    CONDITIONS&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;  &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;&lt;html&gt;&lt;head&gt;  &lt;title&gt;Avidemux is free software; you can redistribute it and/or  modify it under the terms of the GNU General Public License  version 2 as published by the Free Software Foundation&lt;/title&gt;&lt;style type=&quot;text/css&quot;&gt;&lt;!-- /* Style Definitions */ p.licenseStyle, li.licenseStyle, div.licenseStyle        {margin:0cm;        margin-bottom:.0001pt;        font-size:12.0pt;        font-family:&quot;Times New Roman&quot;;} /* Page Definitions */ @page Section1        {size:612.0pt 792.0pt;        margin:72.0pt 90.0pt 72.0pt 90.0pt;}div.Section1        {page:Section1;}--&gt;&lt;/style&gt;&lt;/head&gt;&lt;body lang=&quot;EN-GB&quot; style=&apos;text-justify-trim:punctuation&apos;&gt;  &lt;div class=&quot;Section1&quot;&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;Avidemux is    free software; you can redistribute it and/or modify it under    the terms of the GNU General Public License version 2 as    published by the Free Software Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;b&gt;&lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;    &lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Version 2, June    1991&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Copyright (C) 1989, 1991    Free Software Foundation, Inc.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;59 Temple Place, Suite    330, Boston, MA  02111-1307  USA&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Everyone is permitted to    copy and distribute verbatim copies of this license document,    but changing it is not allowed.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Preamble&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The licenses for most    software are designed to take away your freedom to share and    change it.  By contrast, the GNU General Public License is    intended to guarantee your freedom to share and change free    software--to make sure the software is free for all its users.     This General Public License applies to most of the Free    Software Foundation&apos;s software and to any other program whose    authors commit to using it.  (Some other Free Software    Foundation software is covered by the GNU Library General    Public License instead.)  You can apply it to your programs,    too.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;When we speak of free    software, we are referring to freedom, not price.  Our General    Public Licenses are designed to make sure that you have the    freedom to distribute copies of free software (and charge for    this service if you wish), that you receive source code or can    get it if you want it, that you can change the software or use    pieces of it in new free programs; and that you know you can do    these things.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;To protect your rights, we    need to make restrictions that forbid anyone to deny you these    rights or to ask you to surrender the rights. These    restrictions translate to certain responsibilities for you if    you distribute copies of the software, or if you modify    it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;For example, if you    distribute copies of such a program, whether gratis or for a    fee, you must give the recipients all the rights that you have.     You must make sure that they, too, receive or can get the    source code.  And you must show them these terms so they know    their rights.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;We protect your rights    with two steps: (1) copyright the software, and (2) offer you    this license which gives you legal permission to copy,    distribute and/or modify the software.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Also, for each author&apos;s    protection and ours, we want to make certain that everyone    understands that there is no warranty for this free software.     If the software is modified by someone else and passed on, we    want its recipients to know that what they have is not the    original, so that any problems introduced by others will not    reflect on the original authors&apos; reputations.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Finally, any free program    is threatened constantly by software patents.  We wish to avoid    the danger that redistributors of a free program will    individually obtain patent licenses, in effect making the    program proprietary.  To prevent this, we have made it clear    that any patent must be licensed for everyone&apos;s free use or not    licensed at all.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The precise terms and    conditions for copying, distribution and modification    follow.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;TERMS AND CONDITIONS FOR    COPYING, DISTRIBUTION AND MODIFICATION&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;0. This License applies to    any program or other work which contains a notice placed by the    copyright holder saying it may be distributed under the terms    of this General Public License.  The &quot;Program&quot;, below, refers    to any such program or work, and a &quot;work based on the Program&quot;    means either the Program or any derivative work under copyright    law: that is to say, a work containing the Program or a portion    of it, either verbatim or with modifications and/or translated    into another language.  (Hereinafter, translation is included    without limitation in the term &quot;modification&quot;.)  Each licensee    is addressed as &quot;you&quot;.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Activities other than    copying, distribution and modification are not covered by this    License; they are outside its scope.  The act of running the    Program is not restricted, and the output from the Program is    covered only if its contents constitute a work based on the    Program (independent of having been made by running the    Program). Whether that is true depends on what the Program    does.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;1. You may copy and    distribute verbatim copies of the Program&apos;s source code as you    receive it, in any medium, provided that you conspicuously and    appropriately publish on each copy an appropriate copyright    notice and disclaimer of warranty; keep intact all the notices    that refer to this License and to the absence of any warranty;    and give any other recipients of the Program a copy of this    License along with the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;You may charge a fee for    the physical act of transferring a copy, and you may at your    option offer warranty protection in exchange for a    fee.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;2. You may modify your    copy or copies of the Program or any portion of it, thus    forming a work based on the Program, and copy and distribute    such modifications or work under the terms of Section 1 above,    provided that you also meet all of these conditions:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) You must cause the    modified files to carry prominent notices stating that you    changed the files and the date of any change.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) You must cause any work    that you distribute or publish, that in whole or in part    contains or is derived from the Program or any part thereof, to    be licensed as a whole at no charge to all third parties under    the terms of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) If the modified program    normally reads commands interactively when run, you must cause    it, when started running for such interactive use in the most    ordinary way, to print or display an announcement including an    appropriate copyright notice and a notice that there is no    warranty (or else, saying that you provide a warranty) and that    users may redistribute the program under these conditions, and    telling the user how to view a copy of this License.     (Exception: if the Program itself is interactive but does not    normally print such an announcement, your work based on the    Program is not required to print an announcement.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;These requirements apply    to the modified work as a whole.  If identifiable sections of    that work are not derived from the Program, and can be    reasonably considered independent and separate works in    themselves, then this License, and its terms, do not apply to    those sections when you distribute them as separate works.  But    when you distribute the same sections as part of a whole which    is a work based on the Program, the distribution of the whole    must be on the terms of this License, whose permissions for    other licensees extend to the entire whole, and thus to each    and every part regardless of who wrote it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Thus, it is not the intent    of this section to claim rights or contest your rights to work    written entirely by you; rather, the intent is to exercise the    right to control the distribution of derivative or collective    works based on the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;In addition, mere    aggregation of another work not based on the Program with the    Program (or with a work based on the Program) on a volume of a    storage or distribution medium does not bring the other work    under the scope of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;3. You may copy and    distribute the Program (or a work based on it, under Section 2)    in object code or executable form under the terms of Sections 1    and 2 above provided that you also do one of the    following:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) Accompany it with the    complete corresponding machine-readable source code, which must    be distributed under the terms of Sections 1 and 2 above on a    medium customarily used for software interchange;    or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) Accompany it with a    written offer, valid for at least three years, to give any    third party, for a charge no more than your cost of physically    performing source distribution, a complete machine-readable    copy of the corresponding source code, to be distributed under    the terms of Sections 1 and 2 above on a medium customarily    used for software interchange; or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) Accompany it with the    information you received as to the offer to distribute    corresponding source code.  (This alternative is allowed only    for noncommercial distribution and only if you received the    program in object code or executable form with such an offer,    in accord with Subsection b above.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The source code for a work    means the preferred form of the work for making modifications    to it.  For an executable work, complete source code means all    the source code for all modules it contains, plus any    associated interface definition files, plus the scripts used to    control compilation and installation of the executable.     However, as a special exception, the source code distributed    need not include anything that is normally distributed (in    either source or binary form) with the major components    (compiler, kernel, and so on) of the operating system on which    the executable runs, unless that component itself accompanies    the executable.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If distribution of    executable or object code is made by offering access to copy    from a designated place, then offering equivalent access to    copy the source code from the same place counts as distribution    of the source code, even though third parties are not compelled    to copy the source along with the object code.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;4. You may not copy,    modify, sublicense, or distribute the Program except as    expressly provided under this License.  Any attempt otherwise    to copy, modify, sublicense or distribute the Program is void,    and will automatically terminate your rights under this    License. However, parties who have received copies, or rights,    from you under this License will not have their licenses    terminated so long as such parties remain in full    compliance.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;5. You are not required to    accept this License, since you have not signed it.  However,    nothing else grants you permission to modify or distribute the    Program or its derivative works.  These actions are prohibited    by law if you do not accept this License.  Therefore, by    modifying or distributing the Program (or any work based on the    Program), you indicate your acceptance of this License to do    so, and all its terms and conditions for copying, distributing    or modifying the Program or works based on it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;6. Each time you    redistribute the Program (or any work based on the Program),    the recipient automatically receives a license from the    original licensor to copy, distribute or modify the Program    subject to these terms and conditions.  You may not impose any    further restrictions on the recipients&apos; exercise of the rights    granted herein. You are not responsible for enforcing    compliance by third parties to this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;7. If, as a consequence of    a court judgment or allegation of patent infringement or for    any other reason (not limited to patent issues), conditions are    imposed on you (whether by court order, agreement or otherwise)    that contradict the conditions of this License, they do not    excuse you from the conditions of this License.  If you cannot    distribute so as to satisfy simultaneously your obligations    under this License and any other pertinent obligations, then as    a consequence you may not distribute the Program at all.  For    example, if a patent license would not permit royalty-free    redistribution of the Program by all those who receive copies    directly or indirectly through you, then the only way you could    satisfy both it and this License would be to refrain entirely    from distribution of the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If any portion of this    section is held invalid or unenforceable under any particular    circumstance, the balance of the section is intended to apply    and the section as a whole is intended to apply in other    circumstances.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;It is not the purpose of    this section to induce you to infringe any patents or other    property right claims or to contest validity of any such    claims; this section has the sole purpose of protecting the    integrity of the free software distribution system, which is    implemented by public license practices.  Many people have made    generous contributions to the wide range of software    distributed through that system in reliance on consistent    application of that system; it is up to the author/donor to    decide if he or she is willing to distribute software through    any other system and a licensee cannot impose that    choice.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;This section is intended    to make thoroughly clear what is believed to be a consequence    of the rest of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;8. If the distribution    and/or use of the Program is restricted in certain countries    either by patents or by copyrighted interfaces, the original    copyright holder who places the Program under this License may    add an explicit geographical distribution limitation excluding    those countries, so that distribution is permitted only in or    among countries not thus excluded.  In such case, this License    incorporates the limitation as if written in the body of this    License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;9. The Free Software    Foundation may publish revised and/or new versions of the    General Public License from time to time.  Such new versions    will be similar in spirit to the present version, but may    differ in detail to address new problems or    concerns.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Each version is given a    distinguishing version number.  If the Program specifies a    version number of this License which applies to it and &quot;any    later version&quot;, you have the option of following the terms and    conditions either of that version or of any later version    published by the Free Software Foundation.  If the Program does    not specify a version number of this License, you may choose    any version ever published by the Free Software    Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;10. If you wish to    incorporate parts of the Program into other free programs whose    distribution conditions are different, write to the author to    ask for permission.  For software which is copyrighted by the    Free Software Foundation, write to the Free Software    Foundation; we sometimes make exceptions for this.  Our    decision will be guided by the two goals of preserving the free    status of all derivatives of our free software and of promoting    the sharing and reuse of software generally.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;NO WARRANTY&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;11. BECAUSE THE PROGRAM IS    LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM,    TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN    OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER    PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY    KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED    TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A    PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND    PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM    PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY    SERVICING, REPAIR OR CORRECTION.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;12. IN NO EVENT UNLESS    REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY    COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR    REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU    FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR    CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO    USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR    DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR    THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY    OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;END OF TERMS AND    CONDITIONS&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;  &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>qmainfilter</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="501"/>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="529"/>
        <source>Partial</source>
        <translation>Čiastočný</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="501"/>
        <source>This filter cannot be made partial</source>
        <translation>Tento filter nemôže urobený ako čiastočný</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="845"/>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="1295"/>
        <source>Add</source>
        <translation>Sčítanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="696"/>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="850"/>
        <source>Remove</source>
        <translation>Odstrániť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="694"/>
        <source>Configure</source>
        <translation>Konfigurovať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="692"/>
        <source>Move up</source>
        <translation>Posunúť hore</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="287"/>
        <source>Preview</source>
        <translation>Náhľad</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="290"/>
        <source>DISABLED </source>
        <translation>ZAKÁZANÉ </translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="529"/>
        <source>This filter is not partial</source>
        <translation>Tento filter nie je čiastočný</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="693"/>
        <source>Move down</source>
        <translation>Posunúť dole</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="695"/>
        <source>Duplicate</source>
        <translation>Vytvoriť kópiu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="697"/>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="777"/>
        <source>Make partial</source>
        <translation>Vytvoriť čiastočný</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="698"/>
        <source>Enable/Disable</source>
        <translation>Povoliť/Zakázať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="772"/>
        <source>Disable</source>
        <translation>Zakázať</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="773"/>
        <source>Enable</source>
        <translation>Povoliť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="776"/>
        <source>Make global</source>
        <translation>Vytvoriť globálne</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="922"/>
        <source>Press %s to accept the dialog</source>
        <translation>Stlačte %s pre akceptáciu dialógu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="1070"/>
        <source>Load video filters..</source>
        <translation>Nahrať video filtre..</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="1085"/>
        <source>Save video filters..</source>
        <translation>Uložiť video filtre..</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="1433"/>
        <source>Can not add partial filter</source>
        <translation>Nemožno pridať čiastočný filter</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="1433"/>
        <source>A selection by markers has to be made.</source>
        <translation>Je potrebné vykonať výber podľa značiek.</translation>
    </message>
</context>
<context>
    <name>qprocessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_processing.cpp" line="69"/>
        <source>Unknown</source>
        <translation>Neznámy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_processing.cpp" line="165"/>
        <source>_Resume</source>
        <translation>_Zhrnutie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_processing.cpp" line="166"/>
        <source>The processing is paused.</source>
        <translation>Spracovanie je pozastavené.</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_processing.cpp" line="167"/>
        <source>Cancel it ?</source>
        <translation>Zrušiť to?</translation>
    </message>
</context>
<context>
    <name>qprops</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="26"/>
        <source>No</source>
        <translation>Nie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="26"/>
        <source>Yes</source>
        <translation>Áno</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="63"/>
        <source>%2.3f fps</source>
        <translation>%2.3f snímok/s</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="67"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="238"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="239"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="240"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="241"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="242"/>
        <source>n/a</source>
        <translation>nedostupné</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="71"/>
        <source>%d kbps</source>
        <translation>%d kb/s</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="76"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="345"/>
        <source>%02d:%02d:%02d.%03d</source>
        <translation>%02d:%02d:%02d.%03d</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="91"/>
        <source>RGB, 8-bit</source>
        <translation>RGB, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="93"/>
        <source>Planar RGB, 8-bit</source>
        <translation>Planárne RGB, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="96"/>
        <source>RGBA, 8-bit</source>
        <translation>RGBA, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="99"/>
        <source>RGB, 5-bit</source>
        <translation>RGB, 5-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="101"/>
        <source>YUV 4:2:0, 8-bit</source>
        <translation>YUV 4:2:0, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="103"/>
        <source>YUV 4:2:0 (NV12), 8-bit</source>
        <translation>YUV 4:2:0 (NV12), 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="105"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="107"/>
        <source>Packed YUV 4:2:2, 8-bit</source>
        <translation>Balený YUV 4:2:2, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="109"/>
        <source>YUV 4:2:2, 8-bit</source>
        <translation>YUV 4:2:2, 8-bitový</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="111"/>
        <source>YUV 4:1:1, 8-bit</source>
        <translation>YUV 4:1:1, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="113"/>
        <source>YUV 4:4:4, 8-bit</source>
        <translation>YUV 4:4:4, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="115"/>
        <source>Grayscale Y, 8-bit</source>
        <translation>Odtiene sivej Y, 8-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="117"/>
        <source>YUV 4:4:4, 10-bit</source>
        <translation>YUV 4:4:4, 10 bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="119"/>
        <source>YUV 4:2:0 (P010), 10-bit</source>
        <translation>YUV 4:2:0 (P010), 10 bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="121"/>
        <source>YUV 4:2:0, 10-bit</source>
        <translation>YUV 4:2:0, 10 bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="123"/>
        <source>YUV 4:2:0, 12-bit</source>
        <translation>YUV 4:2:0, 12-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="125"/>
        <source>YUV 4:2:2, 10-bit</source>
        <translation>YUV 4:2:2, 10 bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="127"/>
        <source>YUV 4:4:4, 12-bit</source>
        <translation>YUV 4:4:4, 12-bitové</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="129"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="138"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="164"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="201"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="232"/>
        <source>Unknown</source>
        <translation>Neznámy</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="134"/>
        <source>Limited (MPEG)</source>
        <translation>Limitované (MPEG)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="136"/>
        <source>Full (JPEG)</source>
        <translation>Plné (JPEG)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="143"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="169"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="208"/>
        <source>BT.709</source>
        <translation>BT.709</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="145"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="171"/>
        <source>BT.470 System M</source>
        <translation>BT.470 System M</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="147"/>
        <source>BT.601 PAL</source>
        <translation>BT.601 PAL</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="150"/>
        <source>BT.601 NTSC</source>
        <translation>BT.601 NTSC</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="152"/>
        <source>Generic film</source>
        <translation>Všeobecný film</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="154"/>
        <source>BT.2020</source>
        <translation>BT.2020</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="156"/>
        <source>XYZ</source>
        <translation>XYZ</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="158"/>
        <source>DCI P3</source>
        <translation>DCI P3</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="160"/>
        <source>Display P3</source>
        <translation>Display P3</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="162"/>
        <source>EBU Tech. 3213</source>
        <translation>EBU Tech. 3213</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="173"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="212"/>
        <source>BT.470 System B/G</source>
        <translation>BT.470 System B/G</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="175"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="214"/>
        <source>BT.601</source>
        <translation>BT.601</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="177"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="216"/>
        <source>SMPTE 240M</source>
        <translation>SMPTE 240M</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="179"/>
        <source>Linear</source>
        <translation>Lineárne</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="181"/>
        <source>Logarithmic (100:1)</source>
        <translation>Logaritmické (100:1)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="183"/>
        <source>Logarithmic (316.227:1)</source>
        <translation>Logaritmické (316,227:1)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="185"/>
        <source>xvYCC</source>
        <translation>xvYCC</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="187"/>
        <source>BT.1361</source>
        <translation>BT.1361</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="189"/>
        <source>sRGB/sYCC</source>
        <translation>sRGB/sYCC</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="191"/>
        <source>BT.2020 (10-bit)</source>
        <translation>BT.2020 (10-bitové)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="193"/>
        <source>BT.2020 (12-bit)</source>
        <translation>BT.2020 (12-bitové)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="195"/>
        <source>PQ</source>
        <translation>PQ</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="197"/>
        <source>SMPTE 428M</source>
        <translation>SMPTE 428M</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="199"/>
        <source>HLG</source>
        <translation>HLG</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="206"/>
        <source>sRGB</source>
        <translation>sRGB</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="210"/>
        <source>FCC 73.682</source>
        <translation>FCC 73.682</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="218"/>
        <source>YCgCo</source>
        <translation>YCgCo</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="220"/>
        <source>BT.2020 non-constant</source>
        <translation>BT.2020 nekonštantné</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="222"/>
        <source>BT.2020 constant</source>
        <translation>BT.2020 konštantné</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="224"/>
        <source>Y&apos;D&apos;zD&apos;x</source>
        <translation>Y&apos;D&apos;zD&apos;x</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="226"/>
        <source>Chromaticity-derived non-constant</source>
        <translation>Nekonštantná farebnosť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="228"/>
        <source>Chromaticity-derived constant</source>
        <translation>Konštantná odvodená farebnosť</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="230"/>
        <source>ICtCp</source>
        <translation>ICtCp</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="268"/>
        <source>(+%d bytes)</source>
        <translation>(+%d bajtov)</translation>
    </message>
    <message numerus="yes">
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="292"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="294"/>
        <source>Audio (%n active track(s))</source>
        <translation>
            <numerusform>Audio (%n aktívna stopa)</numerusform>
            <numerusform>Audio (%n aktívne stopy)</numerusform>
            <numerusform>Audio (%n aktívnych stôp)</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="492"/>
        <source>No Audio</source>
        <translation>Žiadny zvuk</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="61"/>
        <source>%s (%u:%u)</source>
        <translation>%s (%u:%u)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="328"/>
        <source>Mono</source>
        <translation>Mono</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="331"/>
        <source>Stereo</source>
        <translation>Stereo</translation>
    </message>
</context>
<context>
    <name>qshell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/Q_shell.cpp" line="62"/>
        <source>Enter your commands then press the evaluate button or CTRL+ENTER.
</source>
        <translation>Zadajte príkazy a potom stlačte tlačidlo vyhodnotenia alebo Ctrl+Enter.
</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/Q_shell.cpp" line="63"/>
        <source>You can use CTRL+PageUP and CTRL+Page Down to recall previous commands
Ready.
</source>
        <translation>Môžete použiť Ctrl+PageUp a CTRL+PageDown pre vyvolanie predchádzajúcich príkazov
Pripravený.
</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/Q_shell.cpp" line="65"/>
        <source>Enter your commands then press the evaluate button or ⌘⏎.
</source>
        <translation>Zadajte príkazy a stlačte tlačidlo Vyhodnotiť alebo ⌘⏎.
</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/Q_shell.cpp" line="66"/>
        <source>You can use ⌥⌘▲ and ⌥⌘▼ to recall previous commands.
Ready.
</source>
        <translation>Na vyvolanie predchádzajúcich príkazov môžete použiť ⌥⌘ ▲ a ⌥⌘ ▼.
Pripravený.
</translation>
    </message>
</context>
<context>
    <name>qtalert</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="33"/>
        <source>Alert</source>
        <translation>Upozornenie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="39"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="64"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="89"/>
        <source>Info</source>
        <translation>Informácie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="115"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="146"/>
        <source>Confirmation</source>
        <translation>Potvrdenie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="167"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="200"/>
        <source>Question</source>
        <translation>Otázka</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="193"/>
        <source>Question?</source>
        <translation>Otázka?</translation>
    </message>
</context>
<context>
    <name>qtray</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/ADM_qtray.cpp" line="82"/>
        <source>Open Avidemux</source>
        <translation>Otvoriť Avidemux</translation>
    </message>
</context>
<context>
    <name>quadTrans</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/ADM_vidQuadTrans.cpp" line="42"/>
        <source>Quadrilateral transformation</source>
        <translation>Štvoruholníková transformácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/ADM_vidQuadTrans.cpp" line="43"/>
        <source>Four point transform.</source>
        <translation>Štvorbodová transformácia.</translation>
    </message>
</context>
<context>
    <name>quadTransDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="14"/>
        <source>Quadrilateral transformation</source>
        <translation>Štvoruholníková transformácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="67"/>
        <source>Bilinear</source>
        <translation>Bilineárna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="72"/>
        <source>Bicubic</source>
        <translation>Bikubická</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="93"/>
        <source>Interpolation:</source>
        <translation>Interpolácia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="100"/>
        <source>Zoom:</source>
        <translation>Priblíženie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="134"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="161"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="235"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="269"/>
        <source>Δy:</source>
        <translation>Δy:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="154"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="168"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="218"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="252"/>
        <source>Δx:</source>
        <translation>Δx:</translation>
    </message>
</context>
<context>
    <name>quickFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/quickfilter.ui" line="20"/>
        <source>Add Partial Video Filter</source>
        <translation>Pridanie čiastočného video filtra</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/quickfilter.ui" line="64"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Dostupné filtre&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/quickfilter.ui" line="128"/>
        <source>Type to narrow the list</source>
        <translation>Typ na zúženie zoznamu</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/quickfilter.ui" line="151"/>
        <source>&amp;Close</source>
        <translation>&amp;Zavrieť</translation>
    </message>
</context>
<context>
    <name>qvobsub</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_vobsub.cpp" line="88"/>
        <source>Select Idx File</source>
        <translation>Vybrať idx súbor</translation>
    </message>
</context>
<context>
    <name>rawmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRawConfig.cpp" line="29"/>
        <source>Prefer Annex B type stream</source>
        <translation>Preferujte tok typu B uvedený v prílohe B</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRawConfig.cpp" line="32"/>
        <source>Video Only Muxer Settings</source>
        <translation>Nastavenia len video zmiešavača</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRaw.cpp" line="83"/>
        <source>Saving raw video</source>
        <translation>Ukladanie surového videa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRaw.cpp" line="84"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
</context>
<context>
    <name>removeplane</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="45"/>
        <source>Remove  Plane</source>
        <translation>Odstrániť úroveň</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="46"/>
        <source>Remove Y,U or V plane (used mainly to debug other filters).</source>
        <translation>Odstráni úrovne Y, U, V (používa sa hlavne na ladenie iných filtrov).</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="151"/>
        <source>Keep Y Plane</source>
        <translation>Zachovať úroveň Y</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="151"/>
        <source>Process luma plane</source>
        <translation>Spracovanie roviny svetlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="152"/>
        <source>Keep U Plane</source>
        <translation>Zachovať úroveň U</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="152"/>
        <source>Process chromaU plane</source>
        <translation>Spracovanie úrovne farebnej zložky U</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="153"/>
        <source>Keep V Plane</source>
        <translation>Zachovať úroveň V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="153"/>
        <source>Process chromaV plane</source>
        <translation>Spracovanie úrovne farebnej zložky V</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="158"/>
        <source>Remove plane</source>
        <translation>Odstrániť úroveň</translation>
    </message>
</context>
<context>
    <name>resampleFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="44"/>
        <source>Custom</source>
        <translation>Vlastný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="45"/>
        <source>25  (PAL)</source>
        <translation>25 (PAL)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="46"/>
        <source>23.976 (Film)</source>
        <translation>23.976 (Film)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="47"/>
        <source>29.97 (NTSC)</source>
        <translation>29.97 (NTSC)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="48"/>
        <source>50 (Pal)</source>
        <translation>50 (Pal)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="49"/>
        <source>59.94  (NTSC)</source>
        <translation>59.94  (NTSC)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="85"/>
        <source>Resample FPS</source>
        <translation>Prevzorkovať snímkovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="86"/>
        <source>Change and enforce FPS. Keep duration and sync.</source>
        <translation>Mení a vynucuje snímkovanie. Udržuje dobu trvanie a synchronizáciu.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="435"/>
        <source>none</source>
        <translation>nie je</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="436"/>
        <source>Blend</source>
        <translation>Prelínanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="437"/>
        <source>Motion compensation</source>
        <translation>Kompenzácia pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="443"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="444"/>
        <source>_New frame rate:</source>
        <translation>_Nová snímková frekvencia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="445"/>
        <source>_Interpolation:</source>
        <translation>_Interpolácia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="451"/>
        <source>Resample fps</source>
        <translation>Prevzorkovať snímkovanie</translation>
    </message>
</context>
<context>
    <name>resize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/Q_resize.cpp" line="434"/>
        <source>Width and height cannot be odd</source>
        <translation>Šírka a výška nemôžu byť nepárne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/swScaleResize.cpp" line="82"/>
        <source>swsResize</source>
        <translation>Softvérová zmena veľkosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/swScaleResize.cpp" line="83"/>
        <source>swScale Resizer.</source>
        <translation>Softvérový menič mierky.</translation>
    </message>
</context>
<context>
    <name>resizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="14"/>
        <source>Resize</source>
        <translation>Zmeniť veľkosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="35"/>
        <source>Aspect Ratio</source>
        <translation>Pomer strán</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="56"/>
        <source>Lock Aspect Ratio</source>
        <translation>Zamknúť pomer strán</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="80"/>
        <source>Source PAR:</source>
        <translation>Zdroj PAR:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="88"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="120"/>
        <source>1:1 (square pixels)</source>
        <translation>1:1 (štvorcové pixely)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="112"/>
        <source>Destination PAR:</source>
        <translation>Cieľ PAR:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="146"/>
        <source>Resize Dimensions</source>
        <translation>Zmena rozmenrov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="184"/>
        <source>Width:</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="220"/>
        <source>Height:</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="260"/>
        <source>No rounding</source>
        <translation>Nezaokrúhľovať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="265"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation>Zaokrúhliť na najbližší násobok 16</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="270"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>Zaokrúhliť na najbližší násobok čísla 8</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="275"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>Zaokrúhliť na najbližší násobok čísla 4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="369"/>
        <source>1%</source>
        <translation>1 %</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="389"/>
        <source>Percent</source>
        <translation>Percento</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="409"/>
        <source>200%</source>
        <translation>200 %</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="468"/>
        <source>Error X / Y:</source>
        <translation>Chyba X/Y:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="475"/>
        <source>0.00 / 0.00</source>
        <translation>0,00/0,00</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="508"/>
        <source>0.0000</source>
        <translation>0.0000</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="515"/>
        <source>(00:00)</source>
        <translation>(00:00)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="562"/>
        <source>Resize Method:</source>
        <translation>Metóda zmeny veľkosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="570"/>
        <source>Bilinear</source>
        <translation>Bilineárna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="575"/>
        <source>Bicubic</source>
        <translation>Bikubická</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="580"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="585"/>
        <source>Spline</source>
        <translation>Drážka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="590"/>
        <source>Nearest neighbor</source>
        <translation>Najbližší sused</translation>
    </message>
</context>
<context>
    <name>rotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="52"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="213"/>
        <source>Rotate</source>
        <translation>Otáčať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="53"/>
        <source>Rotate the image by 90/180/270 degrees.</source>
        <translation>Otočí obrázok o 90/180/270/ stupňov.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="206"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="207"/>
        <source>90 degrees</source>
        <translation>90 stupňov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="207"/>
        <source>90° clockwise</source>
        <translation>90° pravotočivé</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="209"/>
        <source>90° contraclockwise</source>
        <translation>90° ľavotočivé</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="208"/>
        <source>180 degrees</source>
        <translation>180 stupňov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="209"/>
        <source>270 degrees</source>
        <translation>270 stupňov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="211"/>
        <source>_Angle:</source>
        <translation>U_hol:</translation>
    </message>
</context>
<context>
    <name>seekablePreviewDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/seekablePreview.ui" line="20"/>
        <source>Preview</source>
        <translation>Náhľad</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="109"/>
        <source>Peek Original</source>
        <translation>Pôvodná špička</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="110"/>
        <source>Show unprocessed input</source>
        <translation>Zobrazenie nespracovaného vstupu</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="126"/>
        <source>Back one minute</source>
        <translation>Späť o jednu minútu</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="127"/>
        <source>&lt;&lt;</source>
        <translation>&lt;&lt;</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="128"/>
        <source>Play</source>
        <translation>Prehrať</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="129"/>
        <source>Next image</source>
        <translation>Ďalší obrázok</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="130"/>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="131"/>
        <source>&gt;&gt;</source>
        <translation>&gt;&gt;</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="132"/>
        <source>Forward one minute</source>
        <translation>Vpred o 1 minútu</translation>
    </message>
</context>
<context>
    <name>separateFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidSeparateField.cpp" line="53"/>
        <source>Separate Fields</source>
        <translation>Oddelené polia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidSeparateField.cpp" line="54"/>
        <source>Split each image into 2 fields.</source>
        <translation>Rozdelí každý obrázok na 2 polia.</translation>
    </message>
</context>
<context>
    <name>shaderLoader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="258"/>
        <source>Reload shader</source>
        <translation>Znovunačítať shader</translation>
    </message>
</context>
<context>
    <name>sharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Sharpen.cpp" line="27"/>
        <source>Sharpen convolution.</source>
        <translation>Zaostriť konvolúciou.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Sharpen.cpp" line="28"/>
        <source>3x3 convolution filter :sharpen.</source>
        <translation>Filter konvolúcie 3x3 :zaostrenie.</translation>
    </message>
</context>
<context>
    <name>stackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/stackField.cpp" line="47"/>
        <source>Stack Fields</source>
        <translation>Pole zásobníkov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/stackField.cpp" line="48"/>
        <source>Put even lines on top, odd lines at bottom.</source>
        <translation>Položí párne čiary hore, nepárne dole.</translation>
    </message>
</context>
<context>
    <name>stillimage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="63"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="254"/>
        <source>Still Image</source>
        <translation>Statický obrázok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="64"/>
        <source>Duplicate frames for a given duration.</source>
        <translation>Vytvára kópie snímky pre danú dobu trvania.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="250"/>
        <source>_Start time:</source>
        <translation>Čas _štartu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="251"/>
        <source>_Duration:</source>
        <translation>_Doba trvania:</translation>
    </message>
</context>
<context>
    <name>swapuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/swapUV/swapUV.cpp" line="41"/>
        <source>Swap UV</source>
        <translation>Prehodiť UV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/swapUV/swapUV.cpp" line="42"/>
        <source>Swap the U and V planes.</source>
        <translation>Prehodí úrovne U a V.</translation>
    </message>
</context>
<context>
    <name>telecide</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide.cpp" line="45"/>
        <source>Decomb telecide</source>
        <translation>Dekombinácia Telecide</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide.cpp" line="46"/>
        <source>Donald Graft Telecide. Replace ivtc pattern by progressive frames. Video stays at 30 fps.</source>
        <translation>Telecide od Donalda Grafta. Nahradí šablónu ivtc postupnými snímkami. Video pozostáva z 30 snímok/s.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="186"/>
        <source>No strategy</source>
        <translation>Žiadna stratégia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="187"/>
        <source>3:2 pulldown</source>
        <translation>stiahnuť na 3:2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="188"/>
        <source>PAL/SECAM</source>
        <translation>PAL/SECAM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="189"/>
        <source>NTSC converted from PAL</source>
        <translation>NTSC konvertované z PAL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="193"/>
        <source>Top</source>
        <translation>Zhora</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="194"/>
        <source>Bottom</source>
        <translation>Zdola</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="198"/>
        <source>Never</source>
        <translation>Nikdy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="199"/>
        <source>If still combed</source>
        <translation>Pokiaľ je stále prekladaný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="200"/>
        <source>Always</source>
        <translation>Vždy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="204"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="205"/>
        <source>None but compute</source>
        <translation>Žiadne, ale spočítať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="206"/>
        <source>Postproc on best match</source>
        <translation>Dodatočné spracovanie na najlepšej zhode</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="207"/>
        <source>Postproc and show zones (debug)</source>
        <translation>Dodatočné spracovanie a zobrazenie zón (ladenie)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="208"/>
        <source>Process image (not fields)</source>
        <translation>Spracovanie obrazu (nie polsnímky)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="209"/>
        <source>Process image (not fields), debug</source>
        <translation>Spracovanie obrazu (nie polsnímky), ladenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="213"/>
        <source>_Strategy:</source>
        <translation>_Stratégia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="214"/>
        <source>_Field order:</source>
        <translation>Por_adie polsnímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="215"/>
        <source>_Postprocessing:</source>
        <translation>_Dodatočné spracovanie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="216"/>
        <source>_Try backward:</source>
        <translation>S_kúsiť spätne:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="218"/>
        <source>_Direct threshold:</source>
        <translation>_Priamy prah:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="219"/>
        <source>_Backward threshold:</source>
        <translation>Spä_tný prah:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="220"/>
        <source>_Noise threshold:</source>
        <translation>P_rah šumu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="221"/>
        <source>Postp_rocessing threshold:</source>
        <translation>Pra_h dodatočného spracovania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="223"/>
        <source>_Use chroma to decide</source>
        <translation>Po_užiť farebnú zložku pre rozhodnutie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="224"/>
        <source>Sho_w info</source>
        <translation>Zobrazovať _informácie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="225"/>
        <source>Debu_g</source>
        <translation>_Ladenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="226"/>
        <source>Bl_end</source>
        <translation>Z_miešavanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="234"/>
        <source>Decomb Telecide</source>
        <translation>Dekombinácia Telecide</translation>
    </message>
</context>
<context>
    <name>timestamp</name>
    <message>
        <location filename="../ADM_UIs/src/T_timeStamp.cpp" line="198"/>
        <source> h</source>
        <translation> h</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_timeStamp.cpp" line="199"/>
        <source> m</source>
        <translation> m</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_timeStamp.cpp" line="200"/>
        <source> s</source>
        <translation> s</translation>
    </message>
</context>
<context>
    <name>tinypy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_scriptEngines/tinyPy/src/ADM_pyAvidemux.cpp" line="426"/>
        <source>Save File</source>
        <translation>Uložiť súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_scriptEngines/tinyPy/src/ADM_pyAvidemux.cpp" line="439"/>
        <source>Open File</source>
        <translation>Otvoriť súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_scriptEngines/tinyPy/src/ADM_pyAvidemux.cpp" line="453"/>
        <source>Select Directory</source>
        <translation>Vyberte si nadradený priečinok</translation>
    </message>
</context>
<context>
    <name>tsdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="266"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="337"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="86"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>Existuje niekoľko súborov s postupnými názvami súborov. Majú byť všetky načítané?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="278"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="349"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="105"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexVC1.cpp" line="74"/>
        <source>Indexing</source>
        <translation>Indexovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="439"/>
        <source>Size Change</source>
        <translation>Zmeniť veľkosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="440"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported, stopping here.</source>
        <translation>Veľkosť videa sa mení v snímke %u z %ux%u na %ux%u. Toto nie je podporované, tu sa to zastaví.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="450"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="177"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported and will result in a crash.
Proceed nevertheless?
This warning won&apos;t be shown again for this video.</source>
        <translation>Veľkosť videa sa na snímke %u zmení z %ux%u na %ux%u. Toto nie je podporované a spôsobí to pád.
Pokračovať napriek tomu?
Toto upozornenie sa pre toto video už nebude zobrazovať.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_ts.cpp" line="84"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation>Index tohto súboru bol vytvorený pomocou staršej verzie avidemuxu.
Súbor musí byť preindexovaný. Pokračovať?</translation>
    </message>
</context>
<context>
    <name>twolame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/twolame/audioencoder_twolame.cpp" line="205"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/twolame/audioencoder_twolame.cpp" line="210"/>
        <source>TwoLame Configuration</source>
        <translation>Konfigurácia TwoLame</translation>
    </message>
</context>
<context>
    <name>uisupport</name>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="49"/>
        <source>X11</source>
        <translation>X11</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="51"/>
        <source>MS Windows GDI</source>
        <translation>MS Windows GDI</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="53"/>
        <source>Mac OS X Quartz 2D</source>
        <translation>Mac OS X Quartz 2D</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="55"/>
        <source>Mac OS X QuickDraw</source>
        <translation>Mac OS X QuickDraw</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="57"/>
        <source>OpenGL</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="60"/>
        <source>MS Windows Direct3D</source>
        <translation>MS Windows Direct3D</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="63"/>
        <source>Default Raster</source>
        <translation>Pôvodný raster</translation>
    </message>
</context>
<context>
    <name>unstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/unstackField.cpp" line="47"/>
        <source>Unstack Fields</source>
        <translation>Polsnímky bez zásobníka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/unstackField.cpp" line="48"/>
        <source>Weave top and bottom halves.</source>
        <translation>Spletie horné a spodné polovice.</translation>
    </message>
</context>
<context>
    <name>utvideo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="108"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="109"/>
        <source>Left Neighbour</source>
        <translation>Ľavý sused</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="110"/>
        <source>Median</source>
        <translation>Medián</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="113"/>
        <source>Prediction Method:</source>
        <translation>Režim predvídania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="115"/>
        <source>Ut Video Encoder Configuration</source>
        <translation>Konfigurácia kódovača Ut videa</translation>
    </message>
</context>
<context>
    <name>vaEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/directVaEnc/libvaencPlugin.cpp" line="77"/>
        <source>vaH264 Configuration</source>
        <translation>Konfigurácia vaH264</translation>
    </message>
</context>
<context>
    <name>vaH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/directVaEnc/libvaencPlugin.cpp" line="73"/>
        <source>_IDR Period:</source>
        <translation>_IDR perióda:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/directVaEnc/libvaencPlugin.cpp" line="74"/>
        <source>_Bitrate(kbps)</source>
        <translation>_Prenosová rýchlosť [kB/s]</translation>
    </message>
</context>
<context>
    <name>vaapiDeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="121"/>
        <source>VA-API Deinterlacer</source>
        <translation>Rozkladač VA-API</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="122"/>
        <source>Deinterlace and optionally resize video using VA-API.</source>
        <translation>Rozklad a voliteľná zmena veľkosti videa použitím VA-API.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="438"/>
        <source>Bob</source>
        <translation>Bob</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="439"/>
        <source>Weave</source>
        <translation>Utkať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="440"/>
        <source>Motion-Adaptive</source>
        <translation>Prispôsobený pohyb</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="441"/>
        <source>Motion-Compensated</source>
        <translation>Kompenzovaný pohyb</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="444"/>
        <source>Top Field First</source>
        <translation>Najprv horná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="445"/>
        <source>Bottom Field First</source>
        <translation>Najprv spodná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="448"/>
        <source>Frame per Frame</source>
        <translation>Snímka na snímku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="449"/>
        <source>Double Framerate</source>
        <translation>Dvojitá snímková frekvencia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="452"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="453"/>
        <source>_Field Order:</source>
        <translation>_Poradie polsnímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="454"/>
        <source>_Output:</source>
        <translation>_Výstup:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="456"/>
        <source>Deinterlacing</source>
        <translation>Rozklad</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="461"/>
        <source>_Resize</source>
        <translation>_Zmena veľkosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="462"/>
        <source>Width:</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="463"/>
        <source>Height:</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="465"/>
        <source>Transformation</source>
        <translation>Transformácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="474"/>
        <source>VA-API Deinterlacer and Resizer</source>
        <translation>Menič veľkosti a rozkladač VA-API</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="482"/>
        <source>Unsupported Mode</source>
        <translation>Nepodporovaný režim</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="483"/>
        <source>Specified deinterlacing mode %s is not supported, replaced with %s.</source>
        <translation>Zadaný režim rozkladu %s nie je podporovaný, nahradený %s.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="489"/>
        <source>VA-API Setup Error</source>
        <translation>Chyba nastavenia VA-API</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="490"/>
        <source>Could not setup VA-API, purely passthrough operation.</source>
        <translation>Nepodarilo sa nastaviť VA-API, iba priechodná operácia.</translation>
    </message>
</context>
<context>
    <name>vaapiResize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="58"/>
        <source>VA-API Resize</source>
        <translation>VA-API Zmena veľkosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="59"/>
        <source>Resize image using VA-API.</source>
        <translation>Zmena veľkosti obrázka použitím VA-API.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="188"/>
        <source>Width :</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="189"/>
        <source>Height :</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="190"/>
        <source>mpeg-&gt;PC</source>
        <translation>mpeg-&gt;PC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="194"/>
        <source>vaapi</source>
        <translation>vaapi</translation>
    </message>
</context>
<context>
    <name>vdpaudeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="138"/>
        <source>vdpauDeint</source>
        <translation>Rozkladač vdpau</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="139"/>
        <source>VDPAU deinterlacer (+resize).</source>
        <translation>Rozkladač VDPAU (+ zmena veľkosti).</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="333"/>
        <source>Keep Top Field</source>
        <translation>Zachovať hornú polsnímku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="334"/>
        <source>Keep Bottom Field</source>
        <translation>Dodržať dolnú polsnímku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="335"/>
        <source>Double framerate</source>
        <translation>Dvojitá snímková frakvencia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="338"/>
        <source>Top Field First</source>
        <translation>Najprv horná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="339"/>
        <source>Bottom Field First</source>
        <translation>Najprv spodná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="346"/>
        <source>_Field Order:</source>
        <translation>_Poradie polsnímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="348"/>
        <source>_IVTC</source>
        <translation>_IVTC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="349"/>
        <source>_Resize</source>
        <translation>_Zmena veľkosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="351"/>
        <source>Width:</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="352"/>
        <source>Height:</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="345"/>
        <source>_Deint Mode:</source>
        <translation>Režim _rozkladu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="356"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
</context>
<context>
    <name>vdpresize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="69"/>
        <source>vdpau: Resize</source>
        <translation>vdpau: Zmena veľkosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="70"/>
        <source>vdpau: Resize image using vdpau.</source>
        <translation>Zmena veľkosti obrázka použitím vdpau.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="201"/>
        <source>Width:</source>
        <translation>Šírka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="202"/>
        <source>Height:</source>
        <translation>Výška:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="206"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
</context>
<context>
    <name>vflip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/verticalFlip/verticalFlip.cpp" line="47"/>
        <source>Vertical Flip</source>
        <translation>Preklopiť vertikálne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/verticalFlip/verticalFlip.cpp" line="48"/>
        <source>Vertically flip the image.</source>
        <translation>Preklopí obrázok vertikálne.</translation>
    </message>
</context>
<context>
    <name>vobSubDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="13"/>
        <source>Subtitle Font Size and Position</source>
        <translation>Veľkosť písma a pozícia titulkov</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="50"/>
        <source>Delay :</source>
        <translation>Odozva:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="60"/>
        <source>Select File</source>
        <translation>Vybrať súbor</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="67"/>
        <source>Language :</source>
        <translation>Jazyk:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="74"/>
        <source>Idx File :</source>
        <translation>ID súboru:</translation>
    </message>
</context>
<context>
    <name>vorbis</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="331"/>
        <source>VBR</source>
        <translation>VBR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="332"/>
        <source>Quality based</source>
        <translation>Režim kvality</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="334"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="348"/>
        <source>_Bitrate:</source>
        <translation>_Prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="350"/>
        <source>_Quality:</source>
        <translation>_Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="357"/>
        <source>Vorbis Configuration</source>
        <translation>Konfigurácia Vorbis</translation>
    </message>
</context>
<context>
    <name>vp9encoder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="28"/>
        <source>Realtime</source>
        <translation>Reálny čas</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="29"/>
        <source>Good quality</source>
        <translation>Dobrá kvalita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="30"/>
        <source>Best quality</source>
        <translation>Najlepšia kvalita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="34"/>
        <source>For optimal quality, select 2-pass average bitrate mode and set target bitrate to zero</source>
        <translation>Ak chcete dosiahnuť optimálnu kvalitu, vyberte režim priemernej bitovej rýchlosti s 2 prechodmi a cieľovú prenosovú rýchlosť nastavte na nulu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="36"/>
        <source>Deadline</source>
        <translation>Hraničný termín</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="37"/>
        <source>Speed</source>
        <translation>Rýchlosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="38"/>
        <source>Threads</source>
        <translation>Vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="39"/>
        <source>Use as many threads as CPU cores</source>
        <translation>Použiť toľko vlákien ako jadier CPU</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="43"/>
        <source>GOP Size</source>
        <translation>Veľkosť skupiny obrázkov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="44"/>
        <source>Use full color range</source>
        <translation>Používať celý farebný rozsah</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="46"/>
        <source>Encoding Mode</source>
        <translation>Režim kódovania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="50"/>
        <source>Speed vs Quality</source>
        <translation>Rýchlosť proti kvalite</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="56"/>
        <source>Keyframes</source>
        <translation>Kľúčové snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="59"/>
        <source>Miscellaneous</source>
        <translation>Rôzne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="63"/>
        <source>libvpx VP9 Encoder Configuration</source>
        <translation>Konfigurácia kódovača libvpx VP9</translation>
    </message>
</context>
<context>
    <name>vsWindow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vsProxy_qt4.cpp" line="85"/>
        <source>Open VapourSynth File</source>
        <translation>Otvoriť súbor VapourSynth</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vsProxy_qt4.cpp" line="85"/>
        <source>VS Script Files (*.vpy)</source>
        <translation>Súbory skriptov VS (*.vpy)</translation>
    </message>
</context>
<context>
    <name>waveletDenoise</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/ADM_vidWaveletDenoise.cpp" line="42"/>
        <source>Wavelet denoiser</source>
        <translation>Odstraňovač šumu Wavelet</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/ADM_vidWaveletDenoise.cpp" line="43"/>
        <source>Based on Marco Rossini&apos;s denoiser.</source>
        <translation>Na základe odstraňovača šumu Marca Rossiniho.</translation>
    </message>
</context>
<context>
    <name>waveletDenoiseDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="14"/>
        <source>Wavelet Denoiser</source>
        <translation>Odstraňovač šumu Wavelet</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="49"/>
        <source>Threshold</source>
        <translation>Prah</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="56"/>
        <source>Softness</source>
        <translation>Mäkkosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="118"/>
        <source>High quality</source>
        <translation>Vysoká kvalita</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="125"/>
        <source>Denoise chroma</source>
        <translation>Odstrániť šum sfarbenia</translation>
    </message>
</context>
<context>
    <name>waveletSharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/ADM_vidWaveletSharp.cpp" line="42"/>
        <source>Wavelet sharpener</source>
        <translation>Zaostrovač Wavelet</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/ADM_vidWaveletSharp.cpp" line="43"/>
        <source>Based on Marco Rossini&apos;s sharpener.</source>
        <translation>Založené na zaostrovači Marca Rossiniho.</translation>
    </message>
</context>
<context>
    <name>waveletSharpDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="14"/>
        <source>Wavelet Sharpener</source>
        <translation>Zaostrovač Wavelet</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="138"/>
        <source>Strength</source>
        <translation>Sila</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="145"/>
        <source>Noise cutoff</source>
        <translation>Orezanie šumu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="91"/>
        <source>Radius</source>
        <translation>Polomer</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="111"/>
        <source>High quality</source>
        <translation>Vysoká kvalita</translation>
    </message>
</context>
<context>
    <name>workingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/working.ui" line="14"/>
        <source>Processing</source>
        <translation>Spracovávanie</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/working.ui" line="20"/>
        <source>Elapsed:</source>
        <translation>Uplynulý čas:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/working.ui" line="34"/>
        <source>Time Remaining:</source>
        <translation>Zostávajúci čas:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/working.ui" line="47"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
</context>
<context>
    <name>x264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/ADM_x264Setup.cpp" line="206"/>
        <source>Not coded</source>
        <translation>Nekódované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/ADM_x264Setup.cpp" line="206"/>
        <source>this mode has not been implemented
</source>
        <translation>tento režim nie je implementovaný
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="249"/>
        <source>Auto</source>
        <translation>Automaticky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="250"/>
        <source>none</source>
        <translation>nie je</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="251"/>
        <source>Unknown</source>
        <translation>Neznámy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="306"/>
        <source>Custom</source>
        <translation>Vlastný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="730"/>
        <source>Target Bitrate:</source>
        <translation>Cieľová prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="731"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="750"/>
        <source>kbit/s</source>
        <translation>kB/s</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="735"/>
        <source>Quantiser:</source>
        <translation>Kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="739"/>
        <source>Quality:</source>
        <translation>Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="744"/>
        <source>Target Video Size:</source>
        <translation>Cieľová veľkosť videa:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="745"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="749"/>
        <source>Average Bitrate:</source>
        <translation>Priemerná prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="829"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>Optimalizácia stromu makroblokov vyžaduje povolenú adaptívnu kvantifikáciu. Varianta adaptívnej kvantizácie bude automaticky zakázaná.

Chcete pokračovat?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="841"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>Optimalizácia stromu makroblokov vyžaduje povolenú adaptívnu kvantfikáciu. Optimalizácia stromu makroblokov bude automaticky zakázaná.

Chcete pokračovat?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="902"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="972"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="986"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="902"/>
        <source>Cannot load preset</source>
        <translation>Nemožno načítať predvoľbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="917"/>
        <source>Save Profile</source>
        <translation>Uložiť profil</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="963"/>
        <source>Overwrite</source>
        <translation>Prepísať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="963"/>
        <source>Replace the following preset ?:</source>
        <translation>Nahradiť nasledujúcu predvoľbu?:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="972"/>
        <source>Cannot save preset</source>
        <translation>Nemožno uložiť predvoľbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="986"/>
        <source>Cannot delete custom profile</source>
        <translation>Nemožno odstrániť vlastný profil</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="990"/>
        <source>Do you really want to delete the </source>
        <translation>Naozaj chcete odstrániť </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="991"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> profil?
Ak je to systémový profil, bude nabudúce obnovený.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="992"/>
        <source>Delete preset</source>
        <translation>Odstrániť predvoľbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="992"/>
        <source>Delete</source>
        <translation>Delete</translation>
    </message>
</context>
<context>
    <name>x264ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="15"/>
        <source>x264 Configuraton</source>
        <translation>Konfigurácia x264</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="39"/>
        <source>Configuration:</source>
        <translation>Konfigurácia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="56"/>
        <source>Save As</source>
        <translation>Uložiť ako</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="63"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3220"/>
        <source>Delete</source>
        <translation>Delete</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="105"/>
        <source>General</source>
        <translation>Obecné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="111"/>
        <source>Basic</source>
        <translation>Základné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="117"/>
        <source>Use advanced configuration</source>
        <translation>Použiť rozšírenú konfiguráciu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="126"/>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="133"/>
        <source>Preset:</source>
        <translation>Predvoľba:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="184"/>
        <source>Tuning:</source>
        <translation>Ladenie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="191"/>
        <source>IDC Level:</source>
        <translation>Úroveň IDC:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="224"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1373"/>
        <source>Auto</source>
        <translation>Automaticky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="229"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="898"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="234"/>
        <source>1.1</source>
        <translation>1.1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="239"/>
        <source>1.2</source>
        <translation>1.2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="244"/>
        <source>1.3</source>
        <translation>1.3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="249"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="254"/>
        <source>2.1</source>
        <translation>2.1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="259"/>
        <source>2.2</source>
        <translation>2.2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="264"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="903"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="269"/>
        <source>3.1</source>
        <translation>3.1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="274"/>
        <source>3.2</source>
        <translation>3.2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="279"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="284"/>
        <source>4.1</source>
        <translation>4.1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="289"/>
        <source>4.2</source>
        <translation>4.2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="294"/>
        <source>5</source>
        <translation>5</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="299"/>
        <source>5.1</source>
        <translation>5.1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="324"/>
        <source>Fast Decode</source>
        <translation>Rýchle dekódovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="331"/>
        <source>Zero Latency</source>
        <translation>Nulová odozva</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="338"/>
        <source>Fast First Pass</source>
        <translation>Rýchly prvý prechod</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="347"/>
        <source>Threads </source>
        <translation>Vlákna </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="375"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="383"/>
        <source>Target Video Size:</source>
        <translation>Cieľová veľkosť videa:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="396"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation>Konštantná prenosová rýchlosť (jeden prechod)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="401"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation>Konštantný kvantifikátor (jeden prechod)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="406"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation>Faktor konštantnej rýchlosti (jeden prechod)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="411"/>
        <source>Video Size (Two Pass)</source>
        <translation>Veľkosť videa (dva prechody)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="416"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation>Priemerná prenosová rýchlosť (dva prechody)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="439"/>
        <source>Encoding Mode:</source>
        <translation>Režim kódovania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="461"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="521"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="721"/>
        <source>0 (High Quality)</source>
        <translation>0 (vysoká kvalita)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="544"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="744"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2393"/>
        <source>Quantiser</source>
        <translation>Kvantifikátor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="567"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="767"/>
        <source>51 (Low Quality)</source>
        <translation>51 (nízka kvalita)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="666"/>
        <source>Advanced RC</source>
        <translation>Rozšírené riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="672"/>
        <source>Advanced Rate Control</source>
        <translation>Rozšírené riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="678"/>
        <source>Maximum Constant Rate Factor</source>
        <translation>Faktor maximálnej konštantnej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="836"/>
        <source>Macroblock-tree Rate Control</source>
        <translation>Riadenie rýchlosti stromu makroblokov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="845"/>
        <source>Frametype Lookahead:</source>
        <translation>Typ následných snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="859"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3354"/>
        <source>frames</source>
        <translation>snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="883"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation>Nastavenie identifikátora parametrov sekvencie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="893"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="908"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="913"/>
        <source>15</source>
        <translation>15</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="918"/>
        <source>31</source>
        <translation>31</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="960"/>
        <source>Motion</source>
        <translation>Pohyb</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="966"/>
        <source>Motion Estimation</source>
        <translation>Odhad pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="974"/>
        <source>Motion Estimation Method:</source>
        <translation>Metóda odhadu pohybu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="987"/>
        <source>Diamond Search</source>
        <translation>Štvoruholníkové vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="992"/>
        <source>Hexagonal Search</source>
        <translation>Šesťuholníkové vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="997"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation>Nerovnomerné viacnásobné šesťuholníkové vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1002"/>
        <source>Exhaustive Search</source>
        <translation>Dôkladné vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1007"/>
        <source>Hadamard Exhaustive Search</source>
        <translation>Hadamardovo dôkladné vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1049"/>
        <source>1 (Fast)</source>
        <translation>1 (rýchle)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1069"/>
        <source>Subpixel Refinement</source>
        <translation>Subpixelové spresnenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1089"/>
        <source>11 (Best)</source>
        <translation>11 (najlepšie)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1167"/>
        <source>Motion Vector</source>
        <translation>Vektor pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1205"/>
        <source>Maximum Motion Vector Length:</source>
        <translation>Maximálna dĺžka vektora pohybu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1275"/>
        <source>Minimum Buffer Between Threads:</source>
        <translation>Minimálny zásobník medzi vláknami:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1282"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation>Maximálny rozsah hľadania vektoru pohybu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1294"/>
        <source>Prediction</source>
        <translation>Predvídanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1305"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1755"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1791"/>
        <source>Disabled</source>
        <translation>Zakázané</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1310"/>
        <source>Weighted References</source>
        <translation>Odporúčaná záťaž</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1315"/>
        <source>Weighted References + Duplicates</source>
        <translation>Odporúčaná záťaž + duplikáty</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1338"/>
        <source>Direct Prediction Mode:</source>
        <translation>Režim priameho predvídania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1345"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation>Predvídanie záťaže pre P snímky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1358"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3959"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1363"/>
        <source>Spatial</source>
        <translation>Priestorová</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1368"/>
        <source>Temporal</source>
        <translation>Dočasná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1398"/>
        <source>Weighted Prediction for B-frames</source>
        <translation>Predvídanie záťaže pre B snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1405"/>
        <source>Constrained Intra Prediction</source>
        <translation>Obmedzené predvídanie záťaže</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1429"/>
        <source>Partition</source>
        <translation>Rozdelenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1435"/>
        <source>Partition Search</source>
        <translation>Vyhľadávanie častí</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1443"/>
        <source>8x8 DCT Spatial Transform</source>
        <translation>8x8 DCT priestorová transformácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1450"/>
        <source>8x8, 8x16 and 16x8 P-frame Intra-predicted Blocks</source>
        <translation>8x8, 8x16 a 16x8 predvídanie vnútorných blokov P snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1457"/>
        <source>8x8, 8x16 and 16x8 B-frame Intra-predicted Blocks</source>
        <translation>8x8, 8x16 a 16x8 predvídanie vnútorných blokov B snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1464"/>
        <source>4x4, 4x8 and 8x4 P-frame Intra-predicted Blocks</source>
        <translation>4x4, 4x8 a 8x4 predvídanie vnútorných blokov P snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1471"/>
        <source>8x8 Intra-predicted Blocks</source>
        <translation>8x8 predvídanie vnútorných blokov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1478"/>
        <source>4x4 Intra-predicted Blocks</source>
        <translation>4x4 predvídanie vnútorných blokov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1504"/>
        <source>Frame</source>
        <translation>Rám</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1510"/>
        <source>Frame Encoding</source>
        <translation>Zakódovanie snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1516"/>
        <source>CABAC</source>
        <translation>CABAC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1525"/>
        <source>Loop Filter:</source>
        <translation>Filter slučky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1537"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2870"/>
        <source>Strength:</source>
        <translation>Sila:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1576"/>
        <source>Threshold:</source>
        <translation>Prah:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1611"/>
        <source>Open GOP:</source>
        <translation>Otvoriť skupinu obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1624"/>
        <source>Normal Mode</source>
        <translation>Normálny režim</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1629"/>
        <source>Blu-ray Mode</source>
        <translation>Režim Blu-ray</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1652"/>
        <source>Interlaced:</source>
        <translation>Prekladaný:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1665"/>
        <source>Bottom Field First</source>
        <translation>Najprv spodná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1670"/>
        <source>Top Field First</source>
        <translation>Najprv horná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1700"/>
        <source>Maximum Reference Frames:</source>
        <translation>Maximum referenčných snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1739"/>
        <source>B-frames</source>
        <translation>B snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1745"/>
        <source>B-frames as References:</source>
        <translation>B snímky ako referencie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1760"/>
        <source>Strictly Hierarchical Pyramid</source>
        <translation>Prísne hierarchická pyramída</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1765"/>
        <source>Non-strict (Not Blu-ray Compatible)</source>
        <translation>Nie prísne (nie je kompatibilné s Blu-ray)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1796"/>
        <source>Fast</source>
        <translation>Rýchle</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1801"/>
        <source>Optimal</source>
        <translation>Optimálne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1875"/>
        <source>B-frame Bias:</source>
        <translation>Miera použitia B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1882"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation>Maximum následných B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1889"/>
        <source>Adaptive B-frame Decision:</source>
        <translation>Adaptívne rozhodovanie B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1899"/>
        <source>I-frames</source>
        <translation>I snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1907"/>
        <source>GOP Size:</source>
        <translation>Veľkosť skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1916"/>
        <source>Minimum:</source>
        <translation>Minimálne:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1949"/>
        <source>Maximum:</source>
        <translation>Maximálne:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="1981"/>
        <source>I-frame Threshold:</source>
        <translation>Prah I snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2017"/>
        <source>Periodic Intra Refresh</source>
        <translation>Periodická vnútorná obnova</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2041"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2047"/>
        <source>Analysis</source>
        <translation>Analýza</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2053"/>
        <source>Mixed References</source>
        <translation>Zmiešané referencie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2060"/>
        <source>Chroma Motion Estimation</source>
        <translation>Odhad pohybu farebnej zložky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2069"/>
        <source>Trellis Quantization:</source>
        <translation>Kvantifikácia mriežkového kódovania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2080"/>
        <source>Final Macroblock Only</source>
        <translation>Len finálny makroblok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2085"/>
        <source>Always On</source>
        <translation>Vždy zapnuté</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2108"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation>Detekcia s rýchlym preskokom na P snímkach</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2115"/>
        <source>DCT Decimation on P-frames</source>
        <translation>DCT decimácia na P snímkach</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2124"/>
        <source>Psychovisual Rate Distortion Optimisation:</source>
        <translation>Psychovizuálna optimalizácia miery skreslenia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2161"/>
        <source>Psychovisual Trellis:</source>
        <translation>Psychovizuálne mriežkové kódovanie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2198"/>
        <source>Noise Reduction:</source>
        <translation>Redukcia šumu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2234"/>
        <source>Luma Quantisation Deadzone</source>
        <translation>Jasová kvantifikácia hluchej zóny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2242"/>
        <source>Intra Luma Quantisation Deadzone:</source>
        <translation>Vnútorná ová kvantifikácia hluchej zóny:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2249"/>
        <source>Inter Luma Quantisation Deadzone:</source>
        <translation>Vonkajšia ová kvantifikácia hluchej zóny:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2315"/>
        <source>Quantisation Matrix</source>
        <translation>Kvantifikačná matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2323"/>
        <source>Flat Matrix</source>
        <translation>Plochá matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2333"/>
        <source>JVT Matrix</source>
        <translation>JVT matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2342"/>
        <source>Custom Matrix</source>
        <translation>Vlastná matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2352"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3213"/>
        <source>Edit</source>
        <translation>Úprava</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2399"/>
        <source>Quantiser Control</source>
        <translation>Riadenie kvantifikátorov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2434"/>
        <source>Maximum Quantiser:</source>
        <translation>Maximálny kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2441"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation>Pomer kvantifikátorov I a P snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2526"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2705"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3012"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2548"/>
        <source>Maximum Quantiser Step:</source>
        <translation>Maximálny krok kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2582"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation>Pomer kvantifikátorov P a B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2589"/>
        <source>Average Bitrate Tolerance:</source>
        <translation>Tolerancia priemernej prenosovej rýchlosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2596"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation>Posuv kvantifikátorov farebnej zložky proti ovej zložke:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2630"/>
        <source>Minimum Quantiser:</source>
        <translation>Minimálny kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2678"/>
        <source>Quantiser Curve Compression</source>
        <translation>Kompresia krivky kvantifikátorov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2686"/>
        <source>Quantiser Curve Compression:</source>
        <translation>Kompresia krivky kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2731"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation>Redukcia výkyvov pred kompresiou krivky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2801"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation>Redukcia výkyvov po kompresii krivky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2813"/>
        <source>Adaptive Quantisation</source>
        <translation>Adaptívna kvantifikácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2821"/>
        <source>Variance AQ:</source>
        <translation>Rozptyl AQ:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2834"/>
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2839"/>
        <source>Auto Variance</source>
        <translation>Automatická odchýlka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2844"/>
        <source>Auto Variance Biased</source>
        <translation>Ovplyvnená automatická odchýlka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2935"/>
        <source>Advanced 1</source>
        <translation>Pokročilé 1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2947"/>
        <source>Video Buffer Verifier</source>
        <translation>Kontrola video zásobníka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2955"/>
        <source>Maximum VBV Bitrate:</source>
        <translation>Maximálna prenosová rýchlodť VBV:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2962"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation>Počiatočné obsadenie VBV zásobníka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="2978"/>
        <source>kbit</source>
        <translation>kB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3043"/>
        <source>kbit/s</source>
        <translation>kB/s</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3065"/>
        <source>VBV Buffer Size:</source>
        <translation>Veľkosť VBV zásobníka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3077"/>
        <source>Slicing</source>
        <translation>Krájanie bitov (slicing)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3083"/>
        <source>Slices per Frame:</source>
        <translation>Plátkov (slices) na snímku:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3090"/>
        <source>Maximum Size per Slice:</source>
        <translation>Maximálna veľkosť na plátok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3106"/>
        <source>bytes</source>
        <translation>bajtov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3128"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation>Maximálne makrobloky pre plátky (slice):</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3186"/>
        <source>Zones</source>
        <translation>Zóny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3206"/>
        <source>Add</source>
        <translation>Sčítanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3248"/>
        <source>Advanced 2</source>
        <translation>Pokročilé 2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3254"/>
        <source>Multithreading</source>
        <translation>Viacvláknové spracovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3262"/>
        <source>Disable</source>
        <translation>Zakázať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3269"/>
        <source>Auto-detect</source>
        <translation>Automatické zisťovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3281"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation>Vlastné:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3318"/>
        <source>Enforce Repeatability</source>
        <translation>Vynútiť opakovateľnosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3325"/>
        <source>Slice-based Threading</source>
        <translation>Základné krájanie vlákien</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3334"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation>Vlastný zásobník následných vlákien:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3393"/>
        <source>Output 1</source>
        <translation>Výstup 1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3399"/>
        <source>Output</source>
        <translation>Výstup</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3405"/>
        <source>Generate Access Unit Delimiters</source>
        <translation>Generovať prístup obmedzovačov jednotiek</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3412"/>
        <source>BluRay compatibility</source>
        <translation>Kompatibilné s Blu-ray</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3419"/>
        <source>Generate fake interlaced</source>
        <translation>Vytvárať falošné prekladanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3429"/>
        <source>Pixel Aspect Ratio</source>
        <translation>Pomer strán v pixeloch</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3437"/>
        <source>Custom:</source>
        <comment>PAR</comment>
        <translation>Vlastné:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3447"/>
        <source>As Input</source>
        <translation>Ako vstup</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3496"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3531"/>
        <source>Predefined Aspect Ratio:</source>
        <translation>Prednastavený pomer strán:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3544"/>
        <source>16:15 (PAL 4:3)</source>
        <translation>16:15 (PAL 4:3)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3549"/>
        <source>64:45 (PAL 16:9)</source>
        <translation>64:45 (PAL 16:9)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3554"/>
        <source>8:9 (NTSC 4:3)</source>
        <translation>8:9 (NTSC 4:3)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3559"/>
        <source>32:27 (NTSC 16:9)</source>
        <translation>32:27 (NTSC 16:9)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3601"/>
        <source>Output 2</source>
        <translation>Výstup 2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3607"/>
        <source>Video Usability Information</source>
        <translation>Informácia o použití videa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3613"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation>Tieto nastavenia sú len inštrukcie pre prehrávacie zariadenie. Použitie je na vlastné riziko.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3641"/>
        <source>Overscan:</source>
        <translation>Zosnímanie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3651"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3697"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3755"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3818"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3891"/>
        <source>Undefined</source>
        <translation>Nedefinované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3656"/>
        <source>Show</source>
        <translation>Ukázať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3661"/>
        <source>Crop</source>
        <translation>Orezať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3684"/>
        <source>Video Format:</source>
        <translation>Video formát:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3702"/>
        <source>Component</source>
        <translation>Komponent</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3707"/>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3712"/>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3717"/>
        <source>SECAM</source>
        <translation>SECAM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3722"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3745"/>
        <source>Colour Primaries:</source>
        <translation>Primárne farby:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3760"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3823"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3896"/>
        <source>BT709</source>
        <translation>BT709</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3765"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3828"/>
        <source>BT470M</source>
        <translation>BT470M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3770"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3833"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3906"/>
        <source>BT470BG</source>
        <translation>BT470BG</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3775"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3911"/>
        <source>SMPTE170M</source>
        <translation>SMPTE170M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3780"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3858"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3916"/>
        <source>SMPTE240M</source>
        <translation>SMPTE240M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3785"/>
        <source>Film</source>
        <translation>Film</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3808"/>
        <source>Transfer Characteristics:</source>
        <translation>Charakteristika prevodu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3838"/>
        <source>Linear</source>
        <translation>Lineárne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3843"/>
        <source>LOG100</source>
        <translation>LOG100</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3848"/>
        <source>LOG316</source>
        <translation>LOG316</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3853"/>
        <source>SMPTEL170M</source>
        <translation>SMPTEL170M</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3881"/>
        <source>Colour Matrix:</source>
        <translation>Matrica farieb:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3901"/>
        <source>FCC</source>
        <translation>FCC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3921"/>
        <source>GBR</source>
        <translation>GBR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3926"/>
        <source>YCgCo</source>
        <translation>YCgCo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3949"/>
        <source>HRD Parameters:</source>
        <translation>Parametre HRD:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3964"/>
        <source>VBR</source>
        <translation>VBR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3969"/>
        <source>CBR</source>
        <translation>CBR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="3992"/>
        <source>Chroma Sample Location:</source>
        <translation>Umiestnenie farebnej zložky vzorky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="4025"/>
        <source>Full Range Samples</source>
        <translation>Úplné vzorky</translation>
    </message>
</context>
<context>
    <name>x264CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="16"/>
        <source>x264 Custom Matrix</source>
        <translation>Vlastná matrica x264</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="32"/>
        <source>Intra 4x4</source>
        <translation>Vnútorná 4x4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="60"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="506"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="952"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="1655"/>
        <source>Luma:</source>
        <translation>Jasová zložka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="270"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="716"/>
        <source>Chroma U/V:</source>
        <translation>Farebná zložka U/V:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="478"/>
        <source>Inter 4x4</source>
        <translation>Mimo 4x4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="924"/>
        <source>Intra 8x8</source>
        <translation>Vnútri 8x8</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="1627"/>
        <source>Inter 8x8</source>
        <translation>Vonkajšia 8x8</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="2354"/>
        <source>Load File</source>
        <translation>Načítať súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="2374"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="2384"/>
        <source>Cancel</source>
        <translation>Zrušiť</translation>
    </message>
</context>
<context>
    <name>x265</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/ADM_x265Setup.cpp" line="238"/>
        <source>Not coded</source>
        <translation>Nekódované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/ADM_x265Setup.cpp" line="238"/>
        <source>this mode has not been implemented
</source>
        <translation>tento režim nie je implementovaný
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="289"/>
        <source>Auto</source>
        <translation>Automaticky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="290"/>
        <source>none</source>
        <translation>nie je</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="291"/>
        <source>Default</source>
        <translation>Predvolené</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="292"/>
        <source>Unknown</source>
        <translation>Neznámy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="365"/>
        <source>Custom</source>
        <translation>Vlastný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="716"/>
        <source>Target Bitrate:</source>
        <translation>Cieľová prenosová rýchlosť [kB/s]:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="717"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="737"/>
        <source>kbit/s</source>
        <translation>kB/s</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="722"/>
        <source>Quantiser:</source>
        <translation>Kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="726"/>
        <source>Quality:</source>
        <translation>Kvalita:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="731"/>
        <source>Target Video Size:</source>
        <translation>Cieľová veľkosť videa:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="732"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="736"/>
        <source>Average Bitrate:</source>
        <translation>Priemerná prenosová rýchlosť:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="864"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>Optimalizácia stromu makroblokov vyžaduje povolenú adaptívnu kvantifikáciu. Varianta adaptívnej kvantizácie bude automaticky zakázaná.

Chcete pokračovat?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="876"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>Optimalizácia stromu makroblokov vyžaduje povolenú adaptívnu kvantfikáciu. Optimalizácia stromu makroblokov bude automaticky zakázaná.

Chcete pokračovat?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="917"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="984"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="1001"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="917"/>
        <source>Cannot load preset</source>
        <translation>Nemožno načítať predvoľbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="932"/>
        <source>Save Profile</source>
        <translation>Uložiť profil</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="979"/>
        <source>Overwrite</source>
        <translation>Prepísať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="979"/>
        <source>Replace the following preset ?:</source>
        <translation>Nahradiť nasledujúcu predvoľbu?:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="984"/>
        <source>Cannot save preset</source>
        <translation>Nemožno uložiť predvoľbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="1001"/>
        <source>Cannot delete custom profile</source>
        <translation>Nemožno odstrániť vlastný profil</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="1005"/>
        <source>Do you really want to delete the </source>
        <translation>Naozaj chcete odstrániť </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="1006"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> profil?
Ak je to systémový profil, bude nabudúce obnovený.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="1007"/>
        <source>Delete preset</source>
        <translation>Odstrániť predvoľbu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="1007"/>
        <source>Delete</source>
        <translation>Delete</translation>
    </message>
</context>
<context>
    <name>x265ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="15"/>
        <source>x265 Configuration</source>
        <translation>Konfigurácia x265</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="39"/>
        <source>Configuration:</source>
        <translation>Konfigurácia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="56"/>
        <source>Save As</source>
        <translation>Uložiť ako</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="63"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3124"/>
        <source>Delete</source>
        <translation>Delete</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="105"/>
        <source>General</source>
        <translation>Obecné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="111"/>
        <source>Basic</source>
        <translation>Základné</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="117"/>
        <source>Use advanced configuration</source>
        <translation>Použiť rozšírenú konfiguráciu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="126"/>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="207"/>
        <source>Preset:</source>
        <translation>Predvoľba:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="193"/>
        <source>Tuning:</source>
        <translation>Ladenie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="284"/>
        <source>IDC Level:</source>
        <translation>Úroveň IDC:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="856"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="861"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="200"/>
        <source>Pool Threads </source>
        <translation>Súbor vlákien </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="259"/>
        <source>Frame Threads </source>
        <translation>Vlákna snímky </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="291"/>
        <source>Output Bit Depth:</source>
        <translation>Výstupná bitová hĺbka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="323"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="344"/>
        <source>Target Video Size:</source>
        <translation>Cieľová veľkosť videa:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="357"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation>Konštantná prenosová rýchlosť (jeden prechod)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="362"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation>Konštantný kvantifikátor (jeden prechod)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="367"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation>Faktor konštantnej rýchlosti (jeden prechod)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="372"/>
        <source>Video Size (Two Pass)</source>
        <translation>Veľkosť videa (dva prechody)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="377"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation>Priemerná prenosová rýchlosť (dva prechody)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="400"/>
        <source>Encoding Mode:</source>
        <translation>Režim kódovania:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="422"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="466"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="679"/>
        <source>0 (High Quality)</source>
        <translation>0 (vysoká kvalita)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="489"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="702"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2078"/>
        <source>Quantiser</source>
        <translation>Kvantifikátor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="512"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="725"/>
        <source>51 (Low Quality)</source>
        <translation>51 (nízka kvalita)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="582"/>
        <source>Use Strict Constant Bitrate Mode</source>
        <translation>Použiť prísny režim konštanty prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="624"/>
        <source>Advanced RC</source>
        <translation>Rozšírené riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="630"/>
        <source>Advanced Rate Control</source>
        <translation>Rozšírené riadenie rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="636"/>
        <source>Maximum Constant Rate Factor</source>
        <translation>Faktor maximálnej konštantnej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="794"/>
        <source>Coding Unit-tree Rate Control</source>
        <translation>Riadenie kódovania frekvencie stromu jednotiek</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="803"/>
        <source>Frametype Lookahead:</source>
        <translation>Typ následných snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="817"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3258"/>
        <source>frames</source>
        <translation>snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="841"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation>Nastavenie identifikátora parametrov sekvencie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="851"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="866"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="871"/>
        <source>15</source>
        <translation>15</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="876"/>
        <source>31</source>
        <translation>31</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="918"/>
        <source>Motion</source>
        <translation>Pohyb</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="924"/>
        <source>Motion Estimation</source>
        <translation>Odhad pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="932"/>
        <source>Motion Estimation Method:</source>
        <translation>Metóda odhadu pohybu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="945"/>
        <source>Diamond Search</source>
        <translation>Štvoruholníkové vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="950"/>
        <source>Hexagonal Search</source>
        <translation>Šesťuholníkové vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="955"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation>Nerovnomerné viacnásobné šesťuholníkové vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="960"/>
        <source>Star Search</source>
        <translation>Hviezdicové vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="965"/>
        <source>Exhaustive Search</source>
        <translation>Dôkladné vyhľadávanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1007"/>
        <source>1 (Fast)</source>
        <translation>1 (rýchle)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1027"/>
        <source>Subpixel Refinement</source>
        <translation>Subpixelové spresnenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1047"/>
        <source>7 (Best)</source>
        <translation>7 (najlepšie)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1125"/>
        <source>Motion Vector</source>
        <translation>Vektor pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1160"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation>Maximálny rozsah hľadania vektoru pohybu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1172"/>
        <source>Prediction</source>
        <translation>Predvídanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1203"/>
        <source>Constrained Intra Prediction</source>
        <translation>Obmedzené predvídanie záťaže</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1212"/>
        <source>Motion Partitions:</source>
        <translation>Oddiely pohybu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1219"/>
        <source>Rectangular</source>
        <translation>Obdĺžníkové</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1226"/>
        <source>Asymmetric</source>
        <translation>Asymetrické</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1235"/>
        <source>Limit Motion Partition Modes</source>
        <translation>Režim limitu oddielu pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1244"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation>Predvídanie záťaže pre P snímky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1254"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1523"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1566"/>
        <source>Disabled</source>
        <translation>Zakázané</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1259"/>
        <source>Weighted References</source>
        <translation>Odporúčaná záťaž</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1264"/>
        <source>Weighted References + Duplicates</source>
        <translation>Odporúčaná záťaž + duplikáty</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1306"/>
        <source>Frame</source>
        <translation>Rám</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1312"/>
        <source>Frame Encoding</source>
        <translation>Zakódovanie snímok</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1318"/>
        <source>Loop Filter</source>
        <translation>Filter slučky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1325"/>
        <source>Open GOP</source>
        <translation>Otvoriť skupinu obrázkov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1334"/>
        <source>Interlaced:</source>
        <translation>Prekladaný:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1347"/>
        <source>Top Field First</source>
        <translation>Najprv horná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1352"/>
        <source>Bottom Field First</source>
        <translation>Najprv spodná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1382"/>
        <source>Maximum Reference Frames:</source>
        <translation>Maximum referenčných snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1442"/>
        <source>B-frames</source>
        <translation>B snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1556"/>
        <source>B-frames as References:</source>
        <translation>B snímky ako referencie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1528"/>
        <source>Fast</source>
        <translation>Rýchle</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1533"/>
        <source>Optimal</source>
        <translation>Optimálne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1479"/>
        <source>B-frame Bias:</source>
        <translation>Miera použitia B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1448"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation>Maximum následných B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1513"/>
        <source>Adaptive B-frame Decision:</source>
        <translation>Adaptívne rozhodovanie B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1597"/>
        <source>I-frames</source>
        <translation>I snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1605"/>
        <source>GOP Size:</source>
        <translation>Veľkosť skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1614"/>
        <source>Minimum:</source>
        <translation>Minimálne:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1647"/>
        <source>Maximum:</source>
        <translation>Maximálne:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1679"/>
        <source>I-frame Threshold:</source>
        <translation>Prah I snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1732"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1738"/>
        <source>Analysis</source>
        <translation>Analýza</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1744"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation>Detekcia s rýchlym preskokom na P snímkach</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1751"/>
        <source>DCT Decimation on P-frames</source>
        <translation>DCT decimácia na P snímkach</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1180"/>
        <source>Prediction for B-frames:</source>
        <translation>Predvídanie pre B-snímky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1187"/>
        <source>Weighted Prediction</source>
        <translation>Vážená predpoveď</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1194"/>
        <source>Intra Prediction</source>
        <translation>Vnútorné predvídanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1416"/>
        <source>Limit References by:</source>
        <translation>Referenčný limit podľa:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1423"/>
        <source>CU</source>
        <translation>CU</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1430"/>
        <source>Depth</source>
        <translation>Hĺbka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1760"/>
        <source>Rate Distortion Optimisation:</source>
        <translation>Optimalizácia miery skreslenia:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1782"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1870"/>
        <source>Level:</source>
        <translation>Úroveň:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1816"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1904"/>
        <source>Psycho-visual Strength:</source>
        <translation>Psychovizuálna záťaž:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1942"/>
        <source>Noise Reduction Intra:</source>
        <translation>Redukcia vnútorného šumu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1956"/>
        <source>Noise Reduction Inter:</source>
        <translation>Redukcia vonkajšieho šumu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1990"/>
        <source>Strong Intra Smoothing</source>
        <translation>Silné vnútorné vyhladzovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2000"/>
        <source>Quantisation Matrix</source>
        <translation>Kvantifikačná matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2008"/>
        <source>Flat Matrix</source>
        <translation>Plochá matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2018"/>
        <source>JVT Matrix</source>
        <translation>JVT matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2027"/>
        <source>Custom Matrix</source>
        <translation>Vlastná matrica</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2037"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3117"/>
        <source>Edit</source>
        <translation>Úprava</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2084"/>
        <source>Quantiser Control</source>
        <translation>Riadenie kvantifikátorov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2092"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation>Posuv kvantifikátorov farebnej zložky proti ovej zložke:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2126"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation>Pomer kvantifikátorov I a P snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2308"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2916"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2169"/>
        <source>Maximum Quantiser Step:</source>
        <translation>Maximálny krok kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1571"/>
        <source>Enabled</source>
        <translation>Povolené</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="1848"/>
        <source>RDO in Quantization:</source>
        <translation>RDO v kvantifikácii:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2188"/>
        <source>Cb</source>
        <translation>Cb</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2211"/>
        <source>Cr</source>
        <translation>Cr</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2233"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation>Pomer kvantifikátorov P a B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2281"/>
        <source>Quantiser Curve Compression</source>
        <translation>Kompresia krivky kvantifikátorov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2289"/>
        <source>Quantiser Curve Compression:</source>
        <translation>Kompresia krivky kvantifikátorov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2334"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation>Redukcia výkyvov pred kompresiou krivky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2404"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation>Redukcia výkyvov po kompresii krivky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2416"/>
        <source>Adaptive Quantisation</source>
        <translation>Adaptívna kvantifikácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2424"/>
        <source>Variance AQ:</source>
        <translation>Rozptyl AQ:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2437"/>
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2442"/>
        <source>Auto Variance AQ</source>
        <translation>Automatický rozptyl AQ</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2447"/>
        <source>Auto-Variance Biased</source>
        <translation>Ovplyvnená automatická odchýlka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2452"/>
        <source>Auto-Variance Edge</source>
        <translation>Hrana automatickej odchýlky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2478"/>
        <source>Strength:</source>
        <translation>Sila:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2543"/>
        <source>Display</source>
        <translation>Zobrazenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2549"/>
        <source>Color Description</source>
        <translation>Popis farby</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2709"/>
        <source>The value set here will almost always be ignored in favor of the aspect ratio stored in the container.  Configure that via the options in Output Format for the muxer chosen.</source>
        <translation>Tu nastavená hodnota bude takmer vždy ignorovaná v prospech pomeru strán uloženého v kontajneri. Nakonfigurujte to pomocou možností vo výstupnom formáte pre zvolený zmiešavač.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2721"/>
        <source>Unspecified</source>
        <comment>PAR</comment>
        <translation>Nešpecifikované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2762"/>
        <source>Custom Aspect Ratio:</source>
        <comment>PAR</comment>
        <translation>Vlastný pomer strán:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2819"/>
        <source>Same as Input</source>
        <translation>Rovnako ako vstup</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2839"/>
        <source>Advanced 1</source>
        <translation>Pokročilé 1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2851"/>
        <source>Video Buffer Verifier</source>
        <translation>Kontrola video zásobníka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2859"/>
        <source>Maximum VBV Bitrate:</source>
        <translation>Maximálna prenosová rýchlodť VBV:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2866"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation>Počiatočné obsadenie VBV zásobníka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2882"/>
        <source>kbit</source>
        <translation>kB</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2947"/>
        <source>kbit/s</source>
        <translation>kB/s</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2969"/>
        <source>VBV Buffer Size:</source>
        <translation>Veľkosť VBV zásobníka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2981"/>
        <source>Slicing</source>
        <translation>Krájanie bitov (slicing)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2987"/>
        <source>Slices per Frame:</source>
        <translation>Plátkov (slices) na snímku:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2994"/>
        <source>Maximum Size per Slice:</source>
        <translation>Maximálna veľkosť na plátok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3010"/>
        <source>bytes</source>
        <translation>bajtov</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3032"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation>Maximálne makrobloky pre plátky (slice):</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3090"/>
        <source>Zones</source>
        <translation>Zóny</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3110"/>
        <source>Add</source>
        <translation>Sčítanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3152"/>
        <source>Advanced 2</source>
        <translation>Pokročilé 2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3158"/>
        <source>Multithreading</source>
        <translation>Viacvláknové spracovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3166"/>
        <source>Disable</source>
        <translation>Zakázať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3173"/>
        <source>Auto-detect</source>
        <translation>Automatické zisťovanie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3185"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation>Vlastné:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3222"/>
        <source>Enforce Repeatability</source>
        <translation>Vynútiť opakovateľnosť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3229"/>
        <source>Slice-based Threading</source>
        <translation>Základné krájanie vlákien</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3238"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation>Vlastný zásobník následných vlákien:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3297"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3303"/>
        <source>Output</source>
        <translation>Výstup</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3309"/>
        <source>Generate Access Unit Delimiters</source>
        <translation>Generovať prístup obmedzovačov jednotiek</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2703"/>
        <source>Pixel Aspect Ratio</source>
        <translation>Pomer strán v pixeloch</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2784"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2731"/>
        <source>Predefined Aspect Ratio:</source>
        <translation>Prednastavený pomer strán:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3319"/>
        <source>Video Usability Information</source>
        <translation>Informácia o použití videa</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3325"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation>Tieto nastavenia sú len inštrukcie pre prehrávacie zariadenie. Použitie je na vlastné riziko.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3353"/>
        <source>Overscan:</source>
        <translation>Zosnímanie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2568"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3363"/>
        <source>Undefined</source>
        <translation>Nedefinované</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3368"/>
        <source>Show</source>
        <translation>Ukázať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3373"/>
        <source>Crop</source>
        <translation>Orezať</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2555"/>
        <source>Video Format:</source>
        <translation>Video formát:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2573"/>
        <source>Component</source>
        <translation>Komponent</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2578"/>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2583"/>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2588"/>
        <source>SECAM</source>
        <translation>SECAM</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2593"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2616"/>
        <source>Colour Primaries:</source>
        <translation>Primárne farby:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2644"/>
        <source>Transfer Characteristics:</source>
        <translation>Charakteristika prevodu:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="2672"/>
        <source>Colour Matrix:</source>
        <translation>Matrica farieb:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3396"/>
        <source>HRD Parameters:</source>
        <translation>Parametre HRD:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3406"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3411"/>
        <source>VBR</source>
        <translation>VBR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3416"/>
        <source>CBR</source>
        <translation>CBR</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3439"/>
        <source>Chroma Sample Location:</source>
        <translation>Umiestnenie farebnej zložky vzorky:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="3472"/>
        <source>Full Range Samples</source>
        <translation>Úplné vzorky</translation>
    </message>
</context>
<context>
    <name>x265CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="14"/>
        <source>x265 Custom Matrix</source>
        <translation>Vlastná matrica x265</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="30"/>
        <source>Intra 4x4</source>
        <translation>Vnútorná 4x4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="58"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="504"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="950"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="1653"/>
        <source>Luma:</source>
        <translation>Jasová zložka:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="268"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="714"/>
        <source>Chroma U/V:</source>
        <translation>Farebná zložka U/V:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="476"/>
        <source>Inter 4x4</source>
        <translation>Mimo 4x4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="922"/>
        <source>Intra 8x8</source>
        <translation>Vnútri 8x8</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="1625"/>
        <source>Inter 8x8</source>
        <translation>Vonkajšia 8x8</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="2352"/>
        <source>Load File</source>
        <translation>Načítať súbor</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="2372"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="2382"/>
        <source>Cancel</source>
        <translation>Zrušiť</translation>
    </message>
</context>
<context>
    <name>xvid4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="32"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="56"/>
        <source>None</source>
        <translation>Nič</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="33"/>
        <source>Low</source>
        <translation>Nízke</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="34"/>
        <source>Medium</source>
        <translation>Stredná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="35"/>
        <source>Full</source>
        <translation>Plná</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="39"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="40"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="41"/>
        <source>Custom</source>
        <translation>Vlastný</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="57"/>
        <source>DCT</source>
        <translation>DTC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="58"/>
        <source>Qpel16</source>
        <translation>Qpel16</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="59"/>
        <source>Qpel8</source>
        <translation>Qpel8</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="60"/>
        <source>Square</source>
        <translation>Štvorcová</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="64"/>
        <source>One thread</source>
        <translation>Jedno vlákno</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="65"/>
        <source>Two threads</source>
        <translation>Dve vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="66"/>
        <source>Three threads</source>
        <translation>Tri vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="67"/>
        <source>Auto (#cpu)</source>
        <translation>Automaticky (počet CPU)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="71"/>
        <source>1:1 (PC)</source>
        <translation>1:1 (PC)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="72"/>
        <source>4:3 (PAL)</source>
        <translation>4:3 (PAL)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="73"/>
        <source>4:3 (NTSC)</source>
        <translation>4:3 (NTSC)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="74"/>
        <source>16:9 (PAL)</source>
        <translation>16:9 (PAL)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="75"/>
        <source>16:9 (NTSC)</source>
        <translation>16:9 (NTSC)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="84"/>
        <source>Threading</source>
        <translation>Vláknenie</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="86"/>
        <source>Mi_n. quantizer:</source>
        <translation>Mi_n. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="87"/>
        <source>Ma_x. quantizer:</source>
        <translation>Ma_x. kvantifikátor:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="91"/>
        <source>_Trellis quantization</source>
        <translation>_Kvantifikácia mriežkového kódovania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="92"/>
        <source>_Number of B frames:</source>
        <translation>_Počet B snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="94"/>
        <source>_Drop identical frames (this disables B-frames)</source>
        <translation>Vypustiť identické snímky (zakáže B-snímky)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="95"/>
        <source>Framedrop _Ratio:</source>
        <translation>Pomer úbytku snímok:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="97"/>
        <source>_Quantization type:</source>
        <translation>_Typ kvantifikácie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="99"/>
        <source>_Macroblock decision:</source>
        <translation>_Rozhodovanie makroblokov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="101"/>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="103"/>
        <source>Aspect Ratio:</source>
        <translation>Pomer strán:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="111"/>
        <source>_Gop Size:</source>
        <translation>Veľkosť _skupiny obrázkov:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="114"/>
        <source>Use XVID fcc (else DIVX)</source>
        <translation>Použiť Xvid fcc (inak DivX)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="82"/>
        <source>Motion Estimation</source>
        <translation>Odhad pohybu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="117"/>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="134"/>
        <source>Encoding Mode</source>
        <translation>Režim kódovania</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="121"/>
        <source>Frame Settings</source>
        <translation>Nastavenie snímky</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="130"/>
        <source>Miscellaneous</source>
        <translation>Rôzne</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="139"/>
        <source>Quantization</source>
        <translation>Kvantizácia</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="143"/>
        <source>Threads</source>
        <translation>Vlákna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="150"/>
        <source>Aspect Ratio</source>
        <translation>Pomer strán</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="155"/>
        <source>Rate Control</source>
        <translation>Riadenie prenosovej rýchlosti</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="158"/>
        <source>Xvid4 MPEG-4 ASP configuration</source>
        <translation>Konfigurácia Xvid4 MPEG-4 ASP</translation>
    </message>
</context>
<context>
    <name>yadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="132"/>
        <source>Yadif</source>
        <translation>Yadif</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="133"/>
        <source>Yadif, port of avisynth version (c) Fizick.</source>
        <translation>Yadif, portované pre avisynth verziu © Fizick.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="203"/>
        <source>Bottom field first</source>
        <translation>Najskôr dolná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="202"/>
        <source>Top field first</source>
        <translation>Najskôr horná polsnímka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="195"/>
        <source>Frame : Temporal &amp; spatial check</source>
        <translation>Snímka: Časová a priestorová kontrola</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="196"/>
        <source>Field :  Temporal &amp; spatial check</source>
        <translation>Polsnímka: Časová a priestorová kontrola</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="197"/>
        <source>Frame : Skip spatial temporal check</source>
        <translation>Snímka: Preskočiť priestorovú časovú kontrolu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="198"/>
        <source>Field : Skip spatial temporal check</source>
        <translation>Polsnímka: Preskočiť priestorovú časovú kontrolu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="207"/>
        <source>Deint all</source>
        <translation>Rozklad všetkého</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="208"/>
        <source>Deint interlaced</source>
        <translation>Rozklad prekladaného</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="213"/>
        <source>_Mode:</source>
        <translation>_Režim:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="214"/>
        <source>_Deint:</source>
        <translation>_Rozklad:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="215"/>
        <source>_Order:</source>
        <translation>_Poradie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="218"/>
        <source>yadif</source>
        <translation>yadif</translation>
    </message>
</context>
<context>
    <name>zoom</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/ADM_vidZoom.cpp" line="68"/>
        <source>Zoom</source>
        <translation>Priblížiť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/ADM_vidZoom.cpp" line="69"/>
        <source>Partializable crop filter.</source>
        <translation>Filter čiastočného orezania.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/DIA_flyZoom.cpp" line="485"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/DIA_flyZoom.cpp" line="801"/>
        <source>Selection: </source>
        <translation>Výber: </translation>
    </message>
</context>
<context>
    <name>zoomDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="14"/>
        <source>Zoom</source>
        <translation>Priblížiť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="52"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="119"/>
        <source>Right:</source>
        <translation>Vpravo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="59"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="161"/>
        <source>Top:</source>
        <translation>Hore:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="102"/>
        <source>Reset</source>
        <translation>Znovu nastaviť</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="123"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="133"/>
        <source>Bottom:</source>
        <translation>Dole:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="130"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="178"/>
        <source>Left:</source>
        <translation>Vľavo:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="54"/>
        <source>Resize Method:</source>
        <translation>Metóda zmeny veľkosti:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="62"/>
        <source>Bilinear</source>
        <translation>Bilineárna</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="67"/>
        <source>Bicubic</source>
        <translation>Bikubická</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="72"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="77"/>
        <source>Spline</source>
        <translation>Drážka</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="140"/>
        <source>Lock Aspect Ratio:</source>
        <translation>Uzamknutie pomeru strán:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="171"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Skryť gumičku</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="187"/>
        <source>Selection: </source>
        <translation>Výber: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="203"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="207"/>
        <source>Do not lock</source>
        <translation>Nezamykajte</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="212"/>
        <source>Current selection</source>
        <translation>Aktuálny výber</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="217"/>
        <source>Source</source>
        <translation>Zdroj</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="222"/>
        <source>21:9</source>
        <translation>21:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="227"/>
        <source>18:9</source>
        <translation>18:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="232"/>
        <source>16:9</source>
        <translation>16:9</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="237"/>
        <source>4:3</source>
        <translation>4:3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="242"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="247"/>
        <source>9:16</source>
        <translation>9:16</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="257"/>
        <source>Padding:</source>
        <translation>Odsadzovanie:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="265"/>
        <source>black bars</source>
        <translation>čierne pruhy</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="270"/>
        <source>echo</source>
        <translation>echo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="275"/>
        <source>none (stretch)</source>
        <translation>žiadne (napnuté)</translation>
    </message>
</context>
</TS>
