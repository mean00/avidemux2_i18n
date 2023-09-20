<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr">
<context>
    <name>ADM_Composer</name>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="+128"/>
        <source>This video contains B-frames, but presentation time stamps (PTS) are either missing or monotonically increasing. Avidemux can try to reconstruct correct PTS by decoding the entire video. This may take a lot of time. Proceed?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Decoding video...</source>
        <translation>Décodage vidéo…</translation>
    </message>
    <message>
        <location line="+163"/>
        <source>Some timing information are incorrect.
It happens with some capture software.
If you re encode video we should drop these informations,
 else it will cause dropped frame/jerky video.
If you just copy the video without reencoding,
 you should keep them.
Drop timing informations ?</source>
        <translation>Les informations de timings sur les images sont incorrectes.
Cela arrive avec certains logiciels de capture.
Si vous réencoder ces vidéos, il vaut mieux ignorer ces informations,
sinon cela va provoquer des saccades.
Si vous copiez la piste sans réencoder, il vaut mieux conserver ces informations de timing.
Ignorer les informations de timing ?</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="+471"/>
        <source>Cannot find a demuxer for %s</source>
        <translation>Impossible de trouver un demuxer pour lire %s</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Attempt to open %s failed!</source>
        <translation>l&apos;ouverture de %s a echouée !</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>width</source>
        <translation>largeur</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>%sheight</source>
        <translation>%shauteur</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> and </source>
        <translation> et </translation>
    </message>
    <message>
        <location line="+3"/>
        <source>%sdifferent between first and this video stream</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source> are </source>
        <translation> sont </translation>
    </message>
    <message>
        <location line="+0"/>
        <source> is </source>
        <translation> est </translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You cannot mix different video dimensions yet. Using the partial video filter later, will not work around this problem. The workaround is:
1.) &quot;resize&quot; / &quot;add border&quot; / &quot;crop&quot; each stream to the same resolution
2.) concatenate them together</source>
        <translation>Vous ne pouvez pas mélanger des vidéos avec des dimensions différentes. Utiliser le filtre &quot;Partiel&quot; ne résoudra pas le problème. La correction est :
1) Redimensionner ou ajouter des bords pour que toutes les vidéos aient les mêmes dimensions, et les enregistrer une par une
2) Concaténer ces vidéos ensembles</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>The width of the video %u px exceeds maximum supported width %u.
</source>
        <translation>La largeur de la vidéo %u px dépasse la largeur maximale prise en charge %u.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>The height of the video %u px exceeds maximum supported height %u.
</source>
        <translation>La hauteur de la vidéo %u px dépasse la hauteur maximale prise en charge %u.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Video dimensions %ux%u exceed maximum supported size %ux%u.
</source>
        <translation>Les dimensions de la vidéo %ux%u dépassent la taille maximale prise en charge %ux%u.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Unsupported size</source>
        <translation>Taille non supportée</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="-246"/>
        <source>Checking if timestamps are valid..</source>
        <translation>Vérification des informations de temps</translation>
    </message>
</context>
<context>
    <name>CalculatorDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="+129"/>
        <source>Custom</source>
        <translation>Personnalisé</translation>
    </message>
    <message>
        <location line="+143"/>
        <source>Track 1:</source>
        <translation>Piste 1 :</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Track 2:</source>
        <translation>Piste 2 :</translation>
    </message>
    <message>
        <location line="+330"/>
        <source>Cancel</source>
        <translation>Annuler</translation>
    </message>
    <message>
        <location line="-623"/>
        <source>Calculator</source>
        <translation>Calculette</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Target</source>
        <translation>Cible</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>00:00:00</source>
        <translation></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>AVI</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>OGM</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MPEG</source>
        <translation></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Medium:</source>
        <translation>Médium :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Format:</source>
        <translation>Format :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration:</source>
        <translation>Durée :</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>1 x 80 minute CD</source>
        <translation>CD 1 x 80 minutes</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2 x 80 minute CD</source>
        <translation>CD 2 x 80 minutes</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1 x 74 minute CD</source>
        <translation>CD 1 x 74 minutes</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2 x 74 minute CD</source>
        <translation>CD 2 x 74 minutes</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>DVD-5</source>
        <translation></translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Custom Size:</source>
        <translation>Taille personnalisée :</translation>
    </message>
    <message>
        <location line="+23"/>
        <location line="+198"/>
        <location line="+27"/>
        <location line="+34"/>
        <source>MB</source>
        <translation>Mo</translation>
    </message>
    <message>
        <location line="-217"/>
        <source>Audio Bitrate</source>
        <translation>Débit audio</translation>
    </message>
    <message>
        <location line="+34"/>
        <location line="+37"/>
        <location line="+232"/>
        <source>kbps</source>
        <translation>kb/s</translation>
    </message>
    <message>
        <location line="-207"/>
        <source>Result</source>
        <translation>Résultat</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Audio Size:</source>
        <translation>Taille audio :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Video Size:</source>
        <translation>Taille de la vidéo :</translation>
    </message>
    <message>
        <location line="+15"/>
        <location line="+27"/>
        <location line="+34"/>
        <location line="+68"/>
        <location line="+18"/>
        <source>0</source>
        <translation></translation>
    </message>
    <message>
        <location line="-101"/>
        <source>Total Size:</source>
        <translation>Taille totale :</translation>
    </message>
    <message>
        <location line="+120"/>
        <source>Bits Per Pixel:</source>
        <translation>Bits par pixel :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Video Bitrate:</source>
        <translation>Débit vidéo</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>OK</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="+64"/>
        <source>Indexing</source>
        <translation>Indexation</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Time Left : Infinity</source>
        <translation>Temps restant : infini</translation>
    </message>
    <message>
        <location line="+1"/>
        <source># Images :</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>DialogAudioTracks</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="+20"/>
        <source>Audio Tracks Configuration</source>
        <translation>Configuration des pistes audios</translation>
    </message>
    <message>
        <source>Track 1</source>
        <translation type="vanished">Piste 1</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="vanished">Activée</translation>
    </message>
    <message>
        <source>Configure</source>
        <translation type="vanished">Configurer</translation>
    </message>
    <message>
        <source>Filters</source>
        <translation type="vanished">Filtres</translation>
    </message>
    <message>
        <source>Track 2</source>
        <translation type="vanished">Piste 2</translation>
    </message>
    <message>
        <source>Track 3</source>
        <translation type="vanished">Piste 3</translation>
    </message>
    <message>
        <source>Track 4</source>
        <translation type="vanished">Piste 4</translation>
    </message>
</context>
<context>
    <name>DialogOcr</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="+92"/>
        <source>Close</source>
        <translation>Fermer</translation>
    </message>
    <message>
        <location line="-79"/>
        <source>Dialog</source>
        <translation>Dialogue</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Calibrate</source>
        <translation>Étalonner</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Skip All</source>
        <translation>Tout passer</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Skip Glyph</source>
        <translation>Passer Glyphe</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Ignore</source>
        <translation>Ignorer</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Ok</source>
        <translation></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>00:00:00/000</source>
        <translation></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Timecode:</source>
        <translation>Code temporel :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>0/0</source>
        <translation></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Nb Lines :</source>
        <translation>Nb lignes :</translation>
    </message>
</context>
<context>
    <name>DialogProcessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="+14"/>
        <source>Dialog</source>
        <translation>Dialogue</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>TimeLeft</source>
        <translation>Temps restant</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>00:00:00</source>
        <translation></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>ProcessImages</source>
        <translation>Images traitées</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>0</source>
        <translation></translation>
    </message>
    <message>
        <location line="-30"/>
        <source>Speed</source>
        <translation>Vitesse</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>0 fps</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>DialogProgress</name>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="+17"/>
        <source>Progress</source>
        <translation>Progression</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Current job</source>
        <translation>Travail en cours</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>File being written </source>
        <translation>Écriture fichier</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>1/1</source>
        <translation></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>...</source>
        <translation>…</translation>
    </message>
</context>
<context>
    <name>FDK-AAC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="+450"/>
        <source>_Profile:</source>
        <translation>_Profil :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate _Mode:</source>
        <translation>_Mode Débit :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bitrate:</source>
        <translation>_Débit :</translation>
    </message>
    <message>
        <source>SBR enabled</source>
        <translation type="vanished">SBR activé</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Afterburner</source>
        <translation>Après gravure</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>FDK-AAC Configuration</source>
        <translation>Configuration FDK-AAC</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="+15"/>
        <source>Avidemux</source>
        <translation>Avidemux</translation>
    </message>
    <message>
        <location line="+95"/>
        <source>&amp;Help</source>
        <translation>&amp;Aide</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>&amp;Edit</source>
        <translation>&amp;Éditer</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;View</source>
        <translation>&amp;Vue</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>&amp;Tools</source>
        <translation>Ou&amp;tils</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>&amp;File</source>
        <translation>&amp;Fichier</translation>
    </message>
    <message>
        <location line="+200"/>
        <location line="+169"/>
        <location line="+181"/>
        <source>Configure</source>
        <translation>Configurer</translation>
    </message>
    <message>
        <location line="-453"/>
        <source>&lt;b&gt;Video Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;Sortie vidéo&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+86"/>
        <location line="+169"/>
        <source>Copy</source>
        <translation>Copier</translation>
    </message>
    <message>
        <location line="-136"/>
        <location line="+169"/>
        <source>Filters</source>
        <translation>Filtres</translation>
    </message>
    <message>
        <location line="-128"/>
        <source>&lt;b&gt;Audio Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;Sortie audio&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+155"/>
        <source>&amp;Shift:</source>
        <translation>&amp;Décal.:</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>&lt;b&gt;Output Format&lt;/b&gt;</source>
        <translation>&lt;b&gt;Format de sortie&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+388"/>
        <source>Go to previous cut point [SHIFT+DOWN]</source>
        <translation>Point de coupe précédent [MAJ+BAS]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to next cut point [SHIFT+UP]</source>
        <translation>Point de coupe suivant [MAJ+HAUT]</translation>
    </message>
    <message>
        <location line="+447"/>
        <source>Selection: 000000</source>
        <translation>Sélection : 000000</translation>
    </message>
    <message>
        <location line="+198"/>
        <source>&amp;Open...</source>
        <translation>&amp;Ouvrir…</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Save &amp;Video...</source>
        <translation>Enregistrer la &amp;vidéo…</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+3"/>
        <source>Save Video</source>
        <translation>Enregistrer</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>HDR tone mapping</source>
        <translation>Cartographie des tons HDR</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>&amp;Load/Run Project...</source>
        <translation>&amp;Lancer un projet…</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+3"/>
        <source>Load/Run Project</source>
        <translation>Lancer un projet</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Save &amp;Project</source>
        <translation>Enregistrer un &amp;projet</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+3"/>
        <source>Save Project</source>
        <translation>Enregistrer un projet</translation>
    </message>
    <message>
        <source>&amp;Calculator...</source>
        <translation type="vanished">&amp;Calculette…</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>&amp;Input</source>
        <translation>Orig&amp;inal</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>&amp;Output</source>
        <translation>M&amp;odifié</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Codec Options</source>
        <translation>Options du co&amp;dec</translation>
    </message>
    <message>
        <location line="+99"/>
        <source>&amp;Separate</source>
        <translation>&amp;Séparer</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>&amp;Top</source>
        <translation>Hau&amp;t</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Si&amp;de</source>
        <translation>Cot&amp;e à cote</translation>
    </message>
    <message>
        <location line="-1836"/>
        <source>Vi&amp;deo</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>&amp;Toolbars</source>
        <translation>Barre d&apos;outils</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>T&amp;heme</source>
        <translation>T&amp;hème</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>&amp;Auto</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;Custom</source>
        <translation>&amp;Scripts perso</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;Go</source>
        <translation>Aller</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>&amp;Audio</source>
        <translation></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>&amp;Recent</source>
        <translation>&amp;Récent</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Codec O&amp;ptions</source>
        <translation>Options du co&amp;dec</translation>
    </message>
    <message>
        <source>&lt;b&gt;Video Decoder&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;Décodeur vidéo&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+215"/>
        <source> (0 tracks)</source>
        <translation> (0 piste)</translation>
    </message>
    <message>
        <location line="+177"/>
        <source>ms</source>
        <translation></translation>
    </message>
    <message>
        <location line="+161"/>
        <location line="+1063"/>
        <source>Navigation</source>
        <translation>&amp;Navigation</translation>
    </message>
    <message>
        <location line="-988"/>
        <source>Play [SPACE]</source>
        <translation>Lire [ESPACE]</translation>
    </message>
    <message>
        <source>Play</source>
        <translation type="vanished">Lire</translation>
    </message>
    <message>
        <location line="+6"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+26"/>
        <location line="+373"/>
        <source>...</source>
        <translation>…</translation>
    </message>
    <message>
        <location line="-701"/>
        <source>Go to previous frame [LEFT]</source>
        <translation>Image précédente [GAUCHE]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to next frame [RIGHT]</source>
        <translation>Image suivante [DROITE]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to previous keyframe [DOWN]</source>
        <translation>Image clé précédente [BAS]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to next keyframe [UP]</source>
        <translation>Image clé suivante [HAUT]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Set start marker [CTRL+PAGEUP]</source>
        <translation>Mettre le marqueur A [CTRL+PAGE PRECEDENTE]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Delete selection</source>
        <translation>Supprimer la sélection [SUP]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Set end marker [CTRL+PAGEDOWN]</source>
        <translation>Mettre le marqueur B [CTRL+PAGE SUIVANTE]</translation>
    </message>
    <message>
        <location line="+69"/>
        <source>Search previous black frame</source>
        <translation>Chercher l&apos;image noire précédente</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Search next black frame</source>
        <translation>Chercher l&apos;image noire suivante</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to first frame [HOME]</source>
        <translation>Aller au début [DEBUT]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to last frame [END]</source>
        <translation>Aller à la fin [FIN]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Backward one minute [CTRL+DOWN]</source>
        <translation>Reculer d&apos;une minute [CTRL+BAS]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Forward one minute [CTRL+UP]</source>
        <translation>Avancer d&apos;une minute [CTRL+HAUT]</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Forward one minute</source>
        <translation>Avancer d&apos;une minute</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Time:</source>
        <translation>Temps :</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>00:00:00.000</source>
        <translation></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>/ 00:00:00.000</source>
        <translation></translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Frame type:</source>
        <translation>Type :</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>?</source>
        <translation> ?</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Se&amp;lection</source>
        <translation>Sélection</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>A:</source>
        <translation>A :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>B:</source>
        <translation>B :</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Go to marker A [PAGE UP]</source>
        <translation>Aller au marqueur A [PAGE PRECEDENTE]</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+16"/>
        <source>000000</source>
        <translation></translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Go to Marker B [PAGE DOWN]</source>
        <translation>Aller au marqueur B [PAGE SUIVANTE]</translation>
    </message>
    <message>
        <location line="+259"/>
        <source>Play filtered</source>
        <translation>Jouer post filtrage</translation>
    </message>
    <message>
        <location line="-200"/>
        <source>Vol&amp;ume</source>
        <translation></translation>
    </message>
    <message>
        <location line="+114"/>
        <source>Audio &amp;Metre</source>
        <translation>Audio&amp;mètre</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Open Video</source>
        <translation>Ouvrir une vidéo</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>&amp;Information...</source>
        <translation>&amp;Information…</translation>
    </message>
    <message>
        <location line="+110"/>
        <source>Ctrl+Alt+C</source>
        <translation></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Ctrl+Alt+N</source>
        <translation></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Selection</source>
        <translation>&amp;Sélection</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+S</source>
        <translation></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Volume</source>
        <translation></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+V</source>
        <translation></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Toolbar</source>
        <translation>Barre d&apos;outils</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+B</source>
        <translation></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Stat&amp;us bar</source>
        <translation>Barre d&apos;état</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+U</source>
        <translation></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Audio Metre</source>
        <translation>Audio&amp;mètre</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+M</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>Opus</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="+277"/>
        <source>_Bitrate:</source>
        <translation>_Débit :</translation>
    </message>
</context>
<context>
    <name>SpiderMonkeyShell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/shell.ui" line="+17"/>
        <source>Shell</source>
        <translation>Console</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Clear</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Evaluate</source>
        <translation>Evaluer</translation>
    </message>
</context>
<context>
    <name>VapourSynthProxy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="+14"/>
        <source>VapourSynth Proxy</source>
        <translation></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Select VS file</source>
        <translation>Choisir le fichier VS</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Port to use: </source>
        <translation>Port à utiliser :</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>...</source>
        <translation>…</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run!</source>
        <translation>Lancer !</translation>
    </message>
</context>
<context>
    <name>aarotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="+437"/>
        <source>Arbitrary Rotate</source>
        <translation>Rotation arbitraire</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rotate the image by arbitrary angle.</source>
        <translation>Faites pivoter l’image d’un angle e.</translation>
    </message>
    <message>
        <location line="+186"/>
        <source>Black</source>
        <translation>Noir</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation>Écho</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Angle:</source>
        <translation>_Angle :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Padding:</source>
        <translation>Remplissage :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Rotate</source>
        <translation>Rotation</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="+14"/>
        <source>About Avidemux</source>
        <translation>À propos d&apos;Avidemux</translation>
    </message>
    <message>
        <location line="+92"/>
        <source>Avidemux</source>
        <translation></translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Multi-platform Video Editor</source>
        <translation>Éditeur vidéo multiplateforme</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>© 2001 - 2021  Mean / eumagga0x2a</source>
        <translation></translation>
    </message>
    <message>
        <location line="+66"/>
        <source>&amp;License</source>
        <translation>&amp;Licence</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>OK</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>addBorder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="+183"/>
        <source>_Left border:</source>
        <translation>_Bord gauche :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Right border:</source>
        <translation>_Bord droit :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Top border:</source>
        <translation>_Bord haut :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bottom border:</source>
        <translation>_Bord bas :</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="+42"/>
        <source>Add Borders</source>
        <translation>Ajout de bords</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Incorrect parameters</source>
        <translation>Paramètres incorrects</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>All parameters must be even and within range.</source>
        <translation>Tous les paramètres doivent être pairs et dans les bornes.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="+1"/>
        <source>Add black borders around the image.</source>
        <translation>Ajouter un bord noir autour de l&apos;image</translation>
    </message>
</context>
<context>
    <name>adm</name>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+677"/>
        <source>Decode video using DXVA2 (windows)</source>
        <translation>Décoder avec DXVA2 (Windows)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ignore driver blacklist (Intel)</source>
        <translation>Ignorer blacklist des pilotes (Intel)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ignore codec blacklist (Intel, HEVC 10bit)</source>
        <translation>Ignorer blacklist codecs (Intel, HEVC 10bit) </translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Enabling Hw decoding disables multi-threading, restart application to apply changes</source>
        <translation>L&apos;activation du décodage HW désactive le multithreading, redémarrez l&apos;application pour appliquer les modifications</translation>
    </message>
    <message>
        <location line="-55"/>
        <source>Enable OpenGL support</source>
        <translation>Activer OpenGL</translation>
    </message>
    <message>
        <location line="-341"/>
        <source>_Accept non-standard audio frequency for DVD</source>
        <translation>Accepter les fréquences non standard pour les DVD</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Revert to saved default output settings on video load</source>
        <translation>Retour paramètres de sortie par défaut au chargement de vidéo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Enable alternative keyboard shortcuts</source>
        <translation>_Activer raccourcis claviers alternatifs</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Re_verse UP and DOWN arrow keys for navigation</source>
        <translation>Inverser les touches HAUT et BAS pour la navigation</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reverse mouse _wheel for navigation</source>
        <translation>Inverser le sens molette de souris pour la navigation</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Swap markers if marker A is set past marker B or marker B before A in video</source>
        <translation>_Inversion des marqueurs dans la vidéo si le marqueur A est après le marqueur B, ou inversement</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Enable all SIMD</source>
        <translation>Activer toutes les optimisations SIMD</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable MMX</source>
        <translation>Activer le MMX</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable MMXEXT</source>
        <translation>Activer le MMXEXT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable 3DNOW</source>
        <translation>Activer le 3DNOW</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable 3DNOWEXT</source>
        <translation>Activer le 3DNOWEXT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE</source>
        <translation>Activer le SSE</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE2</source>
        <translation>Activer le SSE2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE3</source>
        <translation>Activer le SSE3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSSE3</source>
        <translation>Activer le SSSE3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE4</source>
        <translation>Activer le SSE4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE4.2</source>
        <translation>Activer le SSE4.2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable AVX</source>
        <translation>Activer le AVX</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable AVX2</source>
        <translation>Activer le AVX2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable FMA3</source>
        <translation>Activer le FMA3</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>_lavc threads:</source>
        <translation>Threads lavc :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Multi-threading is disabled internally if HW accelerated decoding is enabled, restart application to apply changes</source>
        <translation>Le multithreading est désactivé en interne si le décodage accéléré matériel est activé, redémarrez l&apos;application pour appliquer les modifications </translation>
    </message>
    <message>
        <location line="+11"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+47"/>
        <source>High</source>
        <translation>Haute</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Above normal</source>
        <translation>Plus que normale</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Normal</source>
        <translation>Normale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Below normal</source>
        <translation>Sous la normale</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-2"/>
        <source>Low</source>
        <translation>Basse</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Encoding priority:</source>
        <translation>_Priorité de l&apos;encodage :</translation>
    </message>
    <message>
        <source>_Indexing/unpacking priority:</source>
        <translation type="vanished">Priorité de l&apos;indexation :</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Playback priority:</source>
        <translation>Priorité de la lecture :</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Prioritisation</source>
        <translation>Priorités</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Priority can be only lowered and applies to the entire application for the current session</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Default to the directory of the last read file for saving</source>
        <translation>Utiliser le répertoire du dernier fichier lu comme répertoire de sauvegarde par défaut</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>De_lete first pass log files by default</source>
        <translation>Supprimer les fichiers journaux du premier passage par défaut</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto-Append Settings</source>
        <translation>Ajout automatique</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Use custom fragment size for auto-append of MPEG-TS files</source>
        <translation>Utiliser une taille de fragment personnalisée pour l&apos;ajout automatique de fichiers MPEG-TS</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Fragment size:</source>
        <translation>_Taille du fragment :</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Pictures</source>
        <translation>Images</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Load sequentially named pictures in reverse order</source>
        <translation>Charger les images séquentielles dans l&apos;ordre inverse</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>23.976 (Film)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25 (PAL)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>29.970 (NTSC)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>30</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (PAL)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>59.940 (NTSC)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>60</source>
        <translation></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Assign following standard frame rate:</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Avisynth</source>
        <translation></translation>
    </message>
    <message>
        <location line="+195"/>
        <source>Default out of gamut handling:</source>
        <translation>Traitement hors gamme par défaut :</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>HDR</source>
        <translation></translation>
    </message>
    <message>
        <location line="-10"/>
        <source>Default _tone mapping method:</source>
        <translation>Méthode de mappage _tone par défaut :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Target peak luminance (nits):</source>
        <translation>Luminance cible maxi (nits) :</translation>
    </message>
    <message>
        <location line="-181"/>
        <source>Use _shared cache</source>
        <translation>Utiliser le cache partagé</translation>
    </message>
    <message>
        <source>XVideo (best)</source>
        <translation type="vanished">Xvideo (rapide)</translation>
    </message>
    <message>
        <source>VDPAU (best)</source>
        <translation type="vanished">VDPAU (très rapide)</translation>
    </message>
    <message>
        <source>DXVA2 (best)</source>
        <translation type="vanished">DXVA2 (très rapide)</translation>
    </message>
    <message>
        <source>OpenGL (best)</source>
        <translation type="vanished">OpenGL (rapide)</translation>
    </message>
    <message>
        <source>SDL (good)</source>
        <translation type="vanished">SDL (moyen)</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Video _display:</source>
        <translation>Affichage vidéo :</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>No alerts</source>
        <translation>Pas d&apos;alerte</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display only error alerts</source>
        <translation>N&apos;afficher que les erreurs</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display all alerts</source>
        <translation>Afficher tout</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Message level:</source>
        <translation>Afficher les messages :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Volume control:</source>
        <translation>Contrôle du volume :</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No downmixing</source>
        <translation>Pas de downmixing</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Local playback downmixing:</source>
        <translation>Downmixing pour la lecture :</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>_AudioDevice</source>
        <translation>Périphérique audio</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="+25"/>
        <source>_Filter strength:</source>
        <translation>Force du filtre :</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>The options above are effective only for software decoding</source>
        <translation>Les options ci-dessus ne sont efficaces que pour le décodage logiciel</translation>
    </message>
    <message>
        <location line="+13"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+66"/>
        <source>_Horizontal deblocking</source>
        <translation>Déblocage horizontal</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>_Vertical deblocking</source>
        <translation>Déblocage vertical</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>De_interlacing (ffmpegdeint)</source>
        <translation>Désentrelacement (ffmpegdeint)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deblocking</source>
        <translation>Déblocage</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+2"/>
        <source>_Strength:</source>
        <translation>Force :</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Default Postprocessing</source>
        <translation>Post traitement par défaut</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>User Interface</source>
        <translation>Interface utilisateur</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+36"/>
        <source>Open</source>
        <translation>Ouvrir</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Append</source>
        <translation>Ajouter</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save</source>
        <translation>Enregistrer</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Save as Image</source>
        <translation>Enregistrer comme image</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save as BMP</source>
        <translation>Enregistrer en .BMP</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save as PNG</source>
        <translation>Enregistrer en .PNG</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save as JPEG</source>
        <translation>Enregistrer en .JPEG</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save Selection as JPEG</source>
        <translation>Enregistrer la sélection en .JPEG</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Close</source>
        <translation>Fermer</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Connect to avsproxy</source>
        <translation>Se connecter à avsproxy</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Quit</source>
        <translation>Quitter</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Undo</source>
        <translation>Défaire</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Redo</source>
        <translation>Refaire</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Edit</source>
        <translation>Annuler toutes les éditions</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cut</source>
        <translation>Couper</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy</source>
        <translation>Copier</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Paste</source>
        <translation>Coller</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+2"/>
        <source>Delete</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Set Marker A</source>
        <translation>Mettre le marqueur A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Set Marker B</source>
        <translation>Mettre le marqueur B</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Marker A</source>
        <translation>Réinitialiser le marqueur A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Marker B</source>
        <translation>Réinitialiser le marqueur B</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Markers</source>
        <translation>Réinitialiser les marqueurs</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Load saved settings</source>
        <translation>Charger les réglages sauvegardés</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Decoder Option</source>
        <translation>Option du décodeur</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PostProcessing</source>
        <translation>Post-traitement</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>HDR tone mapping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+10"/>
        <source>Filters</source>
        <translation>Filtres</translation>
    </message>
    <message>
        <location line="-9"/>
        <source>Add partialized filter</source>
        <translation>Ajouter un filtre partiel</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Play filtered</source>
        <translation>Jouer post filtrage</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select Track</source>
        <translation>Choisir les pistes</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save audio</source>
        <translation>Enregistrer la piste audio</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Build Option</source>
        <translation>Options activées</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>&amp;Advanced</source>
        <translation>&amp;Avancé</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open Application &amp;Log</source>
        <translation>Ouvrir le fichier de &amp;log</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open Application Data &amp;Folder</source>
        <translation>Ouvrir le dossier de l&apos;application</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>About</source>
        <translation>À propos</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Play/Stop</source>
        <translation>Jouer/stopper</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Previous Frame</source>
        <translation>Image précédente</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next Frame</source>
        <translation>Image suivante</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Previous Intra Frame</source>
        <translation>Image clé précédente</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next Intra Frame</source>
        <translation>Image clé suivante</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Previous Cut Point</source>
        <translation>Point de coupe précédent</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next Cut Point</source>
        <translation>Point de coupe suivant</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Previous Black Frame</source>
        <translation>Image noire précédente</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next Black Frame</source>
        <translation>Image noire suivante</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>First Frame</source>
        <translation>Première image</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Last Frame</source>
        <translation>Dernière image</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Go To Marker A</source>
        <translation>Aller au marqueur A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go To Marker B</source>
        <translation>Aller au marqueur B</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Go To Time</source>
        <translation>Aller au temps</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Backward 1 second</source>
        <translation>Reculer d&apos;une seconde</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 1 second</source>
        <translation>Avancer d&apos;une seconde</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Backward 2 seconds</source>
        <translation>Reculer de deux secondes</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 2 seconds</source>
        <translation>Avancer de deux secondes</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Backward 4 seconds</source>
        <translation>Reculer de quatre secondes</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 4 seconds</source>
        <translation>Avancer de quatre secondes</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Backward one minute</source>
        <translation>Reculer d&apos;une minute</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward one minute</source>
        <translation>Avancer d&apos;une minute</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Zoom 1:4</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Zoom 1:2</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Zoom 1:1</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Zoom 2:1</source>
        <translation></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Fit to window</source>
        <translation>Ajuster à la fenêtre</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+67"/>
        <source>R_esampling (Hz):</source>
        <translation>Reéchantillonnage (Hz) :</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Resampling frequency (Hz)</source>
        <translation>Nouvelle fréquence (Hz)</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+40"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-2"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location line="-39"/>
        <source>Film to PAL</source>
        <translation>Film vers PAL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL to Film</source>
        <translation>PAL vers film</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Frame rate change:</source>
        <translation>Changement de fréquence (i/s)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Tempo multiplier:</source>
        <translation>Multiplicateur de rythme :</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>A value of 2.0 means twice as fast playback.</source>
        <translation>Une valeur de 2,0 signifie une lecture deux fois plus rapide.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pitch multiplier:</source>
        <translation>Multiplicateur de pas :</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Every doubling means one octave upshift</source>
        <translation>Chaque doublement signifie une montée d'octave</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Frame rate change</source>
        <translation>Changement de fréquence d'images</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>No change</source>
        <translation>Aucun changement</translation>
    </message>
    <message>
        <location line="+2"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-68"/>
        <source>Stereo</source>
        <translation>Stéréo</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>Stereo headphones</source>
        <translation>Casque Stéréo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo+surround</source>
        <translation>Stéréo + Surround</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo+center</source>
        <translation>Stéréo + centre</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo+center+surround</source>
        <translation>Stéréo + centre + surround</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo front+stereo rear</source>
        <translation>Stéréos avant + arrière</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5 channels</source>
        <translation>5 canaux</translation>
    </message>
    <message>
        <location line="+4"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+3"/>
        <source>Surround headphones</source>
        <translation>Casque Surround</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Manual (dB)</source>
        <translation>Manuel (dB)</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Gain mode:</source>
        <translation>Mode de gain :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>G_ain value:</source>
        <translation>Valeur du gain :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Maximum value:</source>
        <translation>_Valeur maximum :</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>_Mixer:</source>
        <translation>_Mixeur</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Remix</source>
        <translation>Remixer</translation>
    </message>
    <message>
        <source>Shift audio:</source>
        <translation type="vanished">Décalage audio :</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Shift Value (ms):</source>
        <translation>Valeur (ms) :</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Enable Equalizer</source>
        <translation>Activer l&apos;qualiseur</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bass (dB):</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source></source>
        <translation>Basse/</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mid (dB):</source>
        <translation>Médium cut-off (Hz) :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mid/Treble cut-off (Hz):</source>
        <translation>Médium/Aigu cut-off (Hz) :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Treble (dB):</source>
        <translation>Aigu (Hz) :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>&lt;hr&gt;&lt;p&gt;It is highly recommended to enable normalization when using positive gain values&lt;/p&gt;</source>
        <translation>&lt;hr&gt;&lt;p&gt;Il est fortement recommandé d'activer la normalisation lors de l'utilisation de valeurs de gain positives&lt;/p&gt;</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Equalizer</source>
        <translation>Equaliseur</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Front left (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Channel gains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Front left (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>&lt;hr&gt;&lt;p&gt;The final delay will be the sum of a value above and the &quot;Shift audio&quot; value provided on the Main tab&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Channel delays</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Enable Remap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Front left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Front left to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&lt;hr&gt;&lt;p&gt;Remapping does not change the channel layout, therefore:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;mapping a channel to a non-existent one will result in loss of the channel&lt;/li&gt;&lt;li&gt;mapping a non-existent channel will result in silence&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Channel remap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Audio Filters</source>
        <translation>Filtres audios</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+48"/>
        <source>An audio track is necessary to create such file</source>
        <translation>Une piste audio est nécessaire pour ce type de fichier</translation>
    </message>
    <message>
        <location line="+16"/>
        <location line="+14"/>
        <location line="+31"/>
        <location line="+6"/>
        <location line="+15"/>
        <location line="+27"/>
        <location line="+35"/>
        <source>Codec Error</source>
        <translation>Erreur de codec</translation>
    </message>
    <message>
        <location line="-114"/>
        <source>No AAC audio encoder plugin found.</source>
        <translation>Pas de plugin AAC trouvé.</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>The MP3 codec does not allow disabling reservoir.
Install lame plugin</source>
        <translation>Le codec MP3 n&apos;autorise pas l&apos;option reservoir. Installez le plugin lame</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>You don&apos;t have LAME!.
It is needed to create FLV  video.</source>
        <translation>Vous n&apos;avez pas le plugin LAME. Il est nécessaire pour créer des fichiers FLV.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Cannot select FLV1  codec.</source>
        <translation>Impossible de choisir le codec FLV1.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+192"/>
        <source>Select script to save</source>
        <translation>Choisir le script à sauvegarder</translation>
    </message>
    <message>
        <location line="+526"/>
        <source>Are you sure?</source>
        <translation>Etes-vous sur ?</translation>
    </message>
    <message>
        <location line="+235"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation>Impossible d&apos;ouvrir &quot;%s&quot;.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>File error</source>
        <translation>Erreur de fichier</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>&quot;%s&quot; does not exist.</source>
        <translation>&quot;%s&quot; n&apos;existe pas.</translation>
    </message>
    <message>
        <location line="+96"/>
        <source>Multiple Audio Tracks</source>
        <translation>Plusieurs pistes audios</translation>
    </message>
    <message>
        <location line="+418"/>
        <source>Something bad happened</source>
        <translation>Quelque chose d&apos;anormal s&apos;est produit</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-196"/>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="+47"/>
        <source>Custom</source>
        <translation>Manuel</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Mono</source>
        <translation></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>5.1</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dolby Pro Logic</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dolby Pro Logic II</source>
        <translation></translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Shift audio (ms):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Enable Compressor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Normalize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threshold (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Noise floor (dB):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ratio:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Attack time (sec):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Release time (sec):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>DRC</source>
        <translation></translation>
    </message>
    <message>
        <location line="-47"/>
        <source>Automatic</source>
        <translation>Automatique</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Gain</source>
        <translation></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Mixer</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+81"/>
        <source>Fontconfig</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FreeType 2</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Gettext</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-53"/>
        <source>SDL</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-15"/>
        <source>XVideo</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+3"/>
        <source>VDPAU</source>
        <translation></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>x86</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>x86-64</source>
        <translation></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Libraries</source>
        <translation>Librairies</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+276"/>
        <source>CPU</source>
        <translation></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Built-in Support</source>
        <translation>Options activées</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_gototime.cpp" line="+33"/>
        <source>TimeStamp:</source>
        <translation>Horodatage : </translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to Time</source>
        <translation>Aller au temps</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="+8"/>
        <source>_Job name:</source>
        <translation>Nom du job</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Output _File:</source>
        <translation>Fichier à écrire :</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Select Video To Write</source>
        <translation>Choisir le fichier</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Save Job</source>
        <translation>Enregistrer le job</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="+57"/>
        <source>Audio Plugins</source>
        <translation>Plugins audios</translation>
    </message>
    <message>
        <location line="+23"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-141"/>
        <location line="+3"/>
        <location line="+5"/>
        <location filename="../../common/gui_save.cpp" line="+58"/>
        <location line="+10"/>
        <location line="+272"/>
        <location line="+15"/>
        <location line="+19"/>
        <location line="+7"/>
        <location filename="../../common/gui_savenew.cpp" line="+436"/>
        <source>Audio</source>
        <translation></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Video Encoder Plugins</source>
        <translation>Plugin d&apos;encodage vidéo</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Video Encoder</source>
        <translation>Encoder vidéo</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Video Decoder Plugins</source>
        <translation>Plugin de décodage vidéo</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Video Decoder</source>
        <translation>Décodeur vidéo</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Audio Device Plugins</source>
        <translation>Plugin de périph. audio</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Audio Device</source>
        <translation>Périph. audio</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Audio Encoder Plugins</source>
        <translation>Plugins d&apos;encodage audio</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Audio Encoders</source>
        <translation>Encodeurs audios</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Demuxer Plugins</source>
        <translation>Plugin de lecture</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Demuxers</source>
        <translation>Demuxers</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Muxer Plugins</source>
        <translation>Plugin d&apos;écriture</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Muxers</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Plugins Info</source>
        <translation>Information plugin</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="-3"/>
        <source>_Deringing</source>
        <translation>Deringing</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+91"/>
        <source>Decode video using VDPAU (NVIDIA)</source>
        <translation>Utiliser VDPAU pour décoder (NVIDIA)</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Decode video using LIBVA (INTEL)</source>
        <translation>Utiliser LIBVA pour décoder (INTEL/…)</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Decode video using VideoToolbox (macOS)</source>
        <translation>Décoder la vidéo à l&apos;aide de VideoToolbox (macOS)</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>If you use Hw decoding, it is better to use the matching display driver</source>
        <translation>Si vous activez le décodage HW, il est préférable d&apos;utiliser la même méthode d&apos;affichage</translation>
    </message>
    <message>
        <location line="-388"/>
        <source>_Check for new release</source>
        <translation>Vérifier s&apos;il y a de nouvelle version</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>SIMD</source>
        <translation></translation>
    </message>
    <message>
        <location line="+62"/>
        <source>Multi-threading</source>
        <translation>Multithreading</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>Caching of decoded pictures</source>
        <translation>Mise en cache des images décodées</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Cache size:</source>
        <translation>_Taille du cache :</translation>
    </message>
    <message>
        <location line="+46"/>
        <location line="+3"/>
        <source>Sdl driver</source>
        <translation></translation>
    </message>
    <message>
        <location line="+15"/>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+217"/>
        <source>PCM</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Master</source>
        <translation></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Pro Logic</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pro Logic II</source>
        <translation></translation>
    </message>
    <message>
        <location line="+85"/>
        <source>De_ringing</source>
        <translation></translation>
    </message>
    <message>
        <location line="-61"/>
        <source>System language</source>
        <translation>Langue du système</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>_Language</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Import</source>
        <translation></translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Post-Processing</source>
        <translation></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Limit Refresh Rate</source>
        <translation>Limiter le rafraichissement</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Refresh Rate Cap (ms)</source>
        <translation>Limite en ms</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Enable OpenGL display in filter preview dialogs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>OpenGL video display and filters require OpenGL to be enabled and working at application startup to be available</source>
        <translation>L&apos;affichage vidéo et les filtres OpenGL nécessitent qu&apos;OpenGL soit activé et qu&apos;il fonctionne au démarrage de l&apos;application pour être disponible </translation>
    </message>
    <message>
        <location line="+8"/>
        <source>GUI Rendering Options</source>
        <translation>Options de l&apos;interface lors du rendu</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Display</source>
        <translation>Affichage</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Decode video using NVDEC (NVIDIA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+30"/>
        <source>HW Accel</source>
        <translation>Accél. HW</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Threading</source>
        <translation></translation>
    </message>
    <message>
        <location line="-298"/>
        <source>_Always ask which port to use</source>
        <translation>Toujours demander le port à utiliser</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Default port to use</source>
        <translation>Port par défaut</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>This renderer provides no hardware acceleration</source>
        <translation>Ce moteur de rendu ne fournit aucune accélération matérielle</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>DXVA2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+190"/>
        <source>OpenGL</source>
        <translation></translation>
    </message>
    <message>
        <location line="-187"/>
        <source>LibVA</source>
        <translation></translation>
    </message>
    <message>
        <location line="+289"/>
        <source>Preferences</source>
        <translation>Préférences</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-131"/>
        <source>Queue</source>
        <translation>Mettre en file d&apos;attente</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Information</source>
        <translation></translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+2"/>
        <source>Clear recent items</source>
        <translation>Effacer les éléments récents</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Pr&amp;eferences</source>
        <translation>Préférences</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+2"/>
        <source>Save current settings as default</source>
        <translation>Enregistrer les réglages courants comme défaut</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Plugins</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="+880"/>
        <location line="+50"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="+80"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="+150"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="+58"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="+134"/>
        <location filename="../../common/gui_main.cpp" line="+177"/>
        <location line="+27"/>
        <location line="+24"/>
        <location line="+8"/>
        <location line="+4"/>
        <location filename="../../common/gui_save.cpp" line="+205"/>
        <location line="+92"/>
        <location line="+7"/>
        <location line="+20"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="+68"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location line="-50"/>
        <location line="+50"/>
        <source>You cannot remove *all* the video
</source>
        <translation>Vous ne pouvez pas *tout* enlever</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edFrameType.cpp" line="+72"/>
        <source>Updating frametype</source>
        <translation>Mise à jour des informations</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="+0"/>
        <source>Core has been compiled without LIBVA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Avidemux_core n&apos;a pas été compilé avec LIBVA, mais avidemux_app oui. Il y a un problème d&apos;installation.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="+0"/>
        <source>Core has been compiled without VDPAU support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Avidemux_core n&apos;a pas été compilé avec VDPAU, mais avidemux_app oui. Il y a un problème d&apos;installation.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="+0"/>
        <source>Core has been compiled without XVBA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Avidemux_core n&apos;a pas été compilé avec XVBA, mais avidemux_app oui. Il y a un problème d&apos;installation.</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="-82"/>
        <location filename="../../common/gui_save.cpp" line="-647"/>
        <source>No audio track</source>
        <translation>Pas de piste audio</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Cannot select the MPEG-4 SP codec.</source>
        <translation>Impossible de choisir le codec MPEG4 SP</translation>
    </message>
    <message>
        <location line="+93"/>
        <source>Cannot select MPEG-4 SP codec.</source>
        <translation>Impossible de choisir le codec MPEG4 SP</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>You don&apos;t have FAAC!.
It is needed to create PSP compatible video.</source>
        <translation>FAAC n&apos;est pas disponible. 
Il est nécessaire pour créer un fichier compatible PSP</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-1551"/>
        <source>Select script/project to run</source>
        <translation>Choisir un script ou projet à lancer</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Select script to run</source>
        <translation>Choisir un script à lancer</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Select script to debug</source>
        <translation>Choisir un script à débugger</translation>
    </message>
    <message>
        <location line="+71"/>
        <source>You are about to clear the list of recent files and projects. This can&apos;t be undone. Proceed?</source>
        <translation>Vous êtes sur le point d&apos;effacer la liste des fichiers et projets récents. Cela ne peut pas être annulé. Continuer ?</translation>
    </message>
    <message>
        <location line="+128"/>
        <source>Not coded in this version</source>
        <translation>Pas disponible dans cette version</translation>
    </message>
    <message>
        <location line="+11"/>
        <location line="+77"/>
        <source>Select Video File...</source>
        <translation>Choisir un fichier vidéo…</translation>
    </message>
    <message>
        <location line="-48"/>
        <source>No engine</source>
        <translation>Pas de moteur de script</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>tinyPy script is not enabled in this build</source>
        <translation>tinypy n&apos;est pas disponible. C&apos;est anormal.</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Select Video File to Append...</source>
        <translation>Choisir le fichier à concaténer…</translation>
    </message>
    <message>
        <location line="+144"/>
        <source>The cut points of the pasted video are not on keyframes.
Video saved in copy mode will be corrupted at these points.
Proceed anyway?</source>
        <translation>Les points de coupe de la vidéo collée ne sont pas sur des images clés.
La vidéo enregistrée en mode copie sera corrompue à ces points.
Voulez-vous continuer malgré tout ?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The cut points of the pasted selection may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Codec or codec settings across a cut point of the pasted video do not match.
Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points of the pasted video could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+126"/>
        <location line="+21"/>
        <source>Cutting</source>
        <translation>Coupe</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>It is impossible to cut out the entire video. Please recheck the position of markers A and B.</source>
        <translation>Il est impossible de couper toute la vidéo. Veuillez revérifier la position des marqueurs A et B.</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Deleting</source>
        <translation>Suppression</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>It is impossible to delete the entire video. Please recheck the position of markers A and B.</source>
        <translation>Il est impossible de supprimer toute la vidéo. Veuillez revérifier la position des marqueurs A et B.</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Error while cutting out.</source>
        <translation>Erreur lors de la coupe.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>The end point of the cut is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>The end point of the deletion is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation>Le point final de la coupe n&apos;est pas sur une image clé.
La vidéo enregistrée en mode copie sera corrompue.
Continuer ?</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the cut may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the deletion may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Codec or codec settings across the cut do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Codec or codec settings across the deletion do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points could not be checked.
This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+120"/>
        <source>Permission error</source>
        <translation>Erreur de permission</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Cannot open project using the video loader.</source>
        <translation>Impossible d&apos;ouvrir le projet à l&apos;aide du chargeur vidéo.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Try &apos;File&apos; -&gt; &apos;Load/Run Project...&apos;</source>
        <translation>Essayer le menu &quot;Fichier -&gt; lancer un projet…&quot;</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Could not open the file</source>
        <translation>Impossible d&apos;ouvrir le fichier</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>The file you just loaded contains several audio tracks.
Go to Audio-&gt;MainTrack to select the active one.</source>
        <translation>Le fichier que vous venez de charger contient plusieurs pistes audio.
Allez dans le menu &quot;Audio -&gt; Choisir les pistes&quot; pour sélectionner celle qui est active.</translation>
    </message>
    <message>
        <location line="+106"/>
        <source>Something failed when appending</source>
        <translation>Quelque chose a échoué lors de l&apos;ajout</translation>
    </message>
    <message>
        <location line="+319"/>
        <source>Something bad happened (II)</source>
        <translation>Quelque chose d&apos;horrible est arrivé (II)</translation>
    </message>
    <message>
        <location line="-201"/>
        <location line="+43"/>
        <source>The tinypy plugin is missing.
Expect problems.</source>
        <translation>Le plugin tinypy est manquant.
Attendez-vous à des problèmes.</translation>
    </message>
    <message>
        <location line="+102"/>
        <source>Checking video</source>
        <translation>Vérification de la vidéo</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>No error found</source>
        <translation>Pas d&apos;erreur</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Errors found in %u frames</source>
        <translation>Il y a %u frames avec des erreurs</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Marker A &gt; B</source>
        <translation>Le marqueur A est supérieur à B</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot delete the selection.</source>
        <translation>Impossible de détruire la zone sélectionnée</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>You can&apos;t remove all frames</source>
        <translation>Vous ne pouvez pas tout supprimer</translation>
    </message>
    <message>
        <location line="+126"/>
        <source>_Track from video:</source>
        <translation>_Piste venant de la vidéo</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Main Audio Track</source>
        <translation>Piste audio principale</translation>
    </message>
    <message>
        <location line="+29"/>
        <location line="+7"/>
        <source>Invalid audio index given</source>
        <translation>Piste audio invalide</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Cannot use that file as audio track</source>
        <translation>Impossible d&apos;utiliser ce fichier comme piste audio</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Audio file not found in list, even though it should be there. Create a bug report!</source>
        <translation>Fichier audio non trouvé dans la liste, alors qu&apos;il devrait être là. C&apos;est un bug.</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Unable to set the audio language: No video loaded yet!</source>
        <translation>Impossible de choisir la langue, aucune vidéo chargée</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Setting the language for the given track index is not possible: Video has no audio file!</source>
        <translation>Choisir la langue est impossible, le fichier n&apos;a pas de piste son</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Setting the language for the given track index is not possible: Invalid track index!</source>
        <translation>Impossible de choisir la langue, piste audio invalide</translation>
    </message>
    <message>
        <location line="+144"/>
        <source>AvsProxy</source>
        <translation></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed to connect to avsproxy.
Is it running ?</source>
        <translation>Impossible de se connecter à VS/AVS proxy. Est-il lancé ?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>avsproxy</source>
        <translation></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Frame type:</source>
        <translation>Type d&apos;image :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame size:</source>
        <translation>Taille de l&apos;image :</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Frame Hex Dump</source>
        <translation>Hex dump :</translation>
    </message>
    <message>
        <location line="+113"/>
        <source>Oops</source>
        <translation></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>This function is disabled or no longer valid</source>
        <translation>Cette fonction est désactivée ou n&apos;est plus disponible.</translation>
    </message>
    <message>
        <location filename="../../common/gui_play.cpp" line="+460"/>
        <source>Trouble initializing audio device</source>
        <translation>Le périphérique audio ne peut pas être initialisé</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+10"/>
        <source>Audio encoder index out of bounds</source>
        <translation>Index de l&apos;encodeur audio hors limite</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>No file loaded</source>
        <translation>Pas de fichier chargé</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Job</source>
        <translation></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot reach database. Do you have Job control running ?</source>
        <translation>Impossible de se connecter à la base de données. Avidemux_job est-il lancé ?</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Output file</source>
        <translation>Fichier de destination</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Job name</source>
        <translation>Nom du job</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Queue job to jobList</source>
        <translation>Ajouter à la liste de job</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Select Workbench to Save</source>
        <translation>Choisir le projet à enregistrer</translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+2"/>
        <source>Select File to Save Audio</source>
        <translation>Choisir le fichier audio à enregistrer</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Select JPEG Sequence to Save</source>
        <translation>Choisir l&apos;image JPEG à enregistrer</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select BMP to Save</source>
        <translation>Choisir l&apos;image BMP à enregistrer</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select JPEG to Save</source>
        <translation>Choisir l&apos;image JPEG à enregistrer</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select PNG to Save</source>
        <translation>Choisir l&apos;image PNG à enregistrer</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Select File to Save</source>
        <translation>Choisir le fichier à enregistrer</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Saving audio</source>
        <translation>Sauvegarde audio</translation>
    </message>
    <message>
        <location line="+100"/>
        <source>Function not implemented
</source>
        <translation>Fonction non implementée</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Cannot create stream</source>
        <translation>Impossible de créer le flux audio</translation>
    </message>
    <message>
        <location line="-34"/>
        <location line="+41"/>
        <source>Saving failed</source>
        <translation>La sauvegarde a échoué</translation>
    </message>
    <message>
        <location line="+84"/>
        <source>Jpeg</source>
        <translation>JPEG</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed to save as JPEG</source>
        <translation>Échec de l&apos;enregistrement au format JPEG</translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Saving selection as set of JPEG images</source>
        <translation>Enregistrement de la sélection en tant qu&apos;ensemble d&apos;images JPEG </translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Warning</source>
        <translation>Attention</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Saving images failed.</source>
        <translation>Échec de l&apos;enregistrement des images.</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>PNG</source>
        <translation></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed to save as PNG</source>
        <translation>Échec de l&apos;enregistrement au format PNG</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>Cannot get tinyPy script engine</source>
        <translation>Impossible d&apos;obtenir le moteur de script tinyPy</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Output file not specified</source>
        <translation>Le fichier de destination n&apos;est pas indiqué</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Job script %s already exists. Overwrite?</source>
        <translation>Le script de travail %s existe déjà. Écraser ?</translation>
    </message>
    <message>
        <location line="-114"/>
        <location line="+76"/>
        <source>Done</source>
        <translation>Fait</translation>
    </message>
    <message>
        <location line="-78"/>
        <source>Maximum number of 99999 images reached.</source>
        <translation>Nombre maximum de 99999 images atteint.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Saved %d images.</source>
        <translation>%d images sauvées.</translation>
    </message>
    <message>
        <location line="+56"/>
        <source>BMP op failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Saving %s as a BMP file failed.</source>
        <translation>L&apos;enregistrement %s en tant que fichier BMP échoué</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>File %s has been successfully saved.</source>
        <translation>Le fichier %s a été enregistré avec succès.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed</source>
        <translation>Echec</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>File %s was NOT saved correctly.</source>
        <translation>Le fichier %s n&apos;a pas été enregistré correctement.</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Cannot add job %s</source>
        <translation>Impossible d&apos;ajouter le job %s</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-253"/>
        <source>Reuse previous first pass data ?
Warning, the settings must be close.</source>
        <translation>Réutiliser les données précédentes du premier passage ?
Attention, les paramètres doivent être proche.</translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+172"/>
        <location line="+12"/>
        <location line="+16"/>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Cannot instantiate video chain</source>
        <translation>Impossible d&apos;instancier la chaîne vidéo</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Cannot create encoder</source>
        <translation>Impossible de créer l&apos;encodeur</translation>
    </message>
    <message>
        <source>Cannot setup codec. Bitrate too low?</source>
        <translation type="vanished">Impossible de configurer le codec. Bitrate trop bas?</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Cannot setup audio encoder, make sure your stream is compatible with audio encoder (number of channels, bitrate, format)</source>
        <translation>Impossible de configurer l&apos;encodeur audio, assurez-vous que votre flux est compatible avec l&apos;encodeur audio (nombre de canaux, bitrate, format)</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>The video is in copy mode but the cut points are not on keyframes.
The video will be saved but there will be corruption at cut point(s).
Do you want to continue anyway ?</source>
        <translation>La vidéo est en mode copie, mais les points de coupure ne sont pas sur les images clés.
La vidéo sera enregistrée, mais il y aura des corruption au point de coupure(s).
Voulez-vous continuer ?</translation>
    </message>
    <message>
        <location line="-259"/>
        <location line="+292"/>
        <location line="+25"/>
        <source>Muxer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-327"/>
        <source>Cannot set up encoder for the first pass. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+292"/>
        <source>Cannot instantiate muxer</source>
        <translation>Impossible d&apos;instancier muxer</translation>
    </message>
    <message>
        <location line="-102"/>
        <source>Cannot set up encoder. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+74"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The choice of cut points may result in playback interruption due to reversed display order of frames if saved in copy mode.
Do you want to continue anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Codec or codec settings across a cut point do not match. Playback of the video saved in copy mode may stop at this point.
Do you want to continue anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Cannot open </source>
        <translation>Ne peut pas ouvrir</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="+23"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-138"/>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="-2"/>
        <source>Disabled</source>
        <translation>Désactivé</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="+1"/>
        <source>Auto-detect</source>
        <translation>Détection auto</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-9"/>
        <source>_Interlaced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ca_rtoon mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Greyscale</source>
        <translation>Niveaux de &amp;gris</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Turbo mode</source>
        <translation>Mode Turbo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>C_hroma optimizer</source>
        <translation>Optimiseur C&amp;hroma</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+9"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+2"/>
        <source>Main</source>
        <translation>Principal</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+4"/>
        <source>Very Low</source>
        <translation>Très Bas</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Medium</source>
        <translation>Moyenne</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Very High</source>
        <translation>Très Haut</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ultra High</source>
        <translation>Ultra Haut</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion Search Precision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mode Decision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Limited Search</source>
        <translation>Recherche Limitée</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium Search</source>
        <translation>Recherche moyenne</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Wide Search</source>
        <translation>Recherche Large</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VHQ Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Max B Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quarter Pixel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>GMC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>BVHQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced Simple Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>4MV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Chroma ME</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>HQ AC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>More Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Min Gop Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Gop Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>GOP Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Motion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>H263</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mpeg</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantization Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Trellis Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Two Pass Tuning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Key Frame Boost(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>I-frames closer than...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>.. are reduced by(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Overflow Improvement(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Overglow Degradation(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Curve Compression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>High Bitrate Scenes (%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Bitrate Scenes (%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Overflow Control Strength</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Two Pass</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Xvid4 Configuration</source>
        <translation>Configuration Xvid4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="+23"/>
        <source>%d minute(s)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>%d hour(s)</source>
        <translation>%d heure(s)</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Less than a minute</source>
        <translation>Moins d&apos;une minute</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>A few seconds</source>
        <translation>Quelques secondes</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-1"/>
        <source>DTS</source>
        <translation></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MP2</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MP3</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>WMAPRO</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>WMA Lossless</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>WMA</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>LPCM</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AC3</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>OPUS</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FLAC</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>E-AC3</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Float PCM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ogg Vorbis</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MP4</source>
        <translation></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>AAC</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>QDM2</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AMR-NB</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MSADPCM</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>A-law</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>ULAW</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>IMA ADPCM</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>8-bit PCM</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>TrueHD</source>
        <translation></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Unknown codec</source>
        <translation>Codec inconnu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStreamMP3.cpp" line="+199"/>
        <source>Building time map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreImage/src/ADM_imageSave.cpp" line="+88"/>
        <source>Cannot allocate enough memory</source>
        <translation>Impossible d&apos;allouer suffisamment de mémoire</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Cannot create output file</source>
        <translation>Impossible de créer le fichier de sortie</translation>
    </message>
    <message>
        <location line="+246"/>
        <source>Memory error</source>
        <translation type="unfinished">Impossible d&apos;allouer la mémoire</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreMuxer/src/ADM_coreMuxerFfmpeg.cpp" line="+468"/>
        <source>Saving</source>
        <translation>Enregistrement</translation>
    </message>
    <message>
        <location line="+196"/>
        <source>The saved video is incomplete. The error occured at %s (%d%). This may happen as result of invalid time stamps in the video.</source>
        <translation>La vidéo enregistrée est incomplète. L&apos;erreur s&apos;est produite à %s (%d%). Cela peut se produire en raison d&apos;horodatages non valides dans la vidéo.</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Too short</source>
        <translation>Trop court</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_iso639.cpp" line="+17"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="+382"/>
        <source>Unknown</source>
        <translation>Inconnu</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-4"/>
        <source>can&apos;t open &quot;%s&quot;: %s
%s
</source>
        <translation>Impossible d&apos;ouvrir &quot;%s&quot;: %s
%s
</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+85"/>
        <source>filesystem full</source>
        <translation>système de fichier plein</translation>
    </message>
    <message>
        <location line="-85"/>
        <location line="+85"/>
        <source>quota exceeded</source>
        <translation>quota dépassé</translation>
    </message>
    <message>
        <location line="-84"/>
        <location line="+85"/>
        <source>Please free up some space and press RETRY to try again.</source>
        <translation>Veuillez libérer de l&apos;espace et appuyez sur Réessayer.</translation>
    </message>
    <message>
        <location line="-78"/>
        <source>can&apos;t open &quot;%s&quot;: %u (%s)
</source>
        <translation>Ne peut pas ouvrir &quot;%s&quot;: %u (%s)
</translation>
    </message>
    <message>
        <location line="+75"/>
        <source>can&apos;t write to file &quot;%s&quot;: %s
%s
</source>
        <translation>Ne peut pas écrire dans le fichier &quot;%s&quot;: %s</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+11"/>
        <source>__unknown__</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Ignore</source>
        <translation>Ignorer</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Retry</source>
        <translation>Réessayer</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>can&apos;t write to file &quot;%s&quot;: %u (%s)
</source>
        <translation>Ne peut pas écrire dans le fichier &quot;%s&quot;: %u (%s)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="-7"/>
        <source>NTSC 4:3</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+1"/>
        <source>NTSC 16:9</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL 4:3</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL 16:9</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1:1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/ADM_ffmp43.cpp" line="+394"/>
        <location line="+45"/>
        <source>Codec</source>
        <translation></translation>
    </message>
    <message>
        <location line="-44"/>
        <source>Internal error finding decoder for %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Internal error opening libavcodec %s decoder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Internal error finding codec 0x%x</source>
        <translation type="vanished">Erreur interne pour trouver le codec 0x%x</translation>
    </message>
    <message>
        <source>Internal error opening 0x%x</source>
        <translation type="vanished">Erreur interne lors de l&apos;ouverture 0x%x</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="+0"/>
        <source>Core has been compiled without DXVA2 support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Core a été compilé sans le support DXVA2, mais l&apos;application a été compilée avec elle.
Incompatibilité d&apos;installation</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="+246"/>
        <source>Cannot compile shader</source>
        <translation>Impossible de compiler le shader</translation>
    </message>
    <message>
        <location filename="../../common/ADM_toolkit/automation.cpp" line="+235"/>
        <source>Permission Error</source>
        <translation>Erreur de permission</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open script &quot;%s&quot;.</source>
        <translation>Impossible d&apos;ouvrir le script &quot;%s&quot;.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>File Error</source>
        <translation>Erreur de fichier</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Script &quot;%s&quot; does not exist.</source>
        <translation>Le script &quot;%s&quot; n&apos;existe pas.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="-5"/>
        <source>Changing the options above will results the editor jumping to the nearest prior key frame.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>Fast YUV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB clipping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB soft limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB Reinhard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB Hable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Tone mapping:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Saturation:</source>
        <translation>_Saturation :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Boost (level multiplier):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Adaptive RGB tonemappers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+8"/>
        <source>Clipping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>Compression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_RGB out of gamut handling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_floatResettable.cpp" line="+131"/>
        <source>Reset</source>
        <translation>Réinitialiser</translation>
    </message>
</context>
<context>
    <name>admIvtc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="+43"/>
        <source>ADM ivtc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>All in one ivtc.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>aften</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/aften/audioencoder_aften.cpp" line="+246"/>
        <source>Aften Configuration</source>
        <translation>Configuration d&apos;Aften</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>_Bitrate:</source>
        <translation>Débit :</translation>
    </message>
</context>
<context>
    <name>aiEnhance</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/aiEnhance/ADM_vidAiEnhance.cpp" line="+38"/>
        <source>A.I. Enhance (sw)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Neural network upscalers for low resolution videos.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/aiEnhance/qt4/Q_aiEnhance.cpp" line="+64"/>
        <source>Peek Original</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <location line="+54"/>
        <source>Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Preview scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>x2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>x3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>x4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Warning: the scale of the preview does not match the scale of the selected filter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>aiEnhanceDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/aiEnhance/qt4/aiEnhance.ui" line="+14"/>
        <source>A.I. Enhance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>fast-FSRCNN x2 upscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>fast-FSRCNN x2 upscale with denoising</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale for anime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale with denoising</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale mild</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x3 upscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x4 upscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>PL3NET x2 upscale</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>analyzer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/ADM_vidAnalyzer.cpp" line="+32"/>
        <source>Analyzer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Null filter. Vectorscope, Waveform scopes and Histograms in Preview.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>analyzerDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/qt4/analyzer.ui" line="+14"/>
        <source>Analyzer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>aomencoder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/av1aom/ADM_av1AomEncDialog.cpp" line="+28"/>
        <source>Speed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Lower values favor quality over speed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Threads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Maximum number of threads allowed, the encoder may use less at its discretion.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Use at most as many threads as CPU cores</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>GOP Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Treat input as having full color range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Encoding Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Speed vs Quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Keyframes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Miscellaneous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>libaom AV1 Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artCartoon</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/ADM_vidArtCartoon.cpp" line="+44"/>
        <source>Cartoon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artCartoonDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/qt4/artCartoon.ui" line="+14"/>
        <source>Cartoon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Threshold</source>
        <translation>Seuil</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Scatter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Color level</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artCharcoal</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/ADM_vidArtCharcoal.cpp" line="+41"/>
        <source>Charcoal / Chalkboard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from MLT.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artCharcoalDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="+14"/>
        <source>Charcoal / Chalkboard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Intensity</source>
        <translation>Intensité</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Color</source>
        <translation>Couleur</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Vertical scatter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Horizontal scatter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Chalkboard</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artChromaHold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/ADM_vidArtChromaHold.cpp" line="+41"/>
        <source>Chroma Hold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Monochrome effect with kept color(s).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artChromaHoldDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="+14"/>
        <source>Chroma Hold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Tertiary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Secondary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Primary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+108"/>
        <source>Distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Cutoff slope</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Pick Chroma</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artChromaKey</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/ADM_vidArtChromaKey.cpp" line="+42"/>
        <source>Chroma Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Replace &quot;green screen&quot; with an image.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/Q_artChromaKey.cpp" line="+286"/>
        <source>Select Background Image</source>
        <translation>Sélectionner l&apos;image d&apos;arrière-plan</translation>
    </message>
</context>
<context>
    <name>artChromaKeyDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="+14"/>
        <source>Chroma Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+49"/>
        <source>Primary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Tertiary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Secondary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Cutoff slope</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Pick Chroma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Select image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Show calibration background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>No spill control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Weighted alpha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>AVG alpha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>RMS alpha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MIN alpha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Distance</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artColorEffect</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/ADM_vidArtColorEffect.cpp" line="+33"/>
        <source>Color Effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artColorEffectDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="+14"/>
        <source>Color Effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Sepia</source>
        <translation>Sépia</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vivid</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>RGB</source>
        <translation>RVB</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Heat</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Radium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Red-green</source>
        <translation>Rouge-vert</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Monochrome</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Old photo</source>
        <translation>Vieille photo</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Night vision</source>
        <translation>Vision nocturne</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>X-ray</source>
        <translation>Rayon X</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Shades</source>
        <translation>Nuances</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>XPRO</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Yellow-blue</source>
        <translation>Jaune-bleu</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Yellow-bluish</source>
        <translation>Jaune-bleuâtre</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Chrome</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Esses</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artDynThreshold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/ADM_vidArtDynThreshold.cpp" line="+41"/>
        <source>Dynamic Threshold</source>
        <translation>Seuil dynamique</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adaptive luma thresholding </source>
        <translation>Seuil de luminance adaptatif</translation>
    </message>
</context>
<context>
    <name>artDynThresholdDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/qt4/artDynThreshold.ui" line="+14"/>
        <source>Dynamic Threshold</source>
        <translation>Seuil dynamique</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Levels</source>
        <translation>Niveaux</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Offset</source>
        <translation>Décalage</translation>
    </message>
</context>
<context>
    <name>artGrid</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/ADM_vidArtGrid.cpp" line="+35"/>
        <source>Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Video wall effect.</source>
        <translation>Effet de mur vidéo</translation>
    </message>
</context>
<context>
    <name>artGridDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/qt4/artGrid.ui" line="+14"/>
        <source>Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Grid size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Roll previous frames</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artMirror</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/ADM_vidArtMirror.cpp" line="+41"/>
        <source>Mirror</source>
        <translation>Miroir</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mirror horizontally or vertically.</source>
        <translation>Miroir horizontal ou vertical</translation>
    </message>
</context>
<context>
    <name>artMirrorDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="+14"/>
        <source>Mirror</source>
        <translation>Miroir</translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Displacement</source>
        <translation>Déplacement</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Horizontal - keep left</source>
        <translation>Horizontal, garder côté gauche</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Horizontal - keep right</source>
        <translation>Horizontal, garder côté droit</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical - keep top</source>
        <translation>Vertical, garder le haut</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical - keep bottom</source>
        <translation>Vertical, garder le bas</translation>
    </message>
</context>
<context>
    <name>artPixelize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/ADM_vidArtPixelize.cpp" line="+59"/>
        <source>Pixelize</source>
        <translation>Pixeliser</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pixelize image.</source>
        <translation>Image pixelisée</translation>
    </message>
</context>
<context>
    <name>artPixelizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/qt4/artPixelize.ui" line="+14"/>
        <source>Pixelize</source>
        <translation>Pixeliser</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Pixel size</source>
        <translation>Taille du pixel</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>x</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>artPosterize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/ADM_vidArtPosterize.cpp" line="+44"/>
        <source>Posterize</source>
        <translation>Postériser</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artPosterizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/qt4/artPosterize.ui" line="+14"/>
        <source>Posterize</source>
        <translation>Postériser</translation>
    </message>
    <message>
        <location line="+62"/>
        <source>Levels</source>
        <translation>Niveaux</translation>
    </message>
</context>
<context>
    <name>artVHS</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/ADM_vidArtVHS.cpp" line="+39"/>
        <source>VHS</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VHS effect. Most authentic at lower resolutions.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artVHSDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="+14"/>
        <source>VHS</source>
        <translation></translation>
    </message>
    <message>
        <location line="+132"/>
        <source>Luma bandwidth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-90"/>
        <source>Chroma bandwidth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Sync error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-76"/>
        <source>Use zero delay filter for chroma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Use zero delay filter for luma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Sync error filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Noise</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artVignette</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/ADM_vidArtVignette.cpp" line="+43"/>
        <source>Vignette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lens vignetting effect, ported from frei0r.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>artVignetteDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/qt4/artVignette.ui" line="+14"/>
        <source>Vignette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Size of the unaffected center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Softness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Aspect ratio</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>asciiView</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asciiView/ADM_vidAscii.cpp" line="+64"/>
        <source>Ascii View</source>
        <translation>ASCII</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ascii view</source>
        <translation>ASCII</translation>
    </message>
</context>
<context>
    <name>asfdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asf.cpp" line="+158"/>
        <source>File Error.</source>
        <translation>Erreur de fichier</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open file
</source>
        <translation>Ne peut pas ouvrir le fichier
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asfHeaders.cpp" line="+468"/>
        <source>Indexing</source>
        <translation>Indexation</translation>
    </message>
</context>
<context>
    <name>asharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/ADM_vidAsharp.cpp" line="+69"/>
        <source>Asharp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adaptative sharpener by MarcFD.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>asharpDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="+14"/>
        <source>ASharp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+127"/>
        <source>High quality block filtering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-96"/>
        <source>Adaptive strength</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+85"/>
        <source>Block adaptive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-108"/>
        <source>Threshold</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ass</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="+77"/>
        <source>Hardcode ASS/SSA/SRT subtitles using libass.</source>
        <translation>Incruster des sous-titres ASS/SSA/SRT avec libass</translation>
    </message>
    <message>
        <location line="+131"/>
        <source>_Subtitle file (ASS/SSA):</source>
        <translation>Fichier de sous-titres (ASS/SSA) :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Line spacing:</source>
        <translation>Inter-lignes :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Font scale:</source>
        <translation>Taille de la fonte :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Top margin:</source>
        <translation>Marge haute :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Botto_m margin:</source>
        <translation>Marge basse :</translation>
    </message>
    <message>
        <location line="-136"/>
        <source>SSA/ASS/SRT</source>
        <translation></translation>
    </message>
    <message>
        <location line="+92"/>
        <source>Format ?</source>
        <translation>Format ?</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Are you sure this is an ASS/SSA file ?</source>
        <translation>Êtes-vous sûr qu&apos;il s&apos;agit d&apos;un fichier ASS/SSA ?</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Select Subtitle File</source>
        <translation>Sélectionner le fichier de sous-titre</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Do not adjust</source>
        <translation>Ne pas ajuster</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Adjust for display aspect ratio:</source>
        <translation>Ajustez le format d&apos;affichage : </translation>
    </message>
    <message>
        <location line="+4"/>
        <source>ASS</source>
        <translation></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>This is a SRT file. Convert to SSA ?</source>
        <translation>Il s&apos;agit d&apos;un fichier SRT. Convertir en SSA ? </translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+5"/>
        <location line="+9"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Cannot load this SRT file.</source>
        <translation>Impossible de charger ce fichier SRT.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cannot convert to SSA.</source>
        <translation>Impossible de convertir vers SSA.</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Cannot save converted file.</source>
        <translation>Impossible d&apos;enregistrer le fichier converti.</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Fonts</source>
        <translation>Fontes</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Preparing the fonts can take a few minutes the first time.
This message will not be displayed again.</source>
        <translation>La préparation des fontes peut prendre plusieurs minutes la premère fois.
Ce message n&apos;apparaitra pas la prochaine fois.</translation>
    </message>
    <message>
        <location line="+89"/>
        <source>SSA Error</source>
        <translation>Erreur SSA</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>ass_read_file() failed for %s</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>avimuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAvi.cpp" line="+75"/>
        <source>Bad Idea</source>
        <translation>Mauvaise idée</translation>
    </message>
    <message>
        <source>Using H264/H265 in AVI is a bad idea, MKV is better for that.
 Do you want to continue anyway?</source>
        <translation type="vanished">L&apos;utilisation de H264/H265 avec AVI n&apos;est pas conseillé, MKV est mieux pour cela.
 Voulez-vous continuer malgré tout ?</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Using H264/H265 in AVI is a bad idea, MKV is better for that.
 Do you want to continue anyway ?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot create AVI file</source>
        <translation>Impossible de créer le fichier AVI</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="+25"/>
        <source>AVI</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start as legacy AVI and switch to OpenDML mode when approaching the 4 GiB file size limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>OpenDML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Muxing Format</source>
        <translation>Format du muxeur</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Avi Muxer</source>
        <translation>AVI</translation>
    </message>
</context>
<context>
    <name>avsfilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="+599"/>
        <source>Select wine filename[wine/cedega/etc.]</source>
        <translation>Choisir le nom de l&apos;exécutable wine (wine/cedega/…)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select avs filename[*.avs]</source>
        <translation>Choisir le fichier avisynth (*.avs)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>AvsFilter config</source>
        <translation>Configuration AVSFilter</translation>
    </message>
    <message>
        <location line="-12"/>
        <source>_wine app file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_loader file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Select loader filename[avsload.exe]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_avs file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_pipe timeout:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>bitrate</name>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="+51"/>
        <source>Constant Bitrate</source>
        <translation>Débit constant</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Quantiser</source>
        <translation type="unfinished">Quantisation constante</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Same Quantiser as Input</source>
        <translation type="unfinished">Même quantisation que la source</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Rate Factor</source>
        <translation type="unfinished">Rate Factor constant</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two Pass - Video Size</source>
        <translation type="unfinished">2 Passes- Taille de la vidéo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two Pass - Average Bitrate</source>
        <translation type="unfinished">2 Passes - Bitrate moyen</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Encoding mode</source>
        <translation type="unfinished">Mode d&apos;encodage</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bitrate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+86"/>
        <source>Target bitrate (kb/s)</source>
        <translation>Débit cible (kb/s)</translation>
    </message>
    <message>
        <location line="+5"/>
        <location line="+19"/>
        <source>Quantizer</source>
        <translation>Quantisation</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Target video size (MB)</source>
        <translation>Taille cible de la vidéo (Mo)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Average bitrate (kb/s)</source>
        <translation>Débit moyen (kb/s)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>-</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>black</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="+49"/>
        <source>Replace a section by black.</source>
        <translation>Remplacer une portion de la vidéo par du noir</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Replace by Black</source>
        <translation>Remplacer par du noir</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>Black</source>
        <translation>Noir</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>_Start time:</source>
        <translation>_Début :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Fin :</translation>
    </message>
</context>
<context>
    <name>blacken</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/ADM_vidBlackBorder.h" line="+43"/>
        <source>Blacken Borders</source>
        <translation>Noircir les bords</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove noisy edge by turning them to black.</source>
        <translation>Supprime les bords endommagés en les remplacant par du noir</translation>
    </message>
</context>
<context>
    <name>blackenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+14"/>
        <source>Blacken Borders</source>
        <translation>Noircir les bordures</translation>
    </message>
    <message>
        <location line="+38"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+61"/>
        <source>Right:</source>
        <translation>Droit :</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+7"/>
        <source>Top:</source>
        <translation>Haut :</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Reset</source>
        <translation>Réinitialiser</translation>
    </message>
    <message>
        <location line="+21"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+74"/>
        <source>Bottom:</source>
        <translation>Bas :</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="-14"/>
        <source>Left:</source>
        <translation>Gauche :</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="-30"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>Masquer la sélection</translation>
    </message>
</context>
<context>
    <name>blackframes</name>
    <message>
        <location filename="../../common/gui_blackframes.cpp" line="+113"/>
        <location line="+155"/>
        <source>Searching black frame..</source>
        <translation>Recherche d&apos;image noire.</translation>
    </message>
</context>
<context>
    <name>blend</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blend/ADM_vidBlendFrames.cpp" line="+50"/>
        <source>Blend Frames</source>
        <translation>Mélanger les images</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend groups of N frames into a single frame.  Useful for speeding up slow motion footage or creating timelapses.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Frames</source>
        <translation>Images</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Blend</source>
        <translation>Mélanger</translation>
    </message>
</context>
<context>
    <name>blur</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/ADM_vidBlur.cpp" line="+44"/>
        <source>Blur</source>
        <translation>Estomper</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blur selected area.</source>
        <translation>Zone d&apos;estompage</translation>
    </message>
</context>
<context>
    <name>blurDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="+14"/>
        <source>Blur</source>
        <translation>Estomper</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>radius</source>
        <translation>Rayon</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Left:</source>
        <translation>Gauche :</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Top:</source>
        <translation>Haut :</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Bottom:</source>
        <translation>Bas :</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Right:</source>
        <translation>Droit :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Masquer la sélection</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Box blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Near Gaussian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Gaussian 2 pass</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>changeFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="+40"/>
        <source>Custom</source>
        <translation>Manuel</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>59.94  (NTSC)</source>
        <translation>59,94 (NTSC)</translation>
    </message>
    <message>
        <location line="+188"/>
        <source>Source Fps:</source>
        <translation>Source :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Source frame rate:</source>
        <translation>Fréquence source :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Destination Fps:</source>
        <translation>Destination :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Destination frame rate:</source>
        <translation>Fréquence destination :</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Change fps</source>
        <translation>Changer la fréquence d&apos;image (i/s)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Invalid fps</source>
        <translation>Fréquence invalide</translation>
    </message>
    <message>
        <location line="-211"/>
        <source>25  (PAL)</source>
        <translation>25 (PAL/SÉCAM)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>23.976 (Film)</source>
        <translation>23,976 (film)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>29.97 (NTSC)</source>
        <translation>29,97 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (Pal)</source>
        <translation>50 (PAL/SÉCAM)</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Change FPS</source>
        <translation>Changer la fréquence d&apos;image (i/s)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Speed up/slow down the video as if altering fps. This filter changes duration.</source>
        <translation>Accélère ou ralentit la vidéo en modifiant la fréquence d&apos;image (i/s). La durée est modifiée.</translation>
    </message>
    <message>
        <location line="+174"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
</context>
<context>
    <name>chromashift</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/ADM_vidChromaShift.cpp" line="+35"/>
        <source>ChromaShift</source>
        <translation type="unfinished">Decalage chroma</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Shift chroma U/V to fix badly synced luma/chroma.</source>
        <translation type="unfinished">Decaler la chroma u/v pour corriger les couleurs non alignées</translation>
    </message>
</context>
<context>
    <name>chromashiftDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/qt4/chromashift.ui" line="+14"/>
        <source>ChromaShift</source>
        <translation type="unfinished">Decalage chroma</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>V Shift</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-7"/>
        <source>U Shift</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>colorBalance</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/ADM_vidColorBalance.cpp" line="+42"/>
        <source>Color balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust shadow, midtone and highlight.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/Q_colorBalance.cpp" line="+52"/>
        <source>Peek Ranges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show shadow, midtone and highlight areas in black,gray and white colors</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>colorBalanceDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="+20"/>
        <source>Color balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Highlight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+63"/>
        <location line="+135"/>
        <location line="+109"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-205"/>
        <location line="+109"/>
        <location line="+109"/>
        <source>Chroma shift</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-208"/>
        <source>Shadow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Midtone</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>colorTemp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/ADM_vidColorTemp.cpp" line="+41"/>
        <source>Color temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust color temperature.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>colorTempDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/qt4/colorTemp.ui" line="+14"/>
        <source>Color Temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Color temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Chroma shift angle</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>coloryuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="+78"/>
        <source>None</source>
        <translation type="unfinished">Aucun</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Avisynth color filter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Color management filter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>AutoWhite</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AutoGain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clip to Tv Range (16-235)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>PC-&gt;TV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>TV-&gt;PC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Levels:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Y gain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y Brightness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y Gamma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>U gain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>U Brightness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>U Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>V gain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>V Brightness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>V Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Flags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>colorYuv</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>contrast</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/ADM_vidContrast.cpp" line="+33"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="+61"/>
        <location line="+78"/>
        <source>Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust contrast, brightness and colors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="-77"/>
        <location line="+78"/>
        <source>Brightness</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>contrastDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="+14"/>
        <location line="+30"/>
        <source>Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Contrast  </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Brightness  </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+56"/>
        <source>Luma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>MPEG2-&gt;PC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-14"/>
        <source>ChromaU</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-7"/>
        <source>ChromaV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Brightness</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>convolution</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/ADM_vidFastConvolution.cpp" line="+136"/>
        <source>_Process luma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process luma plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>P_rocess chroma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Fast Convolution</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>crash</name>
    <message>
        <location filename="../../common/ADM_osSupport/ADM_crashHook.cpp" line="+84"/>
        <source>Load it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Crash file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>I have detected a crash file. 
Do you want to load it  ?
(It will be deleted in all cases, you should save it if you want to keep it)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>crop</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/ADM_vidCrop.cpp" line="+58"/>
        <source>Crop</source>
        <translation>Recadrer</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Crop filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Warning Cropping too much width ! Width reseted !
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Warning Cropping too much height ! Height reseted !
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/DIA_flyCrop.cpp" line="+555"/>
        <location line="+365"/>
        <source>Size: </source>
        <translation>Taille :</translation>
    </message>
    <message>
        <location line="-244"/>
        <source>Auto Crop</source>
        <translation>Recadrage automatique</translation>
    </message>
</context>
<context>
    <name>cropDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+14"/>
        <source>Crop</source>
        <translation>Recadrer</translation>
    </message>
    <message>
        <location line="+38"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+45"/>
        <source>Right:</source>
        <translation>Droite :</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+67"/>
        <source>Top:</source>
        <translation>Haut :</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Reset</source>
        <translation>Réinitialiser</translation>
    </message>
    <message>
        <location line="+21"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="-60"/>
        <source>Bottom:</source>
        <translation>Bas :</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="-14"/>
        <source>Left:</source>
        <translation>Gauche :</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Auto Crop</source>
        <translation>Recadrage automatique</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+191"/>
        <source>Size: </source>
        <translation>Taille :</translation>
    </message>
    <message>
        <location line="-107"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Masquer la sélection</translation>
    </message>
    <message>
        <location line="+46"/>
        <location line="+4"/>
        <source>Do not lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Current selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>21:9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>18:9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>16:9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4:3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1:1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>9:16</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-130"/>
        <source>Lock Aspect Ratio:</source>
        <translation>Verrouiller le format d&apos;image :</translation>
    </message>
</context>
<context>
    <name>cubicLUT</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="+50"/>
        <source>3D LUT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Apply cubic lookup table.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+72"/>
        <source>Width must match height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+2"/>
        <source>Invalid resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+72"/>
        <source>Invalid file size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-68"/>
        <location line="+72"/>
        <source>File open error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-68"/>
        <location line="+72"/>
        <source>File read error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-65"/>
        <source>Can&apos;t find decoder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Decoding error. Only 8-bit PNG files are supported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <location line="+82"/>
        <source>Memory error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-12"/>
        <location line="+3"/>
        <location line="+6"/>
        <source>Malformed header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Incomplete file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Invalid file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="+112"/>
        <source>Load HaldCLUT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Load Cube</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+29"/>
        <location line="+26"/>
        <source>Load failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>LUT file is not specified!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>cubicLUTDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/cubicLUT.ui" line="+14"/>
        <source>3D LUT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Mask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Load HaldCLUT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Load Cube</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>dcaenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/dcaenc/audioencoder_dcaenc.cpp" line="+272"/>
        <source>_Bitrate:</source>
        <translation>Débit :</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>DcaEnc Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>deband</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/ADM_vidDeband.cpp" line="+32"/>
        <source>Deband</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce banding artifacts.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>debandDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/qt4/deband.ui" line="+14"/>
        <source>Deband</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Chroma threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Luma threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>decimate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="+74"/>
        <source>Discard closer</source>
        <translation type="unfinished">Eliminer le plus proche</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Replace (interpolate)</source>
        <translation type="unfinished">Remplacer (interpoler)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Pulldown dupe removal</source>
        <translation type="unfinished">Elimination du pulldown</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Fastest (no chroma, partial luma)</source>
        <translation type="unfinished">Rapide (luma partielle)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Medium (full luma, no chroma)</source>
        <translation type="unfinished">Moyen (toute la luma)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>_Quality:</source>
        <translation type="unfinished">_Qualité:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Threshold 1:</source>
        <translation type="unfinished">_Seuil 1:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>T_hreshold 2:</source>
        <translation type="unfinished">S_euil2:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Sho_w</source>
        <translation type="unfinished">A_fficher</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>Decomb decimate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Donald Graft decimate. Remove duplicate after telecide.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Discard longer dupe (animés)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>_Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>C_ycle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Decomb Decimate</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>decimateFrame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimateFrame/ADM_vidDecimateFrame.cpp" line="+54"/>
        <location line="+34"/>
        <source>Decimate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-33"/>
        <source>Drop duplicate frames.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Normal mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Evaluation mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Evaluation mode makes possible to examine the video by printing duplicate metric, while omitting frame dropping.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate threshold:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Consecutive frame drop limit:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Note: this filter won&apos;t change the reported frame rate</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>delogo2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/ADM_vidMPdelogo.cpp" line="+41"/>
        <source>MPlayer delogo2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend a logo by interpolating its surrounding box.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>delogoHQ</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/ADM_vidDelogoHQ.cpp" line="+44"/>
        <source>DelogoHQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clean up arbitrary shaped logo.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/DIA_flyDelogoHQ.cpp" line="+41"/>
        <source>The selected image has different width/height.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Save failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="+106"/>
        <source>Find a frame in the preview with the logo clearly visible and not blending into the background.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Save this frame as a PNG image.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Use an appropriate image editor to paint the area of the logo of any shape white and everything else solid black.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This black and white image will serve as a mask where white pixels correspond to the logo to be removed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>If the logo has fully transparent areas, it is recommended to exclude them from the mask by making them black.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Load the mask image.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Note: To remove multiple distant logos (e.g. opposite corners), using separate filter instances for each logo will be much faster.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>How to use DelogoHQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Save selected frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Load mask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Load failed!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>delogoHQDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="+14"/>
        <source>DelogoHQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Mask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Save current frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Load mask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Post-processing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Gradient</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>dgbob</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="+72"/>
        <source>Keep nb of frames and fps</source>
        <translation>Garder le nombre d&apos;images et le nombre d&apos;i/s</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double nb of frames and fps</source>
        <translation>Doubler le nombre d&apos;images et le nombre d&apos;i/s</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double nb of frames (slow motion)</source>
        <translation type="unfinished">Doubler le nombre d&apos;images (ralenti)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Threshold:</source>
        <translation type="unfinished">_Seuil:</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>dgbob</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Donald Graft Bob.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>_Top Field First:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Extra artifact protection (may increase flickering, rarely needed)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>DGBob</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>dummy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dummy/dummyVideoFilter.cpp" line="+44"/>
        <source>Dummy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Null filter, it does nothing at all.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>dummyMuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerDummy/ADM_dummy.cpp" line="+28"/>
        <source>Simulated muxing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>(None)</source>
        <translation>(Aucun)</translation>
    </message>
</context>
<context>
    <name>dv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffDv/ADM_ffDv.cpp" line="+79"/>
        <source>DV only supports 720*576*25fps and 720*480*29.97fps</source>
        <translation>DV supporte seulement 720*576*25 ips et 720*480*29,97 ips</translation>
    </message>
</context>
<context>
    <name>encodingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="+26"/>
        <source>Encoding...</source>
        <translation>Encodage…</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Phase:</source>
        <translation>Phase :</translation>
    </message>
    <message>
        <location line="+299"/>
        <source>Audio Codec:</source>
        <translation>Codec audio :</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Container:</source>
        <translation>Conteneur : </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Video Codec:</source>
        <translation>Codec vidéo :</translation>
    </message>
    <message>
        <location line="-334"/>
        <location line="+299"/>
        <location line="+21"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location line="-296"/>
        <location line="+289"/>
        <source>Unknown</source>
        <translation>Inconnu</translation>
    </message>
    <message>
        <location line="-282"/>
        <source>Time Remaining:</source>
        <translation>Temps restant : </translation>
    </message>
    <message>
        <location line="+11"/>
        <source>When finished:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Close dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Keep dialog open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Suspend computer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Shut down computer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Priority:</source>
        <translation>Priorité :</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>High</source>
        <translation>Haute</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Above Normal</source>
        <translation>Plus que la normale</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Normal</source>
        <translation>Normale</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Below Normal</source>
        <translation>Sous la normale</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Low</source>
        <translation>Basse</translation>
    </message>
    <message>
        <source>Keep dialog open when finished</source>
        <translation type="vanished">Conserver la fenêtre ouverte une fois terminé</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Delete first pass log files</source>
        <translation>Supprimer le journal de la première passe</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Output File:</source>
        <translation>Fichier de destination :</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Pause / Abort</source>
        <translation>Pause/Abandon</translation>
    </message>
    <message>
        <location line="+164"/>
        <source>Audio Size:</source>
        <translation>Taille audio :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Total Size:</source>
        <translation>Taille totale :</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Video Size:</source>
        <translation>Taille vidéo :</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Average Bitrate:</source>
        <translation>Débit moyen :</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Processed Frames:</source>
        <translation>Images traitées</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Quantiser:</source>
        <translation>Quantificateur :</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Elapsed:</source>
        <translation>Ecoulé</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Frames/sec:</source>
        <translation>Fréquence :</translation>
    </message>
    <message>
        <location line="-571"/>
        <source>Main</source>
        <translation>Général</translation>
    </message>
    <message>
        <source>Shut down computer when finished</source>
        <translation type="vanished">Arrêter l&apos;ordinateur une fois terminé</translation>
    </message>
    <message>
        <location line="+201"/>
        <source>Minimize to Tray</source>
        <translation>Réduire en zone de notification</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Advanced</source>
        <translation>Avancé</translation>
    </message>
    <message>
        <location line="+165"/>
        <location line="+7"/>
        <location line="+14"/>
        <source>0 MB</source>
        <translation>0 Mo</translation>
    </message>
    <message>
        <location line="+53"/>
        <location line="+31"/>
        <location line="+60"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-67"/>
        <source>0 kB/s</source>
        <translation>0 ko/s</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>00:00:00</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>eq2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/ADM_vidEq2.cpp" line="+44"/>
        <source>MPlayer eq2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust contrast, brightness, saturation and gamma.</source>
        <translation>Ajuster contraste, luminosité, saturation et gamma.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/Q_eq2.cpp" line="+63"/>
        <source>Reset</source>
        <translation>Réinitialiser</translation>
    </message>
</context>
<context>
    <name>eq2Dialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="+14"/>
        <location line="+31"/>
        <source>Contrast</source>
        <translation>Contraste</translation>
    </message>
    <message>
        <location line="+77"/>
        <source>&lt;b&gt;Gamma&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Brightness</source>
        <translation>Luminosité</translation>
    </message>
    <message>
        <location line="+142"/>
        <source>Blue</source>
        <translation>Bleu</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Red</source>
        <translation>Rouge</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Initial</source>
        <translation>Initiale</translation>
    </message>
    <message>
        <location line="-69"/>
        <source>Weight</source>
        <translation>Poids</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Green</source>
        <translation>Vert</translation>
    </message>
</context>
<context>
    <name>faac</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/faac/audioencoder_faac.cpp" line="+292"/>
        <source>_Bitrate:</source>
        <translation>Débit :</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Faac Configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="+6"/>
        <source>Opus Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fadeFromImage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/ADM_vidFadeFromImage.cpp" line="+38"/>
        <source>Fade from first image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use image at start time for fading.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="+83"/>
        <source>_Start time:</source>
        <translation>_Début :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Fin :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+65"/>
        <location line="+19"/>
        <source>Time scope: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-16"/>
        <location line="+22"/>
        <source>Duration: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fadeFromImageDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="+14"/>
        <source>Fade from first image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Effect:</source>
        <translation>Effet : </translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Linear blend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Slide</source>
        <translation>Balayage</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Wipe</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Push</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Luma dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Inverse luma dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Static random dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Dynamic random dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Up</source>
        <translation>Haut</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Right</source>
        <translation>Droit</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Down</source>
        <translation>Bas</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Left</source>
        <translation>Gauche</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Start preview play before time scope, if you see green.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fadeInOut</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeIn.cpp" line="+24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+42"/>
        <source>Fade in</source>
        <translation>Fondu entrant</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade in from color.</source>
        <translation>Fondu entrant depuis une couleur</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeOut.cpp" line="+24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+2"/>
        <source>Fade out</source>
        <translation>Fondu sortant</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade out to color.</source>
        <translation>Fondu sortant vers une couleur</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+43"/>
        <source>_Start time:</source>
        <translation>_Début :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>Fin :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation>Saisie manuelle</translation>
    </message>
    <message>
        <location line="+88"/>
        <location line="+29"/>
        <source>Time scope: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-26"/>
        <location line="+32"/>
        <source>Duration: </source>
        <translation>Durée :</translation>
    </message>
</context>
<context>
    <name>fadeInOutDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="+14"/>
        <source>Fade in/out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation>Durée :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Pick color:</source>
        <translation>Choisir la couleur :</translation>
    </message>
</context>
<context>
    <name>fadeThrough</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeThrough.cpp" line="+32"/>
        <source>Fade through</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade through combination of multiple effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="+163"/>
        <source>_Start time:</source>
        <translation>_Début :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Fin :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Not possible!
Start and/or end time would be out of range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+159"/>
        <location line="+182"/>
        <source>Time scope: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-179"/>
        <location line="+192"/>
        <source>Duration: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Center: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeIn.cpp" line="+32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="-504"/>
        <source>Fade in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade in from combination of multiple effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeOut.cpp" line="+32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="+2"/>
        <source>Fade out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade out to combination of multiple effects.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fadeThroughDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="+20"/>
        <source>Fade through</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Center: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set center as A marker, duration is 2×|A-B|</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <location line="+19"/>
        <source>Brightness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-11"/>
        <location line="+128"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+126"/>
        <location line="+131"/>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-790"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Transient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-896"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Raised cosine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Ramp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Quadratic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Inverse quadratic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+257"/>
        <location line="+200"/>
        <source>Exponential</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-902"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+126"/>
        <location line="+131"/>
        <location line="+200"/>
        <source>duration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-880"/>
        <location line="+19"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Color blend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+31"/>
        <location line="+582"/>
        <source>Pick color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-516"/>
        <source>Peak amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+103"/>
        <source>Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Blur radius</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+106"/>
        <source>Rotate</source>
        <translation>Rotation</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Peak angle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+107"/>
        <source>Zoom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Peak zoom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+112"/>
        <source>Vignette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Peak opening</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fadeTo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="+59"/>
        <location line="+23"/>
        <source>Fade</source>
        <translation>Fondu</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Fade.</source>
        <translation>Fondu.</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>From</source>
        <translation>De</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade from the first picture into movie</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>To</source>
        <translation>Vers</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade from movie to the first picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Fade direction:</source>
        <translation>Direction du fondu :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Start time:</source>
        <translation>_Début :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Fin :</translation>
    </message>
</context>
<context>
    <name>fadeToBlack</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="+55"/>
        <location line="+20"/>
        <source>Fade to black</source>
        <translation>Fondu au noir</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Fade to black in/out.</source>
        <translation>Fondu au noir entrant/sortant.</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Out</source>
        <translation>Fin</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade out</source>
        <translation>Fondu sortant</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>In</source>
        <translation>Début</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade in</source>
        <translation>Fondu entrant</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Fade type:</source>
        <translation>Type de fondu :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Start time:</source>
        <translation>_Début :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Fin :</translation>
    </message>
</context>
<context>
    <name>ffVAEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="+345"/>
        <source>Baseline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Main</source>
        <translation>Principal</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High</source>
        <translation>Haut</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Constant Rate Factor</source>
        <translation>Facteur de débit constant</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Bitrate</source>
        <translation>Débit constant</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Variable Bitrate</source>
        <translation>Débit variable</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Profile:</source>
        <translation>Profile : </translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+3"/>
        <source>Rate Control:</source>
        <translation>Contrôle du débit :</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>GOP Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>Débit (kb/s)</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Débit maximum (kb/s)</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>FFmpeg VA-API H.264 Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffVAEncHEVC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="+353"/>
        <source>GOP Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Bitrate (kbps):</source>
        <translation>Débit (kb/s)</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Débit maximum (kb/s)</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Constant Rate Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Bitrate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Variable Bitrate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+3"/>
        <source>Rate Control:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>FFmpeg VA-API HEVC Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffmpeg2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="+345"/>
        <source>Interlacing</source>
        <translation type="unfinished">Entrelacement</translation>
    </message>
    <message>
        <location line="-81"/>
        <source>Normal (4:3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Wide (16:9)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Tmpgenc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Animes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>KVCD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>One thread</source>
        <translation type="unfinished">Un thread</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two threads</source>
        <translation type="unfinished">Deux threads</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Three threads</source>
        <translation type="unfinished">Trois threads</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto (#cpu)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Progressive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Interlaced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Top Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Threading</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mi_n. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBV Buffer Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max bitrate (kb/s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Trellis quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Number of B frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Macroblock decision:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Aspect ratio:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Matrices:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Filesize tolerance (kb):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Quantizer compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Interlaced:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field Order:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Basic Settings</source>
        <translation>Général</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Adv. Settings</source>
        <translation>Avancé</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>libavcodec MPEG-2 configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="+247"/>
        <source>User Interface</source>
        <translation>Interface utilisateur</translation>
    </message>
    <message>
        <location line="-49"/>
        <source>H.263</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>One thread</source>
        <translation>Un thread</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two threads</source>
        <translation>Deux threads</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Three threads</source>
        <translation>Trois threads</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto (#cpu)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Threading</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mi_n. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>4_MV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Trellis quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quarter pixel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Number of B frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Quantization type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Macroblock decision:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Filesize tolerance (kb):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Quantizer compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Advanced Simple Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Motion Estimation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffmsmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="+224"/>
        <source>None</source>
        <translation type="unfinished">Aucun</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>User Interface</source>
        <translation type="unfinished">Interface Utilisateur</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>Full</source>
        <translation type="unfinished">Complète</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Phods</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>EPZS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>X1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>H.263</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Mi_n. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Trellis quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Filesize tolerance (kb):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quantizer compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffnvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="+342"/>
        <source>Controlled by Preset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Constant Bitrate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Variable Bitrate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>High Quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>BluRay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Low Latency (HQ)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Baseline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-3"/>
        <location line="+4"/>
        <source>Main</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-26"/>
        <source>Constant Quantizer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Slow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High Performance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Low Latency (HP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Lossless</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lossless (HP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Main10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>High</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Autoselect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Each</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Middle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>RC Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Preset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use B-Frames as References:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Reference Frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>Débit (kb/s)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Débit maximum (kb/s)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>GOP Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Lookahead:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AQ Strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Spatial AQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Temporal AQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weighted Prediction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Even with HEVC encoding support present, lossless presets and B-frames may be unavailable with older hardware</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Even with H.264 encoding support present, lossless presets may be unavailable with older hardware</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Lookahead and Adaptive Quantization may be unavailable with older hardware</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weighted prediction is incompatible with B-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rate Control</source>
        <translation>Contrôle de débit</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>References</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Basic Settings</source>
        <translation>Paramètres de base</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Advanced Settings</source>
        <translation>Paramètres avancés</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>NVENC H.264 configuration</source>
        <translation>Configuration NVENC H.264</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>NVENC HEVC configuration</source>
        <translation>Configuration NVENC HEVC</translation>
    </message>
</context>
<context>
    <name>ffpsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="+64"/>
        <source>[Mismatch]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+103"/>
        <source>Saving mpeg PS (ff)</source>
        <translation type="unfinished">Sauvegarde au format PS (ff)</translation>
    </message>
    <message>
        <location line="+45"/>
        <source> video not compatible
</source>
        <translation> vidéo non compatible
</translation>
    </message>
    <message>
        <location line="+9"/>
        <source> Bad width/height for VCD
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source> Bad width/height for SVCD
</source>
        <translation> Mauvaise largeur/hauteur pour SVCD
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source> Bad width/height for DVD
</source>
        <translation> Mauvaise largeur/hauteur pour DVD
</translation>
    </message>
    <message>
        <location line="+17"/>
        <source> VCD : only MP2 audio accepted
</source>
        <translation> VCD : seul MP2 est accepté
</translation>
    </message>
    <message>
        <location line="+5"/>
        <source> VCD : only 44.1 khz audio accepted
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source> DVD : only 48 khz audio accepted
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> VCD : only 44.1 kHz audio accepted
</source>
        <translation type="vanished"> VCD : seul 44,1 kHz est accepté
</translation>
    </message>
    <message>
        <source> DVD : only 48 kHz audio accepted
</source>
        <translation type="vanished"> DVD : seul 48 kHz est accepté
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>[ffPS] DVD : only MP2/AC3/DTS audio accepted
</source>
        <translation>[ffPS] DVD : seuls MP2/AC3/DTS sont acceptés
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="+54"/>
        <source>Free</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Muxing Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Allow non compliant stream</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Total Muxrate (kbits)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Video Muxrate (kbits)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBV size (kBytes)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced</source>
        <translation>Avancé</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Mpeg PS Muxer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fftsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTS.cpp" line="+71"/>
        <source>Video track is incompatible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Audio track %d out of %u is incompatible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Audio track %d out of %u is incompatible with M2TS mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Only MPEG-1/2, VC-1, H264 and HEVC supported for video</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Only AC3, E-AC3, DTS and TrueHD supported for audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Only MP2, MP3, AC3, E-AC3, DTS, AAC and TrueHD supported for audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Unsupported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Saving mpeg TS (ff)</source>
        <translation type="unfinished">Sauvegarde au format TS (ff)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTSConfig.cpp" line="+28"/>
        <source>M2TS mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBR muxing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mux rate (MBits/s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>TS Muxer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="+139"/>
        <source>Golomb-Rice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Range Coder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Small</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Large</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Coder:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Context:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threads:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Error correction/detection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>FFV1 Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffvtenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="+197"/>
        <source>Baseline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-3"/>
        <location line="+4"/>
        <source>Main</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Main10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>High</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>GOP Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Allow B-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>On some Macs, disabling B-frames is not possible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Bitrate (kbps):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>VideoToolbox HEVC Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>VideoToolbox H.264 Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fieldsAlign</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fieldsAlign/ADM_fieldsAlign.cpp" line="+54"/>
        <location line="+224"/>
        <source>Fields Align</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-223"/>
        <source>Adjust fields alignment.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+214"/>
        <source>Swap fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Top field horizontal adjust</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom field horizontal adjust</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Top field vertical adjust</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom field vertical adjust</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>filesel</name>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="+150"/>
        <source>File error</source>
        <translation type="unfinished">Erreur de fichier</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation type="unfinished">Impossible d&apos;ouvrir &quot;%s&quot;.</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>%s already exists.

Do you want to replace it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+27"/>
        <location line="+14"/>
        <source>It is possible that you are trying to overwrite an input file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Cannot write the file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>No write access to &quot;%s&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>fitToSize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/ADM_vidFitToSize.cpp" line="+58"/>
        <source>Fit to size</source>
        <translation>Adapter à la taille</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize and pad to the specified size.</source>
        <translation>Redimensionner et remplir à la taille indiquée</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/Q_fitToSize.cpp" line="+75"/>
        <location line="+153"/>
        <source>Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+19"/>
        <source>Most recently accepted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-18"/>
        <source>Bilinear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearest Neighbor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Padding type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Black Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Width and height cannot be odd</source>
        <translation>La largeur et la hauteur ne peuvent pas être impaires</translation>
    </message>
</context>
<context>
    <name>fitToSizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="+14"/>
        <source>Fit to size</source>
        <translation>Adapter à la taille</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Output settings</source>
        <translation>Paramétrage de sortie</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Width:</source>
        <translation>Largeur :</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Height:</source>
        <translation>Hauteur :</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>No rounding</source>
        <translation>Pas d&apos;arrondi</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>Arrondir au multiple de 8 le plus proche</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>Arrondir au multiple de 4 le plus proche </translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Resize Method:</source>
        <translation>Méthode de redimensionnement :</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>Bilinéaire</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Bicubique</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lanczos-3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Aspect ratio tolerance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+74"/>
        <source>0%</source>
        <translation>0 %</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Percent</source>
        <translation>Pourcentage</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>100%</source>
        <translation>100 %</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Padding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>black bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>echo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Current input dimensions:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Resized to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Required padding:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>flip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/ADM_vidFlip.cpp" line="+36"/>
        <source>Flip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Vertically/Horizontally flip the image.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>flipDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/qt4/flip.ui" line="+14"/>
        <source>Flip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Horizontal flip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical flip</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>flux</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="+88"/>
        <source>_Temporal threshold:</source>
        <translation type="unfinished">Seuil temporel:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Spatial threshold:</source>
        <translation type="unfinished">Seuil spacial:</translation>
    </message>
    <message>
        <location line="-52"/>
        <location line="+56"/>
        <source>FluxSmooth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-55"/>
        <source>Spatio-temporal cleaner by Ross Thomas.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>flv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="+193"/>
        <source>User Interface</source>
        <translation type="unfinished">Interface Utilisateur</translation>
    </message>
    <message>
        <location line="-31"/>
        <source>H.263</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Mi_n. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Trellis quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Filesize tolerance (kb):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Quantizer compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>libavcodec FLV1 configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>flvdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Flv/ADM_flv.cpp" line="+622"/>
        <source>Warning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>This FLV file says it has no video.
I will assume it has and try to continue</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>flvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="+68"/>
        <location line="+10"/>
        <location line="+6"/>
        <source>Unsupported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Only FLV1 &amp; VP6 supported for video</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Only AAC &amp; mpegaudio supported for audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Only 44.1, 22.050 and 11.025 kHz supported</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gaussian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Gauss.cpp" line="+26"/>
        <source>Gaussian convolution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :gaussian.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glBenchmark</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glBenchmark/benchGl.cpp" line="+61"/>
        <source>OpenGl ReadBack benchmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Check how fast readback is.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glFragment</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment/sampleGl.cpp" line="+68"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a fragment shader.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glFragment2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment2/sampleGl.cpp" line="+66"/>
        <source>OpenGl Fragment Shader Sample2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a fragment shader.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glResize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="+66"/>
        <source>OpenGl Resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize using openGl.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+146"/>
        <source>Width :</source>
        <translation type="unfinished">Largeur:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height :</source>
        <translation type="unfinished">Hauteur:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>glResize</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glRotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glRotate/rotateGl.cpp" line="+57"/>
        <source>OpenGl Rotate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rotate image by a small amount.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+118"/>
        <source>Angle (°):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>glRotate</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glSample</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glGlyphy/glGlyphy.cpp" line="+68"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a fragment shader.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glShader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="-182"/>
        <source>Shader Loader</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run an external shader program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+192"/>
        <source>ShaderFile to load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>ShaderLoader</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glSmooth</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glSmooth/glSmooth.cpp" line="+61"/>
        <source>OpenGl Smooth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Smooth image while preserving edge.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glVdpaufilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="+84"/>
        <source>vdpauDeintGl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VDPAU deinterlacer+resize, openGl version (faster).</source>
        <translation type="unfinished">VDPAU de-entrelace+resize, openGl version (faster).</translation>
    </message>
    <message>
        <location line="+178"/>
        <source>Keep Top Field</source>
        <translation>Garder le champs supérieur</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep Bottom Field</source>
        <translation>Garder le champs inférieur</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double framerate</source>
        <translation>Doubler le nombre d&apos;image par seconde</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Resize:</source>
        <translation>_Redimensionner</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Deint Mode:</source>
        <translation>Mode de _désentrelacement :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Width :</source>
        <translation>Largeur :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height :</source>
        <translation>Hauteur :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vdpau</source>
        <translation type="unfinished">vdpau</translation>
    </message>
</context>
<context>
    <name>glVertex</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_vertex/sampleGl.cpp" line="+59"/>
        <source>OpenGl Vertex Shader</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a simple vertex shader.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glWave</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_distort/sampleGl.cpp" line="+59"/>
        <source>OpenGl wave </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Simple wave filter.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>glYadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="+77"/>
        <source>Yadif (openGl)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Yet another deinterlacer, using shaders.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+182"/>
        <source>Temporal &amp; spatial check</source>
        <translation>Contrôle temporel et spacial</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bob, temporal &amp; spatial check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Skip spatial temporal check</source>
        <translation>Passer le contrôle temporel et spacial</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bob, skip spatial temporal check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Bottom field first</source>
        <translation>Trame inférieure en premier</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Top field first</source>
        <translation>Trame supérieure en premier</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Mode:</source>
        <translation>_Mode :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Order:</source>
        <translation>_Ordre :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>yadif</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>grain</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/grain/ADM_vidGrain.cpp" line="+35"/>
        <source>Grain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Film grain effect.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>grainDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/grain/qt4/grain.ui" line="+14"/>
        <source>Grain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Noise</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>hflip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/horizontalFlip/horizontalFlip.cpp" line="+44"/>
        <source>Horizontal Flip</source>
        <translation>Inversion horizontale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Horizontally flip the image.</source>
        <translation>Inverse l&apos;image horizontalement.</translation>
    </message>
</context>
<context>
    <name>hue</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/ADM_vidHue.cpp" line="+36"/>
        <source>Mplayer Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust hue and saturation.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>hueDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/qt4/hue.ui" line="+14"/>
        <location line="+25"/>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>huff</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/huff/ADM_huffEncoder.cpp" line="+108"/>
        <source>HUFFYUV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FF HUFFYUV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>HuffYUV Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>hzstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/hzStackField.cpp" line="+52"/>
        <source>Horizontal Stack Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put fields side by side.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>imageStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/ADM_vidImageStab.cpp" line="+41"/>
        <source>Image stabilizer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce camera shakiness.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>imageStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="+14"/>
        <source>Image stabilizer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Smoothing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Gravity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Interpolation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Bilinear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Motion estimation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>accurate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>fast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Padding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Auto Gravity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Scene change detection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-88"/>
        <source>Zoom</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>indexing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="+92"/>
        <source>Time Left :%02d:%02d:%02d</source>
        <translation type="unfinished">Temps restant :%02d:%02d:%02d</translation>
    </message>
    <message>
        <location line="-76"/>
        <source>Continue indexing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Abort Requested</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Do you want to abort indexing ?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ivtcRemover</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+91"/>
        <source>Remove IVTC dupe.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove the duplicate frames present after ivtc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="+134"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+334"/>
        <source>_Noise:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+1"/>
        <source>_Show:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Remove duplicate:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+3"/>
        <source>Full</source>
        <translation type="unfinished">Complète</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+1"/>
        <source>Fast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+1"/>
        <source>VeryFast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+3"/>
        <source>_Frame rate change:</source>
        <translation type="unfinished">Changement i/s</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+3"/>
        <source>DupeRemover</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>jobs</name>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="+28"/>
        <source>Run all pending jobs</source>
        <translation type="unfinished">Executer tous les jobs en attente</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Run jobs</source>
        <translation type="unfinished">Executer</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Delete already executed jobs</source>
        <translation type="unfinished">Effacer les jobs déjà faits</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Cleanup</source>
        <translation type="unfinished">Nettoyer</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>If you use VDPAU you cannot use CLI version</source>
        <translation type="unfinished">Si vous utilisez VDPAU, la version CLI ne marchera pas</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>use Qt version</source>
        <translation type="unfinished">Utiliser la version Qt</translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="+182"/>
        <source>Quit</source>
        <translation type="unfinished">Quitter</translation>
    </message>
    <message>
        <location line="-54"/>
        <source>Avidemux Jobs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="+36"/>
        <source>Oops</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Something very wrong happened when building joblist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>There are no jobs stored</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="-121"/>
        <source>Job</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start Time</source>
        <translation>Début</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>End Time</source>
        <translation>Fin</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Duration</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Ready</source>
        <translation>Prêt</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Running....</source>
        <translation>En cours...</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Success</source>
        <translation>Succès</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed</source>
        <translation>Échec</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>???</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run Now</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force Status to success</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force Status to ready</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>jobsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="+13"/>
        <source>Jobs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Delete Sel. Job</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Delete All Jobs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run All Jobs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run Selected Job</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>jpeg</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="+95"/>
        <source>YUV422</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>YUV420</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Quantizer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Pixel format:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Mjpeg Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>kerneldeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="+71"/>
        <source>_Threshold:</source>
        <translation type="unfinished">_Seuil:</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Kernel Deint.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Port of Donald Graft Kernel Deinterlacer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Field order:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Smaller means more deinterlacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Sharp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>_Sharper engine:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>T_woway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Extrapolate better (better not to use it)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Show interlaced areas (for test!)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>KernelDeint</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>lame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="+333"/>
        <source>_Quality:</source>
        <translation type="unfinished">_Qualité:</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>CBR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>ABR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Bit_rate mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+18"/>
        <source>_Bitrate:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Disable reservoir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>LAME Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>largemedian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="+36"/>
        <source>Large Median (5x5).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Median filter on 5x5 matrix.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>_Process luma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process luma plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>P_rocess chroma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Fast Convolution</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>lavcodec</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lavcodec/audioencoder_lavcodec.cpp" line="+470"/>
        <source>_Bitrate:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>lavdecoder</name>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/DIA_lavDecoder.cpp" line="+23"/>
        <source>_Swap U and V</source>
        <translation type="unfinished">Inverser U et V</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Decoder Options</source>
        <translation>Options décodeur</translation>
    </message>
</context>
<context>
    <name>lavdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="+188"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Linear blend</source>
        <translation>Mélange linéaire</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Linear interpolate</source>
        <translation>Interpolation linéaire</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cubic interpolate</source>
        <translation>Interpolation cubique</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Median interpolate</source>
        <translation>Interpolation médiane</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FFmpeg deint</source>
        <translation>FFmpeg</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Deinterlacing:</source>
        <translation>_Dé-entrelacement</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Autolevel</source>
        <translation>Niveau automatique de couleur</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>libavcodec deinterlacer</source>
        <translation>Désentrelacement par Libavcodec</translation>
    </message>
    <message>
        <location line="-131"/>
        <source>Libavdec Deinterlacers</source>
        <translation>Désentrelacement par Libavdec</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lavcodec deinterlacer family.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>licenseDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/license.ui" line="+16"/>
        <source>License</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+46"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>logo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/ADM_vidLogo.cpp" line="+23"/>
        <source>Add logo</source>
        <translation>Ajouter un logo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put a logo on top of video, with alpha blending.</source>
        <translation>Ajouter un logo sur la vidéo, avec transparence</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/Q_logo.cpp" line="+67"/>
        <source>Image:</source>
        <translation>Image :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>No image selected</source>
        <translation>Pas d&apos;image sélectionnée</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Select Logo Image</source>
        <translation>Choisir l&apos;image</translation>
    </message>
    <message>
        <location line="+70"/>
        <source> s</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>logoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="+14"/>
        <source>Logo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Select Image...</source>
        <translation>Sélectionner image…</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>No image selected</source>
        <translation>Pas d&apos;image sélectionnée</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Fade-in/out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You can click in the image to approximately position the logo</source>
        <translation type="vanished">Vous pouvez cliquer dans l&apos;image pour positionner approximativement le logo.</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Alpha</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>lumaStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/ADM_vidLumaStab.cpp" line="+41"/>
        <source>Luma stabilizer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce flickering.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>lumaStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="+14"/>
        <source>Luma stabilizer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Filter length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Scene threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+33"/>
        <source>frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Adjust chroma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Adjust target</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Prefer contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Prefer brightness</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>lumaonly</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaOnly/lumaOnly.cpp" line="+44"/>
        <source>GreyScale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove color, only key grey image.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mainFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="+20"/>
        <source>Video Filter Manager</source>
        <translation>Gestionnaire de filtres vidéos</translation>
    </message>
    <message>
        <location line="+219"/>
        <source>&lt;big&gt;&lt;b&gt;Active Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Filtres actifs&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Filtres disponibles&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location line="-99"/>
        <source>Transform</source>
        <translation>Transformation</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Transition</source>
        <translation>Transition</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Interlacing</source>
        <translation>Entrelacement</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Colors</source>
        <translation>Couleurs</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Noise</source>
        <translation>Bruit</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Sharpness</source>
        <translation>Netteté</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Subtitles</source>
        <translation>Sous-titre</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>OpenGl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Artistic</source>
        <translation>Artistique</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Miscellaneous</source>
        <translation>Divers</translation>
    </message>
    <message>
        <location line="+111"/>
        <source>Press Ctrl + Enter to accept the dialog</source>
        <translation>Appuyer sur Ctrl + Enter pour valider la fenêtre</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>&amp;Preview</source>
        <translation>&amp;Prévisualisation</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Close</source>
        <translation>&amp;Fermer</translation>
    </message>
    <message>
        <source>OpenGL</source>
        <translation type="vanished">OpenGL</translation>
    </message>
</context>
<context>
    <name>matroskademuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Matroska/ADM_mkvIndexer.cpp" line="+654"/>
        <source>Indexing Matroska Video Track</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mcdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="+81"/>
        <source>MCDeint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion compensation deinterlacer. Ported from MPlayer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Fast</source>
        <translation>Rapide</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium</source>
        <translation>Moyenne</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Slow iterative motion search</source>
        <translation>Lent</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Extra slow (same as 3+multiple reference frames)</source>
        <translation>Extra lent</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom :</source>
        <translation>Bas :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Qp:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>mcDeinterlace</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mean</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Mean.cpp" line="+27"/>
        <source>Mean convolution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :mean.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>median</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Median.cpp" line="+28"/>
        <source>Median convolution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :median.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mergeFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidMergeField.cpp" line="+52"/>
        <source>Merge Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Merge two pictures as if they were two fields.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mkvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkv.cpp" line="+84"/>
        <source>Unsupported Video.
Only VP8/VP9/AV1 video and Vorbis/Opus audio supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+147"/>
        <source>Saving WebM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Saving Mkv</source>
        <translation type="unfinished">Sauvegarde au format MKV (ff)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="+33"/>
        <source>Derived from display width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>0: sRGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>1: ITU-R BT.709</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-42"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>2: Unspecified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-42"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>3: Reserved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-42"/>
        <source>4: US FCC 73.682</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: ITU-R BT.470BG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+22"/>
        <source>6: SMPTE 170M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-21"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>7: SMPTE 240M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-42"/>
        <source>8: YCoCg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: BT2020 Non-constant Luminance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: BT2020 Constant Luminance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: SMPTE ST 2085</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: Chroma-derived Non-constant Luminance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>13: Chroma-derived Constant Luminance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>14: ITU-R BT.2100-0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>0: Unspecified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1: Limited</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2: Full</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+21"/>
        <source>0: Reserved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-17"/>
        <source>4: Gamma 2.2 curve - BT.470M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: Gamma 2.8 curve - BT.470BG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>8: Linear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: Logarithmic (100:1 range)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: Logarithmic (100 * Sqrt(10) : 1 range)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: IEC 61966-2-4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: ITU-R BT.1361 Extended Colour Gamut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>13: IEC 61966-2-1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>14: ITU-R BT.2020 10 bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>15: ITU-R BT.2020 12 bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>16: ITU-R BT.2100 Perceptual Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>17: SMPTE ST 428-1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>18: ARIB STD-B67 (HLG)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>4: ITU-R BT.470M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: ITU-R BT.470BG - BT.601 625</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>6: ITU-R BT.601 525 - SMPTE 170M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>8: Film</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: ITU-R BT.2020</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: SMPTE ST 428-1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: SMPTE RP 431-2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: SMPTE EG 432-2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>22: JEDEC P22 phosphors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Force aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Aspect Ratio (DAR):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Add color info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Matrix Coefficients:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Range:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Transfer Characteristic:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Color Primaries:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Basic Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Advanced Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>WebM Muxer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MKV Muxer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mp3d</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="+234"/>
        <source>_Spatial luma strength:</source>
        <translation type="unfinished">Luma, intensité spatiale:</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>Mplayer Denoise 3D HQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce noise, smooth image, increase compressibility. HQ Version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+33"/>
        <source>S_patial chroma strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Temporal luma strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>T_emporal chroma strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MPlayer Denoise 3D HQ</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mp3dlow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="+69"/>
        <source>_Spatial luma strength:</source>
        <translation type="unfinished">Luma, intensité spatiale:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Temporal strength:</source>
        <translation type="unfinished">Intensité temporelle:</translation>
    </message>
    <message>
        <location line="-35"/>
        <source>Mplayer Denoise 3D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce noise, smooth image, increase compressibility.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+33"/>
        <source>S_patial chroma strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MPlayer Denoise 3D</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mp4demuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4Analyzer.cpp" line="+1145"/>
        <source>Problem reading SVQ3 headers</source>
        <translation type="unfinished">Impossible de lire l&apos;entete SVQ3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4.cpp" line="+522"/>
        <location line="+111"/>
        <source>Decoding frame type</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mp4muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="+157"/>
        <source>Unsupported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-49"/>
        <source>Video track is incompatible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Audio track %d out of %u is incompatible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Only MPEG-4, H264, H265, AV1, DNxHD and ProRes supported for video</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Only MPEG-1/2/4, H264, H265 and AV1 supported for video</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Only AAC, AC3, DTS, E-AC3, (L)PCM, MP2, MP3 and Vorbis supported for audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Only AAC, AC3, DTS, E-AC3, MP2, MP3 and Vorbis supported for audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+217"/>
        <source>Saving mp4</source>
        <translation type="unfinished">Sauvegarde au format MP4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Saving PSP</source>
        <translation type="unfinished">Sauvegarde au format PSP</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Saving mov</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Optimizing...</source>
        <translation>Optimisation…</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="+38"/>
        <source>Muxing Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+6"/>
        <source>No optimization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-5"/>
        <location line="+6"/>
        <source>Move index to the beginning of the file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Use fragmentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Optimize for Streaming</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force aspect ratio</source>
        <translation>Ratio d&apos;aspect forcé</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Derived from display width</source>
        <translation>D&apos;après la largeur d&apos;affichage</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Aspect Ratio (DAR)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display Width</source>
        <translation>Largeur d&apos;affichage</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Do not rotate</source>
        <translation>Pas de rotation</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90°</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180°</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>270°</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rotate video</source>
        <translation>Rotation vidéo</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>24 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>30 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>60 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Time scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>MOV Muxer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-3"/>
        <source>MP4 Muxer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mp4v2muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="+181"/>
        <source>Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Audio format not supported, only AAC/MP3/AC3</source>
        <translation>Format audio non supporté, seulement AAC/MP3/AC3</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Saving</source>
        <translation>Enregistrement</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Video does not have enough timing information. Are you copying from AVI?</source>
        <translation>La vidéo n&apos;a pas assez d&apos;informations de synchronisation. Copiez à partir d&apos;AVI ?</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Optimizing</source>
        <translation>Optimisation</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Cannot rename file (optimize)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="+53"/>
        <source>Invalid frequency for AC3. Only 32, 44.1 &amp; 48 kHz</source>
        <translation>Fréquence incorrecte pour AC3. Seulement 32, 44,1 &amp; 48 kHz</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Invalid bitrate for AC3</source>
        <translation>Débit incorrect pour AC3</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Invalid number of channels for AC3</source>
        <translation>Nombre incorrect de canaux pour AC3</translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Cannot get AAC Extra data
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Config.cpp" line="+31"/>
        <source>Optimize for streaming (SLOW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Add ipod metadata</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MP4V2 Settings</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>mpdelogoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+14"/>
        <source>Mplayer Delogo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+12"/>
        <source>X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+37"/>
        <source>Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="-17"/>
        <source>Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+7"/>
        <source>Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="-14"/>
        <source>Border Width</source>
        <translation>Largeur de bordure</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Preview. Click in the image above to coarsly set the box coordinates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/DIA_flyMpDelogo.cpp" line="+461"/>
        <source>You can resize the red rectangle using the grips </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+74"/>
        <source>Preview</source>
        <translation>Prévisualisation</translation>
    </message>
</context>
<context>
    <name>msharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/ADM_vidMSharpen.cpp" line="+48"/>
        <source>Msharpen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sharpen edges without amplifying noise. By Donald Graft.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>msharpenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="+14"/>
        <source>MSharpen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Mask</source>
        <translation>Masque</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Strength</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Threshold</source>
        <translation>Seuil</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>HighQuality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Process chroma</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>navigate</name>
    <message>
        <location filename="../../common/gui_navigate.cpp" line="+357"/>
        <source>Cannot go to next frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Cannot go to next keyframe</source>
        <translation>Impossible d&apos;aller à l&apos;image clé suivante</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>Cannot go to previous keyframe</source>
        <translation>Impossible d&apos;aller à l&apos;image clé précédente</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Cannot go to previous frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+377"/>
        <source>Seek</source>
        <translation>Chercher</translation>
    </message>
    <message>
        <location line="+91"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
</context>
<context>
    <name>negative</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="+46"/>
        <source>Negative</source>
        <translation>Négatif</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert Y,U or V plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+112"/>
        <source>Invert Y Plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process luma plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert U Plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaU plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert V Plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaV plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Invert plane</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>nvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="+136"/>
        <source>Low Quality</source>
        <translation>Basse qualité</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High Quality</source>
        <translation>Haute qualité</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>BluRay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency</source>
        <translation>Faible latence</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency (LQ)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency (HQ)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Preset:</source>
        <translation>Préréglage</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>Débit (kb/s)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Nvidia H264 Encoder configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>opendmldemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDML.cpp" line="+342"/>
        <location line="+76"/>
        <location line="+269"/>
        <source>Malformed header</source>
        <translation type="unfinished">En tete incorrecte</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDMLDepack.cpp" line="+85"/>
        <source>Unpacking bitstream</source>
        <translation type="unfinished">Conversion en cours</translation>
    </message>
</context>
<context>
    <name>partial</name>
    <message>
        <location filename="../../common/ADM_videoFilter2/src/ADM_vidPartial.cpp" line="+388"/>
        <source>Partialize &quot;%s&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Start time:</source>
        <translation type="unfinished">_Début:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation type="unfinished">_Fin:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Configure filter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>pcm</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/pcm/audioencoder_pcm.cpp" line="+205"/>
        <source>PCM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>LPCM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Output format:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>PCM Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>printinfo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/printInfo/printInfo.cpp" line="+44"/>
        <source>PrintInfo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display some informations on Screen.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>propsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="+14"/>
        <source>Properties</source>
        <translation type="unfinished">Propriétés</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>Frame Rate:</source>
        <translation type="unfinished">Images/s:</translation>
    </message>
    <message>
        <location line="+28"/>
        <location line="+226"/>
        <source>Total Duration:</source>
        <translation type="unfinished">Durée totale:</translation>
    </message>
    <message>
        <location line="-289"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+21"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+31"/>
        <location line="+62"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <source>n/a</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-275"/>
        <source>Aspect Ratio:</source>
        <translation type="unfinished">Rapport h/l:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Image Size:</source>
        <translation>Dimensions :</translation>
    </message>
    <message>
        <source>Extra Video Properties</source>
        <translation type="obsolete">Informations suppl.</translation>
    </message>
    <message>
        <source>ExtraDataSize:</source>
        <translation type="obsolete">Taille :</translation>
    </message>
    <message>
        <source>Extra data :</source>
        <translation type="obsolete">Infos :</translation>
    </message>
    <message>
        <location line="+268"/>
        <source>Frequency:</source>
        <translation type="unfinished">Fréquence:</translation>
    </message>
    <message>
        <source>Variable Bitrate:</source>
        <translation type="obsolete">Bitrate variable:</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Channels:</source>
        <translation type="unfinished">Canaux:</translation>
    </message>
    <message>
        <location line="-278"/>
        <source>Video</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Codec 4CC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+56"/>
        <source>Average Bitrate:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Pixel format:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color range:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color primaries:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Transfer characteristics:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color space:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Video Codec Extradata</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Extradata:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Bitrate:</source>
        <translation>Débit :</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Codec:</source>
        <translation>Codec :</translation>
    </message>
    <message>
        <location line="+75"/>
        <source>Copy to Clipboard</source>
        <translation>Copier</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>psdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_psIndex.cpp" line="+244"/>
        <source>Indexing</source>
        <translation>Indexation</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>Il existe plusieurs fichiers avec des noms de fichiers séquentiels. Doivent-ils tous être chargés ?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_ps.cpp" line="+78"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>qaudiotracks</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="+132"/>
        <source>Select audio file</source>
        <translation>Sélectionner un fichier audio</translation>
    </message>
    <message>
        <location line="+22"/>
        <location line="+209"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location line="-209"/>
        <source>Cannot use that file as audio track</source>
        <translation>Impossible d&apos;utiliser ce fichier comme piste audio</translation>
    </message>
    <message>
        <location line="+209"/>
        <source>Some tracks are used multiple times</source>
        <translation>Certaines pistes sont utilisées plusieurs fois</translation>
    </message>
    <message>
        <location line="+163"/>
        <source>Track </source>
        <translation>Piste </translation>
    </message>
    <message>
        <location line="+0"/>
        <source> from video</source>
        <translation> de la vidéo</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>File </source>
        <translation>Fichier </translation>
    </message>
    <message>
        <location line="+35"/>
        <source>.... Add audio track</source>
        <translation>… Ajouter une piste audio</translation>
    </message>
    <message>
        <location line="-83"/>
        <source>copy</source>
        <translation>copier</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.h" line="+31"/>
        <source>Track %d</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Configure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Filters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Duplicate first track&apos;s settings</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>qencoding</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="+64"/>
        <source>Privileges Required</source>
        <translation>Privilèges requis</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Root privileges are required to perform this operation.</source>
        <translation>Les privilèges root sont requis pour effectuer cette opération.</translation>
    </message>
    <message>
        <location line="+147"/>
        <source>First Pass</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Second Pass</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Encoding...</source>
        <translation>Encodage…</translation>
    </message>
    <message>
        <location line="+232"/>
        <source>The encoding is paused. Do you want to resume or abort?</source>
        <translation>L&apos;encodage est en pause. Voulez vous reprendre ou abandonner ?</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resume</source>
        <translation>Reprendre</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Abort</source>
        <translation>Abandonner</translation>
    </message>
</context>
<context>
    <name>qfile</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="+45"/>
        <location line="+156"/>
        <source>All files (*.*)</source>
        <translation>Tous les fichiers (*.*)</translation>
    </message>
    <message>
        <location line="-69"/>
        <location line="+116"/>
        <source> files (*.</source>
        <translation> fichiers (*.</translation>
    </message>
    <message>
        <location line="-83"/>
        <source>Overwrite file </source>
        <translation>Écraser le fichier </translation>
    </message>
</context>
<context>
    <name>qgui2</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="+272"/>
        <source>&lt;b&gt;New version available&lt;/b&gt;&lt;br&gt; Version %1&lt;br&gt;Released on %2.&lt;br&gt;You can download it here&lt;br&gt; &lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt; You can disable autoupdate in preferences.&lt;/small&gt;</source>
        <translation>&lt;b&gt;Nouvelle version disponible&lt;/b&gt;&lt;br&gt; Version %1&lt;br&gt;Publié le %2.&lt;br&gt;Vous pouvez la télécharger ici&lt;br&gt; &lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt; Vous pouvez désactiver autoupdate dans les préférences.&lt;/small&gt;</translation>
    </message>
    <message>
        <location line="+480"/>
        <source>Recent Files</source>
        <translation>Fichiers récents</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Recent Projects</source>
        <translation>Projets récents</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Restore defaults</source>
        <translation>Réinitialiser</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Default theme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Light theme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Dark theme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+604"/>
        <source>?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+246"/>
        <source>Play/Stop</source>
        <translation></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to previous frame</source>
        <translation>Image précédente</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to next frame</source>
        <translation>Image suivante</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to previous keyframe</source>
        <translation>Image clé précédente</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to next keyframe</source>
        <translation>Image clé suivante</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Delete selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Set start marker</source>
        <translation>Mettre le marqueur A</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Set end marker</source>
        <translation>Mettre le marqueur B</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to previous cut point</source>
        <translation>Point de coupe précédent</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to next cut point</source>
        <translation>Point de coupe suivant</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Go to first frame</source>
        <translation>Aller au début</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to last frame</source>
        <translation>Aller à la fin</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to marker A</source>
        <translation>Aller au marqueur A</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to marker B</source>
        <translation>Aller au marqueur B</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Backward one minute</source>
        <translation>Reculer d&apos;une minute</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward one minute</source>
        <translation>Avancer d&apos;une minute</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 1 second</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 1 second</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 2 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 2 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 4 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 4 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Rotate mouse wheel to switch mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+828"/>
        <source>Input: %1x%2, %3fps  |  Decoder: %4  |  Display: %5  |  Zoom: %6%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>No file loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1075"/>
        <source>INFO: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>WARNING: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>ERROR: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-721"/>
        <source>The application has encountered a fatal problem
The current editing has been saved and will be reloaded at next start</source>
        <translation>L&apos;application a rencontré un problème fatal
L&apos;édition en cours a été enregistrée et sera rechargée au prochain démarrage</translation>
    </message>
    <message>
        <location line="+271"/>
        <source>%c-%s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>%c-%s (%02d)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Selection: </source>
        <translation>Sélection :</translation>
    </message>
    <message numerus="yes">
        <location line="+344"/>
        <location line="+2"/>
        <source> (%n track(s))</source>
        <translation>
            <numerusform> (%n piste)</numerusform>
            <numerusform> (%n pistes)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>qgui2menu</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="+51"/>
        <source>Project Script</source>
        <translation>Projet</translation>
    </message>
    <message>
        <location line="+4"/>
        <source> Project</source>
        <translation> Projet</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>&amp;Run Project...</source>
        <translation>&amp;Lancer un projet…</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;Debug Project...</source>
        <translation>Projet de &amp;débogage…</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Save &amp;As Project...</source>
        <translation>Sauvegarder comme projet…</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Scripting Shell</source>
        <translation>Console de script</translation>
    </message>
    <message>
        <location line="+4"/>
        <source> Shell</source>
        <translation>Console</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Scripting Reference</source>
        <translation>Référence de script</translation>
    </message>
    <message>
        <location line="+4"/>
        <source> Reference</source>
        <translation>Référence</translation>
    </message>
    <message>
        <location line="+176"/>
        <source>Restore previous session</source>
        <translation>Restaurer la session précédente</translation>
    </message>
</context>
<context>
    <name>qjobs</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="+13"/>
        <source>Ready</source>
        <translation>Prêt</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Succeeded</source>
        <translation>Réussi</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed</source>
        <translation>Echec</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Deleted</source>
        <translation>Supprimé</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Running</source>
        <translation>Traitement en cours</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Job Name</source>
        <translation>Nom du job</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Status</source>
        <translation>Statut</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Start Time</source>
        <translation>Début</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>End Time</source>
        <translation>Fin</translation>
    </message>
    <message>
        <location line="+64"/>
        <location line="+15"/>
        <source>Sure!</source>
        <translation>Sûr !</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Delete job</source>
        <translation>Détruire le job</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Are you sure you want to delete %s job?</source>
        <translation>Êtes-vous sûr de vouloir détruire %s job ?</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Delete *all* job</source>
        <translation>Détruire *tous* les jobs</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Are you sure you want to delete ALL jobs?</source>
        <translation>Êtes vous sur de vouloir détruire TOUS les jobs ?</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Already done</source>
        <translation>Déjà fait</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>This script has already been successfully executed.</source>
        <translation>Ce script a déjà été executé avec succés.</translation>
    </message>
</context>
<context>
    <name>qlicense</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_license.cpp" line="+25"/>
        <source>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;&lt;html&gt;&lt;head&gt;  &lt;title&gt;Avidemux is free software; you can redistribute it and/or  modify it under the terms of the GNU General Public License  version 2 as published by the Free Software Foundation&lt;/title&gt;&lt;style type=&quot;text/css&quot;&gt;&lt;!-- /* Style Definitions */ p.licenseStyle, li.licenseStyle, div.licenseStyle        {margin:0cm;        margin-bottom:.0001pt;        font-size:12.0pt;        font-family:&quot;Times New Roman&quot;;} /* Page Definitions */ @page Section1        {size:612.0pt 792.0pt;        margin:72.0pt 90.0pt 72.0pt 90.0pt;}div.Section1        {page:Section1;}--&gt;&lt;/style&gt;&lt;/head&gt;&lt;body lang=&quot;EN-GB&quot; style=&apos;text-justify-trim:punctuation&apos;&gt;  &lt;div class=&quot;Section1&quot;&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;Avidemux is    free software; you can redistribute it and/or modify it under    the terms of the GNU General Public License version 2 as    published by the Free Software Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;b&gt;&lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;    &lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Version 2, June    1991&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Copyright (C) 1989, 1991    Free Software Foundation, Inc.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;59 Temple Place, Suite    330, Boston, MA  02111-1307  USA&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Everyone is permitted to    copy and distribute verbatim copies of this license document,    but changing it is not allowed.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Preamble&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The licenses for most    software are designed to take away your freedom to share and    change it.  By contrast, the GNU General Public License is    intended to guarantee your freedom to share and change free    software--to make sure the software is free for all its users.     This General Public License applies to most of the Free    Software Foundation&apos;s software and to any other program whose    authors commit to using it.  (Some other Free Software    Foundation software is covered by the GNU Library General    Public License instead.)  You can apply it to your programs,    too.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;When we speak of free    software, we are referring to freedom, not price.  Our General    Public Licenses are designed to make sure that you have the    freedom to distribute copies of free software (and charge for    this service if you wish), that you receive source code or can    get it if you want it, that you can change the software or use    pieces of it in new free programs; and that you know you can do    these things.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;To protect your rights, we    need to make restrictions that forbid anyone to deny you these    rights or to ask you to surrender the rights. These    restrictions translate to certain responsibilities for you if    you distribute copies of the software, or if you modify    it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;For example, if you    distribute copies of such a program, whether gratis or for a    fee, you must give the recipients all the rights that you have.     You must make sure that they, too, receive or can get the    source code.  And you must show them these terms so they know    their rights.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;We protect your rights    with two steps: (1) copyright the software, and (2) offer you    this license which gives you legal permission to copy,    distribute and/or modify the software.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Also, for each author&apos;s    protection and ours, we want to make certain that everyone    understands that there is no warranty for this free software.     If the software is modified by someone else and passed on, we    want its recipients to know that what they have is not the    original, so that any problems introduced by others will not    reflect on the original authors&apos; reputations.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Finally, any free program    is threatened constantly by software patents.  We wish to avoid    the danger that redistributors of a free program will    individually obtain patent licenses, in effect making the    program proprietary.  To prevent this, we have made it clear    that any patent must be licensed for everyone&apos;s free use or not    licensed at all.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The precise terms and    conditions for copying, distribution and modification    follow.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;TERMS AND CONDITIONS FOR    COPYING, DISTRIBUTION AND MODIFICATION&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;0. This License applies to    any program or other work which contains a notice placed by the    copyright holder saying it may be distributed under the terms    of this General Public License.  The &quot;Program&quot;, below, refers    to any such program or work, and a &quot;work based on the Program&quot;    means either the Program or any derivative work under copyright    law: that is to say, a work containing the Program or a portion    of it, either verbatim or with modifications and/or translated    into another language.  (Hereinafter, translation is included    without limitation in the term &quot;modification&quot;.)  Each licensee    is addressed as &quot;you&quot;.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Activities other than    copying, distribution and modification are not covered by this    License; they are outside its scope.  The act of running the    Program is not restricted, and the output from the Program is    covered only if its contents constitute a work based on the    Program (independent of having been made by running the    Program). Whether that is true depends on what the Program    does.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;1. You may copy and    distribute verbatim copies of the Program&apos;s source code as you    receive it, in any medium, provided that you conspicuously and    appropriately publish on each copy an appropriate copyright    notice and disclaimer of warranty; keep intact all the notices    that refer to this License and to the absence of any warranty;    and give any other recipients of the Program a copy of this    License along with the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;You may charge a fee for    the physical act of transferring a copy, and you may at your    option offer warranty protection in exchange for a    fee.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;2. You may modify your    copy or copies of the Program or any portion of it, thus    forming a work based on the Program, and copy and distribute    such modifications or work under the terms of Section 1 above,    provided that you also meet all of these conditions:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) You must cause the    modified files to carry prominent notices stating that you    changed the files and the date of any change.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) You must cause any work    that you distribute or publish, that in whole or in part    contains or is derived from the Program or any part thereof, to    be licensed as a whole at no charge to all third parties under    the terms of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) If the modified program    normally reads commands interactively when run, you must cause    it, when started running for such interactive use in the most    ordinary way, to print or display an announcement including an    appropriate copyright notice and a notice that there is no    warranty (or else, saying that you provide a warranty) and that    users may redistribute the program under these conditions, and    telling the user how to view a copy of this License.     (Exception: if the Program itself is interactive but does not    normally print such an announcement, your work based on the    Program is not required to print an announcement.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;These requirements apply    to the modified work as a whole.  If identifiable sections of    that work are not derived from the Program, and can be    reasonably considered independent and separate works in    themselves, then this License, and its terms, do not apply to    those sections when you distribute them as separate works.  But    when you distribute the same sections as part of a whole which    is a work based on the Program, the distribution of the whole    must be on the terms of this License, whose permissions for    other licensees extend to the entire whole, and thus to each    and every part regardless of who wrote it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Thus, it is not the intent    of this section to claim rights or contest your rights to work    written entirely by you; rather, the intent is to exercise the    right to control the distribution of derivative or collective    works based on the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;In addition, mere    aggregation of another work not based on the Program with the    Program (or with a work based on the Program) on a volume of a    storage or distribution medium does not bring the other work    under the scope of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;3. You may copy and    distribute the Program (or a work based on it, under Section 2)    in object code or executable form under the terms of Sections 1    and 2 above provided that you also do one of the    following:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) Accompany it with the    complete corresponding machine-readable source code, which must    be distributed under the terms of Sections 1 and 2 above on a    medium customarily used for software interchange;    or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) Accompany it with a    written offer, valid for at least three years, to give any    third party, for a charge no more than your cost of physically    performing source distribution, a complete machine-readable    copy of the corresponding source code, to be distributed under    the terms of Sections 1 and 2 above on a medium customarily    used for software interchange; or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) Accompany it with the    information you received as to the offer to distribute    corresponding source code.  (This alternative is allowed only    for noncommercial distribution and only if you received the    program in object code or executable form with such an offer,    in accord with Subsection b above.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The source code for a work    means the preferred form of the work for making modifications    to it.  For an executable work, complete source code means all    the source code for all modules it contains, plus any    associated interface definition files, plus the scripts used to    control compilation and installation of the executable.     However, as a special exception, the source code distributed    need not include anything that is normally distributed (in    either source or binary form) with the major components    (compiler, kernel, and so on) of the operating system on which    the executable runs, unless that component itself accompanies    the executable.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If distribution of    executable or object code is made by offering access to copy    from a designated place, then offering equivalent access to    copy the source code from the same place counts as distribution    of the source code, even though third parties are not compelled    to copy the source along with the object code.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;4. You may not copy,    modify, sublicense, or distribute the Program except as    expressly provided under this License.  Any attempt otherwise    to copy, modify, sublicense or distribute the Program is void,    and will automatically terminate your rights under this    License. However, parties who have received copies, or rights,    from you under this License will not have their licenses    terminated so long as such parties remain in full    compliance.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;5. You are not required to    accept this License, since you have not signed it.  However,    nothing else grants you permission to modify or distribute the    Program or its derivative works.  These actions are prohibited    by law if you do not accept this License.  Therefore, by    modifying or distributing the Program (or any work based on the    Program), you indicate your acceptance of this License to do    so, and all its terms and conditions for copying, distributing    or modifying the Program or works based on it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;6. Each time you    redistribute the Program (or any work based on the Program),    the recipient automatically receives a license from the    original licensor to copy, distribute or modify the Program    subject to these terms and conditions.  You may not impose any    further restrictions on the recipients&apos; exercise of the rights    granted herein. You are not responsible for enforcing    compliance by third parties to this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;7. If, as a consequence of    a court judgment or allegation of patent infringement or for    any other reason (not limited to patent issues), conditions are    imposed on you (whether by court order, agreement or otherwise)    that contradict the conditions of this License, they do not    excuse you from the conditions of this License.  If you cannot    distribute so as to satisfy simultaneously your obligations    under this License and any other pertinent obligations, then as    a consequence you may not distribute the Program at all.  For    example, if a patent license would not permit royalty-free    redistribution of the Program by all those who receive copies    directly or indirectly through you, then the only way you could    satisfy both it and this License would be to refrain entirely    from distribution of the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If any portion of this    section is held invalid or unenforceable under any particular    circumstance, the balance of the section is intended to apply    and the section as a whole is intended to apply in other    circumstances.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;It is not the purpose of    this section to induce you to infringe any patents or other    property right claims or to contest validity of any such    claims; this section has the sole purpose of protecting the    integrity of the free software distribution system, which is    implemented by public license practices.  Many people have made    generous contributions to the wide range of software    distributed through that system in reliance on consistent    application of that system; it is up to the author/donor to    decide if he or she is willing to distribute software through    any other system and a licensee cannot impose that    choice.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;This section is intended    to make thoroughly clear what is believed to be a consequence    of the rest of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;8. If the distribution    and/or use of the Program is restricted in certain countries    either by patents or by copyrighted interfaces, the original    copyright holder who places the Program under this License may    add an explicit geographical distribution limitation excluding    those countries, so that distribution is permitted only in or    among countries not thus excluded.  In such case, this License    incorporates the limitation as if written in the body of this    License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;9. The Free Software    Foundation may publish revised and/or new versions of the    General Public License from time to time.  Such new versions    will be similar in spirit to the present version, but may    differ in detail to address new problems or    concerns.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Each version is given a    distinguishing version number.  If the Program specifies a    version number of this License which applies to it and &quot;any    later version&quot;, you have the option of following the terms and    conditions either of that version or of any later version    published by the Free Software Foundation.  If the Program does    not specify a version number of this License, you may choose    any version ever published by the Free Software    Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;10. If you wish to    incorporate parts of the Program into other free programs whose    distribution conditions are different, write to the author to    ask for permission.  For software which is copyrighted by the    Free Software Foundation, write to the Free Software    Foundation; we sometimes make exceptions for this.  Our    decision will be guided by the two goals of preserving the free    status of all derivatives of our free software and of promoting    the sharing and reuse of software generally.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;NO WARRANTY&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;11. BECAUSE THE PROGRAM IS    LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM,    TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN    OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER    PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY    KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED    TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A    PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND    PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM    PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY    SERVICING, REPAIR OR CORRECTION.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;12. IN NO EVENT UNLESS    REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY    COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR    REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU    FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR    CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO    USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR    DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR    THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY    OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;END OF TERMS AND    CONDITIONS&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;  &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>qmainfilter</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="+499"/>
        <location line="+28"/>
        <source>Partial</source>
        <translation>Partiel</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>This filter cannot be made partial</source>
        <translation>Ce filtre ne peut pas être partiel</translation>
    </message>
    <message>
        <location line="+344"/>
        <location line="+450"/>
        <source>Add</source>
        <translation>Ajouter</translation>
    </message>
    <message>
        <location line="-599"/>
        <location line="+154"/>
        <source>Remove</source>
        <translation>Enlever</translation>
    </message>
    <message>
        <location line="-156"/>
        <source>Configure</source>
        <translation>Configurer</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Move up</source>
        <translation>Déplacer vers le haut</translation>
    </message>
    <message>
        <location line="-403"/>
        <source>Preview</source>
        <translation>Prévisualisation</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>DISABLED </source>
        <translation>Désactivé</translation>
    </message>
    <message>
        <location line="+237"/>
        <source>This filter is not partial</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+164"/>
        <source>Move down</source>
        <translation>Déplacer vers le bas</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+80"/>
        <source>Make partial</source>
        <translation>Faire partiel</translation>
    </message>
    <message>
        <location line="-79"/>
        <source>Enable/Disable</source>
        <translation>Active/désactive</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>Disable</source>
        <translation>Désactive</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable</source>
        <translation>Active</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Make global</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+146"/>
        <source>Press %s to accept the dialog</source>
        <translation>Utiliser %s pour valider la fenêtre de dialogue</translation>
    </message>
    <message>
        <location line="+148"/>
        <source>Load video filters..</source>
        <translation>Charger les filtres vidéos..</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Save video filters..</source>
        <translation>Enregistrer les filtres vidéos..</translation>
    </message>
    <message>
        <location line="+348"/>
        <source>Can not add partial filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>A selection by markers has to be made.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>qprocessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_processing.cpp" line="+69"/>
        <source>Unknown</source>
        <translation>Inconnu</translation>
    </message>
    <message>
        <location line="+96"/>
        <source>_Resume</source>
        <translation>&amp;Reprendre</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The processing is paused.</source>
        <translation>L&apos;operation est en pause</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cancel it ?</source>
        <translation>Annuler ?</translation>
    </message>
</context>
<context>
    <name>qprops</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="+26"/>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Yes</source>
        <translation>Oui</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>%2.3f fps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+171"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>n/a</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-171"/>
        <source>%d kbps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <location line="+269"/>
        <source>%02d:%02d:%02d.%03d</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-254"/>
        <source>RGB, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Planar RGB, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>RGBA, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>RGB, 5-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0 (NV12), 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+2"/>
        <source>Packed YUV 4:2:2, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:2, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:1:1, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Grayscale Y, 8-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 10-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0 (P010), 10-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 10-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 12-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:2, 10-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 12-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+9"/>
        <location line="+26"/>
        <location line="+37"/>
        <location line="+31"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-98"/>
        <source>Limited (MPEG)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Full (JPEG)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+26"/>
        <location line="+39"/>
        <source>BT.709</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-63"/>
        <location line="+26"/>
        <source>BT.470 System M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-24"/>
        <source>BT.601 PAL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>BT.601 NTSC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Generic film</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>XYZ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>DCI P3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Display P3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>EBU Tech. 3213</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <location line="+39"/>
        <source>BT.470 System B/G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-37"/>
        <location line="+39"/>
        <source>BT.601</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-37"/>
        <location line="+39"/>
        <source>SMPTE 240M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Linear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Logarithmic (100:1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Logarithmic (316.227:1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>xvYCC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.1361</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>sRGB/sYCC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 (10-bit)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 (12-bit)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>PQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>SMPTE 428M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>HLG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>sRGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>FCC 73.682</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>YCgCo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 non-constant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 constant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Y&apos;D&apos;zD&apos;x</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Chromaticity-derived non-constant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Chromaticity-derived constant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>ICtCp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+38"/>
        <source>(+%d bytes)</source>
        <translation type="unfinished"></translation>
    </message>
    <message numerus="yes">
        <location line="+24"/>
        <location line="+2"/>
        <source>Audio (%n active track(s))</source>
        <translation>
            <numerusform>Audio (%n piste activée)</numerusform>
            <numerusform>Audio (%n pistes activées)</numerusform>
        </translation>
    </message>
    <message>
        <source>Video</source>
        <translation type="vanished">Vidéo</translation>
    </message>
    <message>
        <source>Image Size:	</source>
        <translation type="vanished">Taille image : </translation>
    </message>
    <message>
        <source>Aspect Ratio:	</source>
        <translation type="vanished">Ratio : </translation>
    </message>
    <message>
        <source>Frame Rate:	</source>
        <translation type="vanished">Fréquence : </translation>
    </message>
    <message>
        <source>Total Duration:	</source>
        <translation type="vanished">Durée totale : </translation>
    </message>
    <message>
        <source>Extra Video Properties</source>
        <translation type="vanished">Propriétés vidéos étendues</translation>
    </message>
    <message>
        <source>Channels:	</source>
        <translation type="vanished">Canaux : </translation>
    </message>
    <message>
        <source>Bitrate:	</source>
        <translation type="vanished">Débit : </translation>
    </message>
    <message>
        <location line="+198"/>
        <source>No Audio</source>
        <translation>Pas d&apos;audio</translation>
    </message>
    <message>
        <location line="-431"/>
        <source>%s (%u:%u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+267"/>
        <source>Mono</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Stereo</source>
        <translation>Stéréo</translation>
    </message>
</context>
<context>
    <name>qshell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/Q_shell.cpp" line="+63"/>
        <source>Enter your commands then press the evaluate button or CTRL+ENTER.
</source>
        <translation>Entrez vos commandes, puis appuyez sur le bouton évaluer ou CTRL + ENTRÉE.</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+4"/>
        <source>Enter help() for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-3"/>
        <source>You can use CTRL+PageUP and CTRL+Page Down to recall previous commands
Ready.
</source>
        <translation>Vous pouvez utiliser CTRL + Page Précédente et CTRL + Page Suivante pour rappeler les commandes précédentes
Prêt.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Enter your commands then press the evaluate button or ⌘⏎.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You can use ⌥⌘▲ and ⌥⌘▼ to recall previous commands.
Ready.
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>qtalert</name>
    <message>
        <source>Alert</source>
        <translation type="vanished">Alerte</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="+117"/>
        <source>Info</source>
        <translation>Information</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <location line="+29"/>
        <source>Confirmation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+25"/>
        <location line="+34"/>
        <source>Question</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Question?</source>
        <translation>Question ?</translation>
    </message>
</context>
<context>
    <name>qtray</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/ADM_qtray.cpp" line="+82"/>
        <source>Open Avidemux</source>
        <translation>Ouvrir Avidemux</translation>
    </message>
</context>
<context>
    <name>quadTrans</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/ADM_vidQuadTrans.cpp" line="+42"/>
        <source>Quadrilateral transformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Four point transform.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>quadTransDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="+14"/>
        <source>Quadrilateral transformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Bilinear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Interpolation:</source>
        <translation>Interpolation :</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Zoom:</source>
        <translation>Zoom :</translation>
    </message>
    <message>
        <location line="+34"/>
        <location line="+27"/>
        <location line="+74"/>
        <location line="+34"/>
        <source>Δy:</source>
        <translation>Δy :</translation>
    </message>
    <message>
        <location line="-115"/>
        <location line="+14"/>
        <location line="+50"/>
        <location line="+34"/>
        <source>Δx:</source>
        <translation>Δx :</translation>
    </message>
</context>
<context>
    <name>quickFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/quickfilter.ui" line="+20"/>
        <source>Add Partial Video Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+44"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Type to narrow the list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>qvobsub</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_vobsub.cpp" line="+88"/>
        <source>Select Idx File</source>
        <translation>Choix du fichier Idx</translation>
    </message>
</context>
<context>
    <name>rawmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRawConfig.cpp" line="+29"/>
        <source>Prefer Annex B type stream</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Video Only Muxer Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRaw.cpp" line="+83"/>
        <source>Saving raw video</source>
        <translation>Enregistrer une vidéo brute</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
</context>
<context>
    <name>removeplane</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="+45"/>
        <source>Remove  Plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove Y,U or V plane (used mainly to debug other filters).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+105"/>
        <source>Keep Y Plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process luma plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep U Plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaU plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep V Plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaV plane</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Remove plane</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>resampleFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="+44"/>
        <source>Custom</source>
        <translation>Manuel</translation>
    </message>
    <message>
        <source>59.94 (NTSC)</source>
        <translation type="vanished">59,94 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25  (PAL)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>59.94  (NTSC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Resample FPS</source>
        <translation>Re-échantillonner la fréquence d&apos;images</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Change and enforce FPS. Keep duration and sync.</source>
        <translation>Change la fréquence d&apos;images. Conserve la synchronisation et la durée</translation>
    </message>
    <message>
        <location line="+354"/>
        <source>none</source>
        <translation>aucune</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion compensation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_New frame rate:</source>
        <translation>_Nouvelle fréquence (i/s) :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Interpolation:</source>
        <translation>_Interpolation :</translation>
    </message>
    <message>
        <source>25 (PAL)</source>
        <translation type="vanished">25 (PAL/SECAM)</translation>
    </message>
    <message>
        <location line="-405"/>
        <source>23.976 (Film)</source>
        <translation>23,976 (film)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>29.97 (NTSC)</source>
        <translation>29,97 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (Pal)</source>
        <translation>50 (PAL/SECAM)</translation>
    </message>
    <message>
        <location line="+401"/>
        <source>_Mode:</source>
        <translation>_Mode :</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Resample fps</source>
        <translation>Ré-échantillonnage du nombre d&apos;i/s</translation>
    </message>
</context>
<context>
    <name>resize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/Q_resize.cpp" line="+118"/>
        <location line="+144"/>
        <source>Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Most recently accepted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bilinear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos-3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearest neighbor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+259"/>
        <source>Width and height cannot be odd</source>
        <translation>La largeur ou la hauteur ne peuvent être impaires</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/swScaleResize.cpp" line="+83"/>
        <source>swsResize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>swScale Resizer.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>resizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="+14"/>
        <source>Resize</source>
        <translation>Redimenssionner</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Aspect Ratio</source>
        <translation>Format d&apos;image</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Lock Aspect Ratio</source>
        <translation>Verrouiller le format d&apos;image</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Source PAR:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+32"/>
        <source>1:1 (square pixels)</source>
        <translation>1:1 (pixel carré)</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Destination PAR:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Resize Dimensions</source>
        <translation>Redimensionner vers </translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Width:</source>
        <translation>Largeur :</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Height:</source>
        <translation>Hauteur :</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>No rounding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation>Arrondir au multiple de 16</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>Arrondir au multiple de 8</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>Arrondir au multiple de 4</translation>
    </message>
    <message>
        <location line="+114"/>
        <source>Percent</source>
        <translation>Pourcent</translation>
    </message>
    <message>
        <location line="+79"/>
        <source>Error X / Y:</source>
        <translation>Erreur X/Y :</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>0.0000</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>(00:00)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Resize Method:</source>
        <translation>Méthode :</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>Bilinéaire</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Bicubique</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Nearest neighbor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-221"/>
        <source>1%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+40"/>
        <source>200%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+66"/>
        <source>0.00 / 0.00</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>rotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotateSimple/rotate.cpp" line="+52"/>
        <location line="+161"/>
        <source>Rotate</source>
        <translation>Rotation</translation>
    </message>
    <message>
        <location line="-160"/>
        <source>Rotate the image by 90/180/270 degrees.</source>
        <translation>Angle de rotation (90°, 180°, 270°).</translation>
    </message>
    <message>
        <location line="+153"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90 degrees</source>
        <translation>90 degrés</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>90° clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>90° contraclockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-1"/>
        <source>180 degrees</source>
        <translation>180 degrés</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>270 degrees</source>
        <translation>270 degrés</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Angle:</source>
        <translation>_Angle :</translation>
    </message>
</context>
<context>
    <name>seekablePreviewDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/seekablePreview.ui" line="+20"/>
        <source>Preview</source>
        <translation>Aperçu</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="+167"/>
        <source>Peek Original</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show unprocessed input</source>
        <translation>Afficher l&apos;entrée non traitée</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Back one minute</source>
        <translation>Reculer d&apos;une minute</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go to the start of the selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go to the end of the selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Play</source>
        <translation>Lecture</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next image</source>
        <translation>Image suivante</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward one minute</source>
        <translation>Avancer d&apos;une minute</translation>
    </message>
</context>
<context>
    <name>separateFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidSeparateField.cpp" line="+53"/>
        <source>Separate Fields</source>
        <translation>Champs séparés</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Split each image into 2 fields.</source>
        <translation>Divisez chaque image en 2 champs.</translation>
    </message>
</context>
<context>
    <name>shaderLoader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="-3"/>
        <source>Reload shader</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>sharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Sharpen.cpp" line="+27"/>
        <source>Sharpen convolution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :sharpen.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>stackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/stackField.cpp" line="+47"/>
        <source>Stack Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put even lines on top, odd lines at bottom.</source>
        <translation>Mettre les lignes paires en haut, les lignes impaires en bas.</translation>
    </message>
</context>
<context>
    <name>stillimage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="+68"/>
        <location line="+305"/>
        <source>Still Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-304"/>
        <source>Duplicate frames for a given duration.</source>
        <translation>Dupliquer les images pour conserver la durée.</translation>
    </message>
    <message>
        <location line="+300"/>
        <source>_Start time:</source>
        <translation>_Début :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Duration:</source>
        <translation type="unfinished">_Fin :</translation>
    </message>
</context>
<context>
    <name>swapuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/swapUV/swapUV.cpp" line="+41"/>
        <source>Swap UV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Swap the U and V planes.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>telecide</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide.cpp" line="+45"/>
        <source>Decomb telecide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Donald Graft Telecide. Replace ivtc pattern by progressive frames. Video stays at 30 fps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="+186"/>
        <source>No strategy</source>
        <translation>Aucune stratégie</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3:2 pulldown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL/SECAM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>NTSC converted from PAL</source>
        <translation>NTSC convertie depuis PAL</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Top</source>
        <translation>Haut</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom</source>
        <translation>Bas</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Never</source>
        <translation>Jamais</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>If still combed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Always</source>
        <translation>Toujours</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None but compute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Postproc on best match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Postproc and show zones (debug)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Process image (not fields)</source>
        <translation>Traitement image (pas les champs)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Process image (not fields), debug</source>
        <translation>Traitement image (pas les champs), déboguer</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Strategy:</source>
        <translation>&amp;Stratégie:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Field order:</source>
        <translation>&amp;Ordre champ :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Postprocessing:</source>
        <translation>&amp;Post-traitement :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Try backward:</source>
        <translation>&amp;Essayer en arrière :</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Direct threshold:</source>
        <translation>Seuil &amp;direct :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Backward threshold:</source>
        <translation>Seuil en &amp;arrière :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Noise threshold:</source>
        <translation>Seuil de b&amp;ruit :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Postp_rocessing threshold:</source>
        <translation>Seuil de post-t&amp;raitement :</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Use chroma to decide</source>
        <translation>&amp;Utiliser chroma pour décider</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sho_w info</source>
        <translation>Voir &amp;info</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Debu_g</source>
        <translation type="unfinished">Débo&amp;guer</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bl_end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Decomb Telecide</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>timestamp</name>
    <message>
        <location filename="../ADM_UIs/src/T_timeStamp.cpp" line="+198"/>
        <source> h</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source> m</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source> s</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tinypy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_scriptEngines/tinyPy/src/ADM_pyAvidemux.cpp" line="+434"/>
        <source>Save File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Open File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Select Directory</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tsdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="+266"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="+337"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+86"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>Il existe plusieurs fichiers avec des noms de fichiers séquentiels. Devraient-ils tous être chargés?</translation>
    </message>
    <message>
        <location line="+12"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="+12"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+19"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexVC1.cpp" line="+74"/>
        <source>Indexing</source>
        <translation>Indexation</translation>
    </message>
    <message>
        <location line="+161"/>
        <source>Size Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported, stopping here.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+72"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported and will result in a crash.
Proceed nevertheless?
This warning won&apos;t be shown again for this video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_ts.cpp" line="+84"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>twolame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/twolame/audioencoder_twolame.cpp" line="+205"/>
        <source>_Bitrate:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>TwoLame Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>uisupport</name>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="+46"/>
        <source>X11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MS Windows GDI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Mac OS X Quartz 2D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Mac OS X QuickDraw</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>OpenGL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>MS Windows Direct3D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Default Raster</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>unstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/unstackField.cpp" line="+47"/>
        <source>Unstack Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weave top and bottom halves.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>utvideo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="+108"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Left Neighbour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Median</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Prediction Method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Ut Video Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vaEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/directVaEnc/libvaencPlugin.cpp" line="+77"/>
        <source>vaH264 Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vaH264</name>
    <message>
        <location line="-4"/>
        <source>_IDR Period:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bitrate(kbps)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vaapiDeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="+121"/>
        <source>VA-API Deinterlacer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Deinterlace and optionally resize video using VA-API.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+316"/>
        <source>Bob</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weave</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion-Adaptive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion-Compensated</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Top Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Frame per Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double Framerate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Field Order:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Output:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deinterlacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Transformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>VA-API Deinterlacer and Resizer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Unsupported Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Specified deinterlacing mode %s is not supported, replaced with %s.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>VA-API Setup Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Could not setup VA-API, purely passthrough operation.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vaapiResize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="+58"/>
        <source>VA-API Resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize image using VA-API.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+129"/>
        <source>Width :</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height :</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>mpeg-&gt;PC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vaapi</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vdpaudeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="+139"/>
        <source>vdpauDeint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VDPAU deinterlacer (+resize).</source>
        <translation>VDPAU de-entrelacement (+redimensionnement).</translation>
    </message>
    <message>
        <location line="+195"/>
        <source>Keep Top Field</source>
        <translation>Garder le champs supérieur</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep Bottom Field</source>
        <translation>Garder le champs inférieur</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double framerate</source>
        <translation>Doubler le nombre d&apos;image par seconde</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Top Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Field Order:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_IVTC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Resize</source>
        <translation>&amp;Redimensionner</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>_Deint Mode:</source>
        <translation>Mode de &amp;désentrelacement :</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Width:</source>
        <translation>Largeur :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height:</source>
        <translation>Hauteur :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
</context>
<context>
    <name>vdpresize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="+70"/>
        <source>vdpau: Resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>vdpau: Resize image using vdpau.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+129"/>
        <source>Width:</source>
        <translation>Largeur :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height:</source>
        <translation>Hauteur :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
</context>
<context>
    <name>vflip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/verticalFlip/verticalFlip.cpp" line="+47"/>
        <source>Vertical Flip</source>
        <translation>Inversion verticale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Vertically flip the image.</source>
        <translation>Inverse l&apos;image verticalement.</translation>
    </message>
</context>
<context>
    <name>vobSubDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="+13"/>
        <source>Subtitle Font Size and Position</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Delay :</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Select File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Language :</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Idx File :</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vorbis</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="+350"/>
        <source>_Quality:</source>
        <translation>&amp;Qualité :</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>VBR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quality based</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>_Bitrate:</source>
        <translation>Débit :</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Vorbis Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vp9encoder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="+28"/>
        <source>Realtime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Good quality</source>
        <translation>Bonne qualité</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Best quality</source>
        <translation>Meilleur qualité</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>For optimal quality, select 2-pass average bitrate mode and set target bitrate to zero</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deadline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Speed</source>
        <translation>Vitesse</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use as many threads as CPU cores</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>GOP Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use full color range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Encoding Mode</source>
        <translation>Mode d&apos;encodage</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Speed vs Quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Keyframes</source>
        <translation>Images clés</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Miscellaneous</source>
        <translation>Divers</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>libvpx VP9 Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>vsWindow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vsProxy_qt4.cpp" line="+85"/>
        <source>Open VapourSynth File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>VS Script Files (*.vpy)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>waveletDenoise</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/ADM_vidWaveletDenoise.cpp" line="+42"/>
        <source>Wavelet denoiser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Based on Marco Rossini&apos;s denoiser.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>waveletDenoiseDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="+14"/>
        <source>Wavelet Denoiser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Softness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+62"/>
        <source>High quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Denoise chroma</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>waveletSharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/ADM_vidWaveletSharp.cpp" line="+42"/>
        <source>Wavelet sharpener</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Based on Marco Rossini&apos;s sharpener.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>waveletSharpDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="+14"/>
        <source>Wavelet Sharpener</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+124"/>
        <source>Strength</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Noise cutoff</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-54"/>
        <source>Radius</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>High quality</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>workingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/working.ui" line="+14"/>
        <source>Processing</source>
        <translation>En cours</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Elapsed:</source>
        <translation>Temps écoulé:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Time Remaining:</source>
        <translation>Temps restant :</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>00:00:00</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>x264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/ADM_x264Setup.cpp" line="+206"/>
        <source>Not coded</source>
        <translation>Non codé</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>this mode has not been implemented
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="+261"/>
        <source>Auto</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>none</source>
        <translation>aucun</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Unknown</source>
        <translation>Inconnu</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Custom</source>
        <translation>Manuel</translation>
    </message>
    <message>
        <location line="+424"/>
        <source>Target Bitrate:</source>
        <translation>Débit cible :</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+19"/>
        <source>kbit/s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Quantiser:</source>
        <translation>Quantisation :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quality:</source>
        <translation>Qualité :</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Target Video Size:</source>
        <translation>Taille vidéo cible :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MB</source>
        <translation>Mo</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Average Bitrate:</source>
        <translation>Débit moyen :</translation>
    </message>
    <message>
        <location line="+80"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>L&apos; optimisation Macroblock-Tree  nécessite  Variance Adaptive Quantisation. Variance Adaptive Quantisation va être automatiquement activée.

Voulez vous procéder ?</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>L&apos; optimisation Macroblock-Tree  nécessite  Variance Adaptive Quantisation. Variance Adaptive Quantisation va être automatiquement activée.

Voulez vous procéder ?</translation>
    </message>
    <message>
        <location line="+61"/>
        <location line="+70"/>
        <location line="+14"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location line="-84"/>
        <source>Cannot load preset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Save Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Overwrite</source>
        <translation>Remplacer</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Replace the following preset ?:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Cannot save preset</source>
        <translation>Impossible d&apos;enregistrer le préréglage</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Cannot delete custom profile</source>
        <translation>Impossible de supprimer le profil personnalisé</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Do you really want to delete the </source>
        <translation>Voulez-vous vraiment supprimer le</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> profile ?.
S&apos;il s&apos;agit d&apos;un profil système, il sera recréé la prochaine fois.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Delete preset</source>
        <translation>Supprimer préréglage</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Delete</source>
        <translation>Effacer</translation>
    </message>
</context>
<context>
    <name>x264ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="+15"/>
        <source>x264 Configuraton</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Configuration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Save As</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+3157"/>
        <source>Delete</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <location line="-3115"/>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Basic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Use advanced configuration</source>
        <translation>Utiliser la configuration avancée</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Preset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Tuning:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>IDC Level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+33"/>
        <location line="+1149"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-1144"/>
        <location line="+669"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-664"/>
        <source>1.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1.3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <location line="+639"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-634"/>
        <source>3.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>3.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>5.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Fast Decode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Zero Latency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Fast First Pass</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Threads </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Target Video Size:</source>
        <translation>Taille vidéo cible:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Video Size (Two Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Encoding Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>MB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+60"/>
        <location line="+200"/>
        <source>0 (High Quality)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-177"/>
        <location line="+200"/>
        <location line="+1649"/>
        <source>Quantiser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-1826"/>
        <location line="+200"/>
        <source>51 (Low Quality)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-101"/>
        <source>Advanced RC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Advanced Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Maximum Constant Rate Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+158"/>
        <source>Macroblock-tree Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Frametype Lookahead:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <location line="+2495"/>
        <source>frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-2471"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>31</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Motion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Motion Estimation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Motion Estimation Method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Diamond Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Hexagonal Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Exhaustive Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Hadamard Exhaustive Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+42"/>
        <source>1 (Fast)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Subpixel Refinement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>11 (Best)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Motion Vector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Maximum Motion Vector Length:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Minimum Buffer Between Threads:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Prediction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <location line="+450"/>
        <location line="+36"/>
        <source>Disabled</source>
        <translation>Désactivé</translation>
    </message>
    <message>
        <location line="-481"/>
        <source>Weighted References</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Weighted References + Duplicates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Direct Prediction Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+2601"/>
        <source>None</source>
        <translation type="unfinished">Aucun</translation>
    </message>
    <message>
        <location line="-2596"/>
        <source>Spatial</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Temporal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Weighted Prediction for B-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Constrained Intra Prediction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Partition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Partition Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>8x8 DCT Spatial Transform</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>8x8, 8x16 and 16x8 P-frame Intra-predicted Blocks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>8x8, 8x16 and 16x8 B-frame Intra-predicted Blocks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>4x4, 4x8 and 8x4 P-frame Intra-predicted Blocks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>8x8 Intra-predicted Blocks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>4x4 Intra-predicted Blocks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Frame Encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>CABAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Loop Filter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+1333"/>
        <source>Strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-1294"/>
        <source>Threshold:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Open GOP:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Normal Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Blu-ray Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Interlaced:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Bottom Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Top Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Maximum Reference Frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+39"/>
        <source>B-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>B-frames as References:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Strictly Hierarchical Pyramid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Non-strict (Not Blu-ray Compatible)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Fast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Optimal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+74"/>
        <source>B-frame Bias:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Adaptive B-frame Decision:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>I-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>GOP Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Minimum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Maximum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+32"/>
        <source>I-frame Threshold:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Periodic Intra Refresh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <location line="+6"/>
        <source>Analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Mixed References</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Chroma Motion Estimation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Trellis Quantization:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Final Macroblock Only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Always On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>DCT Decimation on P-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Psychovisual Rate Distortion Optimisation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Psychovisual Trellis:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Noise Reduction:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Luma Quantisation Deadzone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Intra Luma Quantisation Deadzone:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Inter Luma Quantisation Deadzone:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Quantisation Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Flat Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>JVT Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+861"/>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-814"/>
        <source>Quantiser Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Maximum Quantiser:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+85"/>
        <location line="+179"/>
        <location line="+307"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-464"/>
        <source>Maximum Quantiser Step:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Average Bitrate Tolerance:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Minimum Quantiser:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Quantiser Curve Compression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantiser Curve Compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Adaptive Quantisation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Variance AQ:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Normal</source>
        <translation>Normale</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto Variance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto Variance Biased</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+91"/>
        <source>Advanced 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Video Buffer Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Maximum VBV Bitrate:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>kbit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+65"/>
        <source>kbit/s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>VBV Buffer Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Slicing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Slices per Frame:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Size per Slice:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>bytes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Zones</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Add</source>
        <translation type="unfinished">Ajouter</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Advanced 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Multithreading</source>
        <translation>Multithreading</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Auto-detect</source>
        <translation>Détection auto</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation>Personnaliser :</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Enforce Repeatability</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Slice-based Threading</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Output 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generate Access Unit Delimiters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>BluRay compatibility</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Generate fake interlaced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Pixel Aspect Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Custom:</source>
        <comment>PAR</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>As Input</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+49"/>
        <source>:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Predefined Aspect Ratio:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>16:15 (PAL 4:3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>64:45 (PAL 16:9)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>8:9 (NTSC 4:3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>32:27 (NTSC 16:9)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Output 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Video Usability Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation>Ces réglages ne sont que des suggestions pour l&apos;équipement de lecture. À utiliser à vos risques et périls.</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Overscan:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+46"/>
        <location line="+58"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>Undefined</source>
        <translation>Indéfini</translation>
    </message>
    <message>
        <location line="-235"/>
        <source>Show</source>
        <translation>Montrer</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Crop</source>
        <translation>Recadrer</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Video Format:</source>
        <translation>Format Vidéo:</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Component</source>
        <translation>Composant</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>PAL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>NTSC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>SECAM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Colour Primaries:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>BT709</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-131"/>
        <location line="+63"/>
        <source>BT470M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-58"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>BT470BG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-131"/>
        <location line="+136"/>
        <source>SMPTE170M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-131"/>
        <location line="+78"/>
        <location line="+58"/>
        <source>SMPTE240M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-131"/>
        <source>Film</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Transfer Characteristics:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Linear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>LOG100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>LOG316</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>SMPTEL170M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Colour Matrix:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>FCC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>GBR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>YCgCo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>HRD Parameters:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>VBR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>CBR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Chroma Sample Location:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Full Range Samples</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>x264CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="+16"/>
        <source>x264 Custom Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Intra 4x4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+28"/>
        <location line="+446"/>
        <location line="+446"/>
        <location line="+703"/>
        <source>Luma:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-1385"/>
        <location line="+446"/>
        <source>Chroma U/V:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-238"/>
        <source>Inter 4x4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+446"/>
        <source>Intra 8x8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+703"/>
        <source>Inter 8x8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+727"/>
        <source>Load File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Cancel</source>
        <translation>Annuler</translation>
    </message>
</context>
<context>
    <name>x265</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/ADM_x265Setup.cpp" line="+238"/>
        <source>Not coded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>this mode has not been implemented
</source>
        <translation>ce mode n&apos;a pas été implémenté
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="+289"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>none</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Custom</source>
        <translation>Manuel</translation>
    </message>
    <message>
        <location line="+351"/>
        <source>Target Bitrate:</source>
        <translation>Bitrate cible :</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+20"/>
        <source>kbit/s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Quantiser:</source>
        <translation>Quantisation:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quality:</source>
        <translation>Qualité:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Target Video Size:</source>
        <translation>Taille vidéo cible:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Average Bitrate:</source>
        <translation>Bitrate moyen:</translation>
    </message>
    <message>
        <location line="+128"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>L&apos; optimisation Macroblock-Tree  nécessite  Variance Adaptive Quantisation. Variance Adaptive Quantisation va être automatiquement activée.

Voulez vous procéder ?</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>L&apos; optimisation Macroblock-Tree  nécessite  Variance Adaptive Quantisation. Variance Adaptive Quantisation va être automatiquement activée.

Voulez vous procéder ?</translation>
    </message>
    <message>
        <location line="+41"/>
        <location line="+67"/>
        <location line="+17"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location line="-84"/>
        <source>Cannot load preset</source>
        <translation>Impossible de charger le préréglage</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Save Profile</source>
        <translation>Enregistrer le Profil</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Overwrite</source>
        <translation>Écraser</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Replace the following preset ?:</source>
        <translation>Remplacer le préréglage suivant ?:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cannot save preset</source>
        <translation>Impossible d&apos;enregistrer le préréglage</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Cannot delete custom profile</source>
        <translation>Impossible de supprimer le profil personnalisé</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Do you really want to delete the </source>
        <translation>Voulez-vous vraiment supprimer le </translation>
    </message>
    <message>
        <location line="+1"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> profile ?.
S&apos;il s&apos;agit d&apos;un profil système, il sera recréé la prochaine fois.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Delete preset</source>
        <translation>Supprimer préréglage</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Delete</source>
        <translation>Effacer</translation>
    </message>
</context>
<context>
    <name>x265ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="+15"/>
        <source>x265 Configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Configuration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Save As</source>
        <translation>Enregistrer sous</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+3061"/>
        <source>Delete</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <location line="-3019"/>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Basic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Use advanced configuration</source>
        <translation>Utiliser la configuration avancée</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+81"/>
        <source>Preset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Tuning:</source>
        <translation>Réglage:</translation>
    </message>
    <message>
        <location line="+91"/>
        <source>IDC Level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+572"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-661"/>
        <source>Pool Threads </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Frame Threads </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Output Bit Depth:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Target Video Size:</source>
        <translation>Taille vidéo cible:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Video Size (Two Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Encoding Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>MB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+44"/>
        <location line="+213"/>
        <source>0 (High Quality)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-190"/>
        <location line="+213"/>
        <location line="+1376"/>
        <source>Quantiser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-1566"/>
        <location line="+213"/>
        <source>51 (Low Quality)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-143"/>
        <source>Use Strict Constant Bitrate Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Advanced RC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Advanced Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Maximum Constant Rate Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+158"/>
        <source>Coding Unit-tree Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Frametype Lookahead:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <location line="+2441"/>
        <source>frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-2417"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>31</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Motion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Motion Estimation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Motion Estimation Method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Diamond Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Hexagonal Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Star Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Exhaustive Search</source>
        <translation>Recherche exhaustive</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>1 (Fast)</source>
        <translation>1 (rapide)</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Subpixel Refinement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>7 (Best)</source>
        <translation>7 (meilleur)</translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Motion Vector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Prediction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Constrained Intra Prediction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Motion Partitions:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Rectangular</source>
        <translation>Rectangulaire</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Asymmetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Limit Motion Partition Modes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+269"/>
        <location line="+43"/>
        <source>Disabled</source>
        <translation type="unfinished">Désactivé</translation>
    </message>
    <message>
        <location line="-307"/>
        <source>Weighted References</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Weighted References + Duplicates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Frame Encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Loop Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Open GOP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Interlaced:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Top Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bottom Field First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Maximum Reference Frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+60"/>
        <source>B-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+114"/>
        <source>B-frames as References:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Fast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Optimal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-54"/>
        <source>B-frame Bias:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-31"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+65"/>
        <source>Adaptive B-frame Decision:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+84"/>
        <source>I-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>GOP Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Minimum:</source>
        <translation>Minimum :</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Maximum:</source>
        <translation>Maximum:</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>I-frame Threshold:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+53"/>
        <location line="+6"/>
        <source>Analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>DCT Decimation on P-frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-571"/>
        <source>Prediction for B-frames:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Weighted Prediction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Intra Prediction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+222"/>
        <source>Limit References by:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>CU</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Depth</source>
        <translation>Profondeur</translation>
    </message>
    <message>
        <location line="+330"/>
        <source>Rate Distortion Optimisation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <location line="+88"/>
        <source>Level:</source>
        <translation>Niveau :</translation>
    </message>
    <message>
        <location line="-54"/>
        <location line="+88"/>
        <source>Psycho-visual Strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Noise Reduction Intra:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Noise Reduction Inter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Strong Intra Smoothing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Quantisation Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Flat Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>JVT Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+1080"/>
        <source>Edit</source>
        <translation>Editer</translation>
    </message>
    <message>
        <location line="-1033"/>
        <source>Quantiser Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+182"/>
        <location line="+608"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-747"/>
        <source>Maximum Quantiser Step:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-598"/>
        <source>Enabled</source>
        <translation>Activé</translation>
    </message>
    <message>
        <location line="+277"/>
        <source>RDO in Quantization:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+340"/>
        <source>Cb</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Cr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Quantiser Curve Compression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantiser Curve Compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Adaptive Quantisation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Variance AQ:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Normal</source>
        <translation>Normale</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto Variance AQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto-Variance Biased</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto-Variance Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Strength:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+65"/>
        <source>Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Color Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+160"/>
        <source>The value set here will almost always be ignored in favor of the aspect ratio stored in the container.  Configure that via the options in Output Format for the muxer chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Unspecified</source>
        <comment>PAR</comment>
        <translation>Non spécifié</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Custom Aspect Ratio:</source>
        <comment>PAR</comment>
        <translation>Ratio personnalisé :</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Same as Input</source>
        <translation>Comme l&apos;entrée</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Advanced 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Video Buffer Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Maximum VBV Bitrate:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>kbit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+65"/>
        <source>kbit/s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>VBV Buffer Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Slicing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Slices per Frame:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Size per Slice:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>bytes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Zones</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Add</source>
        <translation>Ajouter</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Advanced 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Multithreading</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Auto-detect</source>
        <translation>Détection auto</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Enforce Repeatability</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Slice-based Threading</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+59"/>
        <location line="+6"/>
        <source>Output</source>
        <translation>Sortie</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generate Access Unit Delimiters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-606"/>
        <source>Pixel Aspect Ratio</source>
        <translation>Ratio de pixel</translation>
    </message>
    <message>
        <location line="+81"/>
        <source>:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-53"/>
        <source>Predefined Aspect Ratio:</source>
        <translation>Ratio d&apos;image prédéfini</translation>
    </message>
    <message>
        <location line="+588"/>
        <source>Video Usability Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Overscan:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-785"/>
        <location line="+795"/>
        <source>Undefined</source>
        <translation>Non défini</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Show</source>
        <translation>Montrer</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Crop</source>
        <translation>Recadrer</translation>
    </message>
    <message>
        <location line="-818"/>
        <source>Video Format:</source>
        <translation>Format vidéo :</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Component</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>PAL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>NTSC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>SECAM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Colour Primaries:</source>
        <translation>Couleur primaires</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Transfer Characteristics:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Colour Matrix:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+653"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+71"/>
        <source>HRD Parameters:</source>
        <translation>Paramètres HRD :</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>VBR</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>CBR</source>
        <translation></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Chroma Sample Location:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Full Range Samples</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>x265CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="+14"/>
        <source>x265 Custom Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Intra 4x4</source>
        <translation></translation>
    </message>
    <message>
        <location line="+28"/>
        <location line="+446"/>
        <location line="+446"/>
        <location line="+703"/>
        <source>Luma:</source>
        <translation>Luminance :</translation>
    </message>
    <message>
        <location line="-1385"/>
        <location line="+446"/>
        <source>Chroma U/V:</source>
        <translation></translation>
    </message>
    <message>
        <location line="-238"/>
        <source>Inter 4x4</source>
        <translation></translation>
    </message>
    <message>
        <location line="+446"/>
        <source>Intra 8x8</source>
        <translation></translation>
    </message>
    <message>
        <location line="+703"/>
        <source>Inter 8x8</source>
        <translation></translation>
    </message>
    <message>
        <location line="+727"/>
        <source>Load File</source>
        <translation>Charger un fichier</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>OK</source>
        <translation></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Cancel</source>
        <translation>Annuler</translation>
    </message>
</context>
<context>
    <name>xvid4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="+32"/>
        <location line="+24"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Low</source>
        <translation>Basse</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium</source>
        <translation>Moyenne</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Full</source>
        <translation>Complète</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Custom</source>
        <translation>Manuel</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>One thread</source>
        <translation>Un thread</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two threads</source>
        <translation>Deux threads</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Three threads</source>
        <translation>Trois threads</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>4:3 (PAL)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4:3 (NTSC)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>16:9 (PAL)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>16:9 (NTSC)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Aspect Ratio:</source>
        <translation>Rapport d&apos;image :</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Aspect Ratio</source>
        <translation>Rapport d&apos;image</translation>
    </message>
    <message>
        <location line="-111"/>
        <source>H.263</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>DCT</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Qpel16</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Qpel8</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Square</source>
        <translation>Carré</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Auto (#cpu)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>1:1 (PC)</source>
        <translation></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Threading</source>
        <translation></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Mi_n. quantizer:</source>
        <translation>Quantificateur min. :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation>Quantificateur max. :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Trellis quantization</source>
        <translation>Quantification par treillis</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Number of B frames:</source>
        <translation>_Nombre d&apos;image B</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Drop identical frames (this disables B-frames)</source>
        <translation>Supprimez les images identiques (cela désactive les images B) </translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Framedrop _Ratio:</source>
        <translation>Rapport de perte d&apos;image :</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quantization type:</source>
        <translation>Type de quantification</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Macroblock decision:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Profile:</source>
        <translation>Profil :</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>_Gop Size:</source>
        <translation>Taille GOP :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Use XVID fcc (else DIVX)</source>
        <translation>Utiliser XVID FCC (sinon DIVX)</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>Motion Estimation</source>
        <translation>Estimation du mouvement</translation>
    </message>
    <message>
        <location line="+35"/>
        <location line="+17"/>
        <source>Encoding Mode</source>
        <translation>Mode d&apos;encodage</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Frame Settings</source>
        <translation>Paramètres d&apos;image</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Miscellaneous</source>
        <translation>Divers</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Quantization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Threads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Rate Control</source>
        <translation>Contrôle du débit</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Xvid4 MPEG-4 ASP configuration</source>
        <translation>Configuration Xvid4 MPEG-4 ASP</translation>
    </message>
</context>
<context>
    <name>yadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="+132"/>
        <source>Yadif</source>
        <translation></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Yadif, port of avisynth version (c) Fizick.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Bottom field first</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Top field first</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Frame : Temporal &amp; spatial check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field :  Temporal &amp; spatial check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame : Skip spatial temporal check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field : Skip spatial temporal check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Deint all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Deint interlaced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Mode:</source>
        <translation>_Mode :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Deint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Order:</source>
        <translation>_Ordre :</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>yadif</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>zoom</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/ADM_vidZoom.cpp" line="+69"/>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Partializable crop filter.</source>
        <translation>Recadrage partialisable</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/DIA_flyZoom.cpp" line="+480"/>
        <location line="+431"/>
        <source>Selection: </source>
        <translation>Sélection :</translation>
    </message>
    <message>
        <location line="-333"/>
        <location line="+186"/>
        <source>Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+18"/>
        <source>Most recently accepted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-17"/>
        <source>Bilinear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Padding type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Black Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>zoomDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+14"/>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <location line="+38"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+105"/>
        <source>Right:</source>
        <translation>Droit :</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+42"/>
        <source>Top:</source>
        <translation>Haut :</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Reset</source>
        <translation>Réinitialiser</translation>
    </message>
    <message>
        <location line="+21"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="-28"/>
        <source>Bottom:</source>
        <translation>Bas :</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+45"/>
        <source>Left:</source>
        <translation>Gauche :</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="-124"/>
        <source>Resize Method:</source>
        <translation>Méthode de redimensionnement :</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>Bilinéaire</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Bicubique</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lanczos-3</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Lock Aspect Ratio:</source>
        <translation>Verrouiller le format d&apos;image :</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Masquer la sélection</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Selection: </source>
        <translation>Sélection :</translation>
    </message>
    <message>
        <location line="+16"/>
        <location line="+4"/>
        <source>Do not lock</source>
        <translation>Ne pas verrouiller</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Current selection</source>
        <translation>Sélection courante</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Source</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>21:9</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>18:9</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>16:9</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4:3</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1:1</source>
        <translation></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>9:16</source>
        <translation></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Padding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>black bars</source>
        <translation>barres noires</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>echo</source>
        <translation>écho</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>none (stretch)</source>
        <translation>aucun (étiré)</translation>
    </message>
</context>
</TS>
