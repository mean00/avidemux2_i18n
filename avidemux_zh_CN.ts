<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>ADM_Composer</name>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="+79"/>
        <source>Checking if timestamps are valid..</source>
        <translation>检查时间戳是否有效..</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>This video contains B-frames, but presentation time stamps (PTS) are either missing or monotonically increasing. Avidemux can try to reconstruct correct PTS by decoding the entire video. This may take a lot of time. Proceed?</source>
        <translation>这个视频包含B-帧, 但是出现时间标记(PTS)丢失了或者只单调递增，Avidemux可以试着通过解码全部视频来重建当前的PTS.
        这会花费很长时间. 要处理吗?</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Decoding video...</source>
        <translation>视频解码中...</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="+540"/>
        <source>width</source>
        <translation>宽度</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>%sheight</source>
        <translation>%s高度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> and </source>
        <translation> 和 </translation>
    </message>
    <message>
        <location line="+3"/>
        <source>%sdifferent between first and this video stream</source>
        <translation>在第一个与此视频流之间有%s处不同</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> are </source>
        <translation>是</translation>
    </message>
    <message>
        <location line="+0"/>
        <source> is </source>
        <translation>是</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You cannot mix different video dimensions yet. Using the partial video filter later, will not work around this problem. The workaround is:
1.) &quot;resize&quot; / &quot;add border&quot; / &quot;crop&quot; each stream to the same resolution
2.) concatenate them together</source>
        <translation>您还不能混合不同的视频尺寸.稍后使用部分视频过滤器程序将无法解决此问题,解决方法是:
1) &quot;调整尺寸&quot; / &quot;增加边框&quot; / &quot;剪切&quot; 每个流到同一分辨率
2) 将它们串联在一起</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>The width of the video %u px exceeds maximum supported width %u.
</source>
        <translation>视频宽度%u像素超过了最大支持的宽度%u.
</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>The height of the video %u px exceeds maximum supported height %u.
</source>
        <translation>视频高度%u像素超过了最大支持的高度%u.
</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Video dimensions %ux%u exceed maximum supported size %ux%u.
</source>
        <translation>视频尺寸%ux%u超过了最大支持的尺寸%ux%u.
</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Unsupported size</source>
        <translation>不支持的尺寸</translation>
    </message>
    <message>
        <location line="-69"/>
        <source>Attempt to open %s failed!</source>
        <translation>尝试打开 %s 失败!</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="+163"/>
        <source>Some timing information are incorrect.
It happens with some capture software.
If you re encode video we should drop these informations,
 else it will cause dropped frame/jerky video.
If you just copy the video without reencoding,
 you should keep them.
Drop timing informations ?</source>
        <translation>一些计时信息不正确.
        它会发生某些捕获软件.
        如果你对视频进行编码我们应该放下这些信息,
        否则它将导致出现掉落帧/生涩视频.
        如果你只是复制视频没有重新编码,
        你应该保持它们的定时信息?</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="-38"/>
        <source>Cannot find a demuxer for %s</source>
        <translation>找不到为%s使用的多路分离器</translation>
    </message>
</context>
<context>
    <name>CalculatorDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="+398"/>
        <location line="+27"/>
        <location line="+34"/>
        <location line="+68"/>
        <location line="+18"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="-335"/>
        <location line="+198"/>
        <location line="+27"/>
        <location line="+34"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location line="+163"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location line="-568"/>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>OGM</source>
        <translation>OGM</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+212"/>
        <location line="+37"/>
        <location line="+232"/>
        <source>kbps</source>
        <translation>kbps</translation>
    </message>
    <message>
        <location line="-431"/>
        <source>DVD-5</source>
        <translation>DVD-5</translation>
    </message>
    <message>
        <location line="+259"/>
        <source>Video Size:</source>
        <translation>视频尺寸:</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Audio Size:</source>
        <translation>音频尺寸:</translation>
    </message>
    <message>
        <location line="-124"/>
        <source>Audio Bitrate</source>
        <translation>音频比特率</translation>
    </message>
    <message>
        <location line="-170"/>
        <source>Medium:</source>
        <translation>中:</translation>
    </message>
    <message>
        <location line="-26"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location line="+583"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location line="-510"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location line="+219"/>
        <source>Result</source>
        <translation>结果</translation>
    </message>
    <message>
        <location line="-320"/>
        <source>Target</source>
        <translation>目标</translation>
    </message>
    <message>
        <location line="+86"/>
        <source>1 x 74 minute CD</source>
        <translation>1 x 74 分钟 CD</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2 x 74 minute CD</source>
        <translation>2 x 74 分钟 CD</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>1 x 80 minute CD</source>
        <translation>1 x 80 分钟 CD</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2 x 80 minute CD</source>
        <translation>2 x 80 分钟 CD</translation>
    </message>
    <message>
        <location line="+200"/>
        <source>Track 2:</source>
        <translation>轨道 2:</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Track 1:</source>
        <translation>轨道 1:</translation>
    </message>
    <message>
        <location line="-176"/>
        <source>Duration:</source>
        <translation>时长:</translation>
    </message>
    <message>
        <location line="-80"/>
        <source>Calculator</source>
        <translation>计算器</translation>
    </message>
    <message>
        <location line="+171"/>
        <source>Custom Size:</source>
        <translation>自定义尺寸:</translation>
    </message>
    <message>
        <location line="-98"/>
        <source>Format:</source>
        <translation>格式:</translation>
    </message>
    <message>
        <location line="+355"/>
        <source>Total Size:</source>
        <translation>总尺寸:</translation>
    </message>
    <message>
        <location line="+120"/>
        <source>Bits Per Pixel:</source>
        <translation>每像素比特数:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Video Bitrate:</source>
        <translation>视频比特率:</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="+66"/>
        <source># Images :</source>
        <translation># 图像 :</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Indexing</source>
        <translation>正在索引</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Time Left : Infinity</source>
        <translation>剩余时间 : 无限</translation>
    </message>
</context>
<context>
    <name>DialogAudioTracks</name>
    <message>
        <source>Configure</source>
        <translation type="vanished">配置</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="+20"/>
        <source>Audio Tracks Configuration</source>
        <translation>音频轨配置</translation>
    </message>
    <message>
        <source>Track 1</source>
        <translation type="vanished">轨道 1</translation>
    </message>
    <message>
        <source>Track 2</source>
        <translation type="vanished">轨道 2</translation>
    </message>
    <message>
        <source>Track 3</source>
        <translation type="vanished">轨道 3</translation>
    </message>
    <message>
        <source>Track 4</source>
        <translation type="vanished">轨道 4</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="vanished">启用</translation>
    </message>
    <message>
        <source>Filters</source>
        <translation type="vanished">过滤器</translation>
    </message>
</context>
<context>
    <name>DialogOcr</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="+74"/>
        <source>Ok</source>
        <translation>确定</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>0/0</source>
        <translation>0/0</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location line="-52"/>
        <source>Skip All</source>
        <translation>跳过全部</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Skip Glyph</source>
        <translation>跳过字形</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Calibrate</source>
        <translation>校准</translation>
    </message>
    <message>
        <location line="+90"/>
        <source>Nb Lines :</source>
        <translation>Nb 线数 :</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Timecode:</source>
        <translation>时间码:</translation>
    </message>
    <message>
        <location line="-96"/>
        <source>Dialog</source>
        <translation>对话窗</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Ignore</source>
        <translation>忽略</translation>
    </message>
    <message>
        <location line="+48"/>
        <source>00:00:00/000</source>
        <translation>00:00:00/000</translation>
    </message>
</context>
<context>
    <name>DialogProcessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="+84"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="-44"/>
        <source>0 fps</source>
        <translation>0 fps</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>TimeLeft</source>
        <translation>剩余时间</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Speed</source>
        <translation>速度</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>ProcessImages</source>
        <translation>处理图像</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Dialog</source>
        <translation>对话窗</translation>
    </message>
</context>
<context>
    <name>DialogProgress</name>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="+51"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>1/1</source>
        <translation>1/1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>File being written </source>
        <translation>文件写入中</translation>
    </message>
    <message>
        <location line="-27"/>
        <source>Progress</source>
        <translation>进度</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Current job</source>
        <translation>当前作业</translation>
    </message>
</context>
<context>
    <name>FDK-AAC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="+450"/>
        <source>_Profile:</source>
        <translation>配置文件:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate _Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Afterburner</source>
        <translation>喷射器(Afterburner)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>FDK-AAC Configuration</source>
        <translation>FDK-AAC 配置</translation>
    </message>
    <message>
        <source>SBR enabled</source>
        <translation type="vanished">SBR 启用</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="+1346"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location line="+107"/>
        <source>A:</source>
        <translation>A:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <source>F7</source>
        <translation type="vanished">F7</translation>
    </message>
    <message>
        <location line="-842"/>
        <source>ms</source>
        <translation>ms</translation>
    </message>
    <message>
        <location line="-459"/>
        <source>&amp;Go</source>
        <translation>前往(&amp;G)</translation>
    </message>
    <message>
        <location line="+701"/>
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
        <translation>...</translation>
    </message>
    <message>
        <location line="+358"/>
        <source>&amp;Top</source>
        <translation>上下并排(&amp;T)</translation>
    </message>
    <message>
        <location line="-1582"/>
        <location line="+169"/>
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <source>Play</source>
        <translation type="vanished">播放</translation>
    </message>
    <message>
        <source>XXXX</source>
        <translation type="vanished">    </translation>
    </message>
    <message>
        <location line="-377"/>
        <source>&amp;Auto</source>
        <translation>自动(&amp;U)</translation>
    </message>
    <message>
        <location line="-29"/>
        <source>&amp;Edit</source>
        <translation>编辑(&amp;E)</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>&amp;File</source>
        <translation>文件(&amp;F)</translation>
    </message>
    <message>
        <location line="-64"/>
        <source>&amp;Help</source>
        <translation>帮助(&amp;H)</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>&amp;View</source>
        <translation>视图(&amp;V)</translation>
    </message>
    <message>
        <location line="+1587"/>
        <source>Open Video</source>
        <translation>打开视频</translation>
    </message>
    <message>
        <location line="+239"/>
        <source>Si&amp;de</source>
        <translation>左右并排(&amp;D</translation>
    </message>
    <message>
        <location line="-688"/>
        <source>Time:</source>
        <translation>时间:</translation>
    </message>
    <message>
        <source>Alt+Return</source>
        <translation type="vanished">Alt+Return</translation>
    </message>
    <message>
        <location line="+509"/>
        <location line="+3"/>
        <source>Load/Run Project</source>
        <translation>加载/执行项目</translation>
    </message>
    <message>
        <location line="-665"/>
        <source>Search next black frame</source>
        <translation>搜索下一个黑帧</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to first frame [HOME]</source>
        <translation>转到第一帧 [HOME]</translation>
    </message>
    <message>
        <location line="-184"/>
        <source>Go to next keyframe [UP]</source>
        <translation>转到下一关键帧 [UP]</translation>
    </message>
    <message>
        <source>&amp;Calculator...</source>
        <translation type="vanished">计算器(&amp;C)...</translation>
    </message>
    <message>
        <location line="+524"/>
        <source>Go to marker A [PAGE UP]</source>
        <translation>转到标记A [PAGE UP]</translation>
    </message>
    <message>
        <location line="+314"/>
        <location line="+3"/>
        <source>Save Project</source>
        <translation>保存项目</translation>
    </message>
    <message>
        <location line="-1621"/>
        <source>&amp;Audio</source>
        <translation>音频(&amp;A)</translation>
    </message>
    <message>
        <location line="+1636"/>
        <source>&amp;Input</source>
        <translation>输入(&amp;I)</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>&amp;Selection</source>
        <translation>选择(&amp;S)</translation>
    </message>
    <message>
        <location line="-1692"/>
        <source>&amp;Tools</source>
        <translation>工具(&amp;T)</translation>
    </message>
    <message>
        <location line="+1232"/>
        <source>Se&amp;lection</source>
        <translation>选择区段(&amp;L)</translation>
    </message>
    <message>
        <location line="-378"/>
        <source>Set end marker [CTRL+PAGEDOWN]</source>
        <translation>设定结束标记 [CTRL+PAGEDOWN]</translation>
    </message>
    <message>
        <location line="+458"/>
        <location line="+16"/>
        <source>000000</source>
        <translation>000000</translation>
    </message>
    <message>
        <location line="+420"/>
        <source>&amp;Audio Metre</source>
        <translation>音频计(&amp;A)</translation>
    </message>
    <message>
        <location line="-1538"/>
        <location line="+169"/>
        <location line="+181"/>
        <source>Configure</source>
        <translation>配置</translation>
    </message>
    <message>
        <location line="-609"/>
        <source>Vi&amp;deo</source>
        <translation>视频(&amp;D)</translation>
    </message>
    <message>
        <location line="+739"/>
        <source>Play [SPACE]</source>
        <translation>播放 [SPACE]</translation>
    </message>
    <message>
        <location line="+808"/>
        <source>Audio &amp;Metre</source>
        <translation>音频计(&amp;M)</translation>
    </message>
    <message>
        <location line="-1533"/>
        <source>&amp;Toolbars</source>
        <translation>工具栏(&amp;T)</translation>
    </message>
    <message>
        <location line="+1580"/>
        <source>&amp;Open...</source>
        <translation>打开文件(&amp;O)...</translation>
    </message>
    <message>
        <location line="-376"/>
        <source>Frame type:</source>
        <translation>帧类型:</translation>
    </message>
    <message>
        <location line="+400"/>
        <location line="+3"/>
        <source>Save Video</source>
        <translation>保存视频</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Save &amp;Video...</source>
        <translation>保存视频(&amp;V)...</translation>
    </message>
    <message>
        <location line="-643"/>
        <source>Search previous black frame</source>
        <translation>搜索上一个黑帧</translation>
    </message>
    <message>
        <location line="-207"/>
        <source>Go to previous frame [LEFT]</source>
        <translation>转到上一帧 [LEFT]</translation>
    </message>
    <message>
        <location line="-654"/>
        <source>Codec O&amp;ptions</source>
        <translation>编解码器选项(&amp;P)</translation>
    </message>
    <message>
        <location line="+1522"/>
        <source>Play filtered</source>
        <translation>播放过滤后视频</translation>
    </message>
    <message>
        <location line="-259"/>
        <source>Go to Marker B [PAGE DOWN]</source>
        <translation>转到标记B [PAGE DOWN]</translation>
    </message>
    <message>
        <location line="-1058"/>
        <source>&lt;b&gt;Audio Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;音频输出&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+222"/>
        <source>&lt;b&gt;Output Format&lt;/b&gt;</source>
        <translation>&lt;b&gt;输出格式&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+1116"/>
        <source>&amp;Load/Run Project...</source>
        <translation>加载/执行项目(&amp;L)...</translation>
    </message>
    <message>
        <location line="-613"/>
        <source>Go to last frame [END]</source>
        <translation>转到最后一帧 [END]</translation>
    </message>
    <message>
        <location line="-1002"/>
        <source>&amp;Custom</source>
        <translation>自定义(&amp;C)</translation>
    </message>
    <message>
        <location line="+1663"/>
        <source>&amp;Output</source>
        <translation>输出(&amp;O)</translation>
    </message>
    <message>
        <location line="-1638"/>
        <source>&amp;Recent</source>
        <translation>最近打开的(&amp;R)</translation>
    </message>
    <message>
        <location line="+1026"/>
        <source>Forward one minute</source>
        <translation>前进一分钟</translation>
    </message>
    <message>
        <location line="-619"/>
        <source>&amp;Shift:</source>
        <translation>偏移(±)(&amp;S):</translation>
    </message>
    <message>
        <location line="+1284"/>
        <source>&amp;Volume</source>
        <translation>音量(&amp;V)</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>&amp;Codec Options</source>
        <translation>编解码器选项(&amp;C)</translation>
    </message>
    <message>
        <location line="-626"/>
        <source>Forward one minute [CTRL+UP]</source>
        <translation>前进1分钟 [CTRL+UP]</translation>
    </message>
    <message>
        <location line="+725"/>
        <source>&amp;Separate</source>
        <translation>分隔(&amp;S)</translation>
    </message>
    <message>
        <location line="-955"/>
        <source>Set start marker [CTRL+PAGEUP]</source>
        <translation>设定开始标记 [CTRL+PAGEUP]</translation>
    </message>
    <message>
        <location line="-957"/>
        <source>Avidemux</source>
        <translation>Avidemux</translation>
    </message>
    <message>
        <location line="+375"/>
        <location line="+169"/>
        <source>Filters</source>
        <translation>过滤器</translation>
    </message>
    <message>
        <location line="+989"/>
        <source>Vol&amp;ume</source>
        <translation>音量(&amp;U)</translation>
    </message>
    <message>
        <source>&lt;b&gt;Video Decoder&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;视频解码器&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="-1407"/>
        <source>T&amp;heme</source>
        <translation>主题(&amp;H)</translation>
    </message>
    <message>
        <location line="+130"/>
        <source>&lt;b&gt;Video Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;视频输出&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+170"/>
        <source> (0 tracks)</source>
        <translation> (0 个轨道)</translation>
    </message>
    <message>
        <location line="+554"/>
        <source>Delete selection [DEL]</source>
        <translation>删除所选区段 [DEL]</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Go to previous cut point [SHIFT+DOWN]</source>
        <translation>转到前一个剪切点 [SHIFT+DOWN]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to next cut point [SHIFT+UP]</source>
        <translation>转到后一个剪切点 [SHIFT+UP]</translation>
    </message>
    <message>
        <location line="+218"/>
        <source>00:00:00.000</source>
        <translation>00:00:00.000</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>/ 00:00:00.000</source>
        <translation>/ 00:00:00.000</translation>
    </message>
    <message>
        <location line="+207"/>
        <source>Selection: 000000</source>
        <translation>选择区段: 000000</translation>
    </message>
    <message>
        <location line="+246"/>
        <source>HDR tone mapping</source>
        <translation>HDR色调映射</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Save &amp;Project</source>
        <translation>保存项目(&amp;P)</translation>
    </message>
    <message>
        <location line="-63"/>
        <source>&amp;Information...</source>
        <translation>信息(&amp;I)...</translation>
    </message>
    <message>
        <location line="-818"/>
        <source>Go to next frame [RIGHT]</source>
        <translation>转到下一帧 [RIGHT]</translation>
    </message>
    <message>
        <location line="+276"/>
        <source>Backward one minute [CTRL+DOWN]</source>
        <translation>倒退一分钟 [CTRL+DOWN]</translation>
    </message>
    <message>
        <location line="+652"/>
        <source>Ctrl+Alt+C</source>
        <translation>Ctrl+Alt+C</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>&amp;Toolbar</source>
        <translation>工具栏(&amp;T)</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+B</source>
        <translation>Ctrl+Alt+B</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Stat&amp;us bar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Ctrl+Alt+M</source>
        <translation>Ctrl+Alt+M</translation>
    </message>
    <message>
        <location line="-70"/>
        <source>Ctrl+Alt+N</source>
        <translation>Ctrl+Alt+N</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Ctrl+Alt+S</source>
        <translation>Ctrl+Alt+S</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Ctrl+Alt+V</source>
        <translation>Ctrl+Alt+V</translation>
    </message>
    <message>
        <location line="-947"/>
        <source>Go to previous keyframe [DOWN]</source>
        <translation>转到前一关键帧 [DOWN]</translation>
    </message>
    <message>
        <location line="-147"/>
        <location line="+1063"/>
        <source>&amp;Navigation</source>
        <translation>导航栏(&amp;N)</translation>
    </message>
</context>
<context>
    <name>Opus</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="+277"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
</context>
<context>
    <name>SpiderMonkeyShell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/shell.ui" line="+49"/>
        <source>Clear</source>
        <translation>清除</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>Shell</source>
        <translation>脚本Shell窗口</translation>
    </message>
    <message>
        <source>Ctrl+Return</source>
        <translation type="vanished">Ctrl+Return</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>Evaluate</source>
        <translation>求值</translation>
    </message>
</context>
<context>
    <name>VapourSynthProxy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="+37"/>
        <source>Port to use: </source>
        <translation>使用的端口:</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run!</source>
        <translation>执行!</translation>
    </message>
    <message>
        <location line="-54"/>
        <source>VapourSynth Proxy</source>
        <translation>VapourSynth代理</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Select VS file</source>
        <translation>选择VS文件</translation>
    </message>
</context>
<context>
    <name>aarotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="+437"/>
        <source>Arbitrary Rotate</source>
        <translation>任意角度旋转</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rotate the image by arbitrary angle.</source>
        <translation>任意角度旋转图像</translation>
    </message>
    <message>
        <location line="+186"/>
        <source>Black</source>
        <translation>黑色</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation>回显(Echo)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Angle:</source>
        <translation>角度:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Padding:</source>
        <translation>填充:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Rotate</source>
        <translation>旋转</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="+220"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>&amp;License</source>
        <translation>授权(&amp;L)</translation>
    </message>
    <message>
        <location line="-186"/>
        <source>About Avidemux</source>
        <translation>关于 Avidemux</translation>
    </message>
    <message>
        <location line="+92"/>
        <source>Avidemux</source>
        <translation>Avidemux</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Multi-platform Video Editor</source>
        <translation>跨平台视频编辑工具</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>© 2001 - 2021  Mean / eumagga0x2a</source>
        <translation>© 2001 - 2021  Mean / eumagga0x2a</translation>
    </message>
    <message>
        <source>http://www.avidemux.org</source>
        <translation type="vanished">http://www.avidemux.org</translation>
    </message>
    <message>
        <source>Avidemux </source>
        <translation type="vanished">Avidemux </translation>
    </message>
</context>
<context>
    <name>addBorder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="+184"/>
        <source>_Right border:</source>
        <translation>右侧边界:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="+43"/>
        <source>Add black borders around the image.</source>
        <translation>图片周围增加黑色边框.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="+5"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="-1"/>
        <source>Add Borders</source>
        <translation>添加边框</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Incorrect parameters</source>
        <translation>参数不正确</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>_Left border:</source>
        <translation>左侧边界:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>All parameters must be even and within range.</source>
        <translation>所有参数必须是偶数且在范围内.</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>_Top border:</source>
        <translation>顶部边界:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bottom border:</source>
        <translation>底部边界:</translation>
    </message>
</context>
<context>
    <name>adm</name>
    <message>
        <location filename="../../common/gui_save.cpp" line="+68"/>
        <source>Audio encoder index out of bounds</source>
        <translation>音频编码器索引越界</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>No</source>
        <translation>否</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Select PNG to Save</source>
        <translation>选择PNG来保存</translation>
    </message>
    <message>
        <location line="+277"/>
        <source>Failed to save as JPEG</source>
        <translation>保存为JPEG失败</translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Saving selection as set of JPEG images</source>
        <translation>保存所选为JPEG图像集</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Maximum number of 99999 images reached.</source>
        <translation>不能超过最大99999个图像.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Saving images failed.</source>
        <translation>保存图像失败</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>PNG</source>
        <translation>PNG</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed to save as PNG</source>
        <translation>保存为PNG失败</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>Cannot get tinyPy script engine</source>
        <translation>找不到tinyPy脚本引擎</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Output file not specified</source>
        <translation>未指定输出文件</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Job script %s already exists. Overwrite?</source>
        <translation>作业脚本 %s 已经存在，覆盖吗?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="+380"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+104"/>
        <source>5.1</source>
        <translation>5.1</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+74"/>
        <source>4MV</source>
        <translation>4MV</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+232"/>
        <source>AAC</source>
        <translation>AAC</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>AC3</source>
        <translation>AC3</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+97"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+726"/>
        <source>CPU</source>
        <translation>CPU</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+55"/>
        <source>DRC</source>
        <translation>DRC</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-8"/>
        <source>DTS</source>
        <translation>DTS</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+71"/>
        <source>Cut</source>
        <translation>剪切</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-10"/>
        <source>GMC</source>
        <translation>GMC</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-576"/>
        <source>Job</source>
        <translation>作业</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+2"/>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>WMA Lossless</source>
        <translation>WMA无损</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Float PCM</source>
        <translation>浮点PCM</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MP4</source>
        <translation>MP4</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>A-law</source>
        <translation>A-律</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>TrueHD</source>
        <translation>TrueHD</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-342"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-19"/>
        <source>Low</source>
        <translation>低</translation>
    </message>
    <message>
        <location line="+119"/>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-23"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+8"/>
        <source>Off</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="-13"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-41"/>
        <source>SDL</source>
        <translation>SDL</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+5"/>
        <source>WMA</source>
        <translation>WMA</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+4"/>
        <source>x86</source>
        <translation>x86</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+12"/>
        <source>BVHQ</source>
        <translation>BVHQ</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+1"/>
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+4"/>
        <source>FLAC</source>
        <translation>FLAC</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+27"/>
        <source>H263</source>
        <translation>H263</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+462"/>
        <location line="+76"/>
        <source>Done</source>
        <translation>完成</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-43"/>
        <source>Gain</source>
        <translation>增益</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-83"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-45"/>
        <source>High</source>
        <translation>高</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-3"/>
        <source>LPCM</source>
        <translation>LPCM</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-195"/>
        <source>Jpeg</source>
        <translation>Jpeg</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+26"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-7"/>
        <source>Main</source>
        <translation>Main</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+2"/>
        <source>OPUS</source>
        <translation>OPUS</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-46"/>
        <source>Mono</source>
        <translation>单声道</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+53"/>
        <source>Mpeg</source>
        <translation>Mpeg</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-25"/>
        <location line="+40"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-50"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+8"/>
        <source>QDM2</source>
        <translation>QDM2</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+2012"/>
        <source>Oops</source>
        <translation>Oops</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-36"/>
        <source>Open</source>
        <translation>打开</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-70"/>
        <source>SIMD</source>
        <translation>SIMD</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+33"/>
        <source>Redo</source>
        <translation>恢复(Redo)</translation>
    </message>
    <message>
        <location line="-18"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Save</source>
        <translation>保存</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+4"/>
        <source>ULAW</source>
        <translation>ULAW</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+30"/>
        <source>Undo</source>
        <translation>复原</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+6"/>
        <source>_Gain mode:</source>
        <translation>增益模式:</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+48"/>
        <location filename="../../common/gui_save.cpp" line="-407"/>
        <source>No audio track</source>
        <translation>没有音频轨道</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-18"/>
        <source>Stereo+surround</source>
        <translation>立体+环绕</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="+259"/>
        <source>Plugins Info</source>
        <translation>插件(Plugins)信息</translation>
    </message>
    <message>
        <location line="-93"/>
        <source>Audio Device</source>
        <translation>音频设备</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+68"/>
        <source>You don&apos;t have LAME!.
It is needed to create FLV  video.</source>
        <translation>你没有安装LAME! 生成FLV视频需要有LAME.</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+606"/>
        <source>File %s was NOT saved correctly.</source>
        <translation>文件 %s 保存不正确.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+59"/>
        <source>About</source>
        <translation>关于</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-10"/>
        <source>E-AC3</source>
        <translation>E-AC3</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="-86"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+276"/>
        <location line="+3"/>
        <location line="+5"/>
        <location filename="../../common/gui_save.cpp" line="-606"/>
        <location line="+10"/>
        <location line="+272"/>
        <location line="+15"/>
        <location line="+19"/>
        <location line="+7"/>
        <location filename="../../common/gui_savenew.cpp" line="+436"/>
        <source>Audio</source>
        <translation>音频</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-82"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/ADM_ffmp43.cpp" line="+394"/>
        <location line="+45"/>
        <source>Codec</source>
        <translation>编解码器</translation>
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
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-98"/>
        <source>Display only error alerts</source>
        <translation>只显示错误警告</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="+880"/>
        <location line="+50"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="+80"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="+150"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="+58"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="+134"/>
        <location filename="../../common/gui_main.cpp" line="-364"/>
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
        <translation>错误</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+33"/>
        <source>HQ AC</source>
        <translation>HQ AC</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+34"/>
        <source>Mixer</source>
        <translation>混音器</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-231"/>
        <location line="+292"/>
        <location line="+25"/>
        <source>Muxer</source>
        <translation>复合器(Muxer)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+28"/>
        <source>Paste</source>
        <translation>粘贴</translation>
    </message>
    <message>
        <location line="-34"/>
        <source>Queue</source>
        <translation>作业队列</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="+85"/>
        <source>Retry</source>
        <translation>再试一次</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="-2"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-45"/>
        <source>VDPAU</source>
        <translation>VDPAU</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+33"/>
        <source>Max Overflow Improvement(%)</source>
        <translation>最大溢出改善(%)</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-327"/>
        <location line="+172"/>
        <location line="+12"/>
        <location line="+16"/>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location line="-200"/>
        <source>Cannot set up encoder for the first pass. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation>不能为第一遍设置编码器.编码器的提供的配置可能不兼容或者编码器依赖的特性在本系统不存在</translation>
    </message>
    <message>
        <location line="+200"/>
        <source>Cannot set up encoder. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation>不能设置编码器.编码器的提供的配置可能不兼容或者编码器依赖的特性在本系统不存在</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Cannot setup audio encoder, make sure your stream is compatible with audio encoder (number of channels, bitrate, format)</source>
        <translation>不能设置音频编码器,请确保您的数据流与音频编码器兼容(频道数、比特速率、格式)</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The choice of cut points may result in playback interruption due to reversed display order of frames if saved in copy mode.
Do you want to continue anyway?</source>
        <translation>此视频使用了非IDR而不是IDR恢复点作为关键帧. 视频流中的图片重排序在非IDR帧不会重置. 如果是拷贝模式保存时, 选择的剪切区域的开始点和结束点会导致回放中断, 原因是帧反向显示顺序.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Codec or codec settings across a cut point do not match. Playback of the video saved in copy mode may stop at this point.
Do you want to continue anyway?</source>
        <translation>剪切删除区域之前和之后的编解码器或者编解码器设定不匹配.回放用拷贝模式保存的视频可能会在此处停止.
你想继续处理吗?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation>不能检查剪切点. 这意味着源视频有问题, 编辑器状态有问题或是程序有缺陷. 请检查程序log文件或者控制台输出来查看出错细节.
继续尝试吗?</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+9"/>
        <source>Overflow Control Strength</source>
        <translation>溢出控制强度</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="+0"/>
        <source>Core has been compiled without VDPAU support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>核心已编译为没有支持VDPAUA, 但是应用程序却编译为有支持VDPAUA,安装不匹配</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="+23"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+160"/>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="+45"/>
        <source>Disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-96"/>
        <source>Pro Logic II</source>
        <translation>第二代定向逻辑(Pro Logic II)</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-114"/>
        <source>Cannot instantiate video chain</source>
        <translation>不能实例化视频链</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+60"/>
        <source>Decoder Option</source>
        <translation>解码器选项</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-199"/>
        <source>Enable 3DNOWEXT</source>
        <translation>启用 3DNOWEXT</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+42"/>
        <source>Previous Black Frame</source>
        <translation>转到上一个黑帧</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-4"/>
        <source>can&apos;t write to file &quot;%s&quot;: %s
%s
</source>
        <translation>不能写入文件 &quot;%s&quot;: %s
%s
</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-119"/>
        <source>Main Audio Track</source>
        <translation>主音轨</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+5"/>
        <source>Shift Value (ms):</source>
        <translation>转变音量 (ms):</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-806"/>
        <source>Error while cutting out.</source>
        <translation>剪切时发生错误.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-71"/>
        <source>R_esampling (Hz):</source>
        <translation>再取样 (Hz):</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+0"/>
        <source>Cannot add job %s</source>
        <translation>不能添加作业 %s</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+198"/>
        <source>Pro Logic</source>
        <translation>定向逻辑(Pro Logic)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreMuxer/src/ADM_coreMuxerFfmpeg.cpp" line="+664"/>
        <source>The saved video is incomplete. The error occured at %s (%d%). This may happen as result of invalid time stamps in the video.</source>
        <translation>视频未完整保存. 在%s (%d%)处发生错误. 这可能是视频中非法的时标导致的.</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Too short</source>
        <translation>太短</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+672"/>
        <source>Marker A &gt; B</source>
        <translation>标记 A &gt; B</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-82"/>
        <location line="+85"/>
        <source>Please free up some space and press RETRY to try again.</source>
        <translation>请释放一些磁盘空间,然后按重试再试一次.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-92"/>
        <source>Connect to avsproxy</source>
        <translation>联机至 avsproxy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+138"/>
        <source>GUI Rendering Options</source>
        <translation>GUI 渲染选项</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-162"/>
        <location line="+292"/>
        <source>Cannot instantiate muxer</source>
        <translation>不能实例化复合器</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+554"/>
        <source>This function is disabled or no longer valid</source>
        <translation>此功能被禁用或不再有效</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-56"/>
        <source>Max B Frames</source>
        <translation>最大B帧数</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-65"/>
        <source>BMP op failed</source>
        <translation>BMP通过失败</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+34"/>
        <source>Stereo+center+surround</source>
        <translation>立体+中央+环绕</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+69"/>
        <source>Build Option</source>
        <translation>创建(Build)选项(&amp;B)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+45"/>
        <source>I-frames closer than...</source>
        <translation>比I-帧更接近...</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="+24"/>
        <source>The options above are effective only for software decoding</source>
        <translation>上述选项只有在使用软解码时才生效</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Filter strength:</source>
        <translation>过滤强度:</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>De_interlacing (ffmpegdeint)</source>
        <translation>去交错(ffmpegdeint)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deblocking</source>
        <translation>去方块</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-2"/>
        <location line="+11"/>
        <source>__unknown__</source>
        <translation>__未知__</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-1828"/>
        <source>Select script to run</source>
        <translation>选择脚本去执行</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-141"/>
        <source>No downmixing</source>
        <translation>无下混频</translation>
    </message>
    <message>
        <location line="-193"/>
        <source>Enable SSE2</source>
        <translation>启用 SSE2</translation>
    </message>
    <message>
        <location line="+317"/>
        <source>Post-Processing</source>
        <translation>后处理</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Enable OpenGL display in filter preview dialogs</source>
        <translation>在过滤器预览对话框中打开OpenGL显示</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>OpenGL video display and filters require OpenGL to be enabled and working at application startup to be available</source>
        <translation>OpenGL视频显示和过滤器需要在程序启动时就启用并工作</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Ignore driver blacklist (Intel)</source>
        <translation>忽略驱动黑名单(Intel)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ignore codec blacklist (Intel, HEVC 10bit)</source>
        <translation>忽略编解码器黑名单(Intel, HEVC 10比特)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Decode video using VideoToolbox (macOS)</source>
        <translation>使用VideoToolbox解码视频 (macOS)</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Decode video using NVDEC (NVIDIA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Enabling Hw decoding disables multi-threading, restart application to apply changes</source>
        <translation>使用硬件解码会禁止多线程，重启程序来应用这个改变</translation>
    </message>
    <message>
        <location line="-391"/>
        <source>_Swap markers if marker A is set past marker B or marker B before A in video</source>
        <translation>自动交换标记位置(如果视频中标记A在标记B之后)</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Enable SSE3</source>
        <translation>启用 SSE3</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>_Revert to saved default output settings on video load</source>
        <translation>视频负载恢复到保存的默认输出设定</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="+64"/>
        <source>Audio Device Plugins</source>
        <translation>插件-音频设备</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+1287"/>
        <source>Something bad happened</source>
        <translation>有些事发生问题</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+8"/>
        <source>MSADPCM</source>
        <translation>MSADPCM</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-13"/>
        <source>Cannot delete the selection.</source>
        <translation>无法删除此选取范围.</translation>
    </message>
    <message>
        <location line="-405"/>
        <source>Multiple Audio Tracks</source>
        <translation>多音轨</translation>
    </message>
    <message>
        <location line="-431"/>
        <source>The cut points of the pasted video are not on keyframes.
Video saved in copy mode will be corrupted at these points.
Proceed anyway?</source>
        <translation>粘贴操作的末尾点不在关键帧上.
在这个点保存的视频拷贝会导致毁坏.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The cut points of the pasted selection may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>此视频使用了非IDR而不是IDR恢复点作为关键帧. 视频流中的图片重排序在非IDR帧不会重置. 如果是拷贝模式保存时, 选择的粘贴区域的开始点和结束点会导致回放中断, 原因是帧反向显示顺序.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Codec or codec settings across a cut point of the pasted video do not match.
Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>剪切删除区域之前和之后的编解码器或者编解码器设定不匹配.回放用拷贝模式保存的视频可能会在此处停止.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points of the pasted video could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation>不能检查粘贴视频的剪切点. 这意味着源视频有问题, 编辑器状态有问题或是程序有缺陷. 请检查程序log文件或者控制台输出来查看出错细节.
继续尝试吗?</translation>
    </message>
    <message>
        <location line="+127"/>
        <source>It is impossible to cut out the entire video. Please recheck the position of markers A and B.</source>
        <translation>不能剪切整个视频,请再次检查A和B标记的位置</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Deleting</source>
        <translation>删除中</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>It is impossible to delete the entire video. Please recheck the position of markers A and B.</source>
        <translation>不能删除整个视频,请再次检查A和B标记的位置</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>The end point of the cut is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation>剪切操作的末尾点不在关键帧上.
在这个点保存的视频拷贝会导致毁坏.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>The end point of the deletion is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation>删除操作的末尾点不在关键帧上.
在这个点保存的视频拷贝会导致毁坏.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the cut may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>&gt;此视频使用了非IDR而不是IDR恢复点作为关键帧. 视频流中的图片重排序在非-IDR帧不会重置. 如果是拷贝模式保存时, 选择的剪切区域的开始点和结束点会导致回放中断, 原因是帧反向显示顺序.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the deletion may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>&gt;此视频使用了非IDR而不是IDR恢复点作为关键帧. 视频流中的图片重排序在非-IDR帧不会重置. 如果是拷贝模式保存时, 选择的删除区域的开始点和结束点会导致回放中断, 原因是帧反向显示顺序.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Codec or codec settings across the cut do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>剪切区域之前和之后的编解码器或者编解码器设定不匹配.回放用拷贝模式保存的视频可能会在此处停止.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Codec or codec settings across the deletion do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>删除区域之前和之后的编解码器或者编解码器设定不匹配.回放用拷贝模式保存的视频可能会在此处停止.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points could not be checked.
This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Proceed anyway?</source>
        <translation>不能检查剪切点.
这意味着源视频有问题, 编辑器状态有问题或是程序有缺陷. 请检查程序log文件或者控制台输出来查看出错细节.
继续处理吗?</translation>
    </message>
    <message>
        <location line="+326"/>
        <source>Something failed when appending</source>
        <translation>追加操作时某些地方失败了</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-491"/>
        <source>Select Workbench to Save</source>
        <translation>选择工作台进行保存</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+2"/>
        <source>Re_verse UP and DOWN arrow keys for navigation</source>
        <translation>逆转导航用的向上和向下箭头键</translation>
    </message>
    <message>
        <source>SDL (good)</source>
        <translation type="vanished">SDL (好)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-95"/>
        <location line="+85"/>
        <source>quota exceeded</source>
        <translation>超出配额</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+266"/>
        <source>User Interface</source>
        <translation>用户接口</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="+25"/>
        <source>Cannot open </source>
        <translation>不能打开 </translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-18"/>
        <source>Tempo multiplier:</source>
        <translation>节拍(Tempo)扩音器:</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>A value of 2.0 means twice as fast playback.</source>
        <translation>2.0的值以为着播放速度快两倍</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pitch multiplier:</source>
        <translation>音调(Pitch)扩音器</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Every doubling means one octave upshift</source>
        <translation>每次双倍意味着八音度提升</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Frame rate change</source>
        <translation>帧率变化</translation>
    </message>
    <message>
        <location line="+10"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-57"/>
        <source>Stereo headphones</source>
        <translation>立体声耳机</translation>
    </message>
    <message>
        <location line="+9"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+3"/>
        <source>Surround headphones</source>
        <translation>环绕立体声耳机</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Automatic</source>
        <translation>自动</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>G_ain value:</source>
        <translation>增益值:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Maximum value:</source>
        <translation>最大值:</translation>
    </message>
    <message>
        <source>Shift audio:</source>
        <translation type="vanished">转变音频:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-24"/>
        <source>Max Gop Size</source>
        <translation>最大Gop尺寸</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-339"/>
        <source>Reuse previous first pass data ?
Warning, the settings must be close.</source>
        <translation>重用以前首先传递数据?警告,设定必须关闭.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+3"/>
        <source>IMA ADPCM</source>
        <translation>IMA ADPCM</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+6"/>
        <source>Open Application Data &amp;Folder</source>
        <translation>打开应用程序文件夹目录(&amp;F)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-135"/>
        <source>Above normal</source>
        <translation>高于正常</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-967"/>
        <source>Select script to save</source>
        <translation>选择脚本去保存</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-1"/>
        <source>Min Gop Size</source>
        <translation>最小Gop尺寸</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="+9"/>
        <source>can&apos;t write to file &quot;%s&quot;: %u (%s)
</source>
        <translation>不能写入文件 &quot;%s&quot;: %u (%s)
</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+286"/>
        <source>Select Video File to Append...</source>
        <translation>选择视频去附加合并(二视带宽高比要一致)...</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-61"/>
        <source>Enable SSSE3</source>
        <translation>启用 SSSE3</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="-58"/>
        <source>Video Encoder Plugins</source>
        <translation>插件-视频编码器</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Video Decoder Plugins</source>
        <translation>插件-视频解码器</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+1222"/>
        <source>Unable to set the audio language: No video loaded yet!</source>
        <translation>无法设置音频语言: 尚未加载视频!</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-14"/>
        <source>Select Track</source>
        <translation>选择音频音轨</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+64"/>
        <source>Below normal</source>
        <translation>低于正常</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="+1"/>
        <source>Auto-detect</source>
        <translation>自动侦测</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+5"/>
        <source>_Encoding priority:</source>
        <translation>编码优先次序:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-14"/>
        <source>Dolby Pro Logic</source>
        <translation>杜比定向逻辑</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-74"/>
        <source>Enable 3DNOW</source>
        <translation>启用 3DNOW</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="+117"/>
        <source>Muxer Plugins</source>
        <translation>插件-复合器</translation>
    </message>
    <message>
        <location line="-30"/>
        <source>Demuxer Plugins</source>
        <translation>插件-分离器</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="+0"/>
        <source>Core has been compiled without DXVA2 support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>核心已编译没有 DXVA2 的支持,但它已编译应用程序,安装不匹配</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+14"/>
        <source>Cannot select FLV1  codec.</source>
        <translation>不能选择 FLV1 编解码器.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+1"/>
        <source>Dolby Pro Logic II</source>
        <translation>第二代杜比定向逻辑</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+27"/>
        <source>Cannot select MPEG-4 SP codec.</source>
        <translation>不能选择 MPEG-4 SP 编解码器.</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+2"/>
        <source>GOP Size</source>
        <translation>GOP 尺寸</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-706"/>
        <source>Try &apos;File&apos; -&gt; &apos;Load/Run Project...&apos;</source>
        <translation>尝试 &apos;文件&apos; -&gt; &apos;加载/执行 项目...&apos;</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="-79"/>
        <source>No AAC audio encoder plugin found.</source>
        <translation>没有找到AAC音频编码器插件程序.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+905"/>
        <source>Frame Hex Dump</source>
        <translation>帧十六进制转储</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+22"/>
        <source>_Mixer:</source>
        <translation>混合器:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Shift audio (ms):</source>
        <translation>时移音频(毫秒):</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Enable Compressor</source>
        <translation>启用压缩</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Normalize</source>
        <translation>标准化</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threshold (dB):</source>
        <translation>阈值 (dB)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Noise floor (dB):</source>
        <translation>噪声层(floor) (dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ratio:</source>
        <translation>比率:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Attack time (sec):</source>
        <translation>打击(Attack)时间(分钟):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Release time (sec):</source>
        <translation>释放时间(分钟):</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Enable Equalizer</source>
        <translation>启用均衡器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bass (dB):</source>
        <translation>低音(Bass) (dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bass/Mid cut-off (Hz):</source>
        <translation>低/中音 剪切 (Hz):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mid (dB):</source>
        <translation>中音(Mid) (dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mid/Treble cut-off (Hz):</source>
        <translation>中/高音 剪切 (Hz):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Treble (dB):</source>
        <translation>高音(Treble) (dB):</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>&lt;hr&gt;&lt;p&gt;It is highly recommended to enable normalization when using positive gain values&lt;/p&gt;</source>
        <translation>&lt;hr&gt;&lt;p&gt;当使用正增益值时强烈建议启用标准化(normalization)&lt;/p&gt;</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Equalizer</source>
        <translation>均衡器</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Front left (dB):</source>
        <translation>前左(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right (dB):</source>
        <translation>前右(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center (dB):</source>
        <translation>前中(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left (dB):</source>
        <translation>后左(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right (dB):</source>
        <translation>后右(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center (dB):</source>
        <translation>后中(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left (dB):</source>
        <translation>左边(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right (dB):</source>
        <translation>右边(dB):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) (dB):</source>
        <translation>低频音效 (LFE) (dB):</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Channel gains</source>
        <translation>通道增益</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Front left (ms):</source>
        <translation>前左(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right (ms):</source>
        <translation>前右(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center (ms):</source>
        <translation>前中(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left (ms):</source>
        <translation>后左(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right (ms):</source>
        <translation>后右(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center (ms):</source>
        <translation>后中(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left (ms):</source>
        <translation>左边(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right (ms):</source>
        <translation>右边(ms):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) (ms):</source>
        <translation>低频音效(LFE) (ms):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>&lt;hr&gt;&lt;p&gt;The final delay will be the sum of a value above and the &quot;Shift audio&quot; value provided on the Main tab&lt;/p&gt;</source>
        <translation>&lt;hr&gt;&lt;p&gt;最终的延时将是上述这些值之和加上主tab中的&quot;音频偏移&quot;的值&lt;/p&gt;</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Channel delays</source>
        <translation>通道延时</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Enable Remap</source>
        <translation>启用重映射</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Front left</source>
        <translation>前左</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right</source>
        <translation>前右</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center</source>
        <translation>前中</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left</source>
        <translation>左边</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right</source>
        <translation>右边</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left</source>
        <translation>后左</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right</source>
        <translation>后右</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center</source>
        <translation>后中</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE)</source>
        <translation>低频音效(LFE)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Front left to:</source>
        <translation>前左到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right to:</source>
        <translation>前右到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center to:</source>
        <translation>前中到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left to:</source>
        <translation>左边到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right to:</source>
        <translation>右边到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left to:</source>
        <translation>后左到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right to:</source>
        <translation>后右到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center to:</source>
        <translation>后中到:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) to:</source>
        <translation>低频音效(LFE)到:</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&lt;hr&gt;&lt;p&gt;Remapping does not change the channel layout, therefore:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;mapping a channel to a non-existent one will result in loss of the channel&lt;/li&gt;&lt;li&gt;mapping a non-existent channel will result in silence&lt;/li&gt;&lt;/ul&gt;</source>
        <translation>&lt;hr&gt;&lt;p&gt;重映射不会改变通道布局, 那么:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;映射一个通道到不存在的地方的结果就是通道丢失&lt;/li&gt;&lt;li&gt;映射一个不存在的通道的结果是静音&lt;/li&gt;&lt;/ul&gt;</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Channel remap</source>
        <translation>通道重映射</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Audio Filters</source>
        <translation>音频过滤器</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="-2"/>
        <source>PAL 4:3</source>
        <translation>PAL 4:3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-4"/>
        <source>AMR-NB</source>
        <translation>AMR-NB</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-946"/>
        <source>Permission error</source>
        <translation>权限许可错误</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="+8"/>
        <source>_Job name:</source>
        <translation>作业名称:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="+0"/>
        <source>Core has been compiled without LIBVA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>核心已编译,没有 LIBVA 的支持,但它已编译应用程序,安装不匹配</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+755"/>
        <source>Setting the language for the given track index is not possible: Video has no audio file!</source>
        <translation>设定语言提供跟踪索引是不可能的:视频有没有音频文件!</translation>
    </message>
    <message>
        <source>OpenGL (best)</source>
        <translation type="vanished">OpenGL (最好)</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+21"/>
        <source>Select JPEG Sequence to Save</source>
        <translation>选择 JPEG 顺序进行保存</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-73"/>
        <source>Append</source>
        <translation>同宽高视频合并</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-86"/>
        <source>can&apos;t open &quot;%s&quot;: %u (%s)
</source>
        <translation>不能打开 &quot;%s&quot;: %u (%s)
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+38"/>
        <location line="+2"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-196"/>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="+1"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-1321"/>
        <source>Not coded in this version</source>
        <translation>没有编进这个版本</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+494"/>
        <source>Failed</source>
        <translation>已失败</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+19"/>
        <source>Two Pass Tuning</source>
        <translation>2 通调优</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="+3"/>
        <source>Output _File:</source>
        <translation>输出文件:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="+79"/>
        <source>Ignore</source>
        <translation>忽略</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+1051"/>
        <source>No error found</source>
        <translation>没有找到错误</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+61"/>
        <source>Next Intra Frame</source>
        <translation>转到下一帧(关键帧或I帧)</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="-14"/>
        <location line="+14"/>
        <location line="+31"/>
        <location line="+6"/>
        <location line="+15"/>
        <location line="+27"/>
        <location line="+35"/>
        <source>Codec Error</source>
        <translation>编解码器错误</translation>
    </message>
    <message>
        <source>Internal error finding codec 0x%x</source>
        <translation type="vanished">发现编解码器内部错误</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+190"/>
        <source>Master</source>
        <translation>主要</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-57"/>
        <source>Medium</source>
        <translation>中</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Motion</source>
        <translation>运动</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-534"/>
        <source>Job name</source>
        <translation>作业名称</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="+52"/>
        <source>Muxers</source>
        <translation>复合器</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+454"/>
        <source>Saved %d images.</source>
        <translation>已保存 %d 个图像.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-122"/>
        <source>Normal</source>
        <translation>普通</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-79"/>
        <location line="+2"/>
        <source>Clear recent items</source>
        <translation>清除最近使用的文件及项目</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+295"/>
        <source>Decode video using DXVA2 (windows)</source>
        <translation>解码视频使用DXVA2 (windows)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-39"/>
        <source>Motion Search Precision</source>
        <translation>运动搜索精度</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-98"/>
        <source>Output</source>
        <translation>输出</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-210"/>
        <source>Cannot create stream</source>
        <translation>不能建立流</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-268"/>
        <source>Enable all SIMD</source>
        <translation>启用所有 SIMD</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+56"/>
        <source>Remix</source>
        <translation>重新混合</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="-50"/>
        <location line="+50"/>
        <source>You cannot remove *all* the video
</source>
        <translation>你不能删除*所有*的视频
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+220"/>
        <source>_AudioDevice</source>
        <translation>音频设备</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreMuxer/src/ADM_coreMuxerFfmpeg.cpp" line="-212"/>
        <source>Saving</source>
        <translation>正在保存</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-33"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-20"/>
        <source>Stereo</source>
        <translation>立体声</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-14"/>
        <source>WMAPRO</source>
        <translation>WMAPRO</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+7"/>
        <source>Wide Search</source>
        <translation>宽度搜索</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-1250"/>
        <source>Select script to debug</source>
        <translation>选择脚本去调试</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+20"/>
        <source>More Search</source>
        <translation>更多搜索</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+9"/>
        <source>Ogg Vorbis</source>
        <translation>Ogg Vorbis</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-22"/>
        <source>Limited Search</source>
        <translation>限度搜索</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="-1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-64"/>
        <source>XVideo</source>
        <translation>XVideo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="+1"/>
        <source>PAL 16:9</source>
        <translation>PAL 16:9</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+82"/>
        <source>First Frame</source>
        <translation>转到第一帧(开始)</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+765"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation>无法打开 &quot;%s&quot;.</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+1"/>
        <source>Medium Search</source>
        <translation>中间搜索</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="-115"/>
        <source>Video Decoder</source>
        <translation>视频解码器</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+1"/>
        <source>Last Frame</source>
        <translation>转到最后一帧(结束)</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Next Frame</source>
        <translation>转到下一帧</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-252"/>
        <source>Cannot reach database. Do you have Job control running ?</source>
        <translation>不能访问数据库,作业控制器在执行吗?</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+31"/>
        <source>Zoom 1:1</source>
        <translation>缩放 1:1</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Zoom 1:2</source>
        <translation>缩放 1:2</translation>
    </message>
    <message>
        <location line="-124"/>
        <source>Save as PNG</source>
        <translation>另存为PNG</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Save Selection as JPEG</source>
        <translation>保存所选为JPEG</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Reset Marker A</source>
        <translation>重设标记A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Marker B</source>
        <translation>重设标记B</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>HDR tone mapping</source>
        <translation>HDR色调映射</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Add partialized filter</source>
        <translation>添加局部过滤器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Play filtered</source>
        <translation>播放过滤后视频</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Previous Cut Point</source>
        <translation>前一个剪切点</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next Cut Point</source>
        <translation>后一个剪切点</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Backward 1 second</source>
        <translation>倒退1分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 1 second</source>
        <translation>前进1分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Backward 2 seconds</source>
        <translation>倒退2分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 2 seconds</source>
        <translation>前进2分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Backward 4 seconds</source>
        <translation>倒退4分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 4 seconds</source>
        <translation>前进4分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Backward one minute</source>
        <translation>倒退1分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward one minute</source>
        <translation>前进一分钟</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Zoom 1:4</source>
        <translation>缩放 1:4</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Zoom 2:1</source>
        <translation>缩放 2:1</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Fit to window</source>
        <translation>适合到窗口</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="+34"/>
        <source>Audio Encoder Plugins</source>
        <translation>插件-音频编码</translation>
    </message>
    <message>
        <source>DXVA2 (best)</source>
        <translation type="vanished">DXVA2 (最好)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+47"/>
        <source>No alerts</source>
        <translation>不显示警告</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+43"/>
        <source>Quantization</source>
        <translation>量化</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="+246"/>
        <source>Cannot compile shader</source>
        <translation>无法编译着色器</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-89"/>
        <source>can&apos;t open &quot;%s&quot;: %s
%s
</source>
        <translation>不能打开 &quot;%s&quot;: %s
%s
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-2"/>
        <source>No change</source>
        <translation>没有改变</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-694"/>
        <source>You are about to clear the list of recent files and projects. This can&apos;t be undone. Proceed?</source>
        <translation>你将要清除最近打开的文件和项目的列表, 这不能撤销. 是否继续?</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-9"/>
        <location line="+3"/>
        <source>Sdl driver</source>
        <translation>Sdl 驱动程序r</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+168"/>
        <source>No engine</source>
        <translation>没有引擎</translation>
    </message>
    <message>
        <location line="+530"/>
        <source>&quot;%s&quot; does not exist.</source>
        <translation>&quot;%s&quot; 不存在.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-129"/>
        <source>Save as BMP</source>
        <translation>另存 BMP</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStreamMP3.cpp" line="+199"/>
        <source>Building time map</source>
        <translation>建立时间轴</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+196"/>
        <source>Decode video using VDPAU (NVIDIA)</source>
        <translation>解码视频使用 VDPAU (NVIDIA)</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+1"/>
        <source>You don&apos;t have FAAC!.
It is needed to create PSP compatible video.</source>
        <translation>你没有FAAC!,它是建立 PSP 兼容视频所需.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+52"/>
        <source>Load saved settings</source>
        <translation>加载已保存的设定</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+940"/>
        <source>Frame size:</source>
        <translation>帧尺寸:</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Frame type:</source>
        <translation>帧类型:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+26"/>
        <source>Plugins</source>
        <translation>插件程序</translation>
    </message>
    <message>
        <source>VDPAU (best)</source>
        <translation type="vanished">VDPAU (最好)</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="-129"/>
        <source>Cannot select the MPEG-4 SP codec.</source>
        <translation>不能选择的 MPEG-4 SP 编解码器.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="-3"/>
        <location line="+1"/>
        <source>NTSC 16:9</source>
        <translation>NTSC 16:9</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="+281"/>
        <source>The video is in copy mode but the cut points are not on keyframes.
The video will be saved but there will be corruption at cut point(s).
Do you want to continue anyway ?</source>
        <translation>这个视频是在复制模式,但剪切的点不是在关键帧(I帧)上,
该视频将被保存,但会有缺陷在切割点.
您要继续吗 ?</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-939"/>
        <source>File error</source>
        <translation>文件错误</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-8"/>
        <source>Save audio</source>
        <translation>保存音频音轨(&amp;S)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="+23"/>
        <source>%d minute(s)</source>
        <translation>%d 分</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-179"/>
        <source>_Volume control:</source>
        <translation>音量控制:</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Default Postprocessing</source>
        <translation>默认的后处理方式</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-85"/>
        <source>Cannot create encoder</source>
        <translation>不能建立编码器</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+18"/>
        <source>Manual (dB)</source>
        <translation>手动 (dB)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+4"/>
        <source>x86-64</source>
        <translation>x86-64</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+465"/>
        <source>Checking video</source>
        <translation>正在检查视频</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+518"/>
        <source>Saving %s as a BMP file failed.</source>
        <translation>另存 %s 为 BMP 文件失败.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-300"/>
        <source>_Enable alternative keyboard shortcuts</source>
        <translation>启用备选的键盘快捷方式</translation>
    </message>
    <message>
        <location line="+385"/>
        <source>Decode video using LIBVA (INTEL)</source>
        <translation>解码视频使用 LIBVA (INTEL)</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-429"/>
        <source>Cannot open project using the video loader.</source>
        <translation>使用视频加载器无法打开这个项目.</translation>
    </message>
    <message>
        <source>LIBVA (best)</source>
        <translation type="vanished">LIBVA (最好)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-41"/>
        <source>Film to PAL</source>
        <translation>电影转PAL</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-443"/>
        <source>Select File to Save</source>
        <translation>选择文件进行保存</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-50"/>
        <source>_Limit Refresh Rate</source>
        <translation>限制刷新频率</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-15"/>
        <source>Select JPEG to Save</source>
        <translation>选择JPG文件进行保存</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-50"/>
        <source>Ultra High</source>
        <translation>超高</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-5"/>
        <source>Resampling frequency (Hz)</source>
        <translation>重复取样频率 (Hz)</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+719"/>
        <source>Setting the language for the given track index is not possible: Invalid track index!</source>
        <translation>设定的语言无法提供跟踪索引:无效的轨道索引!</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-234"/>
        <source>_Default to the directory of the last read file for saving</source>
        <translation>默认存储到最后读取文件的目录</translation>
    </message>
    <message>
        <location line="+160"/>
        <source>_Language</source>
        <translation>语言</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-70"/>
        <source>No file loaded</source>
        <translation>没有文件加载</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-659"/>
        <source>The file you just loaded contains several audio tracks.
Go to Audio-&gt;MainTrack to select the active one.</source>
        <translation>这文件刚刚加载包含一些音频轨道.
前往 音频-&gt;主要轨道 来选择作用中的轨道.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="-63"/>
        <source>Video Encoder</source>
        <translation>视频编码器</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+167"/>
        <source>Threading</source>
        <translation>线程</translation>
    </message>
    <message>
        <location line="-130"/>
        <source>_Strength:</source>
        <translation>强度:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+23"/>
        <source>Play/Stop</source>
        <translation>播放/停止</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="+3"/>
        <source>Save Job</source>
        <translation>保存作业</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-294"/>
        <source>_Check for new release</source>
        <translation>检查新版本</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Enable SSE4</source>
        <translation>启用 SSE4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE4.2</source>
        <translation>启用 SSE4.2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable AVX</source>
        <translation>启用 AVX</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable AVX2</source>
        <translation>启用 AVX2</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Multi-threading is disabled internally if HW accelerated decoding is enabled, restart application to apply changes</source>
        <translation>如果HW硬件加速解码已经启用则会内部禁用多线程, 重启程序来应用这些变化.</translation>
    </message>
    <message>
        <source>_Indexing/unpacking priority:</source>
        <translation type="vanished">索引/拆包的优先次序:</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>De_lete first pass log files by default</source>
        <translation>默认删除第一遍的日志文件</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto-Append Settings</source>
        <translation>自动追加设定:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Use custom fragment size for auto-append of MPEG-TS files</source>
        <translation>为自动追加的MPEG-TS文件使用自定义的片段尺寸</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Fragment size:</source>
        <translation>片段尺寸</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Pictures</source>
        <translation>图片</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Load sequentially named pictures in reverse order</source>
        <translation>逆序加载顺序命名的图片</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>23.976 (Film)</source>
        <translation>23.976 (电影)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25 (PAL)</source>
        <translation>25 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>29.970 (NTSC)</source>
        <translation>29.970 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>30</source>
        <translation>30</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (PAL)</source>
        <translation>50 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>59.940 (NTSC)</source>
        <translation>59.940 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>60</source>
        <translation>60</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Assign following standard frame rate:</source>
        <translation>指定下面的标准帧率:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Avisynth</source>
        <translation>Avisynth</translation>
    </message>
    <message>
        <location line="+195"/>
        <source>Default out of gamut handling:</source>
        <translation>默认超出范围(gamut)处理方式:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>HDR</source>
        <translation>HDR</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>Default _tone mapping method:</source>
        <translation>默认的色调映射方法:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Target peak luminance (nits):</source>
        <translation>目标峰值亮度 (nits):</translation>
    </message>
    <message>
        <location line="-183"/>
        <source>Caching of decoded pictures</source>
        <translation>高速缓存解码后的图片</translation>
    </message>
    <message>
        <location line="-134"/>
        <source>Reverse mouse _wheel for navigation</source>
        <translation>逆转导航用的鼠标滚轮</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Enable FMA3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+74"/>
        <source>Priority can be only lowered and applies to the entire application for the current session</source>
        <translation>优先级只能降低并应用于当前会话的全部程序</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>_Cache size:</source>
        <translation>高速缓存尺寸:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use _shared cache</source>
        <translation>使用共享的高速缓存</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This renderer provides no hardware acceleration</source>
        <translation>这个渲染器没有使用硬件加速</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>DXVA2</source>
        <translation>DXVA2</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+190"/>
        <source>OpenGL</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location line="-187"/>
        <source>LibVA</source>
        <translation>LibVA</translation>
    </message>
    <message>
        <location line="+140"/>
        <source>De_ringing</source>
        <translation>去除环状色斑</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>Import</source>
        <translation>导入</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="-3"/>
        <source>_Deringing</source>
        <translation>去除环状色斑</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+10"/>
        <source>8-bit PCM</source>
        <translation>8-bit PCM</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-12"/>
        <source>Turbo mode</source>
        <translation>加速模式</translation>
    </message>
    <message>
        <location line="+68"/>
        <source>Key Frame Boost(%)</source>
        <translation>关键帧提高(%)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-263"/>
        <source>Enable MMX</source>
        <translation>启用 MMX</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Enable SSE</source>
        <translation>启用 SSE</translation>
    </message>
    <message>
        <location line="+378"/>
        <source>If you use Hw decoding, it is better to use the matching display driver</source>
        <translation>如果你使用硬件解码,最好使用匹配的显示驱动程序</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="+2"/>
        <location line="+85"/>
        <source>filesystem full</source>
        <translation>文件系统已满</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+27"/>
        <source>HW Accel</source>
        <translation>HW硬件加速</translation>
    </message>
    <message>
        <location line="-421"/>
        <source>_Accept non-standard audio frequency for DVD</source>
        <translation>接受DVD中的非标准频率音频</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-30"/>
        <source>Chroma ME</source>
        <translation>色度 ME</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+13"/>
        <source>Enable MMXEXT</source>
        <translation>启用 MMXEXT</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-87"/>
        <source>Information</source>
        <translation>信息</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="-2"/>
        <source>NTSC 4:3</source>
        <translation>NTSC 4:3</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+7"/>
        <source>Libraries</source>
        <translation>函数库</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="-16"/>
        <source>An audio track is necessary to create such file</source>
        <translation>音频轨道有必要建立这样的文件</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+595"/>
        <source>Cannot use that file as audio track</source>
        <translation>不能使用该文件作为音频轨道</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+74"/>
        <source>Prioritisation</source>
        <translation>优化</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+35"/>
        <source>Max Overglow Degradation(%)</source>
        <translation>退化最大溢出(%)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+5"/>
        <source>Built-in Support</source>
        <translation>内建的支援</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-62"/>
        <source>Very High</source>
        <translation>非常高</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-1488"/>
        <source>Select script/project to run</source>
        <translation>选择要执行的脚本/项目</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+45"/>
        <source>_Always ask which port to use</source>
        <translation>总是询问要使用的端口</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+99"/>
        <source>Go To Marker A</source>
        <translation>将标记A(选择开始)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go To Marker B</source>
        <translation>将标记B(选择结束)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+35"/>
        <source>Stereo front+stereo rear</source>
        <translation>前段立体+后段立体</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-61"/>
        <source>Pr&amp;eferences</source>
        <translation>首选项-偏好设定(&amp;E)</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+69"/>
        <source>Low Bitrate Scenes (%)</source>
        <translation>低比特率场景(%)</translation>
    </message>
    <message>
        <location filename="../../common/gui_play.cpp" line="+460"/>
        <source>Trouble initializing audio device</source>
        <translation>音频设备初始化时发生问题</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="+0"/>
        <source>Core has been compiled without XVBA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>核心已编译,没有 XVBA 的支持,但它已编译应用程序,安装不匹配</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+33"/>
        <source>Video _display:</source>
        <translation>视频 显示:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-1"/>
        <source>High Bitrate Scenes (%)</source>
        <translation>高比特率场景(%)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="-1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+133"/>
        <source>_Vertical deblocking</source>
        <translation>去除垂直方向块色斑</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+1282"/>
        <source>Errors found in %u frames</source>
        <translation>在 %u 帧中发现错误</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-81"/>
        <source>_Local playback downmixing:</source>
        <translation>本地回放下混频:</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Display all alerts</source>
        <translation>显示所有警告</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="-20"/>
        <source>Fontconfig</source>
        <translation>Fontconfig</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_gototime.cpp" line="+33"/>
        <source>TimeStamp:</source>
        <translation>时间戳:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+1"/>
        <source>FreeType 2</source>
        <translation>FreeType 2</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-677"/>
        <location line="+21"/>
        <source>Cutting</source>
        <translation>剪切</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+64"/>
        <source>Select BMP to Save</source>
        <translation>选择 BMP 进行保存</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="+27"/>
        <source>A few seconds</source>
        <translation>几秒钟</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+484"/>
        <source>File %s has been successfully saved.</source>
        <translation>文件 %s 已成功保存.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="-2"/>
        <source>Less than a minute</source>
        <translation>不到一分钟</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+56"/>
        <source>Next Black Frame</source>
        <translation>转到下一幅黑帧</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+176"/>
        <source>Display</source>
        <translation>显示</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_gototime.cpp" line="+3"/>
        <source>Go to Time</source>
        <translation>去到时间点</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+7"/>
        <source>Go To Time</source>
        <translation>转到时间点</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-301"/>
        <source>Multi-threading</source>
        <translation>多线程</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+12"/>
        <source>Xvid4 Configuration</source>
        <translation>Xvid4 配置</translation>
    </message>
    <message>
        <location line="-62"/>
        <source>Advanced Simple Profile</source>
        <translation>高级简单配置文件(ASP)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="-2"/>
        <source>Stereo+center</source>
        <translation>立体+中央</translation>
    </message>
    <message>
        <location line="-27"/>
        <source>PAL to Film</source>
        <translation>PAL转电影</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-65"/>
        <source>Reset Markers</source>
        <translation>重设标记</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+62"/>
        <source>Default port to use</source>
        <translation>使用默认端口</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>_Message level:</source>
        <translation>消息级别:</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+677"/>
        <source>You can&apos;t remove all frames</source>
        <translation>你不能移除所有的帧</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+38"/>
        <source>&amp;Advanced</source>
        <translation>高级(&amp;A)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+143"/>
        <source>Enable OpenGL support</source>
        <translation>启用OpenGL支持</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-1036"/>
        <source>tinyPy script is not enabled in this build</source>
        <translation>本次创建未启用tinyPy脚本</translation>
    </message>
    <message>
        <source>Cannot setup codec. Bitrate too low?</source>
        <translation type="vanished">无法设定编解码器,比特率太低?</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-531"/>
        <source>Output file</source>
        <translation>输出文件</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-29"/>
        <location line="+77"/>
        <source>Select Video File...</source>
        <translation>选择视频文件...</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+4"/>
        <source>Unknown codec</source>
        <translation>未知的编解码器</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_jobs_save.cpp" line="-3"/>
        <source>Select Video To Write</source>
        <translation>选择视频来写入</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="+114"/>
        <source>Demuxers</source>
        <translation>分离器</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_iso639.cpp" line="+17"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="+7"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-52"/>
        <source>Reset Edit</source>
        <translation>编辑重启</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+1381"/>
        <source>Failed to connect to avsproxy.
Is it running ?</source>
        <translation>无法联机到 avsproxy,
确认它是不是在运行?</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+19"/>
        <location line="+2"/>
        <source>Save current settings as default</source>
        <translation>将当前设置保存为默认值</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-28"/>
        <source>C_hroma optimizer</source>
        <translation>色度优化器</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Very Low</source>
        <translation>非常低</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+62"/>
        <source>The MP3 codec does not allow disabling reservoir.
Install lame plugin</source>
        <translation>MP3编解码器不允许禁用资源(reservoir), 安装lame插件程序</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-51"/>
        <source>Save as Image</source>
        <translation>另存图片(&amp;S)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+107"/>
        <source>Preferences</source>
        <translation>偏好设定</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-267"/>
        <source>_Track from video:</source>
        <translation>视频中的轨道:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+19"/>
        <source>Quarter Pixel</source>
        <translation>1/4像素</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+126"/>
        <source>Saving audio</source>
        <translation>正在保存音频</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-29"/>
        <source>_Interlaced</source>
        <translation>隔行扫描</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+83"/>
        <source>Open Application &amp;Log</source>
        <translation>打开应用程序Log(&amp;L)</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+100"/>
        <source>Function not implemented
</source>
        <translation>函数尚未执行
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-21"/>
        <location line="+10"/>
        <source>Filters</source>
        <translation>过滤器</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-383"/>
        <source>_lavc threads:</source>
        <translation>lavc 线程数:</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+60"/>
        <source>Quantization Matrix</source>
        <translation>量化矩阵</translation>
    </message>
    <message>
        <location line="-58"/>
        <source>_Greyscale</source>
        <translation>灰度</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+273"/>
        <source>Refresh Rate Cap (ms)</source>
        <translation>刷新频率上限 (ms)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-32"/>
        <source>Set Marker A</source>
        <translation>设定标记 A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Set Marker B</source>
        <translation>设定标记 B</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+32"/>
        <location line="+7"/>
        <source>Invalid audio index given</source>
        <translation>提供的音频索引无效</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+22"/>
        <source>VHQ Mode</source>
        <translation>VHQ 模式</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Ca_rtoon mode</source>
        <translation>卡通模式</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+54"/>
        <source>Previous Frame</source>
        <translation>转到上一帧</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+228"/>
        <source>AvsProxy</source>
        <translation>AvsProxy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-245"/>
        <source>_Playback priority:</source>
        <translation>回放优先次序:</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+5"/>
        <source>avsproxy</source>
        <translation>avsproxy</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_postproc.cpp" line="-1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+204"/>
        <source>_Horizontal deblocking</source>
        <translation>去除水平方向块色斑</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edFrameType.cpp" line="+72"/>
        <source>Updating frametype</source>
        <translation>更新帧类型</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+4"/>
        <source>_Frame rate change:</source>
        <translation>帧率改变:</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_builtin.cpp" line="+1"/>
        <source>Gettext</source>
        <translation>Gettext</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-92"/>
        <source>Save as JPEG</source>
        <translation>另存JPEG</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+86"/>
        <source>Two Pass</source>
        <translation>2通</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-863"/>
        <source>Could not open the file</source>
        <translation>无法打开此文件</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-26"/>
        <source>Trellis Quantization</source>
        <translation>棚架(Trellis)量化</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreImage/src/ADM_imageSave.cpp" line="+88"/>
        <source>Cannot allocate enough memory</source>
        <translation>不能申请到足够的内存</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Cannot create output file</source>
        <translation>不能生成输出文件</translation>
    </message>
    <message>
        <location line="+246"/>
        <source>Memory error</source>
        <translation>内存错误</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_audioFilter.cpp" line="+26"/>
        <source>5 channels</source>
        <translation>5 通道</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+13"/>
        <source>.. are reduced by(%)</source>
        <translation>介...是减少(%)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="+94"/>
        <source>Previous Intra Frame</source>
        <translation>转到上一帧(关键帧或I帧)</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="-59"/>
        <source>System language</source>
        <translation>系统语言</translation>
    </message>
    <message>
        <source>XVideo (best)</source>
        <translation type="vanished">XVideo (最好)</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+279"/>
        <location line="+43"/>
        <source>The tinypy plugin is missing.
Expect problems.</source>
        <translation>Tinypy 插件程序丢失.
后续会有问题.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="-29"/>
        <source>Audio Encoders</source>
        <translation>音频编码器</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+158"/>
        <source>Something bad happened (II)</source>
        <translation>不幸的事情发生 (II)</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-15"/>
        <location line="+41"/>
        <source>Saving failed</source>
        <translation>保存失败</translation>
    </message>
    <message>
        <location line="-220"/>
        <location line="+2"/>
        <source>Select File to Save Audio</source>
        <translation>选择文件来保存音频</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+198"/>
        <source>Audio file not found in list, even though it should be there. Create a bug report!</source>
        <translation>未找到在清单中,即使它应该有的音频文件,建立一个错误报告!</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/myOwnMenu.h" line="-37"/>
        <source>PostProcessing</source>
        <translation>后置处理(&amp;O)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="-18"/>
        <source>%d hour(s)</source>
        <translation>%d 小时</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_plugins.cpp" line="-138"/>
        <source>Audio Plugins</source>
        <translation>插件-音频</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+6"/>
        <source>Curve Compression</source>
        <translation>曲线压缩</translation>
    </message>
    <message>
        <location line="-60"/>
        <source>Mode Decision</source>
        <translation>模式决定</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-30"/>
        <source>Queue job to jobList</source>
        <translation>作业排队到jobList</translation>
    </message>
    <message>
        <source>Internal error opening 0x%x</source>
        <translation type="vanished">内部打开错误中 0x%x</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-958"/>
        <source>Are you sure?</source>
        <translation>你确定吗?</translation>
    </message>
    <message>
        <location filename="../../common/ADM_toolkit/automation.cpp" line="+235"/>
        <source>Permission Error</source>
        <translation>权限错误</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open script &quot;%s&quot;.</source>
        <translation>不能打开脚本 &quot;%s&quot;.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>File Error</source>
        <translation>文件错误</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Script &quot;%s&quot; does not exist.</source>
        <translation>脚本 &quot;%s&quot; 不存在.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_commonUI/DIA_HDRConfig.cpp" line="-5"/>
        <source>Changing the options above will results the editor jumping to the nearest prior key frame.</source>
        <translation>改变上面的选项的结果是编辑器会跳转到前面最近的关键帧</translation>
    </message>
    <message>
        <location line="+6"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+73"/>
        <source>Fast YUV</source>
        <translation>快速YUV</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB clipping</source>
        <translation>RGB剪切</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB soft limit</source>
        <translation>RGB 软限制</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB Reinhard</source>
        <translation>RGB Reinhard色彩迁移算法</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB Hable</source>
        <translation>RGB Hable算法</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Tone mapping:</source>
        <translation>色调映射:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Saturation:</source>
        <translation>饱和度:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Boost (level multiplier):</source>
        <translation>提高(Boost) (级别乘数):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Adaptive RGB tonemappers</source>
        <translation>自适应RGB色调映射</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+8"/>
        <source>Clipping</source>
        <translation>裁剪</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../common/ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>Compression</source>
        <translation>压缩</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_RGB out of gamut handling:</source>
        <translation>RGB超出色域的处理方式:</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_floatResettable.cpp" line="+131"/>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
</context>
<context>
    <name>admIvtc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="+44"/>
        <source>All in one ivtc.</source>
        <translation>全合一ivtc.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>ADM ivtc.</source>
        <translation>ADM ivtc.</translation>
    </message>
</context>
<context>
    <name>aften</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/aften/audioencoder_aften.cpp" line="+240"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Aften Configuration</source>
        <translation>常用配置</translation>
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
        <translation>分析器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Null filter. Vectorscope, Waveform scopes and Histograms in Preview.</source>
        <translation>无过滤器. 预览矢量显示器,波形显示器和直方图.</translation>
    </message>
</context>
<context>
    <name>analyzerDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/qt4/analyzer.ui" line="+14"/>
        <source>Analyzer</source>
        <translation>分析器</translation>
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
        <translation>卡通</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation>移植于frei0r.</translation>
    </message>
</context>
<context>
    <name>artCartoonDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/qt4/artCartoon.ui" line="+14"/>
        <source>Cartoon</source>
        <translation>卡通</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Threshold</source>
        <translation>阈值</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Scatter</source>
        <translation>散布</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Color level</source>
        <translation>颜色级别</translation>
    </message>
</context>
<context>
    <name>artCharcoal</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/ADM_vidArtCharcoal.cpp" line="+41"/>
        <source>Charcoal / Chalkboard</source>
        <translation>炭笔 / 黑板</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from MLT.</source>
        <translation>移植于MLT.</translation>
    </message>
</context>
<context>
    <name>artCharcoalDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="+14"/>
        <source>Charcoal / Chalkboard</source>
        <translation>炭笔 / 黑板</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Intensity</source>
        <translation>强度</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Color</source>
        <translation>颜色</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Vertical scatter</source>
        <translation>垂直散布</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Horizontal scatter</source>
        <translation>水平散布</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Chalkboard</source>
        <translation>黑板(Chalkboard)</translation>
    </message>
</context>
<context>
    <name>artChromaHold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/ADM_vidArtChromaHold.cpp" line="+41"/>
        <source>Chroma Hold</source>
        <translation>色度保持</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Monochrome effect with kept color(s).</source>
        <translation>保持某些颜色的单色效果</translation>
    </message>
</context>
<context>
    <name>artChromaHoldDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="+14"/>
        <source>Chroma Hold</source>
        <translation>色度保持</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Tertiary</source>
        <translation>第三</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Secondary</source>
        <translation>次要</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Primary</source>
        <translation>首要</translation>
    </message>
    <message>
        <location line="+108"/>
        <source>Distance</source>
        <translation>距离</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Cutoff slope</source>
        <translation>截止斜率</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Pick Chroma</source>
        <translation>色度选取</translation>
    </message>
</context>
<context>
    <name>artChromaKey</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/ADM_vidArtChromaKey.cpp" line="+42"/>
        <source>Chroma Key</source>
        <translation>色度Key</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Replace &quot;green screen&quot; with an image.</source>
        <translation>用一幅图片替换&quot;绿幕&quot;.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/Q_artChromaKey.cpp" line="+286"/>
        <source>Select Background Image</source>
        <translation>选择背景图像</translation>
    </message>
</context>
<context>
    <name>artChromaKeyDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="+14"/>
        <source>Chroma Key</source>
        <translation>色度Key</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>Primary</source>
        <translation>首要</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Tertiary</source>
        <translation>第三</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Secondary</source>
        <translation>次要</translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Cutoff slope</source>
        <translation>截止斜率</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Pick Chroma</source>
        <translation>色度选取</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Select image</source>
        <translation>选择图像</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Show calibration background</source>
        <translation>显示校准背景</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>No spill control</source>
        <translation>无溢出控制</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Weighted alpha</source>
        <translation>加权 alpha</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>AVG alpha</source>
        <translation>AVG alpha</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>RMS alpha</source>
        <translation>RMS alpha</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MIN alpha</source>
        <translation>最小 alpha</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Distance</source>
        <translation>距离</translation>
    </message>
</context>
<context>
    <name>artColorEffect</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/ADM_vidArtColorEffect.cpp" line="+33"/>
        <source>Color Effect</source>
        <translation>颜色效果</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation>移植于frei0r.</translation>
    </message>
</context>
<context>
    <name>artColorEffectDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="+14"/>
        <source>Color Effect</source>
        <translation>颜色效果</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Effect</source>
        <translation>效果</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Sepia</source>
        <translation>深褐色(Sepia)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vivid</source>
        <translation>鲜艳(Vivid)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Heat</source>
        <translation>热度(Heat)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Radium</source>
        <translation>镭(Radium)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Red-green</source>
        <translation>红-绿</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Monochrome</source>
        <translation>单色</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Old photo</source>
        <translation>老照片</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Night vision</source>
        <translation>夜视</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>X-ray</source>
        <translation>X-射线</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Shades</source>
        <translation>墨镜(Shades)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>XPRO</source>
        <translation>XPRO</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Yellow-blue</source>
        <translation>黄-蓝</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Yellow-bluish</source>
        <translation>黄-到-蓝</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Chrome</source>
        <translation>铬合金</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Esses</source>
        <translation>Esses效果</translation>
    </message>
</context>
<context>
    <name>artDynThreshold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/ADM_vidArtDynThreshold.cpp" line="+41"/>
        <source>Dynamic Threshold</source>
        <translation>动态阈值</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adaptive luma thresholding </source>
        <translation>自适应亮度阈值黑白化</translation>
    </message>
</context>
<context>
    <name>artDynThresholdDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/qt4/artDynThreshold.ui" line="+14"/>
        <source>Dynamic Threshold</source>
        <translation>动态阈值</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Levels</source>
        <translation>级别</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Offset</source>
        <translation>偏移</translation>
    </message>
</context>
<context>
    <name>artGrid</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/ADM_vidArtGrid.cpp" line="+35"/>
        <source>Grid</source>
        <translation>网格</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Video wall effect.</source>
        <translation>视频墙效果</translation>
    </message>
</context>
<context>
    <name>artGridDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/qt4/artGrid.ui" line="+14"/>
        <source>Grid</source>
        <translation>网格</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Grid size</source>
        <translation>网格尺寸</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Roll previous frames</source>
        <translation>滚动(Roll)在此之前的帧</translation>
    </message>
</context>
<context>
    <name>artMirror</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/ADM_vidArtMirror.cpp" line="+41"/>
        <source>Mirror</source>
        <translation>镜像</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mirror horizontally or vertically.</source>
        <translation>水平或垂直镜像</translation>
    </message>
</context>
<context>
    <name>artMirrorDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="+14"/>
        <source>Mirror</source>
        <translation>镜像</translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Displacement</source>
        <translation>置换</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Horizontal - keep left</source>
        <translation>水平 - 左部保持</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Horizontal - keep right</source>
        <translation>水平 - 右部保持</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical - keep top</source>
        <translation>垂直 - 顶部保持</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical - keep bottom</source>
        <translation>垂直 - 底部保持</translation>
    </message>
</context>
<context>
    <name>artPixelize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/ADM_vidArtPixelize.cpp" line="+59"/>
        <source>Pixelize</source>
        <translation>像素化</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pixelize image.</source>
        <translation>像素化图像.</translation>
    </message>
</context>
<context>
    <name>artPixelizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/qt4/artPixelize.ui" line="+14"/>
        <source>Pixelize</source>
        <translation>像素化</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Pixel size</source>
        <translation>像素尺寸</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>x</source>
        <translation>x</translation>
    </message>
</context>
<context>
    <name>artPosterize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/ADM_vidArtPosterize.cpp" line="+44"/>
        <source>Posterize</source>
        <translation>多色调分色</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation>移植于frei0r.</translation>
    </message>
</context>
<context>
    <name>artPosterizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/qt4/artPosterize.ui" line="+14"/>
        <source>Posterize</source>
        <translation>多色调分色</translation>
    </message>
    <message>
        <location line="+62"/>
        <source>Levels</source>
        <translation>级别</translation>
    </message>
</context>
<context>
    <name>artVHS</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/ADM_vidArtVHS.cpp" line="+39"/>
        <source>VHS</source>
        <translation>VHS</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VHS effect. Most authentic at lower resolutions.</source>
        <translation>VHS效果. 更低分辨率时最真实</translation>
    </message>
</context>
<context>
    <name>artVHSDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="+14"/>
        <source>VHS</source>
        <translation>VHS</translation>
    </message>
    <message>
        <location line="+132"/>
        <source>Luma bandwidth</source>
        <translation>亮度带宽</translation>
    </message>
    <message>
        <location line="-90"/>
        <source>Chroma bandwidth</source>
        <translation>色度带宽</translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Sync error</source>
        <translation>同步错误</translation>
    </message>
    <message>
        <location line="-76"/>
        <source>Use zero delay filter for chroma</source>
        <translation>使用色度零延时过滤器</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Use zero delay filter for luma</source>
        <translation>使用亮度零延时过滤器</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Sync error filter</source>
        <translation>同步错误过滤</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Noise</source>
        <translation>噪声</translation>
    </message>
</context>
<context>
    <name>artVignette</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/ADM_vidArtVignette.cpp" line="+43"/>
        <source>Vignette</source>
        <translation>晕影</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lens vignetting effect, ported from frei0r.</source>
        <translation>镜头晕影效果, 移植于frei0r.</translation>
    </message>
</context>
<context>
    <name>artVignetteDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/qt4/artVignette.ui" line="+14"/>
        <source>Vignette</source>
        <translation>晕影</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Size of the unaffected center</source>
        <translation>无效应中心的尺寸</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Softness</source>
        <translation>柔化</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Aspect ratio</source>
        <translation>宽高比</translation>
    </message>
</context>
<context>
    <name>asciiView</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asciiView/ADM_vidAscii.cpp" line="+64"/>
        <source>Ascii View</source>
        <translation>ASCII视图</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ascii view</source>
        <translation>ASCII视图</translation>
    </message>
</context>
<context>
    <name>asfdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asf.cpp" line="+158"/>
        <source>File Error.</source>
        <translation>文件错误.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asfHeaders.cpp" line="+468"/>
        <source>Indexing</source>
        <translation>正在索引</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asf.cpp" line="+0"/>
        <source>Cannot open file
</source>
        <translation>不能打开文件
</translation>
    </message>
</context>
<context>
    <name>asharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/ADM_vidAsharp.cpp" line="+69"/>
        <source>Asharp</source>
        <translation>自适应锐化(Asharp)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adaptative sharpener by MarcFD.</source>
        <translation>自适应锐化器,作者 MarcFD.</translation>
    </message>
</context>
<context>
    <name>asharpDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="+14"/>
        <source>ASharp</source>
        <translation>自适应锐化(Asharp)</translation>
    </message>
    <message>
        <location line="+127"/>
        <source>High quality block filtering</source>
        <translation>高品质块过滤</translation>
    </message>
    <message>
        <location line="-119"/>
        <source>Threshold</source>
        <translation>阈值</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Adaptive strength</source>
        <translation>自适应强度</translation>
    </message>
    <message>
        <location line="+85"/>
        <source>Block adaptive</source>
        <translation>自适应块</translation>
    </message>
    <message>
        <source>Unknown flag</source>
        <translation type="vanished">未知的标志</translation>
    </message>
    <message>
        <source>Strength</source>
        <translation type="vanished">强度</translation>
    </message>
    <message>
        <source>Block Adaptative</source>
        <translation type="vanished">自适应区块</translation>
    </message>
</context>
<context>
    <name>ass</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="+224"/>
        <source>ASS</source>
        <translation>ASS</translation>
    </message>
    <message>
        <location line="+14"/>
        <location line="+5"/>
        <location line="+9"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Fonts</source>
        <translation>字型</translation>
    </message>
    <message>
        <location line="-75"/>
        <source>Cannot load this SRT file.</source>
        <translation>不能加载SRT文件.</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>This is a SRT file. Convert to SSA ?</source>
        <translation>这是一个SRT文件, 要转换为SSA吗?</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Botto_m margin:</source>
        <translation>底部边界:</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>_Font scale:</source>
        <translation>字体缩放:</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>Are you sure this is an ASS/SSA file ?</source>
        <translation>你确认是ASS/SSA文件吗?</translation>
    </message>
    <message>
        <location line="+234"/>
        <source>SSA Error</source>
        <translation>SSA错误</translation>
    </message>
    <message>
        <location line="-194"/>
        <source>Select Subtitle File</source>
        <translation>选择字幕文件</translation>
    </message>
    <message>
        <location line="+194"/>
        <source>ass_read_file() failed for %s</source>
        <translation>无法读取文件为 %s</translation>
    </message>
    <message>
        <location line="-193"/>
        <source>_Line spacing:</source>
        <translation>行距:</translation>
    </message>
    <message>
        <location line="+104"/>
        <source>Preparing the fonts can take a few minutes the first time.
This message will not be displayed again.</source>
        <translation>准备的字体可以花几分钟第一次,不会再显示此消息.</translation>
    </message>
    <message>
        <location line="-102"/>
        <source>_Top margin:</source>
        <translation>顶部边界:</translation>
    </message>
    <message>
        <location line="-43"/>
        <source>Format ?</source>
        <translation>格式 ?</translation>
    </message>
    <message>
        <location line="-92"/>
        <source>SSA/ASS/SRT</source>
        <translation>SSA/ASS/SRT文件</translation>
    </message>
    <message>
        <location line="+132"/>
        <source>_Subtitle file (ASS/SSA):</source>
        <translation>字幕文件(ASS/SSA):</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Do not adjust</source>
        <translation>不调整</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Adjust for display aspect ratio:</source>
        <translation>调整显示宽高比</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Cannot convert to SSA.</source>
        <translation>不能转换为SSA文件.</translation>
    </message>
    <message>
        <location line="-166"/>
        <source>Hardcode ASS/SSA/SRT subtitles using libass.</source>
        <translation>硬编码ASS/SSA/SRT字幕, 使用libass.</translation>
    </message>
    <message>
        <location line="+175"/>
        <source>Cannot save converted file.</source>
        <translation>不能保存转换后的文件.</translation>
    </message>
</context>
<context>
    <name>avimuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="+25"/>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto</source>
        <translation>自动</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start as legacy AVI and switch to OpenDML mode when approaching the 4 GiB file size limit</source>
        <translation>以传统AVI模式开始, 当快接近4GB文件尺寸限制时转换为OpenML模式</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>OpenDML</source>
        <translation>OpenDML</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Muxing Format</source>
        <translation>复合格式</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAvi.cpp" line="+85"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot create AVI file</source>
        <translation>不能建立AVI文件</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>Bad Idea</source>
        <translation>坏主意</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Using H264/H265 in AVI is a bad idea, MKV is better for that.
 Do you want to continue anyway ?</source>
        <translation>使用H264/H265中AVI是个坏主意,MKV是好了点.
你想要继续吗?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="+3"/>
        <source>Avi Muxer</source>
        <translation>AVI复合器</translation>
    </message>
</context>
<context>
    <name>avsfilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="+599"/>
        <source>Select wine filename[wine/cedega/etc.]</source>
        <translation>选择wine文件名 [cedega/wine/等]</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>_wine app file:</source>
        <translation>wine用程序文件:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_loader file:</source>
        <translation>加载程序文件:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Select loader filename[avsload.exe]</source>
        <translation>选择加载文件名称[avs加载.exe]</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_avs file:</source>
        <translation>_avs文件:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_pipe timeout:</source>
        <translation>管道超时:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>AvsFilter config</source>
        <translation>Avs过滤器配置</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Select avs filename[*.avs]</source>
        <translation>选择 avs 文件名[*.avs]</translation>
    </message>
</context>
<context>
    <name>bitrate</name>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="+169"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location line="-116"/>
        <source>Same Quantiser as Input</source>
        <translation>量化值与输入来源相同</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Two Pass - Average Bitrate</source>
        <translation>2通 - 平均比特率</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Constant Bitrate</source>
        <translation>固定比特率(CBR)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Quantiser</source>
        <translation>恒定量化</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Constant Rate Factor</source>
        <translation>固定速率系数</translation>
    </message>
    <message>
        <location line="+105"/>
        <source>Target video size (MB)</source>
        <translation>目标视频尺寸 (MB)</translation>
    </message>
    <message>
        <location line="-5"/>
        <location line="+19"/>
        <source>Quantizer</source>
        <translation>量化</translation>
    </message>
    <message>
        <location line="-115"/>
        <source>Encoding mode</source>
        <translation>编码模式</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bitrate</source>
        <translation>比特率</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Two Pass - Video Size</source>
        <translation>2通 - 视频尺寸</translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Average bitrate (kb/s)</source>
        <translation>平均比特率 (kb/s)</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Target bitrate (kb/s)</source>
        <translation>目标比特率 (kb/s)</translation>
    </message>
</context>
<context>
    <name>black</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="+48"/>
        <source>Black</source>
        <translation>黑幕</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>结束时间:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Replace by Black</source>
        <translation>设为用黑幕</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Replace a section by black.</source>
        <translation>设定某一段视频为黑幕.</translation>
    </message>
</context>
<context>
    <name>blacken</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/ADM_vidBlackBorder.h" line="+43"/>
        <source>Blacken Borders</source>
        <translation>黑边框</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove noisy edge by turning them to black.</source>
        <translation>涂黑毛糙的边缘.</translation>
    </message>
</context>
<context>
    <name>blackenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="+59"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+82"/>
        <source>Top:</source>
        <translation>上:</translation>
    </message>
    <message>
        <location line="+71"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+60"/>
        <source>Left:</source>
        <translation>左:</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
    <message>
        <location line="-88"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="-128"/>
        <source>Blacken Borders</source>
        <translation>黑边框</translation>
    </message>
    <message>
        <location line="+38"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+61"/>
        <source>Right:</source>
        <translation>右:</translation>
    </message>
    <message>
        <location line="+71"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+81"/>
        <source>Bottom:</source>
        <translation>下:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="-44"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>隐藏橡皮筋(&amp;H)</translation>
    </message>
</context>
<context>
    <name>blackframes</name>
    <message>
        <source>BlackFrame</source>
        <translation type="vanished">黑帧</translation>
    </message>
    <message>
        <location filename="../../common/gui_blackframes.cpp" line="+113"/>
        <location line="+155"/>
        <source>Searching black frame..</source>
        <translation>搜索黑帧..</translation>
    </message>
    <message>
        <source>This function is unsupported at the moment</source>
        <translation type="vanished">此功能当前尚未支持</translation>
    </message>
</context>
<context>
    <name>blend</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blend/ADM_vidBlendFrames.cpp" line="+50"/>
        <source>Blend Frames</source>
        <translation>帧混合</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend groups of N frames into a single frame.  Useful for speeding up slow motion footage or creating timelapses.</source>
        <translation>混合一组N帧成为一帧. 用来进行慢动作加速或制作延时视频.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Frames</source>
        <translation>帧</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Blend</source>
        <translation>混合</translation>
    </message>
</context>
<context>
    <name>blur</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/ADM_vidBlur.cpp" line="+44"/>
        <source>Blur</source>
        <translation>模糊</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blur selected area.</source>
        <translation>模糊所选区域</translation>
    </message>
</context>
<context>
    <name>blurDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="+14"/>
        <source>Blur</source>
        <translation>模糊</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>radius</source>
        <translation>半径</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Left:</source>
        <translation>左:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Top:</source>
        <translation>上:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Bottom:</source>
        <translation>下:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Right:</source>
        <translation>右:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>隐藏橡皮筋(&amp;H)</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Box blur</source>
        <translation>Box模糊</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Near Gaussian</source>
        <translation>近高斯</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Gaussian 2 pass</source>
        <translation>高斯2通</translation>
    </message>
</context>
<context>
    <name>changeFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="+252"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location line="-209"/>
        <source>29.97 (NTSC)</source>
        <translation>29.97 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (Pal)</source>
        <translation>50 (Pal)</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>25  (PAL)</source>
        <translation>25  (PAL)</translation>
    </message>
    <message>
        <location line="+211"/>
        <source>Invalid fps</source>
        <translation>无效帧率(FPS)</translation>
    </message>
    <message>
        <location line="-212"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>59.94  (NTSC)</source>
        <translation>59.94  (NTSC)</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Change FPS</source>
        <translation>改变帧率(FPS)</translation>
    </message>
    <message>
        <location line="+170"/>
        <source>Change fps</source>
        <translation>改变帧率(FPS)</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Source frame rate:</source>
        <translation>源帧速:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Destination frame rate:</source>
        <translation>目标帧速:</translation>
    </message>
    <message>
        <location line="-197"/>
        <source>23.976 (Film)</source>
        <translation>23.976 (电影)</translation>
    </message>
    <message>
        <location line="+191"/>
        <source>Source Fps:</source>
        <translation>源 Fps:</translation>
    </message>
    <message>
        <location line="-155"/>
        <source>Speed up/slow down the video as if altering fps. This filter changes duration.</source>
        <translation>视频快慢改变fps(帧/秒)的速度,这个过滤器会改变持续时间长度.</translation>
    </message>
    <message>
        <location line="+160"/>
        <source>Destination Fps:</source>
        <translation>目标 Fps:</translation>
    </message>
</context>
<context>
    <name>chromashift</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/ADM_vidChromaShift.cpp" line="+35"/>
        <source>ChromaShift</source>
        <translation>色度偏移</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Shift chroma U/V to fix badly synced luma/chroma.</source>
        <translation>改变色度U/V来修复损坏的亮度/色度同步.</translation>
    </message>
</context>
<context>
    <name>chromashiftDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/qt4/chromashift.ui" line="+14"/>
        <source>ChromaShift</source>
        <translation>色度偏移</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>U Shift</source>
        <translation>U 偏移</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>V Shift</source>
        <translation>V 偏移</translation>
    </message>
</context>
<context>
    <name>colorBalance</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/ADM_vidColorBalance.cpp" line="+42"/>
        <source>Color balance</source>
        <translation>颜色平衡</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust shadow, midtone and highlight.</source>
        <translation>调整阴影,中色调和高光</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/Q_colorBalance.cpp" line="+52"/>
        <source>Peek Ranges</source>
        <translation>窥视(Peek)范围</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show shadow, midtone and highlight areas in black,gray and white colors</source>
        <translation>用黑色,灰色和白色显示阴影,中色调和高光区域</translation>
    </message>
</context>
<context>
    <name>colorBalanceDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="+20"/>
        <source>Color balance</source>
        <translation>颜色平衡</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Highlight</source>
        <translation>高光</translation>
    </message>
    <message>
        <location line="+63"/>
        <location line="+135"/>
        <location line="+109"/>
        <source>Saturation</source>
        <translation>饱和度</translation>
    </message>
    <message>
        <location line="-205"/>
        <location line="+109"/>
        <location line="+109"/>
        <source>Chroma shift</source>
        <translation>色度偏移</translation>
    </message>
    <message>
        <location line="-208"/>
        <source>Shadow</source>
        <translation>阴影</translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Midtone</source>
        <translation>中色调</translation>
    </message>
</context>
<context>
    <name>colorTemp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/ADM_vidColorTemp.cpp" line="+41"/>
        <source>Color temperature</source>
        <translation>色温</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust color temperature.</source>
        <translation>调整色温</translation>
    </message>
</context>
<context>
    <name>colorTempDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/qt4/colorTemp.ui" line="+14"/>
        <source>Color Temperature</source>
        <translation>色温</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Color temperature</source>
        <translation>色温</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Chroma shift angle</source>
        <translation>色度偏移角度</translation>
    </message>
</context>
<context>
    <name>coloryuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="+131"/>
        <source>U</source>
        <translation>U</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>V</source>
        <translation>V</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location line="-52"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Flags</source>
        <translation>标志(Flags)</translation>
    </message>
    <message>
        <location line="-47"/>
        <source>Levels:</source>
        <translation>级别:</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>PC-&gt;TV</source>
        <translation>PC-&gt;TV</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Color management filter.</source>
        <translation>颜色管理过滤器.</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>U gain</source>
        <translation>U 增益</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>V gain</source>
        <translation>V 增益</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>TV-&gt;PC</source>
        <translation>TV-&gt;PC</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Y gain</source>
        <translation>Y 增益</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>colorYuv</source>
        <translation>颜色Yuv</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>V Contrast</source>
        <translation>V 对比度</translation>
    </message>
    <message>
        <location line="-27"/>
        <source>Y Contrast</source>
        <translation>Y 对比度</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>U Contrast</source>
        <translation>U 对比度</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Y Brightness</source>
        <translation>Y 亮度</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>V Brightness</source>
        <translation>V 亮度</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>U Brightness</source>
        <translation>U 亮度</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>Clip to Tv Range (16-235)</source>
        <translation>剪切到TV范围 (16-235)</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Y Gamma</source>
        <translation>Y 伽马值</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>AutoWhite</source>
        <translation>自动白色</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AutoGain</source>
        <translation>自动增益</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Avisynth color filter.</source>
        <translation>Avisynth颜色过滤器.</translation>
    </message>
</context>
<context>
    <name>contrast</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/ADM_vidContrast.cpp" line="+34"/>
        <source>Adjust contrast, brightness and colors.</source>
        <translation>调整对比、亮度和色彩.</translation>
    </message>
    <message>
        <location line="-1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="+61"/>
        <location line="+78"/>
        <source>Contrast</source>
        <translation>对比度</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="-77"/>
        <location line="+78"/>
        <source>Brightness</source>
        <translation>亮度</translation>
    </message>
</context>
<context>
    <name>contrastDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="+132"/>
        <source>Luma</source>
        <translation>亮度</translation>
    </message>
    <message>
        <location line="-118"/>
        <location line="+30"/>
        <source>Contrast</source>
        <translation>对比度</translation>
    </message>
    <message>
        <source>Process</source>
        <translation type="vanished">序列</translation>
    </message>
    <message>
        <location line="+95"/>
        <source>MPEG2-&gt;PC</source>
        <translation>MPEG2-&gt;PC</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>ChromaU</source>
        <translation>色度U</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>ChromaV</source>
        <translation>色度V</translation>
    </message>
    <message>
        <location line="-94"/>
        <source>Contrast  </source>
        <translation>对比度</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>Brightness</source>
        <translation>亮度</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Brightness  </source>
        <translation>亮度  </translation>
    </message>
</context>
<context>
    <name>convolution</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/ADM_vidFastConvolution.cpp" line="+141"/>
        <source>Fast Convolution</source>
        <translation>快速卷积</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Process luma plane</source>
        <translation>处理亮度平面</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>_Process luma</source>
        <translation>处理亮度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>P_rocess chroma</source>
        <translation>处理色度</translation>
    </message>
</context>
<context>
    <name>crash</name>
    <message>
        <location filename="../../common/ADM_osSupport/ADM_crashHook.cpp" line="+84"/>
        <source>Load it</source>
        <translation>加载它</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Crash file</source>
        <translation>损坏文件</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>I have detected a crash file. 
Do you want to load it  ?
(It will be deleted in all cases, you should save it if you want to keep it)</source>
        <translation>检测到一个崩溃文件.
你想要加载它吗 ?
(这个文件一定会被删除的, 如果你想保留, 你应该保存它)</translation>
    </message>
</context>
<context>
    <name>crop</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/ADM_vidCrop.cpp" line="+58"/>
        <source>Crop</source>
        <translation>裁剪</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Crop filter</source>
        <translation>裁剪过滤器</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Warning Cropping too much width ! Width reseted !
</source>
        <translation>复位的宽度!剪切太多宽度的警告!
</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Warning Cropping too much height ! Height reseted !
</source>
        <translation>复位的宽度!剪切太多宽度的警告!
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/DIA_flyCrop.cpp" line="+555"/>
        <location line="+365"/>
        <source>Size: </source>
        <translation>尺寸: </translation>
    </message>
    <message>
        <location line="-244"/>
        <source>Auto Crop</source>
        <translation>自动裁剪</translation>
    </message>
</context>
<context>
    <name>cropDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+14"/>
        <source>Crop</source>
        <translation>裁剪</translation>
    </message>
    <message>
        <location line="+45"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+112"/>
        <source>Top:</source>
        <translation>上:</translation>
    </message>
    <message>
        <location line="+71"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="-74"/>
        <source>Left:</source>
        <translation>左:</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
    <message>
        <location line="-50"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+7"/>
        <source>Right:</source>
        <translation>右:</translation>
    </message>
    <message>
        <location line="+71"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+7"/>
        <source>Bottom:</source>
        <translation>下:</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Auto Crop</source>
        <translation>自动裁剪</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+177"/>
        <source>Size: </source>
        <translation>尺寸: </translation>
    </message>
    <message>
        <location line="-107"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>隐藏橡皮筋(&amp;H)</translation>
    </message>
    <message>
        <location line="+46"/>
        <location line="+4"/>
        <source>Do not lock</source>
        <translation>不要锁定</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Current selection</source>
        <translation>当前所选</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Source</source>
        <translation>源视频</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>21:9</source>
        <translation>21:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>18:9</source>
        <translation>18:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>16:9</source>
        <translation>16:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4:3</source>
        <translation>4:3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>9:16</source>
        <translation>9:16</translation>
    </message>
    <message>
        <location line="-130"/>
        <source>Lock Aspect Ratio:</source>
        <translation>锁定宽高比:</translation>
    </message>
</context>
<context>
    <name>cubicLUT</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="+50"/>
        <source>3D LUT</source>
        <translation>3D LUT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Apply cubic lookup table.</source>
        <translation>应用cubic查找表</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>Width must match height</source>
        <translation>宽度必须匹配高度</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+2"/>
        <source>Invalid resolution</source>
        <translation>分辨率不合法</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+72"/>
        <source>Invalid file size</source>
        <translation>文件尺寸错误</translation>
    </message>
    <message>
        <location line="-68"/>
        <location line="+72"/>
        <source>File open error</source>
        <translation>文件打开错误</translation>
    </message>
    <message>
        <location line="-68"/>
        <location line="+72"/>
        <source>File read error</source>
        <translation>文件读取错误</translation>
    </message>
    <message>
        <location line="-65"/>
        <source>Can&apos;t find decoder</source>
        <translation>找不到解码器</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Decoding error. Only 8-bit PNG files are supported.</source>
        <translation>解码错误,只支持8-bit PNG文件</translation>
    </message>
    <message>
        <location line="+26"/>
        <location line="+82"/>
        <source>Memory error</source>
        <translation>内存错误</translation>
    </message>
    <message>
        <location line="-12"/>
        <location line="+3"/>
        <location line="+6"/>
        <source>Malformed header</source>
        <translation>不正常的标头</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Incomplete file</source>
        <translation>文件不完整</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Invalid file</source>
        <translation>文件不合法</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="+112"/>
        <source>Load HaldCLUT</source>
        <translation>加载HaldCLUT</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Load Cube</source>
        <translation>加载Cube</translation>
    </message>
    <message>
        <location line="+29"/>
        <location line="+26"/>
        <source>Load failed</source>
        <translation>加载失败</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>LUT file is not specified!</source>
        <translation>未指定LUT文件!</translation>
    </message>
</context>
<context>
    <name>cubicLUTDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/cubicLUT.ui" line="+14"/>
        <source>3D LUT</source>
        <translation>3D LUT</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Mask</source>
        <translation>蒙版(Mask)</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Load HaldCLUT</source>
        <translation>加载HaldCLUT</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Load Cube</source>
        <translation>加载Cube</translation>
    </message>
</context>
<context>
    <name>dcaenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/dcaenc/audioencoder_dcaenc.cpp" line="+272"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>DcaEnc Configuration</source>
        <translation>DcaEnc 配置</translation>
    </message>
</context>
<context>
    <name>deband</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/ADM_vidDeband.cpp" line="+32"/>
        <source>Deband</source>
        <translation>去色带</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce banding artifacts.</source>
        <translation>消除色带效应.</translation>
    </message>
</context>
<context>
    <name>debandDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/qt4/deband.ui" line="+14"/>
        <source>Deband</source>
        <translation>去色带</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Chroma threshold</source>
        <translation>色度阈值</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Luma threshold</source>
        <translation>亮度阈值</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Range</source>
        <translation>范围</translation>
    </message>
</context>
<context>
    <name>decimate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="+92"/>
        <source>Sho_w</source>
        <translation>显示(_W)</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>Replace (interpolate)</source>
        <translation>取代 (插入)</translation>
    </message>
    <message>
        <location line="-18"/>
        <source>Donald Graft decimate. Remove duplicate after telecide.</source>
        <translation>唐纳德(Donald Graft)抽取, 在 telecide 后删除重复.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Decomb decimate</source>
        <translation>Decomb Decimate</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Decomb Decimate</source>
        <translation>Decomb Decimate</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Medium (full luma, no chroma)</source>
        <translation>中(全部的亮度,没有色度)</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Discard longer dupe (animés)</source>
        <translation>丢弃更长的蒙蔽 (animés)</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>T_hreshold 2:</source>
        <translation>阈值 2:</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Discard closer</source>
        <translation>丢弃较靠近的</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Fastest (no chroma, partial luma)</source>
        <translation>最快 (没有色度,部份的亮度)</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>C_ycle:</source>
        <translation>循环:</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>_Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Threshold 1:</source>
        <translation>阈值 1:</translation>
    </message>
    <message>
        <location line="-12"/>
        <source>Pulldown dupe removal</source>
        <translation>去除往下拉蒙蔽</translation>
    </message>
</context>
<context>
    <name>decimateFrame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimateFrame/ADM_vidDecimateFrame.cpp" line="+54"/>
        <location line="+34"/>
        <source>Decimate</source>
        <translation>去重(Decimate)</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>Drop duplicate frames.</source>
        <translation>丢弃重复的帧</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Normal mode</source>
        <translation>普通模式</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Evaluation mode</source>
        <translation>评估模式</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Evaluation mode makes possible to examine the video by printing duplicate metric, while omitting frame dropping.</source>
        <translation>评估模式可以通过打印重复的标记来检查视频, 与此同时省略帧丢弃的工作.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Parameters</source>
        <translation>参数</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate threshold:</source>
        <translation>重复(Duplicate)阈值:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Consecutive frame drop limit:</source>
        <translation>连续帧丢弃限制:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Note: this filter won&apos;t change the reported frame rate</source>
        <translation>提示:这个过滤器将改变据称的帧率</translation>
    </message>
</context>
<context>
    <name>delogo2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/ADM_vidMPdelogo.cpp" line="+41"/>
        <source>MPlayer delogo2</source>
        <translation>MPlayer delogo2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend a logo by interpolating its surrounding box.</source>
        <translation>利用logo的包围内框插值来混合一个logo.</translation>
    </message>
</context>
<context>
    <name>delogoHQ</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/ADM_vidDelogoHQ.cpp" line="+44"/>
        <source>DelogoHQ</source>
        <translation>DelogoHQ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clean up arbitrary shaped logo.</source>
        <translation>清除任意形状的logo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/DIA_flyDelogoHQ.cpp" line="+41"/>
        <source>The selected image has different width/height.</source>
        <translation>选择的图像有不同的宽度/高度</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Save failed!</source>
        <translation>保存失败!</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="+106"/>
        <source>Find a frame in the preview with the logo clearly visible and not blending into the background.</source>
        <translation>在预览中找到logo清晰可见,而且没有混入到背景当中的帧.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Save this frame as a PNG image.</source>
        <translation>保存此帧为PNG图像</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Use an appropriate image editor to paint the area of the logo of any shape white and everything else solid black.</source>
        <translation>使用一个合适的图像编辑器,把logo的形状涂成白色,其他的区域涂成黑色.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This black and white image will serve as a mask where white pixels correspond to the logo to be removed.</source>
        <translation>使用这副黑白图像作为蒙版, 它的白色像素对应的logo将被移除</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>If the logo has fully transparent areas, it is recommended to exclude them from the mask by making them black.</source>
        <translation>如果logo有全透明的区域, 建议从蒙版中设为黑色以排除.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Load the mask image.</source>
        <translation>加载蒙版图像</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Note: To remove multiple distant logos (e.g. opposite corners), using separate filter instances for each logo will be much faster.</source>
        <translation>提示:要移除多个隔开的logo(如对角线上的), 每个logo使用一个过滤器会比较快一些.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>How to use DelogoHQ</source>
        <translation>如何使用DelogoHQ</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Save selected frame...</source>
        <translation>保存所选的帧...</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Load mask</source>
        <translation>加载蒙版文件</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Load failed!</source>
        <translation>加载失败</translation>
    </message>
</context>
<context>
    <name>delogoHQDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="+14"/>
        <source>DelogoHQ</source>
        <translation>DelogoHQ</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Mask</source>
        <translation>蒙版(Mask)</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Save current frame...</source>
        <translation>保存当前帧...</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Load mask</source>
        <translation>加载蒙版文件</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Post-processing</source>
        <translation>后处理</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Blur</source>
        <translation>模糊</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Gradient</source>
        <translation>梯度(Gradient)</translation>
    </message>
</context>
<context>
    <name>dgbob</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="+68"/>
        <source>Top</source>
        <translation>顶部</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>_Extra artifact protection (may increase flickering, rarely needed)</source>
        <translation>额外伪像保护(可能导致增加闪烁,很少用到)</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>DGBob</source>
        <translation>DGBob</translation>
    </message>
    <message>
        <location line="-27"/>
        <source>dgbob</source>
        <translation>dgbob</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>_Top Field First:</source>
        <translation>顶场优先:</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Double nb of frames and fps</source>
        <translation>两倍帧和fps的数目</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Bottom</source>
        <translation>底部</translation>
    </message>
    <message>
        <source>Extra check, avoid using it</source>
        <translation type="vanished">额外检查, 避免正在使用它</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Double nb of frames (slow motion)</source>
        <translation>两倍帧的数量(慢运动)</translation>
    </message>
    <message>
        <source>_Extra</source>
        <translation type="vanished">额外</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Keep nb of frames and fps</source>
        <translation>保持帧和fps的数目</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Threshold:</source>
        <translation>阈值:</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Donald Graft Bob.</source>
        <translation>Donald Graft Bob.</translation>
    </message>
</context>
<context>
    <name>dummy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dummy/dummyVideoFilter.cpp" line="+44"/>
        <source>Dummy</source>
        <translation>哑巴(Dummy)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Null filter, it does nothing at all.</source>
        <translation>空过滤器,它啥也不做.</translation>
    </message>
</context>
<context>
    <name>dummyMuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerDummy/ADM_dummy.cpp" line="+28"/>
        <source>Simulated muxing</source>
        <translation>模拟多路复合</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>(None)</source>
        <translation>(无)</translation>
    </message>
</context>
<context>
    <name>dv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffDv/ADM_ffDv.cpp" line="+79"/>
        <source>DV only supports 720*576*25fps and 720*480*29.97fps</source>
        <translation>DV 只支持 720*576*25fps 和 720*480*29.97fps</translation>
    </message>
</context>
<context>
    <name>encodingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="+515"/>
        <location line="+31"/>
        <location line="+60"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="-436"/>
        <source>Low</source>
        <translation>低</translation>
    </message>
    <message>
        <location line="+271"/>
        <location line="+7"/>
        <location line="+14"/>
        <source>0 MB</source>
        <translation>0 MB</translation>
    </message>
    <message>
        <location line="-312"/>
        <source>High</source>
        <translation>高</translation>
    </message>
    <message>
        <location line="-108"/>
        <source>Main</source>
        <translation>主要</translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+299"/>
        <location line="+21"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="-278"/>
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
        <location line="+238"/>
        <source>Audio Codec:</source>
        <translation>音频编解码器:</translation>
    </message>
    <message>
        <location line="-217"/>
        <source>Priority:</source>
        <translation>优先级:</translation>
    </message>
    <message>
        <location line="+316"/>
        <source>Video Size:</source>
        <translation>视频尺寸:</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Audio Size:</source>
        <translation>音频尺寸:</translation>
    </message>
    <message>
        <location line="-272"/>
        <source>Above Normal</source>
        <translation>高于正常</translation>
    </message>
    <message>
        <location line="+229"/>
        <source>Video Codec:</source>
        <translation>视频编解码器:</translation>
    </message>
    <message>
        <location line="+141"/>
        <source>Processed Frames:</source>
        <translation>已处理的帧:</translation>
    </message>
    <message>
        <location line="-360"/>
        <source>Below Normal</source>
        <translation>低于正常</translation>
    </message>
    <message>
        <location line="+424"/>
        <source>Elapsed:</source>
        <translation>已过时间:</translation>
    </message>
    <message>
        <location line="-50"/>
        <source>0 kB/s</source>
        <translation>0 kB/s</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location line="-515"/>
        <source>Time Remaining:</source>
        <translation>剩余时间:</translation>
    </message>
    <message>
        <location line="+79"/>
        <source>Normal</source>
        <translation>普通</translation>
    </message>
    <message>
        <location line="-103"/>
        <source>Phase:</source>
        <translation>阶段:</translation>
    </message>
    <message>
        <location line="+475"/>
        <source>Quantiser:</source>
        <translation>量化:</translation>
    </message>
    <message>
        <source>Shut down computer when finished</source>
        <translation type="vanished">完成后关闭计算机</translation>
    </message>
    <message>
        <location line="-269"/>
        <source>Pause / Abort</source>
        <translation>暂停 / 停止</translation>
    </message>
    <message>
        <location line="+245"/>
        <source>Average Bitrate:</source>
        <translation>平均比特率:</translation>
    </message>
    <message>
        <location line="-131"/>
        <source>Container:</source>
        <translation>容器:</translation>
    </message>
    <message>
        <location line="-351"/>
        <source>Encoding...</source>
        <translation>编码中...</translation>
    </message>
    <message>
        <source>Keep dialog open when finished</source>
        <translation type="vanished">结束后保持对话框打开状态</translation>
    </message>
    <message>
        <location line="+156"/>
        <source>Delete first pass log files</source>
        <translation>删除第一遍的日志文件</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Output File:</source>
        <translation>输出文件:</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Minimize to Tray</source>
        <translation>最小化到工具栏上</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <location line="+337"/>
        <source>Frames/sec:</source>
        <translation>帧/秒:</translation>
    </message>
    <message>
        <location line="-539"/>
        <location line="+289"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location line="+71"/>
        <source>Total Size:</source>
        <translation>总尺寸:</translation>
    </message>
</context>
<context>
    <name>eq2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/Q_eq2.cpp" line="+63"/>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/ADM_vidEq2.cpp" line="+45"/>
        <source>Adjust contrast, brightness, saturation and gamma.</source>
        <translation>调整对比度, 亮度, 饱和度和伽马值.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>MPlayer eq2</source>
        <translation>MPlayer eq2</translation>
    </message>
</context>
<context>
    <name>eq2Dialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="+246"/>
        <source>Red</source>
        <translation>红</translation>
    </message>
    <message>
        <location line="-39"/>
        <source>Blue</source>
        <translation>蓝</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Green</source>
        <translation>绿</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Initial</source>
        <translation>初始</translation>
    </message>
    <message>
        <location line="-69"/>
        <source>Weight</source>
        <translation>加重</translation>
    </message>
    <message>
        <location line="-170"/>
        <location line="+31"/>
        <source>Contrast</source>
        <translation>对比度</translation>
    </message>
    <message>
        <location line="+77"/>
        <source>&lt;b&gt;Gamma&lt;/b&gt;</source>
        <translation>&lt;b&gt;伽马值&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Saturation</source>
        <translation>饱和度</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Brightness</source>
        <translation>亮度</translation>
    </message>
</context>
<context>
    <name>faac</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/faac/audioencoder_faac.cpp" line="+292"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Faac Configuration</source>
        <translation>Faac 配置</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="+6"/>
        <source>Opus Configuration</source>
        <translation>Opus 配置</translation>
    </message>
</context>
<context>
    <name>fadeFromImage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/ADM_vidFadeFromImage.cpp" line="+38"/>
        <source>Fade from first image</source>
        <translation>从首画面渐入</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use image at start time for fading.</source>
        <translation>从开始时间的画面淡入</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="+83"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>结束时间:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation>手动设置时间入口</translation>
    </message>
    <message>
        <location line="+65"/>
        <location line="+19"/>
        <source>Time scope: </source>
        <translation>时间范围: </translation>
    </message>
    <message>
        <location line="-16"/>
        <location line="+22"/>
        <source>Duration: </source>
        <translation>时长: </translation>
    </message>
</context>
<context>
    <name>fadeFromImageDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="+14"/>
        <source>Fade from first image</source>
        <translation>从首画面渐入</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation>时间范围: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation>时长: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation>手动设置时间入口</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation>用A-B标记设定</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Effect:</source>
        <translation>效果:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Linear blend</source>
        <translation>线性混合</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Slide</source>
        <translation>滑动(Slide)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Wipe</source>
        <translation>消除(Wipe)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Push</source>
        <translation>推动(Push)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Luma dissolve</source>
        <translation>亮度溶解</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Inverse luma dissolve</source>
        <translation>反向亮度溶解</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Static random dissolve</source>
        <translation>静态随机溶解</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Dynamic random dissolve</source>
        <translation>动态随机溶解</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Up</source>
        <translation>上</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Right</source>
        <translation>右</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Down</source>
        <translation>下</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Left</source>
        <translation>左</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Start preview play before time scope, if you see green.</source>
        <translation>如果你看到绿屏则在时间范围前开始预览播放</translation>
    </message>
</context>
<context>
    <name>fadeInOut</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeIn.cpp" line="+24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+42"/>
        <source>Fade in</source>
        <translation>淡入</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade in from color.</source>
        <translation>颜色淡入.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeOut.cpp" line="+24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+2"/>
        <source>Fade out</source>
        <translation>淡出</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade out to color.</source>
        <translation>颜色淡出.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+43"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>结束时间:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation>手动设置时间入口</translation>
    </message>
    <message>
        <location line="+88"/>
        <location line="+29"/>
        <source>Time scope: </source>
        <translation>时间范围: </translation>
    </message>
    <message>
        <location line="-26"/>
        <location line="+32"/>
        <source>Duration: </source>
        <translation>时长: </translation>
    </message>
</context>
<context>
    <name>fadeInOutDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="+14"/>
        <source>Fade in/out</source>
        <translation>淡入/淡出</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation>时间范围: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation>时长: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation>手动设置时间入口</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation>用A-B标记设定</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Pick color:</source>
        <translation>颜色选取:</translation>
    </message>
</context>
<context>
    <name>fadeThrough</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeThrough.cpp" line="+32"/>
        <source>Fade through</source>
        <translation>渐变进出</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade through combination of multiple effects.</source>
        <translation>多个特效组合的渐变进出</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="+163"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>结束时间:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation>手动设置时间入口</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Not possible!
Start and/or end time would be out of range</source>
        <translation>不允许!
开始和/或结束时间将要超出范围</translation>
    </message>
    <message>
        <location line="+159"/>
        <location line="+182"/>
        <source>Time scope: </source>
        <translation>时间范围: </translation>
    </message>
    <message>
        <location line="-179"/>
        <location line="+192"/>
        <source>Duration: </source>
        <translation>时长: </translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Center: </source>
        <translation>中心: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeIn.cpp" line="+32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="-504"/>
        <source>Fade in</source>
        <translation>淡入</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade in from combination of multiple effects.</source>
        <translation>多特效组合淡入</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeOut.cpp" line="+32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="+2"/>
        <source>Fade out</source>
        <translation>淡出</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade out to combination of multiple effects.</source>
        <translation>多特效组合淡出</translation>
    </message>
</context>
<context>
    <name>fadeThroughDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="+20"/>
        <source>Fade through</source>
        <translation>渐变进出</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation>时间范围: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Center: </source>
        <translation>中心: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation>时长: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation>手动设置时间入口</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation>用A-B标记设定</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set center as A marker, duration is 2×|A-B|</source>
        <translation>把中心设为A标记, 时长是2×|A-B|</translation>
    </message>
    <message>
        <location line="+34"/>
        <location line="+19"/>
        <source>Brightness</source>
        <translation>亮度</translation>
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
        <translation>启用</translation>
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
        <translation>过渡曲线</translation>
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
        <translation>升余弦</translation>
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
        <translation>斜线</translation>
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
        <translation>平方</translation>
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
        <translation>反平方</translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+257"/>
        <location line="+200"/>
        <source>Exponential</source>
        <translation>指数</translation>
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
        <translation>时长</translation>
    </message>
    <message>
        <location line="-880"/>
        <location line="+19"/>
        <source>Saturation</source>
        <translation>饱和度</translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Color blend</source>
        <translation>颜色混合</translation>
    </message>
    <message>
        <location line="+31"/>
        <location line="+582"/>
        <source>Pick color</source>
        <translation>颜色选取</translation>
    </message>
    <message>
        <location line="-516"/>
        <source>Peak amount</source>
        <translation>峰值</translation>
    </message>
    <message>
        <location line="+103"/>
        <source>Blur</source>
        <translation>模糊</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Blur radius</source>
        <translation>模糊半径</translation>
    </message>
    <message>
        <location line="+106"/>
        <source>Rotate</source>
        <translation>旋转</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Peak angle</source>
        <translation>角度峰值</translation>
    </message>
    <message>
        <location line="+107"/>
        <source>Zoom</source>
        <translation>缩放</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Peak zoom</source>
        <translation>缩放峰值</translation>
    </message>
    <message>
        <location line="+112"/>
        <source>Vignette</source>
        <translation>晕影</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Peak opening</source>
        <translation>开量(opening)峰值</translation>
    </message>
</context>
<context>
    <name>fadeTo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="+59"/>
        <location line="+23"/>
        <source>Fade</source>
        <translation>淡化</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Fade.</source>
        <translation>淡化.</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>From</source>
        <translation>从</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade from the first picture into movie</source>
        <translation>从第一幅图片渐淡进入影片</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>To</source>
        <translation>到</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade from movie to the first picture</source>
        <translation>从影片渐淡到第一幅图片</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Fade direction:</source>
        <translation>渐淡方向</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>结束时间:</translation>
    </message>
</context>
<context>
    <name>fadeToBlack</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="+66"/>
        <source>In</source>
        <translation>淡入</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Out</source>
        <translation>淡出</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>结束时间:</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>_Fade type:</source>
        <translation>渐淡型式:</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Fade out</source>
        <translation>淡出</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade in</source>
        <translation>淡入</translation>
    </message>
    <message>
        <location line="-11"/>
        <location line="+20"/>
        <source>Fade to black</source>
        <translation>淡出到黑屏</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Fade to black in/out.</source>
        <translation>淡入/淡出到黑屏.</translation>
    </message>
</context>
<context>
    <name>ffVAEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="+345"/>
        <source>Baseline</source>
        <translation>Baseline</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Main</source>
        <translation>Main</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High</source>
        <translation>High</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Constant Rate Factor</source>
        <translation>固定速率系数</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Bitrate</source>
        <translation>固定比特率(CBR)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Variable Bitrate</source>
        <translation>可变比特率</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Profile:</source>
        <translation>配置文件:</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+3"/>
        <source>Rate Control:</source>
        <translation>速率控制:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>GOP Size:</source>
        <translation>GOP 尺寸:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>最大连续B-帧数:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>比特率(kbps):</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Max Bitrate (kbps):</source>
        <translation>最大比特率(kbps):</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>帧控制</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>FFmpeg VA-API H.264 Encoder Configuration</source>
        <translation>FFmpeg VA-API H.264 编码器配置</translation>
    </message>
</context>
<context>
    <name>ffVAEncHEVC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="+353"/>
        <source>GOP Size:</source>
        <translation>GOP 尺寸:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>最大连续B-帧数:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Bitrate (kbps):</source>
        <translation>比特率(kbps):</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Max Bitrate (kbps):</source>
        <translation>最大比特率(kbps):</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Constant Rate Factor</source>
        <translation>固定速率系数</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Bitrate</source>
        <translation>固定比特率(CBR)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Variable Bitrate</source>
        <translation>可变比特率</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+3"/>
        <source>Rate Control:</source>
        <translation>速率控制:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>帧控制</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>FFmpeg VA-API HEVC Encoder Configuration</source>
        <translation>FFmpeg VA-API HEVC 编码器配置</translation>
    </message>
</context>
<context>
    <name>ffmpeg2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="+284"/>
        <source>Three threads</source>
        <translation>三个线程</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>KVCD</source>
        <translation>KVCD</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>_Trellis quantization</source>
        <translation>棚架量化</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Max. quantizer _difference:</source>
        <translation>最大量化差异:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBV Buffer Size:</source>
        <translation>VBV 缓冲容量:</translation>
    </message>
    <message>
        <location line="-29"/>
        <source>Rate distortion</source>
        <translation>速率失真</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>文件尺寸容许误差(kb):</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Field Order:</source>
        <translation>扫描场顺序:</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Quantizer _blur:</source>
        <translation>量化模糊:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>Gop 尺寸:</translation>
    </message>
    <message>
        <location line="-43"/>
        <source>Auto (#cpu)</source>
        <translation>自动 (#cpu)</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Wide (16:9)</source>
        <translation>宽 (16:9)</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Top Field First</source>
        <translation>顶场优先</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Basic Settings</source>
        <translation>基本设定</translation>
    </message>
    <message>
        <location line="-65"/>
        <source>Animes</source>
        <translation>动画</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Mi_n. quantizer:</source>
        <translation>最小量化:</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Quantization</source>
        <translation>量化</translation>
    </message>
    <message>
        <location line="-41"/>
        <source>Max bitrate (kb/s):</source>
        <translation>最大比特率(kb/s):</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>libavcodec MPEG-2 configuration</source>
        <translation>libavcodec MPEG-2 配置</translation>
    </message>
    <message>
        <location line="-76"/>
        <source>One thread</source>
        <translation>一个线程</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>MB comparison</source>
        <translation>MB 比较</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Progressive</source>
        <translation>渐进的</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Threading</source>
        <translation>线程</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>_Number of B frames:</source>
        <translation>B帧数量:</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Interlacing</source>
        <translation>交错</translation>
    </message>
    <message>
        <location line="-62"/>
        <source>Two threads</source>
        <translation>两个线程</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Default</source>
        <translation>默认值</translation>
    </message>
    <message>
        <location line="+71"/>
        <source>Adv. Settings</source>
        <translation>高级设定</translation>
    </message>
    <message>
        <location line="-70"/>
        <source>Tmpgenc</source>
        <translation>Tmpgenc</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Normal (4:3)</source>
        <translation>正常 (4:3)</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Matrices:</source>
        <translation>矩阵:</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>_Macroblock decision:</source>
        <translation>宏块决定:</translation>
    </message>
    <message>
        <location line="-27"/>
        <source>Interlaced</source>
        <translation>隔行扫描</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Bottom Field First</source>
        <translation>底场优先</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="-49"/>
        <source>Ma_x. quantizer:</source>
        <translation>最大量化:</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Fewest bits (vhq)</source>
        <translation>最少比特(vhq)</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Aspect ratio:</source>
        <translation>宽高比:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>_Interlaced:</source>
        <translation>交错:</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>_Quantizer compression:</source>
        <translation>量化压缩:</translation>
    </message>
</context>
<context>
    <name>ffmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="+210"/>
        <source>Three threads</source>
        <translation>三个线程</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>4_MV</source>
        <translation>4MV</translation>
    </message>
    <message>
        <location line="-27"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>_Trellis quantization</source>
        <translation>棚架量化</translation>
    </message>
    <message>
        <location line="-29"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Max. quantizer _difference:</source>
        <translation>最大量化差异:</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Rate distortion</source>
        <translation>速率失真</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>文件尺寸容许误差(kb):</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Quantizer _blur:</source>
        <translation>量化模糊:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>Gop 尺寸:</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>Auto (#cpu)</source>
        <translation>自动 (#cpu)</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>User Interface</source>
        <translation>用户接口</translation>
    </message>
    <message>
        <location line="-25"/>
        <source>Mi_n. quantizer:</source>
        <translation>最小量化:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>_Quantization type:</source>
        <translation>量化型式:</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Quantization</source>
        <translation>量化</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation>libavcodec MPEG-4 配置</translation>
    </message>
    <message>
        <location line="-60"/>
        <source>One thread</source>
        <translation>一个线程</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>MB comparison</source>
        <translation>MB 比较</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Threading</source>
        <translation>线程</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>_Number of B frames:</source>
        <translation>B帧数量:</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Two threads</source>
        <translation>两个线程</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Motion Estimation</source>
        <translation>运动估计</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Advanced Simple Profile</source>
        <translation>高级简单配置文件(ASP)</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>_Macroblock decision:</source>
        <translation>宏块决定:</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>_Quarter pixel</source>
        <translation>1/4像素</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>Ma_x. quantizer:</source>
        <translation>最大量化:</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Fewest bits (vhq)</source>
        <translation>最少比特(vhq)</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>_Quantizer compression:</source>
        <translation>量化压缩:</translation>
    </message>
</context>
<context>
    <name>ffmsmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="+229"/>
        <source>X1</source>
        <translation>X1</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Log</source>
        <translation>Log</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>EPZS</source>
        <translation>EPZS</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Full</source>
        <translation>全部</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>_Trellis quantization</source>
        <translation>棚架量化</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Phods</source>
        <translation>Phods</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Max. quantizer _difference:</source>
        <translation>最大量化差异:</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Rate distortion</source>
        <translation>速率失真</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>文件尺寸容许误差(kb):</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Quantizer _blur:</source>
        <translation>量化模糊:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>Gop 尺寸:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>User Interface</source>
        <translation>用户接口</translation>
    </message>
    <message>
        <location line="-12"/>
        <source>Mi_n. quantizer:</source>
        <translation>最小量化:</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Quantization</source>
        <translation>量化</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation>libavcodec MPEG-4 配置</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>MB comparison</source>
        <translation>MB 比较</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Ma_x. quantizer:</source>
        <translation>最大量化:</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Fewest bits (vhq)</source>
        <translation>最少比特(vhq)</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>_Quantizer compression:</source>
        <translation>量化压缩:</translation>
    </message>
</context>
<context>
    <name>ffnvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="+356"/>
        <source>Low Latency</source>
        <translation>低延迟</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>BluRay</source>
        <translation>蓝光BluRay</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Controlled by Preset</source>
        <translation>用预设控制</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Constant Bitrate</source>
        <translation>固定比特率(CBR)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Variable Bitrate</source>
        <translation>可变比特率</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Baseline</source>
        <translation>Baseline</translation>
    </message>
    <message>
        <location line="-3"/>
        <location line="+4"/>
        <source>Main</source>
        <translation>Main</translation>
    </message>
    <message>
        <location line="-26"/>
        <source>Constant Quantizer</source>
        <translation>固定量化</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Default</source>
        <translation>默认值</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Slow</source>
        <translation>低</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium</source>
        <translation>中</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fast</source>
        <translation>快速</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High Performance</source>
        <translation>高性能</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Low Latency (HP)</source>
        <translation>低延时 (HP)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Lossless</source>
        <translation>无损</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lossless (HP)</source>
        <translation>无损 (HP)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Main10</source>
        <translation>Main10</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>High</source>
        <translation>高</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Autoselect</source>
        <translation>自动选择</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5</source>
        <translation>5</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>6</source>
        <translation>6</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Each</source>
        <translation>每一个</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Middle</source>
        <translation>中</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>RC Mode:</source>
        <translation>RC模式:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Profile:</source>
        <translation>配置文件:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use B-Frames as References:</source>
        <translation>使用B-帧作为参考:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Reference Frames:</source>
        <translation>最大参考帧数:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>比特率(kbps):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation>最大比特率(kbps):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lookahead:</source>
        <translation>前视:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AQ Strength:</source>
        <translation>AQ 强度</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Spatial AQ</source>
        <translation>空域(Spatial) AQ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Temporal AQ</source>
        <translation>时域(Temporal) AQ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weighted Prediction</source>
        <translation>加权预测</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Even with HEVC encoding support present, lossless presets and B-frames may be unavailable with older hardware</source>
        <translation>即使提供HEVC编码支持,无损预设在旧一些的硬件上也许会不可用</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Even with H.264 encoding support present, lossless presets may be unavailable with older hardware</source>
        <translation>即使提供H264编码支持，无损预设在旧一些的硬件上也许会不可用</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Lookahead and Adaptive Quantization may be unavailable with older hardware</source>
        <translation>前视和自适应量化在旧一些的硬件上也许会不可用</translation>
    </message>
    <message>
        <location line="-25"/>
        <source>Preset:</source>
        <translation>预设:</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>GOP Size:</source>
        <translation>GOP 尺寸:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>最大连续B-帧数:</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Weighted prediction is incompatible with B-frames</source>
        <translation>加权预测与B-帧不兼容</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>帧控制</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>References</source>
        <translation>参考</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Basic Settings</source>
        <translation>基本设定</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Advanced Settings</source>
        <translation>高级设定</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>NVENC H.264 configuration</source>
        <translation>NVENC H.264 配置</translation>
    </message>
    <message>
        <source>Low Quality</source>
        <translation type="vanished">低品质</translation>
    </message>
    <message>
        <location line="-132"/>
        <source>High Quality</source>
        <translation>高品质</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Low Latency (HQ)</source>
        <translation>低延迟 (HQ)</translation>
    </message>
    <message>
        <source>Low Latency (LQ)</source>
        <translation type="vanished">低延迟 (LQ)</translation>
    </message>
    <message>
        <location line="+126"/>
        <source>NVENC HEVC configuration</source>
        <translation>NVENC HEVC 配置</translation>
    </message>
</context>
<context>
    <name>ffpsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="+54"/>
        <source>Free</source>
        <translation>自由</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Muxing Format</source>
        <translation>复合格式</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Mpeg PS Muxer</source>
        <translation>Mpeg PS 复合器</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="+212"/>
        <source> video not compatible
</source>
        <translation> 视频不相容
</translation>
    </message>
    <message>
        <location line="+38"/>
        <source> VCD : only MP2 audio accepted
</source>
        <translation> VCD : 只接受 MP2 音频
</translation>
    </message>
    <message>
        <location line="-23"/>
        <source> Bad width/height for SVCD
</source>
        <translation> 不对的宽度/高度为 SVCD
</translation>
    </message>
    <message>
        <location line="-60"/>
        <source>Saving mpeg PS (ff)</source>
        <translation>保存mpeg PS (ff)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="-17"/>
        <source>Allow non compliant stream</source>
        <translation>允许不兼容的流</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>VBV size (kBytes)</source>
        <translation>VBV 尺寸 (kBytes)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="+95"/>
        <source> DVD : only 48 khz audio accepted
</source>
        <translation> DVD : 只接受48 khz音频
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>[ffPS] DVD : only MP2/AC3/DTS audio accepted
</source>
        <translation>[ffPS] DVD : 只接受MP2/AC3/DTS音频
</translation>
    </message>
    <message>
        <location line="-204"/>
        <source>[Mismatch]</source>
        <translation>[Mismatch]</translation>
    </message>
    <message>
        <location line="+169"/>
        <source> Bad width/height for DVD
</source>
        <translation>DVD的宽度/高度设定不正确
</translation>
    </message>
    <message>
        <location line="-12"/>
        <source> Bad width/height for VCD
</source>
        <translation>VCD的宽度/高度设定不正确
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="+1"/>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Video Muxrate (kbits)</source>
        <translation>视频复合率 (kbits)</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Total Muxrate (kbits)</source>
        <translation>总复合率 (kbits)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="+34"/>
        <source> VCD : only 44.1 khz audio accepted
</source>
        <translation> VCD : 只接受44.1 khz音频
</translation>
    </message>
</context>
<context>
    <name>fftsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTSConfig.cpp" line="+36"/>
        <source>TS Muxer</source>
        <translation>TS 复合器</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Mux rate (MBits/s)</source>
        <translation>复合率 (MBits/s)</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>M2TS mode</source>
        <translation>M2TS模式</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBR muxing</source>
        <translation>VBR 复合</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTS.cpp" line="+71"/>
        <source>Video track is incompatible</source>
        <translation>视频轨道不兼容</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Audio track %d out of %u is incompatible</source>
        <translation>音频轨道 %d 在 %u 之外是不兼容的</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Audio track %d out of %u is incompatible with M2TS mode</source>
        <translation>M2TS模式下,音频轨道 %d 在 %u 之外是不兼容的</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Only MPEG-1/2, VC-1, H264 and HEVC supported for video</source>
        <translation>只支持MPEG-1/2, VC-1, H264和HEVC格式的视频</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Only AC3, E-AC3, DTS and TrueHD supported for audio</source>
        <translation>只支持AC3, E-AC3, DTS和TrueHD格式的音频</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Only MP2, MP3, AC3, E-AC3, DTS, AAC and TrueHD supported for audio</source>
        <translation>只支持MP2, MP3, AC3, E-AC3, DTS, AAC和TrueHD格式的音频</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Unsupported</source>
        <translation>尚未支持</translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Saving mpeg TS (ff)</source>
        <translation>保存 mpeg TS (ff)</translation>
    </message>
</context>
<context>
    <name>ffv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="+139"/>
        <source>Golomb-Rice</source>
        <translation>Golomb-Rice</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Range Coder</source>
        <translation>范围编码器</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Small</source>
        <translation>小</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Large</source>
        <translation>大</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Coder:</source>
        <translation>编码器:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Context:</source>
        <translation>框架(Context):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threads:</source>
        <translation>线程数:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Error correction/detection</source>
        <translation>校正/检测错误</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>FFV1 Configuration</source>
        <translation>FFV1配置</translation>
    </message>
</context>
<context>
    <name>ffvtenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="+197"/>
        <source>Baseline</source>
        <translation>Baseline</translation>
    </message>
    <message>
        <location line="-3"/>
        <location line="+4"/>
        <source>Main</source>
        <translation>Main</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Main10</source>
        <translation>Main10</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>High</source>
        <translation>High</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Profile:</source>
        <translation>配置文件:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>GOP Size:</source>
        <translation>GOP 尺寸:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Allow B-frames</source>
        <translation>允许B-帧</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>On some Macs, disabling B-frames is not possible</source>
        <translation>在某些Mac系统上,不能禁止B-帧</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Bitrate (kbps):</source>
        <translation>比特率(kbps):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation>最大比特率(kbps):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>帧控制</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>VideoToolbox HEVC Encoder Configuration</source>
        <translation>VideoToolbox HEVC 编码器配置</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>VideoToolbox H.264 Encoder Configuration</source>
        <translation>VideoToolbox H.264 编码器配置</translation>
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
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="+215"/>
        <source>Cannot write the file</source>
        <translation>无法写入文件</translation>
    </message>
    <message>
        <location line="-52"/>
        <source>%s already exists.

Do you want to replace it?</source>
        <translation>%s 已存在.

你要取代它吗?</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation>无法打开 &quot;%s&quot;.</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>File error</source>
        <translation>文件错误</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>No write access to &quot;%s&quot;.</source>
        <translation>没有任何写入运动存取到 &quot;%s&quot;.</translation>
    </message>
    <message>
        <location line="-25"/>
        <location line="+14"/>
        <source>It is possible that you are trying to overwrite an input file!</source>
        <translation>你可能尝试覆写一个输入文件!</translation>
    </message>
</context>
<context>
    <name>fitToSize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/ADM_vidFitToSize.cpp" line="+58"/>
        <source>Fit to size</source>
        <translation>适合尺寸</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize and pad to the specified size.</source>
        <translation>调整尺寸并填塞到指定的尺寸</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/Q_fitToSize.cpp" line="+75"/>
        <location line="+153"/>
        <source>Preferences</source>
        <translation>偏好设定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation>新过滤器的默认设定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation>调整尺寸方式:</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+19"/>
        <source>Most recently accepted</source>
        <translation>最近使用的</translation>
    </message>
    <message>
        <location line="-18"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos</source>
        <translation>Lanczos算法</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation>样条(Spline)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearest Neighbor</source>
        <translation>最近邻</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Padding type:</source>
        <translation>填充类型:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Black Bars</source>
        <translation>黑条</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation>回显(Echo)</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Width and height cannot be odd</source>
        <translation>宽度和高度不能为奇数</translation>
    </message>
</context>
<context>
    <name>fitToSizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="+14"/>
        <source>Fit to size</source>
        <translation>适合尺寸</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Output settings</source>
        <translation>输出设定</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Width:</source>
        <translation>宽度:</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Height:</source>
        <translation>高度:</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>No rounding</source>
        <translation>无舍入(原尺寸)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation>舍入到被16整除的值</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>舍入到被8整除的值</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>舍入到被4整除的值</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Resize Method:</source>
        <translation>调整尺寸方式:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3算法</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation>样条(Spline)</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Aspect ratio tolerance</source>
        <translation>宽高比容许误差</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>0%</source>
        <translation>0%</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Percent</source>
        <translation>百分比</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>100%</source>
        <translation>100%</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Padding</source>
        <translation>填充</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>black bars</source>
        <translation>黑条</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>echo</source>
        <translation>回显(echo)</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Details</source>
        <translation>详情</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Current input dimensions:</source>
        <translation>当前输入尺寸:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Resized to:</source>
        <translation>调整尺寸到:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Required padding:</source>
        <translation>需要填充:</translation>
    </message>
</context>
<context>
    <name>flip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/ADM_vidFlip.cpp" line="+36"/>
        <source>Flip</source>
        <translation>翻转</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Vertically/Horizontally flip the image.</source>
        <translation>垂直/水平翻转图片</translation>
    </message>
</context>
<context>
    <name>flipDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/qt4/flip.ui" line="+14"/>
        <source>Flip</source>
        <translation>翻转</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Horizontal flip</source>
        <translation>水平翻转</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical flip</source>
        <translation>垂直翻转</translation>
    </message>
</context>
<context>
    <name>flux</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="+38"/>
        <source>Spatio-temporal cleaner by Ross Thomas.</source>
        <translation>空域-时域清理器, 作者 Ross Thomas.</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>_Temporal threshold:</source>
        <translation>时域阈值:</translation>
    </message>
    <message>
        <location line="-51"/>
        <location line="+56"/>
        <source>FluxSmooth</source>
        <translation>时空平滑(FluxSmooth)</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>_Spatial threshold:</source>
        <translation>空域阈值:</translation>
    </message>
</context>
<context>
    <name>flv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="+163"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>_Trellis quantization</source>
        <translation>棚架量化</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Max. quantizer _difference:</source>
        <translation>最大量化差异:</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Rate distortion</source>
        <translation>速率失真</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>文件尺寸容许误差(kb):</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Quantizer _blur:</source>
        <translation>量化模糊:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>Gop 尺寸:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>User Interface</source>
        <translation>用户接口</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Mi_n. quantizer:</source>
        <translation>最小量化:</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Quantization</source>
        <translation>量化</translation>
    </message>
    <message>
        <location line="-31"/>
        <source>MB comparison</source>
        <translation>MB 比较</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>Ma_x. quantizer:</source>
        <translation>最大量化:</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>libavcodec FLV1 configuration</source>
        <translation>libavcodec FLV1 配置</translation>
    </message>
    <message>
        <location line="-38"/>
        <source>Fewest bits (vhq)</source>
        <translation>最少比特(vhq)</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>_Quantizer compression:</source>
        <translation>量化压缩:</translation>
    </message>
</context>
<context>
    <name>flvdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Flv/ADM_flv.cpp" line="+622"/>
        <source>This FLV file says it has no video.
I will assume it has and try to continue</source>
        <translation>这个 FLV 文件说它有没有视频.我将假设已并尝试继续</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
</context>
<context>
    <name>flvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="+68"/>
        <location line="+10"/>
        <location line="+6"/>
        <source>Unsupported</source>
        <translation>尚未支持</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Only FLV1 &amp; VP6 supported for video</source>
        <translation>只支援 FLV1 &amp; VP6 视频编码</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Only 44.1, 22.050 and 11.025 kHz supported</source>
        <translation>仅 44.1, 22.050和 11.025 kHz 支援</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Only AAC &amp; mpegaudio supported for audio</source>
        <translation>仅 AAC &amp; mpeg 音频支援</translation>
    </message>
</context>
<context>
    <name>gaussian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Gauss.cpp" line="+27"/>
        <source>3x3 convolution filter :gaussian.</source>
        <translation>3x3卷积过滤器 :高斯(gaussian).</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Gaussian convolution.</source>
        <translation>高斯卷积.</translation>
    </message>
</context>
<context>
    <name>glBenchmark</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glBenchmark/benchGl.cpp" line="+61"/>
        <source>OpenGl ReadBack benchmark</source>
        <translation>OpenGl读出基准</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Check how fast readback is.</source>
        <translation>检查读出速度有多快.</translation>
    </message>
</context>
<context>
    <name>glFragment</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment/sampleGl.cpp" line="+69"/>
        <source>Run a fragment shader.</source>
        <translation>执行片段着色器.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation>OpenGl片段着色器样例</translation>
    </message>
</context>
<context>
    <name>glFragment2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment2/sampleGl.cpp" line="+67"/>
        <source>Run a fragment shader.</source>
        <translation>执行片段着色器.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>OpenGl Fragment Shader Sample2</source>
        <translation>OpenGl片段着色器样例2</translation>
    </message>
</context>
<context>
    <name>glResize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="+218"/>
        <source>glResize</source>
        <translation>调整尺寸(glResize)</translation>
    </message>
    <message>
        <location line="-152"/>
        <source>OpenGl Resize</source>
        <translation>OpenGl重设尺寸</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize using openGl.</source>
        <translation>使用OpenGl重设视频尺寸.</translation>
    </message>
    <message>
        <location line="+147"/>
        <source>Height :</source>
        <translation>高度 :</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Width :</source>
        <translation>宽度 :</translation>
    </message>
</context>
<context>
    <name>glRotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glRotate/rotateGl.cpp" line="+181"/>
        <source>glRotate</source>
        <translation>旋转</translation>
    </message>
    <message>
        <location line="-124"/>
        <source>OpenGl Rotate</source>
        <translation>OpenGl旋转</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rotate image by a small amount.</source>
        <translation>小角度旋转图像.</translation>
    </message>
    <message>
        <location line="+118"/>
        <source>Angle (°):</source>
        <translation>角度 (°):</translation>
    </message>
</context>
<context>
    <name>glSample</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glGlyphy/glGlyphy.cpp" line="+69"/>
        <source>Run a fragment shader.</source>
        <translation>执行片段着色器.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation>OpenGl片段着色器样例</translation>
    </message>
</context>
<context>
    <name>glShader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="+15"/>
        <source>ShaderLoader</source>
        <translation>加载OpenGl着色器</translation>
    </message>
    <message>
        <location line="-196"/>
        <source>Run an external shader program.</source>
        <translation>执行外部着色器程序.</translation>
    </message>
    <message>
        <location line="+192"/>
        <source>ShaderFile to load</source>
        <translation>要加载的着色器文件</translation>
    </message>
    <message>
        <location line="-193"/>
        <source>Shader Loader</source>
        <translation>着色器加载器</translation>
    </message>
</context>
<context>
    <name>glSmooth</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glSmooth/glSmooth.cpp" line="+61"/>
        <source>OpenGl Smooth</source>
        <translation>OpenGl光滑</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Smooth image while preserving edge.</source>
        <translation>同时保留边缘平滑的图像.</translation>
    </message>
</context>
<context>
    <name>glVdpaufilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="+276"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>_Deint Mode:</source>
        <translation>去交错(Deint)模式:</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>_Resize:</source>
        <translation>调整尺寸:</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Keep Top Field</source>
        <translation>保持顶场</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep Bottom Field</source>
        <translation>保持底场</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Height :</source>
        <translation>高度 :</translation>
    </message>
    <message>
        <location line="-187"/>
        <source>VDPAU deinterlacer+resize, openGl version (faster).</source>
        <translation>VDPAU去交错+调整尺寸, openGl 版本 (更快).</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>vdpauDeintGl</source>
        <translation>vdpauDeintGl</translation>
    </message>
    <message>
        <location line="+187"/>
        <source>Width :</source>
        <translation>宽度 :</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Double framerate</source>
        <translation>双倍帧率</translation>
    </message>
</context>
<context>
    <name>glVertex</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_vertex/sampleGl.cpp" line="+60"/>
        <source>Run a simple vertex shader.</source>
        <translation>执行一个简单的顶点着色器.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>OpenGl Vertex Shader</source>
        <translation>OpenGl顶点着色器</translation>
    </message>
</context>
<context>
    <name>glWave</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_distort/sampleGl.cpp" line="+60"/>
        <source>Simple wave filter.</source>
        <translation>简单波纹效果过滤器.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>OpenGl wave </source>
        <translation>OpenGl波纹</translation>
    </message>
</context>
<context>
    <name>glYadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="+275"/>
        <source>yadif</source>
        <translation>yadif</translation>
    </message>
    <message>
        <location line="-197"/>
        <source>Yet another deinterlacer, using shaders.</source>
        <translation>使用着色器的Yadif去交错器.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Yadif (openGl)</source>
        <translation>Yadif (openGl)</translation>
    </message>
    <message>
        <location line="+190"/>
        <source>Top field first</source>
        <translation>顶场优先</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Order:</source>
        <translation>顺序:</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>Temporal &amp; spatial check</source>
        <translation>时域&amp;空域检查</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bob, temporal &amp; spatial check</source>
        <translation>上下急动, 时域&amp;空域检查</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Bob, skip spatial temporal check</source>
        <translation>上下急动, 略过时域空域检查</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Skip spatial temporal check</source>
        <translation>略过时域空域检查</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Bottom field first</source>
        <translation>底场优先</translation>
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
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/horizontalFlip/horizontalFlip.cpp" line="+45"/>
        <source>Horizontally flip the image.</source>
        <translation>水平翻转图像.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Horizontal Flip</source>
        <translation>水平翻转</translation>
    </message>
</context>
<context>
    <name>histogram</name>
    <message>
        <source>Bitrate Histogram</source>
        <translation type="vanished">比特率分布图</translation>
    </message>
    <message>
        <source>Max. bitrate:</source>
        <translation type="vanished">最大比特率:</translation>
    </message>
    <message>
        <source>No data</source>
        <translation type="vanished">没有数据</translation>
    </message>
    <message>
        <source>Max. B frames:</source>
        <translation type="vanished">最大B帧数:</translation>
    </message>
    <message>
        <source>Average bitrate:</source>
        <translation type="vanished">平均比特率:</translation>
    </message>
    <message>
        <source>Number of P frames:</source>
        <translation type="vanished">P 帧数:</translation>
    </message>
    <message>
        <source>Number of B frames:</source>
        <translation type="vanished">B 帧数:</translation>
    </message>
    <message>
        <source>Number of I frames:</source>
        <translation type="vanished">I 帧数:</translation>
    </message>
</context>
<context>
    <name>hue</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/ADM_vidHue.cpp" line="+37"/>
        <source>Adjust hue and saturation.</source>
        <translation>调整色相和饱和度.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Mplayer Hue</source>
        <translation>Mplayer Hue</translation>
    </message>
</context>
<context>
    <name>hueDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/qt4/hue.ui" line="+14"/>
        <location line="+25"/>
        <source>Hue</source>
        <translation>色相</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Saturation</source>
        <translation>饱和度</translation>
    </message>
</context>
<context>
    <name>huff</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/huff/ADM_huffEncoder.cpp" line="+112"/>
        <source>Type:</source>
        <translation>型:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>HuffYUV Configuration</source>
        <translation>HuffYUV配置</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>HUFFYUV</source>
        <translation>HUFFYUV</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FF HUFFYUV</source>
        <translation>FF HUFFYUV</translation>
    </message>
</context>
<context>
    <name>hzstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/hzStackField.cpp" line="+52"/>
        <source>Horizontal Stack Fields</source>
        <translation>场水平堆叠</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put fields side by side.</source>
        <translation>场水平并排.</translation>
    </message>
</context>
<context>
    <name>imageStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/ADM_vidImageStab.cpp" line="+41"/>
        <source>Image stabilizer</source>
        <translation>图像稳定器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce camera shakiness.</source>
        <translation>减少相机震动</translation>
    </message>
</context>
<context>
    <name>imageStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="+14"/>
        <source>Image stabilizer</source>
        <translation>图像稳定器</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Smoothing</source>
        <translation>平滑</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Gravity</source>
        <translation>重力</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Interpolation</source>
        <translation>插值</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Motion estimation</source>
        <translation>运动估计</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>accurate</source>
        <translation>精确</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>fast</source>
        <translation>快速</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Padding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Auto Gravity</source>
        <translation>自动重力</translation>
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
        <source>Scene threshold</source>
        <translation type="vanished">场景阈值</translation>
    </message>
    <message>
        <location line="-88"/>
        <source>Zoom</source>
        <translation>缩放</translation>
    </message>
</context>
<context>
    <name>indexing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="+17"/>
        <source>Do you want to abort indexing ?</source>
        <translation>你想要中止索引吗?</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Continue indexing</source>
        <translation>继续编制索引</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Time Left :%02d:%02d:%02d</source>
        <translation>剩余时间 :%02d:%02d:%02d</translation>
    </message>
    <message>
        <location line="-76"/>
        <source>Abort Requested</source>
        <translation>请求中止</translation>
    </message>
</context>
<context>
    <name>ivtcRemover</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="+141"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+431"/>
        <source>Fast</source>
        <translation>快速</translation>
    </message>
    <message>
        <location line="-1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="-1"/>
        <source>Full</source>
        <translation>全部</translation>
    </message>
    <message>
        <location line="-5"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="-4"/>
        <source>_Noise:</source>
        <translation>噪声:</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+1"/>
        <source>_Show:</source>
        <translation>显示:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Remove duplicate:</source>
        <translation>删除重复:</translation>
    </message>
    <message>
        <location line="+11"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+11"/>
        <source>DupeRemover</source>
        <translation>删除重复帧</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="-347"/>
        <source>Remove IVTC dupe.</source>
        <translation>删除IVTC重复帧.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="-6"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+341"/>
        <source>VeryFast</source>
        <translation>非常快</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+3"/>
        <source>_Frame rate change:</source>
        <translation>帧率改变:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="-343"/>
        <source>Remove the duplicate frames present after ivtc.</source>
        <translation>在ivtc之后删除重复帧.</translation>
    </message>
</context>
<context>
    <name>jobs</name>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="+36"/>
        <source>Oops</source>
        <translation>Oops</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="+71"/>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="+182"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>Delete already executed jobs</source>
        <translation>删除已经执行的作业</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Avidemux Jobs</source>
        <translation>Avidemux作业</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>use Qt version</source>
        <translation>使用Qt版本</translation>
    </message>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="+5"/>
        <source>There are no jobs stored</source>
        <translation>没有存储任何作业</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="-10"/>
        <source>Cleanup</source>
        <translation>清理</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>Run jobs</source>
        <translation>执行作业</translation>
    </message>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="-5"/>
        <source>Something very wrong happened when building joblist.</source>
        <translation>创建作业列表(joblist)时发生某些重大错误.</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="+17"/>
        <source>If you use VDPAU you cannot use CLI version</source>
        <translation>如果你使用VDPAU则你不能使用CLI版本</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Run all pending jobs</source>
        <translation>运行所有挂起的作业</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="-121"/>
        <source>Job</source>
        <translation>作业</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Output</source>
        <translation>输出</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start Time</source>
        <translation>开始时间</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>End Time</source>
        <translation>结束时间</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Duration</source>
        <translation>时长</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Ready</source>
        <translation>已准备好</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Running....</source>
        <translation>运行中...</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Success</source>
        <translation>成功</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed</source>
        <translation>已失败</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>???</source>
        <translation>???</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run Now</source>
        <translation>立即运行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force Status to success</source>
        <translation>强制设定状态为已成功</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force Status to ready</source>
        <translation>强制设定状态为已准备好</translation>
    </message>
</context>
<context>
    <name>jobsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="+13"/>
        <source>Jobs</source>
        <translation>作业</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Delete All Jobs</source>
        <translation>删除所有作业</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run All Jobs</source>
        <translation>执行所有作业</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Delete Sel. Job</source>
        <translation>删除选择的作业</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Run Selected Job</source>
        <translation>执行选择的作业</translation>
    </message>
</context>
<context>
    <name>jpeg</name>
    <message>
        <source>_ColorSpace:</source>
        <translation type="vanished">色彩空间:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="+104"/>
        <source>Mjpeg Configuration</source>
        <translation>Mjpeg 配置</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>_Quantizer:</source>
        <translation>量化:</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>YUV420</source>
        <translation>YUV420</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Pixel format:</source>
        <translation>像素格式:</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>YUV422</source>
        <translation>YUV422</translation>
    </message>
</context>
<context>
    <name>kerneldeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="+65"/>
        <source>Top</source>
        <translation>顶部</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>_Map</source>
        <translation>地图(Map)</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Extrapolate better (better not to use it)</source>
        <translation>推算较好的 (最好不使用它)</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Smaller means more deinterlacing</source>
        <translation>更小的值表示更多的去交错</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Bottom</source>
        <translation>底部</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>_Sharper engine:</source>
        <translation>清晰化引擎:</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Kernel Deint.</source>
        <translation>核心去交错(KernelDeint).</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Port of Donald Graft Kernel Deinterlacer.</source>
        <translation>移植于唐纳德(Donald Graft)的核心去交错器.</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>_Sharp</source>
        <translation>锐化</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>_Field order:</source>
        <translation>区域顺序:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>T_woway</source>
        <translation>双向</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>KernelDeint</source>
        <translation>核心去交错(KernelDeint)</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>_Threshold:</source>
        <translation>阈值:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Show interlaced areas (for test!)</source>
        <translation>显示交错的范围(测试用!)</translation>
    </message>
</context>
<context>
    <name>lame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="+311"/>
        <source>ABR</source>
        <translation>ABR</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>CBR</source>
        <translation>CBR</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>LAME Configuration</source>
        <translation>LAME 配置</translation>
    </message>
    <message>
        <location line="-26"/>
        <source>Bit_rate mode:</source>
        <translation>比特率模式:</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>_Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Disable reservoir</source>
        <translation>禁用贮存(reservoir):</translation>
    </message>
</context>
<context>
    <name>largemedian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="+36"/>
        <source>Large Median (5x5).</source>
        <translation>中值滤波(大) (5x5).</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Fast Convolution</source>
        <translation>快速卷积</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Process luma plane</source>
        <translation>处理亮度平面</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>_Process luma</source>
        <translation>处理亮度</translation>
    </message>
    <message>
        <location line="-34"/>
        <source>Median filter on 5x5 matrix.</source>
        <translation>使用5x5矩阵的中值滤波.</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>P_rocess chroma</source>
        <translation>处理色度</translation>
    </message>
</context>
<context>
    <name>lavcodec</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lavcodec/audioencoder_lavcodec.cpp" line="+470"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
</context>
<context>
    <name>lavdecoder</name>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/DIA_lavDecoder.cpp" line="+23"/>
        <source>_Swap U and V</source>
        <translation>交换U和V</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Decoder Options</source>
        <translation>解码器选项</translation>
    </message>
</context>
<context>
    <name>lavdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="+188"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="-116"/>
        <source>Lavcodec deinterlacer family.</source>
        <translation>Lavcodec 去交错器族.</translation>
    </message>
    <message>
        <location line="+117"/>
        <source>Linear blend</source>
        <translation>线性混合</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>libavcodec deinterlacer</source>
        <translation>libavcodec 去交错器</translation>
    </message>
    <message>
        <location line="-12"/>
        <source>Linear interpolate</source>
        <translation>线性插值</translation>
    </message>
    <message>
        <location line="-119"/>
        <source>Libavdec Deinterlacers</source>
        <translation>libavcodec 去交错器</translation>
    </message>
    <message>
        <location line="+127"/>
        <source>_Autolevel</source>
        <translation>自动级别</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Median interpolate</source>
        <translation>中位插值</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Cubic interpolate</source>
        <translation>立方插值</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>FFmpeg deint</source>
        <translation>FFmpeg 去交错</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Deinterlacing:</source>
        <translation>去交错:</translation>
    </message>
</context>
<context>
    <name>licenseDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/license.ui" line="+62"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location line="-46"/>
        <source>License</source>
        <translation>授权</translation>
    </message>
</context>
<context>
    <name>logo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/ADM_vidLogo.cpp" line="+24"/>
        <source>Put a logo on top of video, with alpha blending.</source>
        <translation>在视频顶部放置Logo, 使用alpha混合.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Add logo</source>
        <translation>添加logo</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/Q_logo.cpp" line="+67"/>
        <source>Image:</source>
        <translation>图像:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>No image selected</source>
        <translation>没有选择图像</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Select Logo Image</source>
        <translation>选择Logo图像</translation>
    </message>
    <message>
        <location line="+70"/>
        <source> s</source>
        <translation> 秒</translation>
    </message>
</context>
<context>
    <name>logoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="+60"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location line="-63"/>
        <source>Logo</source>
        <translation>Logo标志</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Select Image...</source>
        <translation>选择图像...</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>No image selected</source>
        <translation>没有选择图像</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Scaling</source>
        <translation>伸缩</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Alpha</source>
        <translation>Alpha透明</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="vanished">图像</translation>
    </message>
    <message>
        <source>Select</source>
        <translation type="vanished">选择</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Fade-in/out</source>
        <translation>淡入/淡出</translation>
    </message>
    <message>
        <source>You can click in the image to approximately position the logo</source>
        <translation type="vanished">您可以在图像上单击来大体设定logo的位置</translation>
    </message>
</context>
<context>
    <name>lumaStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/ADM_vidLumaStab.cpp" line="+41"/>
        <source>Luma stabilizer</source>
        <translation>亮度稳定器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce flickering.</source>
        <translation>减少闪烁</translation>
    </message>
</context>
<context>
    <name>lumaStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="+14"/>
        <source>Luma stabilizer</source>
        <translation>亮度稳定器</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Filter length</source>
        <translation>过滤器长度</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Scene threshold</source>
        <translation>场景阈值</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>frames</source>
        <translation>帧</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Adjust chroma</source>
        <translation>调整色度</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Adjust target</source>
        <translation>调整目标</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Prefer contrast</source>
        <translation>对比度偏好</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Prefer brightness</source>
        <translation>亮度偏好</translation>
    </message>
</context>
<context>
    <name>lumaonly</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaOnly/lumaOnly.cpp" line="+44"/>
        <source>GreyScale</source>
        <translation>灰度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove color, only key grey image.</source>
        <translation>消除颜色,只保留关键灰色图像.</translation>
    </message>
</context>
<context>
    <name>mainFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="+144"/>
        <source>Noise</source>
        <translation>噪声</translation>
    </message>
    <message>
        <location line="+95"/>
        <source>&lt;big&gt;&lt;b&gt;Active Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;选用的过滤器&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location line="+92"/>
        <source>&amp;Close</source>
        <translation>关闭(&amp;C)</translation>
    </message>
    <message>
        <location line="-311"/>
        <source>Video Filter Manager</source>
        <translation>视频过滤管理器</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Transition</source>
        <translation>转换</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Colors</source>
        <translation>色彩</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>OpenGl</source>
        <translation>OpenGl</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Artistic</source>
        <translation>艺术</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location line="+111"/>
        <source>Press Ctrl + Enter to accept the dialog</source>
        <translation>按下Ctrl + Enter来同意对话框.</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>&amp;Preview</source>
        <translation>预览(&amp;P)</translation>
    </message>
    <message>
        <location line="-212"/>
        <source>Transform</source>
        <translation>变形</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Sharpness</source>
        <translation>锐化</translation>
    </message>
    <message>
        <location line="-27"/>
        <source>Interlacing</source>
        <translation>交错</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Subtitles</source>
        <translation>字幕</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;可用的过滤器&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
</context>
<context>
    <name>matroskademuxer</name>
    <message>
        <source>Matroska clusters</source>
        <translation type="vanished">Matroska 集群</translation>
    </message>
    <message>
        <source>Matroska Images</source>
        <translation type="vanished">Matroska 图像</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Matroska/ADM_mkvIndexer.cpp" line="+654"/>
        <source>Indexing Matroska Video Track</source>
        <translation>对Matroska视频轨道索引中</translation>
    </message>
</context>
<context>
    <name>mcdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="+120"/>
        <source>Fast</source>
        <translation>快速</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>_Qp:</source>
        <translation>Qp:</translation>
    </message>
    <message>
        <location line="-47"/>
        <source>MCDeint</source>
        <translation>MC去交错</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Extra slow (same as 3+multiple reference frames)</source>
        <translation>特别慢 (同于3倍+的参考帧数)</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Slow iterative motion search</source>
        <translation>缓慢反复的运动搜索</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Medium</source>
        <translation>中</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom :</source>
        <translation>底部 :</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>mcDeinterlace</source>
        <translation>mc去交错(mcDeinterlace)</translation>
    </message>
    <message>
        <location line="-50"/>
        <source>Motion compensation deinterlacer. Ported from MPlayer.</source>
        <translation>运动补偿去交错器.移植于MPlayer.</translation>
    </message>
</context>
<context>
    <name>mean</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Mean.cpp" line="+27"/>
        <source>Mean convolution.</source>
        <translation>平均(Mean)卷积</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :mean.</source>
        <translation>3x3卷积过滤器 :平均(mean).</translation>
    </message>
</context>
<context>
    <name>median</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Median.cpp" line="+29"/>
        <source>3x3 convolution filter :median.</source>
        <translation>3x3卷积过滤器 :中值(median).</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Median convolution.</source>
        <translation>中值卷积.</translation>
    </message>
</context>
<context>
    <name>mergeFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidMergeField.cpp" line="+52"/>
        <source>Merge Fields</source>
        <translation>合并场</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Merge two pictures as if they were two fields.</source>
        <translation>按照两场合并两幅图片.</translation>
    </message>
</context>
<context>
    <name>mkvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkv.cpp" line="+84"/>
        <source>Unsupported Video.
Only VP8/VP9/AV1 video and Vorbis/Opus audio supported</source>
        <translation>不支持的视频格式.
只支持VP8/VP9/AV1视频格式和Vorbis/Opus音频格式</translation>
    </message>
    <message>
        <location line="+147"/>
        <source>Saving WebM</source>
        <translation>正在保存WebM</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Saving Mkv</source>
        <translation>正在保存Mkv</translation>
    </message>
    <message>
        <source>Display width</source>
        <translation type="vanished">显示宽度</translation>
    </message>
    <message>
        <source>Force display width</source>
        <translation type="vanished">强制显示宽度</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="+33"/>
        <source>Derived from display width</source>
        <translation>来源于显示宽度</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>0: sRGB</source>
        <translation>0: sRGB</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>1: ITU-R BT.709</source>
        <translation>1: ITU-R BT.709</translation>
    </message>
    <message>
        <location line="-42"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>2: Unspecified</source>
        <translation>2: 未指定</translation>
    </message>
    <message>
        <location line="-42"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>3: Reserved</source>
        <translation>3: 保留</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>4: US FCC 73.682</source>
        <translation>4: US FCC 73.682</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: ITU-R BT.470BG</source>
        <translation>5: ITU-R BT.470BG</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+22"/>
        <source>6: SMPTE 170M</source>
        <translation>6: SMPTE 170M</translation>
    </message>
    <message>
        <location line="-21"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>7: SMPTE 240M</source>
        <translation>7: SMPTE 240M</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>8: YCoCg</source>
        <translation>8: YCoCg</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: BT2020 Non-constant Luminance</source>
        <translation>9: BT2020 非固定亮度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: BT2020 Constant Luminance</source>
        <translation>10: BT2020固定亮度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: SMPTE ST 2085</source>
        <translation>11: SMPTE ST 2085</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: Chroma-derived Non-constant Luminance</source>
        <translation>12: 色度派生的非固定亮度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>13: Chroma-derived Constant Luminance</source>
        <translation>13: 色度派生的固定亮度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>14: ITU-R BT.2100-0</source>
        <translation>14: ITU-R BT.2100-0</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>0: Unspecified</source>
        <translation>0: 未指定</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1: Limited</source>
        <translation>1: 有限的(Limited)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2: Full</source>
        <translation>2: 完全的(Full)</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+21"/>
        <source>0: Reserved</source>
        <translation>0: 保留</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>4: Gamma 2.2 curve - BT.470M</source>
        <translation>4: Gamma 2.2 curve - BT.470M</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: Gamma 2.8 curve - BT.470BG</source>
        <translation>5: Gamma 2.8 curve - BT.470BG</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>8: Linear</source>
        <translation>8: 线性</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: Logarithmic (100:1 range)</source>
        <translation>9: Logarithmic (100:1 范围)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: Logarithmic (100 * Sqrt(10) : 1 range)</source>
        <translation>10: Logarithmic (100 * Sqrt(10) : 1 范围)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: IEC 61966-2-4</source>
        <translation>11: IEC 61966-2-4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: ITU-R BT.1361 Extended Colour Gamut</source>
        <translation>12: ITU-R BT.1361 扩展颜色范围(Extended Colour Gamut)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>13: IEC 61966-2-1</source>
        <translation>13: IEC 61966-2-1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>14: ITU-R BT.2020 10 bit</source>
        <translation>14: ITU-R BT.2020 10 bit</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>15: ITU-R BT.2020 12 bit</source>
        <translation>15: ITU-R BT.2020 12 比特</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>16: ITU-R BT.2100 Perceptual Quantization</source>
        <translation>16: ITU-R BT.2100 知觉量化(Perceptual Quantization)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>17: SMPTE ST 428-1</source>
        <translation>17: SMPTE ST 428-1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>18: ARIB STD-B67 (HLG)</source>
        <translation>18: ARIB STD-B67 (HLG)</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>4: ITU-R BT.470M</source>
        <translation>4: ITU-R BT.470M</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: ITU-R BT.470BG - BT.601 625</source>
        <translation>5: ITU-R BT.470BG - BT.601 625</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>6: ITU-R BT.601 525 - SMPTE 170M</source>
        <translation>6: ITU-R BT.601 525 - SMPTE 170M</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>8: Film</source>
        <translation>8: 电影</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: ITU-R BT.2020</source>
        <translation>9: ITU-R BT.2020</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: SMPTE ST 428-1</source>
        <translation>10: SMPTE ST 428-1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: SMPTE RP 431-2</source>
        <translation>11: SMPTE RP 431-2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: SMPTE EG 432-2</source>
        <translation>12: SMPTE EG 432-2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>22: JEDEC P22 phosphors</source>
        <translation>22: JEDEC P22 磷光质(phosphors)</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Force aspect ratio</source>
        <translation>强制宽高比</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display width:</source>
        <translation>显示宽度:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Aspect Ratio (DAR):</source>
        <translation>宽高比(DAR):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Add color info</source>
        <translation>添加颜色信息</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Matrix Coefficients:</source>
        <translation>矩阵系数:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Range:</source>
        <translation>范围:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Transfer Characteristic:</source>
        <translation>转换特性:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Color Primaries:</source>
        <translation>颜色主选:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Basic Settings</source>
        <translation>基本设定</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Advanced Settings</source>
        <translation>高级设定</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>WebM Muxer</source>
        <translation>WebM复合器</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MKV Muxer</source>
        <translation>MKV复合器</translation>
    </message>
</context>
<context>
    <name>mp3d</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="+237"/>
        <source>T_emporal chroma strength:</source>
        <translation>时域色度强度:</translation>
    </message>
    <message>
        <location line="-35"/>
        <source>Reduce noise, smooth image, increase compressibility. HQ Version.</source>
        <translation>降低噪声、平滑图像、增加可压缩性,HQ的版本.</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>S_patial chroma strength:</source>
        <translation>空域色度强度:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Temporal luma strength:</source>
        <translation>时域亮度强度:</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>_Spatial luma strength:</source>
        <translation>空域亮度强度:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>MPlayer Denoise 3D HQ</source>
        <translation>MPlayer Denoise 3D HQ</translation>
    </message>
    <message>
        <location line="-40"/>
        <source>Mplayer Denoise 3D HQ</source>
        <translation>MPlayer Denoise 3D HQ</translation>
    </message>
</context>
<context>
    <name>mp3dlow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="+70"/>
        <source>S_patial chroma strength:</source>
        <translation>空域色度强度:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Temporal strength:</source>
        <translation>时域强度:</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>_Spatial luma strength:</source>
        <translation>空域亮度强度:</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>Mplayer Denoise 3D</source>
        <translation>MPlayer时空去噪声3D</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce noise, smooth image, increase compressibility.</source>
        <translation>减少噪声、平滑图像、增加压缩率.</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>MPlayer Denoise 3D</source>
        <translation>MPlayer时空去噪声3D</translation>
    </message>
</context>
<context>
    <name>mp4demuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4Analyzer.cpp" line="+1145"/>
        <source>Problem reading SVQ3 headers</source>
        <translation>读取 SVQ3 文件头时发生问题</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4.cpp" line="+522"/>
        <location line="+111"/>
        <source>Decoding frame type</source>
        <translation>解码帧类型</translation>
    </message>
</context>
<context>
    <name>mp4muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="+38"/>
        <source>Muxing Format</source>
        <translation>复合格式</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+6"/>
        <source>No optimization</source>
        <translation>无优化</translation>
    </message>
    <message>
        <location line="-5"/>
        <location line="+6"/>
        <source>Move index to the beginning of the file</source>
        <translation>移动索引到文件开始处</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Use fragmentation</source>
        <translation>使用分片器(fragmentation)</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Optimize for Streaming</source>
        <translation>为流式格式优化</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force aspect ratio</source>
        <translation>强制宽高比</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Derived from display width</source>
        <translation>来源于显示宽度</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Aspect Ratio (DAR)</source>
        <translation>宽高比 (DAR)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display Width</source>
        <translation>显示宽度</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Do not rotate</source>
        <translation>不要旋转</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90°</source>
        <translation>90°</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180°</source>
        <translation>180°</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>270°</source>
        <translation>270°</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rotate video</source>
        <translation>旋转视频</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto</source>
        <translation>自动</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>24 kHz</source>
        <translation>24 kHz</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25 kHz</source>
        <translation>25 kHz</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>30 kHz</source>
        <translation>30 kHz</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 kHz</source>
        <translation>50 kHz</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>60 kHz</source>
        <translation>60 kHz</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90 kHz</source>
        <translation>90 kHz</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180 kHz</source>
        <translation>180 kHz</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Time scale</source>
        <translation>时间尺度缩放</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>MOV Muxer</source>
        <translation>MOV复合器</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="+108"/>
        <source>Video track is incompatible</source>
        <translation>视频轨道不兼容</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Audio track %d out of %u is incompatible</source>
        <translation>音频轨道 %d 在 %u 之外是不兼容的</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Only MPEG-4, H264, H265, AV1, DNxHD and ProRes supported for video</source>
        <translation>只支持MPEG-4, H264, H265, AV1, DNxHD和ProRes格式的视频</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Only MPEG-1/2/4, H264, H265 and AV1 supported for video</source>
        <translation>只支持MPEG-1/2/4, H264, H265和AV1格式的视频</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Only AAC, AC3, DTS, E-AC3, (L)PCM, MP2, MP3 and Vorbis supported for audio</source>
        <translation>只支持AAC, AC3, DTS, E-AC3, (L)PCM, MP2, MP3和Vorbis格式的音频</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Only AAC, AC3, DTS, E-AC3, MP2, MP3 and Vorbis supported for audio</source>
        <translation>只支持AAC, AC3, DTS, E-AC3, MP2, MP3和Vorbis格式的音频</translation>
    </message>
    <message>
        <location line="+218"/>
        <source>Saving PSP</source>
        <translation>正在保存 PSP</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Saving mov</source>
        <translation>正在保存mov</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Optimizing...</source>
        <translation>优化...</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Saving mp4</source>
        <translation>正在保存mp4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="-3"/>
        <source>MP4 Muxer</source>
        <translation>MP4复合器</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="-212"/>
        <source>Unsupported</source>
        <translation>尚未支持</translation>
    </message>
</context>
<context>
    <name>mp4v2muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="+181"/>
        <source>Audio</source>
        <translation>音频</translation>
    </message>
    <message>
        <location line="+60"/>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Optimizing</source>
        <translation>优化中</translation>
    </message>
    <message>
        <location line="-121"/>
        <source>Audio format not supported, only AAC/MP3/AC3</source>
        <translation>音频格式不支持,只支持AAC/MP3/AC3格式</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="+133"/>
        <source>Cannot get AAC Extra data
</source>
        <translation>不能获取 AAC 额外数据
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="+46"/>
        <source>Saving</source>
        <translation>正在保存</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Video does not have enough timing information. Are you copying from AVI?</source>
        <translation>视频没有足够的时间信息.你将从 AVI 复制吗?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="-61"/>
        <source>Invalid bitrate for AC3</source>
        <translation>不正确的AC3比特率</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Invalid frequency for AC3. Only 32, 44.1 &amp; 48 kHz</source>
        <translation>无效的AC3频率, 只接受 32, 44.1 &amp; 48 kHz</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="+65"/>
        <source>Cannot rename file (optimize)</source>
        <translation>无法重命名文件(优化)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="+32"/>
        <source>Invalid number of channels for AC3</source>
        <translation>AC3音频的通道数无效</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Config.cpp" line="+31"/>
        <source>Optimize for streaming (SLOW)</source>
        <translation>为流式播放优化(慢)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Add ipod metadata</source>
        <translation>增加 ipod 元数据</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MP4V2 Settings</source>
        <translation>MP4V2 设定</translation>
    </message>
</context>
<context>
    <name>mpdelogoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="+22"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+26"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+37"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location line="+23"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="-17"/>
        <source>Width</source>
        <translation>宽度</translation>
    </message>
    <message>
        <location line="+40"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="-7"/>
        <source>Border Width</source>
        <translation>边框宽度</translation>
    </message>
    <message>
        <location line="-91"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="-25"/>
        <source>Mplayer Delogo</source>
        <translation>Mplayer Delogo</translation>
    </message>
    <message>
        <location line="+71"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+39"/>
        <source>Height</source>
        <translation>高度</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Preview. Click in the image above to coarsly set the box coordinates</source>
        <translation>预览. 您可以在图像上单击来粗略设定盒子坐标</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+60"/>
        <source>Preview</source>
        <translation>预览</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/DIA_flyMpDelogo.cpp" line="+461"/>
        <source>You can resize the red rectangle using the grips </source>
        <translation>你可以使用把手来重设红色矩形的尺寸 </translation>
    </message>
</context>
<context>
    <name>msharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/ADM_vidMSharpen.cpp" line="+48"/>
        <source>Msharpen</source>
        <translation>运动锐化(Msharpen)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sharpen edges without amplifying noise. By Donald Graft.</source>
        <translation>不放大噪声的情况下的边缘锐化. 作者 Donald Graft.</translation>
    </message>
</context>
<context>
    <name>msharpenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="+73"/>
        <source>Mask</source>
        <translation>蒙版(Mask)</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Threshold</source>
        <translation>阈值</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>HighQuality</source>
        <translation>高品质</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Process chroma</source>
        <translation>处理色度</translation>
    </message>
    <message>
        <location line="-31"/>
        <source>MSharpen</source>
        <translation>运动锐化(Msharpen)</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Strength</source>
        <translation>强度</translation>
    </message>
</context>
<context>
    <name>navigate</name>
    <message>
        <location filename="../../common/gui_navigate.cpp" line="+852"/>
        <source>Seek</source>
        <translation>寻求</translation>
    </message>
    <message>
        <location line="+91"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location line="-495"/>
        <source>Cannot go to previous keyframe</source>
        <translation>转到上一关键帧</translation>
    </message>
    <message>
        <location line="-91"/>
        <source>Cannot go to next frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Cannot go to next keyframe</source>
        <translation>转到下一关键帧</translation>
    </message>
    <message>
        <location line="+94"/>
        <source>Cannot go to previous frame</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>negative</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="+46"/>
        <source>Negative</source>
        <translation>底片</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert Y,U or V plane</source>
        <translation>反转Y,U和V平面</translation>
    </message>
    <message>
        <location line="+112"/>
        <source>Invert Y Plane</source>
        <translation>反转Y平面</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process luma plane</source>
        <translation>处理亮度平面</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert U Plane</source>
        <translation>反转U平面</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaU plane</source>
        <translation>处理色度U平面</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert V Plane</source>
        <translation>反转V平面</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaV plane</source>
        <translation>处理色度V平面</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Invert plane</source>
        <translation>反转平面</translation>
    </message>
</context>
<context>
    <name>nvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="+154"/>
        <source>Nvidia H264 Encoder configuration</source>
        <translation>Nvidia H264 编码器配置</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Low Latency</source>
        <translation>低延迟</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>BluRay</source>
        <translation>蓝光BluRay</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Bitrate (kbps):</source>
        <translation>比特率(kbps):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation>最大比特率(kbps):</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Preset:</source>
        <translation>预设:</translation>
    </message>
    <message>
        <location line="-12"/>
        <source>Low Quality</source>
        <translation>低品质</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High Quality</source>
        <translation>高品质</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Low Latency (HQ)</source>
        <translation>低延迟 (HQ)</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Low Latency (LQ)</source>
        <translation>低延迟 (LQ)</translation>
    </message>
</context>
<context>
    <name>opendmldemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDML.cpp" line="+342"/>
        <location line="+76"/>
        <location line="+269"/>
        <source>Malformed header</source>
        <translation>不正常的标头</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDMLDepack.cpp" line="+85"/>
        <source>Unpacking bitstream</source>
        <translation>解包比特流</translation>
    </message>
</context>
<context>
    <name>partial</name>
    <message>
        <location filename="../../common/ADM_videoFilter2/src/ADM_vidPartial.cpp" line="+388"/>
        <source>Partialize &quot;%s&quot;</source>
        <translation>局部化 &quot;%s&quot;</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>结束时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Configure filter</source>
        <translation>配置过滤器</translation>
    </message>
    <message>
        <source>Partial Filter</source>
        <translation type="vanished">Partial过滤器</translation>
    </message>
</context>
<context>
    <name>pcm</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/pcm/audioencoder_pcm.cpp" line="+205"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>LPCM</source>
        <translation>LPCM</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Output format:</source>
        <translation>输出格式:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>PCM Configuration</source>
        <translation>PCM配置</translation>
    </message>
</context>
<context>
    <name>printinfo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/printInfo/printInfo.cpp" line="+44"/>
        <source>PrintInfo</source>
        <translation>打印信息</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display some informations on Screen.</source>
        <translation>显示一些信息在屏幕上.</translation>
    </message>
</context>
<context>
    <name>propsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="+388"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location line="-128"/>
        <source>Audio</source>
        <translation>音频</translation>
    </message>
    <message>
        <location line="-240"/>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location line="+292"/>
        <source>Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <source>Extra data :</source>
        <translation type="vanished">额外数据 :</translation>
    </message>
    <message>
        <source>Extra Video Properties</source>
        <translation type="vanished">额外的视频属性</translation>
    </message>
    <message>
        <location line="-198"/>
        <location line="+226"/>
        <source>Total Duration:</source>
        <translation>总时长:</translation>
    </message>
    <message>
        <location line="-56"/>
        <source>Codec:</source>
        <translation>编解码器:</translation>
    </message>
    <message>
        <source>ExtraDataSize:</source>
        <translation type="vanished">额外数据尺寸:</translation>
    </message>
    <message>
        <location line="-270"/>
        <source>Properties</source>
        <translation>属性</translation>
    </message>
    <message>
        <location line="+37"/>
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
        <translation>n/a</translation>
    </message>
    <message>
        <location line="-289"/>
        <source>Image Size:</source>
        <translation>图像尺寸:</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Frame Rate:</source>
        <translation>帧率:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Average Bitrate:</source>
        <translation>平均比特率:</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Pixel format:</source>
        <translation>像素格式:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color range:</source>
        <translation>颜色范围:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color primaries:</source>
        <translation>颜色主选:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Transfer characteristics:</source>
        <translation>转换特性:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color space:</source>
        <translation>颜色空间:</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Video Codec Extradata</source>
        <translation>视频编解码器额外数据</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Size:</source>
        <translation>尺寸:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Extradata:</source>
        <translation>额外数据:</translation>
    </message>
    <message>
        <source>Variable Bitrate:</source>
        <translation type="vanished">可变比特率(VBR):</translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Copy to Clipboard</source>
        <translation>复制到剪贴板</translation>
    </message>
    <message>
        <location line="-61"/>
        <source>Channels:</source>
        <translation>声道:</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Frequency:</source>
        <translation>频率:</translation>
    </message>
    <message>
        <location line="-282"/>
        <source>Codec 4CC:</source>
        <translation>编解码器 4CC:</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Aspect Ratio:</source>
        <translation>像素宽高比:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation type="vanished">文本标签</translation>
    </message>
</context>
<context>
    <name>psdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_psIndex.cpp" line="+244"/>
        <source>Indexing</source>
        <translation>正在索引</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>有一些文件使用顺序文件名称,加载所有这些吗?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_ps.cpp" line="+78"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation>这个索引文件&apos;s 是以前旧版本的avidemux生成的.
这个文件需要重新建立索引.处理吗?</translation>
    </message>
</context>
<context>
    <name>qaudiotracks</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="+486"/>
        <source>copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <location line="-332"/>
        <location line="+209"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location line="+171"/>
        <source>File </source>
        <translation>文件 </translation>
    </message>
    <message>
        <location line="-171"/>
        <source>Some tracks are used multiple times</source>
        <translation>一些轨道使用多次</translation>
    </message>
    <message>
        <location line="+163"/>
        <source>Track </source>
        <translation>轨 </translation>
    </message>
    <message>
        <location line="+43"/>
        <source>.... Add audio track</source>
        <translation>....增加音频轨</translation>
    </message>
    <message>
        <location line="-437"/>
        <source>Select audio file</source>
        <translation>将选择音频文件</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Cannot use that file as audio track</source>
        <translation>不能使用该文件作为音频轨道</translation>
    </message>
    <message>
        <location line="+372"/>
        <source> from video</source>
        <translation> 视频来源</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.h" line="+31"/>
        <source>Track %d</source>
        <translation>轨道 %d</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Enabled</source>
        <translation>启用</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Configure</source>
        <translation>配置</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Filters</source>
        <translation>过滤器</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Duplicate first track&apos;s settings</source>
        <translation>复制第一轨道的设定</translation>
    </message>
</context>
<context>
    <name>qencoding</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="+452"/>
        <source>Abort</source>
        <translation>中止</translation>
    </message>
    <message>
        <location line="-388"/>
        <source>Privileges Required</source>
        <translation>需要特殊权限</translation>
    </message>
    <message>
        <source>Pass 1</source>
        <translation type="vanished">通过 1</translation>
    </message>
    <message>
        <location line="+388"/>
        <source>Resume</source>
        <translation>继续</translation>
    </message>
    <message>
        <location line="-388"/>
        <source>Root privileges are required to perform this operation.</source>
        <translation>需要 Root 权限来实行这项操作.</translation>
    </message>
    <message>
        <location line="+147"/>
        <source>First Pass</source>
        <translation>快速第1通</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Second Pass</source>
        <translation>第2通</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Encoding...</source>
        <translation>编码中...</translation>
    </message>
    <message>
        <location line="+232"/>
        <source>The encoding is paused. Do you want to resume or abort?</source>
        <translation>编码已经暂停.您要继续或中止?</translation>
    </message>
</context>
<context>
    <name>qfile</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="+132"/>
        <location line="+116"/>
        <source> files (*.</source>
        <translation> 文件 (*.</translation>
    </message>
    <message>
        <location line="-203"/>
        <location line="+156"/>
        <source>All files (*.*)</source>
        <translation>所有文件 (*.*)</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>Overwrite file </source>
        <translation>覆盖文件 </translation>
    </message>
</context>
<context>
    <name>qgui2</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="+3245"/>
        <source>%c-%s (%02d)</source>
        <translation>%c-%s (%02d)</translation>
    </message>
    <message>
        <location line="-1556"/>
        <source>Set start marker</source>
        <translation>设定开始标记</translation>
    </message>
    <message>
        <location line="-936"/>
        <source>Recent Projects</source>
        <translation>最近打开的项目</translation>
    </message>
    <message>
        <location line="+1845"/>
        <source>Input: %1x%2, %3fps  |  Decoder: %4  |  Display: %5  |  Zoom: %6%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>No file loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+368"/>
        <source>The application has encountered a fatal problem
The current editing has been saved and will be reloaded at next start</source>
        <translation>应用程序遇到了一个致命的问题
当前编辑已保保存, 将在下一开始重载</translation>
    </message>
    <message>
        <location line="-1295"/>
        <source>Go to previous keyframe</source>
        <translation>转到上一关键帧</translation>
    </message>
    <message>
        <location line="-1405"/>
        <source>&lt;b&gt;New version available&lt;/b&gt;&lt;br&gt; Version %1&lt;br&gt;Released on %2.&lt;br&gt;You can download it here&lt;br&gt; &lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt; You can disable autoupdate in preferences.&lt;/small&gt;</source>
        <translation>&lt;b&gt;发现新版本&lt;/b&gt;&lt;br&gt; Version %1&lt;br&gt;Released on %2.&lt;br&gt;你可以在这里下载&lt;br&gt; &lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt; 你也可以在首选项中禁用自动更新.&lt;/small&gt;</translation>
    </message>
    <message>
        <location line="+480"/>
        <source>Recent Files</source>
        <translation>最近打开的文件</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Restore defaults</source>
        <translation>恢复默认值</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Default theme</source>
        <translation>默认主题</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Light theme</source>
        <translation>Light主题</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Dark theme</source>
        <translation>Dark主题</translation>
    </message>
    <message>
        <location line="+604"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location line="+262"/>
        <source>Go to next keyframe</source>
        <translation>转到下一关键帧</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Delete selection</source>
        <translation>删除所选项</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Go to previous cut point</source>
        <translation>到上一个剪切点</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to next cut point</source>
        <translation>到下一个剪切点</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Backward one minute</source>
        <translation>倒退1分钟</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Backward 1 second</source>
        <translation>倒退1分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 1 second</source>
        <translation>前进1分钟</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 2 seconds</source>
        <translation>倒退2分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 2 seconds</source>
        <translation>前进2分钟</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 4 seconds</source>
        <translation>倒退4分钟</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 4 seconds</source>
        <translation>前进4分钟</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Rotate mouse wheel to switch mode</source>
        <translation>转动鼠标滚轮来切换模式</translation>
    </message>
    <message>
        <location line="+1909"/>
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
        <source>Zoom: </source>
        <translation type="vanished">缩放: </translation>
    </message>
    <message>
        <location line="-450"/>
        <source>%c-%s</source>
        <translation>%c-%s</translation>
    </message>
    <message>
        <location line="+80"/>
        <source>Selection: </source>
        <translation>选择: </translation>
    </message>
    <message numerus="yes">
        <location line="+344"/>
        <location line="+2"/>
        <source> (%n track(s))</source>
        <translation>
            <numerusform> (%n 轨道)</numerusform>
        </translation>
    </message>
    <message>
        <location line="-1962"/>
        <source>Go to first frame</source>
        <translation>到第一帧</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>Play/Stop</source>
        <translation>播放/停止</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Go to marker A</source>
        <translation>转到标记A(选择开始)</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to marker B</source>
        <translation>转到标记B(选择结束)</translation>
    </message>
    <message>
        <location line="-26"/>
        <source>Set end marker</source>
        <translation>设定结束标记</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Forward one minute</source>
        <translation>前进一分钟</translation>
    </message>
    <message>
        <location line="-67"/>
        <source>Go to previous frame</source>
        <translation>转到上一帧</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Go to next frame</source>
        <translation>转到下一帧</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Go to last frame</source>
        <translation>转到最后一帧</translation>
    </message>
</context>
<context>
    <name>qgui2menu</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="+91"/>
        <source>Scripting Shell</source>
        <translation>脚本Shell</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Save &amp;As Project...</source>
        <translation>另存为项目(&amp;A)...</translation>
    </message>
    <message>
        <location line="+24"/>
        <source> Shell</source>
        <translation>Shell</translation>
    </message>
    <message>
        <location line="-40"/>
        <source> Project</source>
        <translation> 项目</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Debug Project...</source>
        <translation>调试项目(&amp;D)...</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Scripting Reference</source>
        <translation>参考脚本</translation>
    </message>
    <message>
        <location line="+180"/>
        <source>Restore previous session</source>
        <translation>恢复之前的会话</translation>
    </message>
    <message>
        <location line="-236"/>
        <source>&amp;Run Project...</source>
        <translation>执行项目(&amp;R)...</translation>
    </message>
    <message>
        <location line="+60"/>
        <source> Reference</source>
        <translation> 参考</translation>
    </message>
    <message>
        <location line="-70"/>
        <source>Project Script</source>
        <translation>项目脚本(Script)</translation>
    </message>
</context>
<context>
    <name>qjobs</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="+13"/>
        <source>Ready</source>
        <translation>已准备好</translation>
    </message>
    <message>
        <location line="+88"/>
        <location line="+15"/>
        <source>Sure!</source>
        <translation>确定!</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Are you sure you want to delete ALL jobs?</source>
        <translation>确定要删除所有作业?</translation>
    </message>
    <message>
        <location line="-79"/>
        <source>End Time</source>
        <translation>结束时间</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>Failed</source>
        <translation>已失败</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Job Name</source>
        <translation>作业名称</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Start Time</source>
        <translation>开始时间</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>Succeeded</source>
        <translation>已成功</translation>
    </message>
    <message>
        <location line="+128"/>
        <source>This script has already been successfully executed.</source>
        <translation>这个脚本已经成功执行.</translation>
    </message>
    <message>
        <location line="-128"/>
        <source>Running</source>
        <translation>正在执行</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Deleted</source>
        <translation>已删除</translation>
    </message>
    <message>
        <location line="+88"/>
        <source>Are you sure you want to delete %s job?</source>
        <translation>确定要删除 %s 作业?</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Delete job</source>
        <translation>删除作业</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Delete *all* job</source>
        <translation>删除*所有*作业</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Already done</source>
        <translation>已经完成</translation>
    </message>
</context>
<context>
    <name>qlicense</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_license.cpp" line="+25"/>
        <source>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;&lt;html&gt;&lt;head&gt;  &lt;title&gt;Avidemux is free software; you can redistribute it and/or  modify it under the terms of the GNU General Public License  version 2 as published by the Free Software Foundation&lt;/title&gt;&lt;style type=&quot;text/css&quot;&gt;&lt;!-- /* Style Definitions */ p.licenseStyle, li.licenseStyle, div.licenseStyle        {margin:0cm;        margin-bottom:.0001pt;        font-size:12.0pt;        font-family:&quot;Times New Roman&quot;;} /* Page Definitions */ @page Section1        {size:612.0pt 792.0pt;        margin:72.0pt 90.0pt 72.0pt 90.0pt;}div.Section1        {page:Section1;}--&gt;&lt;/style&gt;&lt;/head&gt;&lt;body lang=&quot;EN-GB&quot; style=&apos;text-justify-trim:punctuation&apos;&gt;  &lt;div class=&quot;Section1&quot;&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;Avidemux is    free software; you can redistribute it and/or modify it under    the terms of the GNU General Public License version 2 as    published by the Free Software Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;b&gt;&lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;    &lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Version 2, June    1991&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Copyright (C) 1989, 1991    Free Software Foundation, Inc.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;59 Temple Place, Suite    330, Boston, MA  02111-1307  USA&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Everyone is permitted to    copy and distribute verbatim copies of this license document,    but changing it is not allowed.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Preamble&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The licenses for most    software are designed to take away your freedom to share and    change it.  By contrast, the GNU General Public License is    intended to guarantee your freedom to share and change free    software--to make sure the software is free for all its users.     This General Public License applies to most of the Free    Software Foundation&apos;s software and to any other program whose    authors commit to using it.  (Some other Free Software    Foundation software is covered by the GNU Library General    Public License instead.)  You can apply it to your programs,    too.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;When we speak of free    software, we are referring to freedom, not price.  Our General    Public Licenses are designed to make sure that you have the    freedom to distribute copies of free software (and charge for    this service if you wish), that you receive source code or can    get it if you want it, that you can change the software or use    pieces of it in new free programs; and that you know you can do    these things.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;To protect your rights, we    need to make restrictions that forbid anyone to deny you these    rights or to ask you to surrender the rights. These    restrictions translate to certain responsibilities for you if    you distribute copies of the software, or if you modify    it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;For example, if you    distribute copies of such a program, whether gratis or for a    fee, you must give the recipients all the rights that you have.     You must make sure that they, too, receive or can get the    source code.  And you must show them these terms so they know    their rights.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;We protect your rights    with two steps: (1) copyright the software, and (2) offer you    this license which gives you legal permission to copy,    distribute and/or modify the software.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Also, for each author&apos;s    protection and ours, we want to make certain that everyone    understands that there is no warranty for this free software.     If the software is modified by someone else and passed on, we    want its recipients to know that what they have is not the    original, so that any problems introduced by others will not    reflect on the original authors&apos; reputations.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Finally, any free program    is threatened constantly by software patents.  We wish to avoid    the danger that redistributors of a free program will    individually obtain patent licenses, in effect making the    program proprietary.  To prevent this, we have made it clear    that any patent must be licensed for everyone&apos;s free use or not    licensed at all.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The precise terms and    conditions for copying, distribution and modification    follow.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;TERMS AND CONDITIONS FOR    COPYING, DISTRIBUTION AND MODIFICATION&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;0. This License applies to    any program or other work which contains a notice placed by the    copyright holder saying it may be distributed under the terms    of this General Public License.  The &quot;Program&quot;, below, refers    to any such program or work, and a &quot;work based on the Program&quot;    means either the Program or any derivative work under copyright    law: that is to say, a work containing the Program or a portion    of it, either verbatim or with modifications and/or translated    into another language.  (Hereinafter, translation is included    without limitation in the term &quot;modification&quot;.)  Each licensee    is addressed as &quot;you&quot;.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Activities other than    copying, distribution and modification are not covered by this    License; they are outside its scope.  The act of running the    Program is not restricted, and the output from the Program is    covered only if its contents constitute a work based on the    Program (independent of having been made by running the    Program). Whether that is true depends on what the Program    does.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;1. You may copy and    distribute verbatim copies of the Program&apos;s source code as you    receive it, in any medium, provided that you conspicuously and    appropriately publish on each copy an appropriate copyright    notice and disclaimer of warranty; keep intact all the notices    that refer to this License and to the absence of any warranty;    and give any other recipients of the Program a copy of this    License along with the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;You may charge a fee for    the physical act of transferring a copy, and you may at your    option offer warranty protection in exchange for a    fee.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;2. You may modify your    copy or copies of the Program or any portion of it, thus    forming a work based on the Program, and copy and distribute    such modifications or work under the terms of Section 1 above,    provided that you also meet all of these conditions:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) You must cause the    modified files to carry prominent notices stating that you    changed the files and the date of any change.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) You must cause any work    that you distribute or publish, that in whole or in part    contains or is derived from the Program or any part thereof, to    be licensed as a whole at no charge to all third parties under    the terms of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) If the modified program    normally reads commands interactively when run, you must cause    it, when started running for such interactive use in the most    ordinary way, to print or display an announcement including an    appropriate copyright notice and a notice that there is no    warranty (or else, saying that you provide a warranty) and that    users may redistribute the program under these conditions, and    telling the user how to view a copy of this License.     (Exception: if the Program itself is interactive but does not    normally print such an announcement, your work based on the    Program is not required to print an announcement.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;These requirements apply    to the modified work as a whole.  If identifiable sections of    that work are not derived from the Program, and can be    reasonably considered independent and separate works in    themselves, then this License, and its terms, do not apply to    those sections when you distribute them as separate works.  But    when you distribute the same sections as part of a whole which    is a work based on the Program, the distribution of the whole    must be on the terms of this License, whose permissions for    other licensees extend to the entire whole, and thus to each    and every part regardless of who wrote it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Thus, it is not the intent    of this section to claim rights or contest your rights to work    written entirely by you; rather, the intent is to exercise the    right to control the distribution of derivative or collective    works based on the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;In addition, mere    aggregation of another work not based on the Program with the    Program (or with a work based on the Program) on a volume of a    storage or distribution medium does not bring the other work    under the scope of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;3. You may copy and    distribute the Program (or a work based on it, under Section 2)    in object code or executable form under the terms of Sections 1    and 2 above provided that you also do one of the    following:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) Accompany it with the    complete corresponding machine-readable source code, which must    be distributed under the terms of Sections 1 and 2 above on a    medium customarily used for software interchange;    or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) Accompany it with a    written offer, valid for at least three years, to give any    third party, for a charge no more than your cost of physically    performing source distribution, a complete machine-readable    copy of the corresponding source code, to be distributed under    the terms of Sections 1 and 2 above on a medium customarily    used for software interchange; or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) Accompany it with the    information you received as to the offer to distribute    corresponding source code.  (This alternative is allowed only    for noncommercial distribution and only if you received the    program in object code or executable form with such an offer,    in accord with Subsection b above.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The source code for a work    means the preferred form of the work for making modifications    to it.  For an executable work, complete source code means all    the source code for all modules it contains, plus any    associated interface definition files, plus the scripts used to    control compilation and installation of the executable.     However, as a special exception, the source code distributed    need not include anything that is normally distributed (in    either source or binary form) with the major components    (compiler, kernel, and so on) of the operating system on which    the executable runs, unless that component itself accompanies    the executable.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If distribution of    executable or object code is made by offering access to copy    from a designated place, then offering equivalent access to    copy the source code from the same place counts as distribution    of the source code, even though third parties are not compelled    to copy the source along with the object code.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;4. You may not copy,    modify, sublicense, or distribute the Program except as    expressly provided under this License.  Any attempt otherwise    to copy, modify, sublicense or distribute the Program is void,    and will automatically terminate your rights under this    License. However, parties who have received copies, or rights,    from you under this License will not have their licenses    terminated so long as such parties remain in full    compliance.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;5. You are not required to    accept this License, since you have not signed it.  However,    nothing else grants you permission to modify or distribute the    Program or its derivative works.  These actions are prohibited    by law if you do not accept this License.  Therefore, by    modifying or distributing the Program (or any work based on the    Program), you indicate your acceptance of this License to do    so, and all its terms and conditions for copying, distributing    or modifying the Program or works based on it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;6. Each time you    redistribute the Program (or any work based on the Program),    the recipient automatically receives a license from the    original licensor to copy, distribute or modify the Program    subject to these terms and conditions.  You may not impose any    further restrictions on the recipients&apos; exercise of the rights    granted herein. You are not responsible for enforcing    compliance by third parties to this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;7. If, as a consequence of    a court judgment or allegation of patent infringement or for    any other reason (not limited to patent issues), conditions are    imposed on you (whether by court order, agreement or otherwise)    that contradict the conditions of this License, they do not    excuse you from the conditions of this License.  If you cannot    distribute so as to satisfy simultaneously your obligations    under this License and any other pertinent obligations, then as    a consequence you may not distribute the Program at all.  For    example, if a patent license would not permit royalty-free    redistribution of the Program by all those who receive copies    directly or indirectly through you, then the only way you could    satisfy both it and this License would be to refrain entirely    from distribution of the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If any portion of this    section is held invalid or unenforceable under any particular    circumstance, the balance of the section is intended to apply    and the section as a whole is intended to apply in other    circumstances.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;It is not the purpose of    this section to induce you to infringe any patents or other    property right claims or to contest validity of any such    claims; this section has the sole purpose of protecting the    integrity of the free software distribution system, which is    implemented by public license practices.  Many people have made    generous contributions to the wide range of software    distributed through that system in reliance on consistent    application of that system; it is up to the author/donor to    decide if he or she is willing to distribute software through    any other system and a licensee cannot impose that    choice.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;This section is intended    to make thoroughly clear what is believed to be a consequence    of the rest of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;8. If the distribution    and/or use of the Program is restricted in certain countries    either by patents or by copyrighted interfaces, the original    copyright holder who places the Program under this License may    add an explicit geographical distribution limitation excluding    those countries, so that distribution is permitted only in or    among countries not thus excluded.  In such case, this License    incorporates the limitation as if written in the body of this    License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;9. The Free Software    Foundation may publish revised and/or new versions of the    General Public License from time to time.  Such new versions    will be similar in spirit to the present version, but may    differ in detail to address new problems or    concerns.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Each version is given a    distinguishing version number.  If the Program specifies a    version number of this License which applies to it and &quot;any    later version&quot;, you have the option of following the terms and    conditions either of that version or of any later version    published by the Free Software Foundation.  If the Program does    not specify a version number of this License, you may choose    any version ever published by the Free Software    Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;10. If you wish to    incorporate parts of the Program into other free programs whose    distribution conditions are different, write to the author to    ask for permission.  For software which is copyrighted by the    Free Software Foundation, write to the Free Software    Foundation; we sometimes make exceptions for this.  Our    decision will be guided by the two goals of preserving the free    status of all derivatives of our free software and of promoting    the sharing and reuse of software generally.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;NO WARRANTY&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;11. BECAUSE THE PROGRAM IS    LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM,    TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN    OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER    PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY    KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED    TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A    PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND    PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM    PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY    SERVICING, REPAIR OR CORRECTION.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;12. IN NO EVENT UNLESS    REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY    COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR    REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU    FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR    CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO    USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR    DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR    THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY    OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;END OF TERMS AND    CONDITIONS&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;  &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;&lt;html&gt;&lt;head&gt;  &lt;title&gt;Avidemux 是自由软件；您可以遵照自由软件基金会 (Free Software Foundation) 出版的 GNU 通用公共许可证条款 (GNU General Public License) 第二版来修改和重新发布这一程序.&lt;/title&gt;&lt;style type=&quot;text/css&quot;&gt;&lt;!-- /* Style Definitions */ p.licenseStyle, li.licenseStyle, div.licenseStyle        {margin:0cm;        margin-bottom:.0001pt;        font-size:12.0pt;        font-family:&quot;Times New Roman&quot;;} /* Page Definitions */ @page Section1        {size:612.0pt 792.0pt;        margin:72.0pt 90.0pt 72.0pt 90.0pt;}div.Section1        {page:Section1;}--&gt;&lt;/style&gt;&lt;/head&gt;&lt;body lang=&quot;EN-GB&quot; style=&apos;text-justify-trim:punctuation&apos;&gt;  &lt;div class=&quot;Section1&quot;&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;Avidemux is    free software; you can redistribute it and/or modify it under    the terms of the GNU General Public License version 2 as    published by the Free Software Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;b&gt;&lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;    &lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Version 2, June    1991&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Copyright (C) 1989, 1991    Free Software Foundation, Inc.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;59 Temple Place, Suite    330, Boston, MA  02111-1307  USA&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Everyone is permitted to    copy and distribute verbatim copies of this license document,    but changing it is not allowed.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Preamble&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The licenses for most    software are designed to take away your freedom to share and    change it.  By contrast, the GNU General Public License is    intended to guarantee your freedom to share and change free    software--to make sure the software is free for all its users.     This General Public License applies to most of the Free    Software Foundation&apos;s software and to any other program whose    authors commit to using it.  (Some other Free Software    Foundation software is covered by the GNU Library General    Public License instead.)  You can apply it to your programs,    too.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;When we speak of free    software, we are referring to freedom, not price.  Our General    Public Licenses are designed to make sure that you have the    freedom to distribute copies of free software (and charge for    this service if you wish), that you receive source code or can    get it if you want it, that you can change the software or use    pieces of it in new free programs; and that you know you can do    these things.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;To protect your rights, we    need to make restrictions that forbid anyone to deny you these    rights or to ask you to surrender the rights. These    restrictions translate to certain responsibilities for you if    you distribute copies of the software, or if you modify    it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;For example, if you    distribute copies of such a program, whether gratis or for a    fee, you must give the recipients all the rights that you have.     You must make sure that they, too, receive or can get the    source code.  And you must show them these terms so they know    their rights.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;We protect your rights    with two steps: (1) copyright the software, and (2) offer you    this license which gives you legal permission to copy,    distribute and/or modify the software.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Also, for each author&apos;s    protection and ours, we want to make certain that everyone    understands that there is no warranty for this free software.     If the software is modified by someone else and passed on, we    want its recipients to know that what they have is not the    original, so that any problems introduced by others will not    reflect on the original authors&apos; reputations.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Finally, any free program    is threatened constantly by software patents.  We wish to avoid    the danger that redistributors of a free program will    individually obtain patent licenses, in effect making the    program proprietary.  To prevent this, we have made it clear    that any patent must be licensed for everyone&apos;s free use or not    licensed at all.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The precise terms and    conditions for copying, distribution and modification    follow.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;TERMS AND CONDITIONS FOR    COPYING, DISTRIBUTION AND MODIFICATION&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;0. This License applies to    any program or other work which contains a notice placed by the    copyright holder saying it may be distributed under the terms    of this General Public License.  The &quot;Program&quot;, below, refers    to any such program or work, and a &quot;work based on the Program&quot;    means either the Program or any derivative work under copyright    law: that is to say, a work containing the Program or a portion    of it, either verbatim or with modifications and/or translated    into another language.  (Hereinafter, translation is included    without limitation in the term &quot;modification&quot;.)  Each licensee    is addressed as &quot;you&quot;.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Activities other than    copying, distribution and modification are not covered by this    License; they are outside its scope.  The act of running the    Program is not restricted, and the output from the Program is    covered only if its contents constitute a work based on the    Program (independent of having been made by running the    Program). Whether that is true depends on what the Program    does.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;1. You may copy and    distribute verbatim copies of the Program&apos;s source code as you    receive it, in any medium, provided that you conspicuously and    appropriately publish on each copy an appropriate copyright    notice and disclaimer of warranty; keep intact all the notices    that refer to this License and to the absence of any warranty;    and give any other recipients of the Program a copy of this    License along with the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;You may charge a fee for    the physical act of transferring a copy, and you may at your    option offer warranty protection in exchange for a    fee.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;2. You may modify your    copy or copies of the Program or any portion of it, thus    forming a work based on the Program, and copy and distribute    such modifications or work under the terms of Section 1 above,    provided that you also meet all of these conditions:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) You must cause the    modified files to carry prominent notices stating that you    changed the files and the date of any change.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) You must cause any work    that you distribute or publish, that in whole or in part    contains or is derived from the Program or any part thereof, to    be licensed as a whole at no charge to all third parties under    the terms of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) If the modified program    normally reads commands interactively when run, you must cause    it, when started running for such interactive use in the most    ordinary way, to print or display an announcement including an    appropriate copyright notice and a notice that there is no    warranty (or else, saying that you provide a warranty) and that    users may redistribute the program under these conditions, and    telling the user how to view a copy of this License.     (Exception: if the Program itself is interactive but does not    normally print such an announcement, your work based on the    Program is not required to print an announcement.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;These requirements apply    to the modified work as a whole.  If identifiable sections of    that work are not derived from the Program, and can be    reasonably considered independent and separate works in    themselves, then this License, and its terms, do not apply to    those sections when you distribute them as separate works.  But    when you distribute the same sections as part of a whole which    is a work based on the Program, the distribution of the whole    must be on the terms of this License, whose permissions for    other licensees extend to the entire whole, and thus to each    and every part regardless of who wrote it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Thus, it is not the intent    of this section to claim rights or contest your rights to work    written entirely by you; rather, the intent is to exercise the    right to control the distribution of derivative or collective    works based on the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;In addition, mere    aggregation of another work not based on the Program with the    Program (or with a work based on the Program) on a volume of a    storage or distribution medium does not bring the other work    under the scope of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;3. You may copy and    distribute the Program (or a work based on it, under Section 2)    in object code or executable form under the terms of Sections 1    and 2 above provided that you also do one of the    following:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) Accompany it with the    complete corresponding machine-readable source code, which must    be distributed under the terms of Sections 1 and 2 above on a    medium customarily used for software interchange;    or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) Accompany it with a    written offer, valid for at least three years, to give any    third party, for a charge no more than your cost of physically    performing source distribution, a complete machine-readable    copy of the corresponding source code, to be distributed under    the terms of Sections 1 and 2 above on a medium customarily    used for software interchange; or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) Accompany it with the    information you received as to the offer to distribute    corresponding source code.  (This alternative is allowed only    for noncommercial distribution and only if you received the    program in object code or executable form with such an offer,    in accord with Subsection b above.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The source code for a work    means the preferred form of the work for making modifications    to it.  For an executable work, complete source code means all    the source code for all modules it contains, plus any    associated interface definition files, plus the scripts used to    control compilation and installation of the executable.     However, as a special exception, the source code distributed    need not include anything that is normally distributed (in    either source or binary form) with the major components    (compiler, kernel, and so on) of the operating system on which    the executable runs, unless that component itself accompanies    the executable.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If distribution of    executable or object code is made by offering access to copy    from a designated place, then offering equivalent access to    copy the source code from the same place counts as distribution    of the source code, even though third parties are not compelled    to copy the source along with the object code.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;4. You may not copy,    modify, sublicense, or distribute the Program except as    expressly provided under this License.  Any attempt otherwise    to copy, modify, sublicense or distribute the Program is void,    and will automatically terminate your rights under this    License. However, parties who have received copies, or rights,    from you under this License will not have their licenses    terminated so long as such parties remain in full    compliance.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;5. You are not required to    accept this License, since you have not signed it.  However,    nothing else grants you permission to modify or distribute the    Program or its derivative works.  These actions are prohibited    by law if you do not accept this License.  Therefore, by    modifying or distributing the Program (or any work based on the    Program), you indicate your acceptance of this License to do    so, and all its terms and conditions for copying, distributing    or modifying the Program or works based on it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;6. Each time you    redistribute the Program (or any work based on the Program),    the recipient automatically receives a license from the    original licensor to copy, distribute or modify the Program    subject to these terms and conditions.  You may not impose any    further restrictions on the recipients&apos; exercise of the rights    granted herein. You are not responsible for enforcing    compliance by third parties to this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;7. If, as a consequence of    a court judgment or allegation of patent infringement or for    any other reason (not limited to patent issues), conditions are    imposed on you (whether by court order, agreement or otherwise)    that contradict the conditions of this License, they do not    excuse you from the conditions of this License.  If you cannot    distribute so as to satisfy simultaneously your obligations    under this License and any other pertinent obligations, then as    a consequence you may not distribute the Program at all.  For    example, if a patent license would not permit royalty-free    redistribution of the Program by all those who receive copies    directly or indirectly through you, then the only way you could    satisfy both it and this License would be to refrain entirely    from distribution of the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If any portion of this    section is held invalid or unenforceable under any particular    circumstance, the balance of the section is intended to apply    and the section as a whole is intended to apply in other    circumstances.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;It is not the purpose of    this section to induce you to infringe any patents or other    property right claims or to contest validity of any such    claims; this section has the sole purpose of protecting the    integrity of the free software distribution system, which is    implemented by public license practices.  Many people have made    generous contributions to the wide range of software    distributed through that system in reliance on consistent    application of that system; it is up to the author/donor to    decide if he or she is willing to distribute software through    any other system and a licensee cannot impose that    choice.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;This section is intended    to make thoroughly clear what is believed to be a consequence    of the rest of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;8. If the distribution    and/or use of the Program is restricted in certain countries    either by patents or by copyrighted interfaces, the original    copyright holder who places the Program under this License may    add an explicit geographical distribution limitation excluding    those countries, so that distribution is permitted only in or    among countries not thus excluded.  In such case, this License    incorporates the limitation as if written in the body of this    License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;9. The Free Software    Foundation may publish revised and/or new versions of the    General Public License from time to time.  Such new versions    will be similar in spirit to the present version, but may    differ in detail to address new problems or    concerns.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Each version is given a    distinguishing version number.  If the Program specifies a    version number of this License which applies to it and &quot;any    later version&quot;, you have the option of following the terms and    conditions either of that version or of any later version    published by the Free Software Foundation.  If the Program does    not specify a version number of this License, you may choose    any version ever published by the Free Software    Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;10. If you wish to    incorporate parts of the Program into other free programs whose    distribution conditions are different, write to the author to    ask for permission.  For software which is copyrighted by the    Free Software Foundation, write to the Free Software    Foundation; we sometimes make exceptions for this.  Our    decision will be guided by the two goals of preserving the free    status of all derivatives of our free software and of promoting    the sharing and reuse of software generally.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;NO WARRANTY&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;11. BECAUSE THE PROGRAM IS    LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM,    TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN    OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER    PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY    KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED    TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A    PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND    PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM    PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY    SERVICING, REPAIR OR CORRECTION.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;12. IN NO EVENT UNLESS    REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY    COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR    REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU    FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR    CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO    USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR    DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR    THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY    OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;END OF TERMS AND    CONDITIONS&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;  &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>qmainfilter</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="+843"/>
        <location line="+450"/>
        <source>Add</source>
        <translation>加入</translation>
    </message>
    <message>
        <location line="-210"/>
        <source>Save video filters..</source>
        <translation>保存视频过滤器..</translation>
    </message>
    <message>
        <location line="-388"/>
        <location line="+80"/>
        <source>Make partial</source>
        <translation>使局部化(partial)</translation>
    </message>
    <message>
        <location line="-488"/>
        <source>Preview</source>
        <translation>预览</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>DISABLED </source>
        <translation>禁用</translation>
    </message>
    <message>
        <location line="+400"/>
        <source>Move up</source>
        <translation>向上移动</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Configure</source>
        <translation>配置</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+154"/>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
    <message>
        <location line="-349"/>
        <location line="+28"/>
        <source>Partial</source>
        <translation>局部</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>This filter is not partial</source>
        <translation>这个过滤器不是局部过滤器</translation>
    </message>
    <message>
        <location line="+164"/>
        <source>Move down</source>
        <translation>下移</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate</source>
        <translation>复制</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Enable/Disable</source>
        <translation>启用/禁用</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>Disable</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Make global</source>
        <translation>全局化</translation>
    </message>
    <message>
        <location line="+146"/>
        <source>Press %s to accept the dialog</source>
        <translation>按 %s 来同意对话框</translation>
    </message>
    <message>
        <location line="+148"/>
        <source>Load video filters..</source>
        <translation>加载视频过滤器..</translation>
    </message>
    <message>
        <location line="+363"/>
        <source>Can not add partial filter</source>
        <translation>不能添加局部过滤器</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>A selection by markers has to be made.</source>
        <translation>必须要被有标记的选择区域才可以.</translation>
    </message>
    <message>
        <location line="-932"/>
        <source>This filter cannot be made partial</source>
        <translation>无法将此过滤器局部化</translation>
    </message>
</context>
<context>
    <name>qprocessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_processing.cpp" line="+165"/>
        <source>_Resume</source>
        <translation>恢复</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Cancel it ?</source>
        <translation>取消它吗?</translation>
    </message>
    <message>
        <location line="-98"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>The processing is paused.</source>
        <translation>处理过程暂停.</translation>
    </message>
</context>
<context>
    <name>qprops</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="+26"/>
        <source>No</source>
        <translation>否</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Yes</source>
        <translation>是</translation>
    </message>
    <message>
        <location line="+41"/>
        <location line="+171"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>n/a</source>
        <translation>n/a</translation>
    </message>
    <message>
        <location line="-171"/>
        <source>%d kbps</source>
        <translation>%d kbps</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>RGB, 8-bit</source>
        <translation>RGB, 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Planar RGB, 8-bit</source>
        <translation>平面RGB, 8-比特</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>RGBA, 8-bit</source>
        <translation>RGBA, 8-比特</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>RGB, 5-bit</source>
        <translation>RGB, 5-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 8-bit</source>
        <translation>YUV 4:2:0, 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0 (NV12), 8-bit</source>
        <translation>YUV 4:2:0 (NV12), 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+2"/>
        <source>Packed YUV 4:2:2, 8-bit</source>
        <translation>Packed YUV 4:2:2, 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:2, 8-bit</source>
        <translation>YUV 4:2:2, 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:1:1, 8-bit</source>
        <translation>YUV 4:1:1, 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 8-bit</source>
        <translation>YUV 4:4:4, 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Grayscale Y, 8-bit</source>
        <translation>灰度Y, 8-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 10-bit</source>
        <translation>YUV 4:4:4, 10-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0 (P010), 10-bit</source>
        <translation>YUV 4:2:0 (P010), 10-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 10-bit</source>
        <translation>YUV 4:2:0, 10-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 12-bit</source>
        <translation>YUV 4:2:0, 12-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:2, 10-bit</source>
        <translation>YUV 4:2:2, 10-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 12-bit</source>
        <translation>YUV 4:4:4, 12-比特</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+9"/>
        <location line="+26"/>
        <location line="+37"/>
        <location line="+31"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location line="-98"/>
        <source>Limited (MPEG)</source>
        <translation>Limited (MPEG)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Full (JPEG)</source>
        <translation>Full (JPEG)</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+26"/>
        <location line="+39"/>
        <source>BT.709</source>
        <translation>BT.709</translation>
    </message>
    <message>
        <location line="-63"/>
        <location line="+26"/>
        <source>BT.470 System M</source>
        <translation>BT.470 System M</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>BT.601 PAL</source>
        <translation>BT.601 PAL</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>BT.601 NTSC</source>
        <translation>BT.601 NTSC</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Generic film</source>
        <translation>普通电影</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020</source>
        <translation>BT.2020</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>XYZ</source>
        <translation>XYZ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>DCI P3</source>
        <translation>DCI P3</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Display P3</source>
        <translation>Display P3</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>EBU Tech. 3213</source>
        <translation>EBU Tech. 3213</translation>
    </message>
    <message>
        <location line="+11"/>
        <location line="+39"/>
        <source>BT.470 System B/G</source>
        <translation>BT.470 System B/G</translation>
    </message>
    <message>
        <location line="-37"/>
        <location line="+39"/>
        <source>BT.601</source>
        <translation>BT.601</translation>
    </message>
    <message>
        <location line="-37"/>
        <location line="+39"/>
        <source>SMPTE 240M</source>
        <translation>SMPTE 240M</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Linear</source>
        <translation>线性</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Logarithmic (100:1)</source>
        <translation>对数 (100:1)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Logarithmic (316.227:1)</source>
        <translation>对数 (316.227:1)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>xvYCC</source>
        <translation>xvYCC</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.1361</source>
        <translation>BT.1361</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>sRGB/sYCC</source>
        <translation>sRGB/sYCC</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 (10-bit)</source>
        <translation>BT.2020 (10-比特)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 (12-bit)</source>
        <translation>BT.2020 (12-比特)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>PQ</source>
        <translation>PQ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>SMPTE 428M</source>
        <translation>SMPTE 428M</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>HLG</source>
        <translation>HLG</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>sRGB</source>
        <translation>sRGB</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>FCC 73.682</source>
        <translation>FCC 73.682</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>YCgCo</source>
        <translation>YCgCo</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 non-constant</source>
        <translation>BT.2020 非固定码流</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 constant</source>
        <translation>BT.2020 固定码流</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Y&apos;D&apos;zD&apos;x</source>
        <translation>Y&apos;D&apos;zD&apos;x</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Chromaticity-derived non-constant</source>
        <translation>色度派生的非恒定(Chromaticity-derived non-constant)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Chromaticity-derived constant</source>
        <translation>色度派生的恒定(Chromaticity-derived constant)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>ICtCp</source>
        <translation>ICtCp</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>(+%d bytes)</source>
        <translation>(+%d 字节)</translation>
    </message>
    <message numerus="yes">
        <location line="+24"/>
        <location line="+2"/>
        <source>Audio (%n active track(s))</source>
        <translation>
            <numerusform>音频 (%n 条活动轨道)</numerusform>
        </translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Mono</source>
        <translation>单声道</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation type="vanished">音频</translation>
    </message>
    <message>
        <source>Video</source>
        <translation type="vanished">视频</translation>
    </message>
    <message>
        <source>Image Size:	</source>
        <translation type="vanished">图片尺寸:	</translation>
    </message>
    <message>
        <location line="+164"/>
        <source>No Audio</source>
        <translation>无音频</translation>
    </message>
    <message>
        <source>Frame Rate:	</source>
        <translation type="vanished">帧率:</translation>
    </message>
    <message>
        <location line="-429"/>
        <source>%2.3f fps</source>
        <translation>%2.3f fps</translation>
    </message>
    <message>
        <source>Extra data:	</source>
        <translation type="vanished">额外数据:</translation>
    </message>
    <message>
        <source>Aspect Ratio:	</source>
        <translation type="vanished">宽高比:	</translation>
    </message>
    <message>
        <source>Extra Video Properties</source>
        <translation type="vanished">额外的视频属性</translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+269"/>
        <source>%02d:%02d:%02d.%03d</source>
        <translation>%02d:%02d:%02d.%03d</translation>
    </message>
    <message>
        <source>Channels:	</source>
        <translation type="vanished">通道:	</translation>
    </message>
    <message>
        <source>Codec 4CC:	</source>
        <translation type="vanished">编解码器 4CC:	</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Stereo</source>
        <translation>立体声</translation>
    </message>
    <message>
        <source>Codec:		</source>
        <translation type="vanished">编解码器:		</translation>
    </message>
    <message>
        <location line="-270"/>
        <source>%s (%u:%u)</source>
        <translation>%s (%u:%u)</translation>
    </message>
    <message>
        <source>Bitrate:	</source>
        <translation type="vanished">比特率:	</translation>
    </message>
    <message>
        <source>Frequency:	</source>
        <translation type="vanished">频率:	</translation>
    </message>
    <message>
        <source>ExtraDataSize:	</source>
        <translation type="vanished">额外数据尺寸:	</translation>
    </message>
    <message>
        <source>Total Duration:	</source>
        <translation type="vanished">总时长:	</translation>
    </message>
</context>
<context>
    <name>qshell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/Q_shell.cpp" line="+64"/>
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
        <translation>你可以使用 CTRL+PageUP 和 CTRL+PageDown 来调用先前已准备好的命令.
</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Enter your commands then press the evaluate button or ⌘⏎.
</source>
        <translation>输入你的命令然后按求值按钮或 ⌘⏎.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You can use ⌥⌘▲ and ⌥⌘▼ to recall previous commands.
Ready.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Enter your commands then press the evaluate button or CTRL+ENTER.
</source>
        <translation>输入你的命令,然后按下求值按钮或按 CTRL + ENTER.
</translation>
    </message>
</context>
<context>
    <name>qtalert</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="+117"/>
        <source>Info</source>
        <translation>信息</translation>
    </message>
    <message>
        <source>Alert</source>
        <translation type="vanished">警告</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+75"/>
        <location line="+34"/>
        <source>Question</source>
        <translation>问题</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Question?</source>
        <translation>问题?</translation>
    </message>
    <message>
        <location line="-80"/>
        <location line="+29"/>
        <source>Confirmation</source>
        <translation>确认</translation>
    </message>
</context>
<context>
    <name>qtray</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/ADM_qtray.cpp" line="+82"/>
        <source>Open Avidemux</source>
        <translation>打开Avidemux</translation>
    </message>
</context>
<context>
    <name>quadTrans</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/ADM_vidQuadTrans.cpp" line="+42"/>
        <source>Quadrilateral transformation</source>
        <translation>四边形变换</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Four point transform.</source>
        <translation>四点变换.</translation>
    </message>
</context>
<context>
    <name>quadTransDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="+14"/>
        <source>Quadrilateral transformation</source>
        <translation>四边形变换</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Interpolation:</source>
        <translation>插值:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Zoom:</source>
        <translation>缩放:</translation>
    </message>
    <message>
        <location line="+34"/>
        <location line="+27"/>
        <location line="+74"/>
        <location line="+34"/>
        <source>Δy:</source>
        <translation>Δy:</translation>
    </message>
    <message>
        <location line="-115"/>
        <location line="+14"/>
        <location line="+50"/>
        <location line="+34"/>
        <source>Δx:</source>
        <translation>Δx:</translation>
    </message>
</context>
<context>
    <name>quickFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/quickfilter.ui" line="+20"/>
        <source>Add Partial Video Filter</source>
        <translation>添加局部视频过滤器</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;可用的过滤器&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Type to narrow the list</source>
        <translation>键入字母,收窄列表</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>&amp;Close</source>
        <translation>关闭(&amp;C)</translation>
    </message>
</context>
<context>
    <name>qvobsub</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_vobsub.cpp" line="+88"/>
        <source>Select Idx File</source>
        <translation>选择Idx文件</translation>
    </message>
</context>
<context>
    <name>rawmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRawConfig.cpp" line="+29"/>
        <source>Prefer Annex B type stream</source>
        <translation>偏好附件B类视频流</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Video Only Muxer Settings</source>
        <translation>单视频复合器设定</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRaw.cpp" line="+83"/>
        <source>Saving raw video</source>
        <translation>正在保存原始视频</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None</source>
        <translation>无</translation>
    </message>
</context>
<context>
    <name>removeplane</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="+46"/>
        <source>Remove Y,U or V plane (used mainly to debug other filters).</source>
        <translation>删除Y,U或V平面 (主要用于调试其它过滤器).</translation>
    </message>
    <message>
        <location line="+106"/>
        <source>Keep U Plane</source>
        <translation>保持U平面</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Remove plane</source>
        <translation>删除平面</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Process chromaV plane</source>
        <translation>处理色度V平面</translation>
    </message>
    <message>
        <location line="-108"/>
        <source>Remove  Plane</source>
        <translation>删除平面</translation>
    </message>
    <message>
        <location line="+107"/>
        <source>Process chromaU plane</source>
        <translation>处理色度U平面</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Process luma plane</source>
        <translation>处理亮度平面</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Keep V Plane</source>
        <translation>保持V平面</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Keep Y Plane</source>
        <translation>保持Y平面</translation>
    </message>
</context>
<context>
    <name>resampleFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="+47"/>
        <source>29.97 (NTSC)</source>
        <translation>29.97 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (Pal)</source>
        <translation>50 (Pal)</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>25  (PAL)</source>
        <translation>25  (PAL)</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>59.94  (NTSC)</source>
        <translation>59.94  (NTSC)</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Resample FPS</source>
        <translation>调整帧速(重新取样)</translation>
    </message>
    <message>
        <location line="+371"/>
        <source>Resample fps</source>
        <translation>调整帧速(重新取样)</translation>
    </message>
    <message>
        <location line="-413"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location line="+405"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="-403"/>
        <source>23.976 (Film)</source>
        <translation>23.976 (电影)</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Change and enforce FPS. Keep duration and sync.</source>
        <translation>结束时间仍然一样,例如15 fps电影从数码转换 DVD,一般PC上看不出来效果.</translation>
    </message>
    <message>
        <location line="+354"/>
        <source>none</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend</source>
        <translation>混合</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion compensation</source>
        <translation>运动压缩</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_New frame rate:</source>
        <translation>新帧率:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Interpolation:</source>
        <translation>插值:</translation>
    </message>
</context>
<context>
    <name>resize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/swScaleResize.cpp" line="+84"/>
        <source>swScale Resizer.</source>
        <translation>调整比例尺寸.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/Q_resize.cpp" line="+118"/>
        <location line="+144"/>
        <source>Preferences</source>
        <translation>偏好设定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation>新过滤器的默认设定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation>调整尺寸方式:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Most recently accepted</source>
        <translation>最近使用的</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3算法</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation>样条(Spline)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearest neighbor</source>
        <translation>最近邻</translation>
    </message>
    <message>
        <location line="+259"/>
        <source>Width and height cannot be odd</source>
        <translation>宽度和高度不能为奇数</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/swScaleResize.cpp" line="-1"/>
        <source>swsResize</source>
        <translation>sws调整尺寸</translation>
    </message>
</context>
<context>
    <name>resizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="+369"/>
        <source>1%</source>
        <translation>1%</translation>
    </message>
    <message>
        <source>1:1</source>
        <translation type="vanished">1:1</translation>
    </message>
    <message>
        <source>4:3</source>
        <translation type="vanished">4:3</translation>
    </message>
    <message>
        <source>16:9</source>
        <translation type="vanished">16:9</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>200%</source>
        <translation>200%</translation>
    </message>
    <message>
        <source>Destination:</source>
        <translation type="vanished">目的文件:</translation>
    </message>
    <message>
        <location line="+161"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="-102"/>
        <source>Error X / Y:</source>
        <translation>错误 X / Y:</translation>
    </message>
    <message>
        <location line="-412"/>
        <source>Lock Aspect Ratio</source>
        <translation>锁定宽高比</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Aspect Ratio</source>
        <translation>宽高比</translation>
    </message>
    <message>
        <location line="+440"/>
        <source>0.00 / 0.00</source>
        <translation>0.00 / 0.00</translation>
    </message>
    <message>
        <location line="-461"/>
        <source>Resize</source>
        <translation>调整尺寸</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Source PAR:</source>
        <translation>源 PAR:</translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+32"/>
        <source>1:1 (square pixels)</source>
        <translation>1:1 (方像素)</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Destination PAR:</source>
        <translation>目标 PAR:</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>Width:</source>
        <translation>宽度:</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>No rounding</source>
        <translation>无舍入(原尺寸)</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>舍入到被8整除的值</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>舍入到被4整除的值</translation>
    </message>
    <message>
        <location line="+114"/>
        <source>Percent</source>
        <translation>百分比</translation>
    </message>
    <message>
        <location line="+119"/>
        <source>0.0000</source>
        <translation>0.0000</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>(00:00)</source>
        <translation>(00:00)</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3算法</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation>样条(Spline)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Nearest neighbor</source>
        <translation>最近邻</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <source>Source:</source>
        <translation type="vanished">来源:</translation>
    </message>
    <message>
        <location line="-310"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation>舍入到被16整除的值</translation>
    </message>
    <message>
        <location line="-119"/>
        <source>Resize Dimensions</source>
        <translation>调整显示尺寸</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>Height:</source>
        <translation>高度:</translation>
    </message>
    <message>
        <location line="+342"/>
        <source>Resize Method:</source>
        <translation>调整尺寸方式:</translation>
    </message>
</context>
<context>
    <name>rotate</name>
    <message>
        <source>90°</source>
        <translation type="vanished">90°</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotateSimple/rotate.cpp" line="+206"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <source>180°</source>
        <translation type="vanished">180°</translation>
    </message>
    <message>
        <source>270°</source>
        <translation type="vanished">270°</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Angle:</source>
        <translation>角度:</translation>
    </message>
    <message>
        <location line="-159"/>
        <location line="+161"/>
        <source>Rotate</source>
        <translation>旋转</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>90° clockwise</source>
        <translation>90°顺时针</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180 degrees</source>
        <translation>180度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>270 degrees</source>
        <translation>270度</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>90° contraclockwise</source>
        <translation>90°逆时针</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>90 degrees</source>
        <translation>90度</translation>
    </message>
    <message>
        <location line="-154"/>
        <source>Rotate the image by 90/180/270 degrees.</source>
        <translation>旋转图像90/180/270度.</translation>
    </message>
</context>
<context>
    <name>seekablePreviewDialog</name>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="+192"/>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>&lt;&lt;</source>
        <translation>&lt;&lt;</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>&gt;&gt;</source>
        <translation>&gt;&gt;</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Play</source>
        <translation>播放</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Peek Original</source>
        <translation>窥视原始视频</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show unprocessed input</source>
        <translation>显示未处理的输入</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Back one minute</source>
        <translation>后退一分钟</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>A</source>
        <translation>A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go to the start of the selection</source>
        <translation>到所选开始处</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>B</source>
        <translation>B</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go to the end of the selection</source>
        <translation>到所选结束</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Next image</source>
        <translation>下一张图像</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/seekablePreview.ui" line="+20"/>
        <source>Preview</source>
        <translation>预览</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="+3"/>
        <source>Forward one minute</source>
        <translation>前进一分钟</translation>
    </message>
</context>
<context>
    <name>separateFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidSeparateField.cpp" line="+53"/>
        <source>Separate Fields</source>
        <translation>场分离</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Split each image into 2 fields.</source>
        <translation>每个图像分割为两个场.</translation>
    </message>
</context>
<context>
    <name>shaderLoader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="+194"/>
        <source>Reload shader</source>
        <translation>再次加载着色器</translation>
    </message>
</context>
<context>
    <name>sharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Sharpen.cpp" line="+28"/>
        <source>3x3 convolution filter :sharpen.</source>
        <translation>3x3卷积过滤器: 锐化.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Sharpen convolution.</source>
        <translation>锐化卷积(Sharpen convolution).</translation>
    </message>
</context>
<context>
    <name>stackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/stackField.cpp" line="+47"/>
        <source>Stack Fields</source>
        <translation>场堆叠</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put even lines on top, odd lines at bottom.</source>
        <translation>将偶数行放在上面,奇数行放下面.</translation>
    </message>
</context>
<context>
    <name>stillimage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="+68"/>
        <location line="+305"/>
        <source>Still Image</source>
        <translation>静止图像</translation>
    </message>
    <message>
        <location line="-304"/>
        <source>Duplicate frames for a given duration.</source>
        <translation>给定期间的帧数翻倍</translation>
    </message>
    <message>
        <location line="+300"/>
        <source>_Start time:</source>
        <translation>开始时间:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Duration:</source>
        <translation>时长:</translation>
    </message>
</context>
<context>
    <name>swapuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/swapUV/swapUV.cpp" line="+42"/>
        <source>Swap the U and V planes.</source>
        <translation>交换U和V色彩平面.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Swap UV</source>
        <translation>交换 UV</translation>
    </message>
</context>
<context>
    <name>telecide</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="+193"/>
        <source>Top</source>
        <translation>顶部</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Never</source>
        <translation>从不</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>_Direct threshold:</source>
        <translation>正向阈值:</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>If still combed</source>
        <translation>如果仍然有梳形噪声</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Process image (not fields)</source>
        <translation>处理图像 (非帧扫描场)</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Decomb Telecide</source>
        <translation>Decomb Telecide</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide.cpp" line="+45"/>
        <source>Decomb telecide</source>
        <translation>Decomb Telecide</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="-18"/>
        <source>_Try backward:</source>
        <translation>尝试反向:</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Always</source>
        <translation>总是</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide.cpp" line="+1"/>
        <source>Donald Graft Telecide. Replace ivtc pattern by progressive frames. Video stays at 30 fps.</source>
        <translation>Donald Graft Telecide, 替换ivtc模式为渐进式帧,视频保持在30fps.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="+26"/>
        <source>Bl_end</source>
        <translation>混合</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>Bottom</source>
        <translation>底部</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Debu_g</source>
        <translation>调试</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>_Noise threshold:</source>
        <translation>噪声阈值:</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>_Postprocessing:</source>
        <translation>后置处理(&amp;O):</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Sho_w info</source>
        <translation>显示信息</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>_Field order:</source>
        <translation>区域顺序:</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Process image (not fields), debug</source>
        <translation>处理图像 (非帧扫描场),调试</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>NTSC converted from PAL</source>
        <translation>从PAL转NTSC</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>_Strategy:</source>
        <translation>策略:</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Postproc on best match</source>
        <translation>在最佳比对上执行后置处理</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>3:2 pulldown</source>
        <translation>往下拉3:2</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Postproc and show zones (debug)</source>
        <translation>后置处理和显示区域 (调试)</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Postp_rocessing threshold:</source>
        <translation>后置处理阈值:</translation>
    </message>
    <message>
        <location line="-35"/>
        <source>No strategy</source>
        <translation>无策略</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>_Use chroma to decide</source>
        <translation>使用色度来判定</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>_Backward threshold:</source>
        <translation>反向阈值:</translation>
    </message>
    <message>
        <location line="-31"/>
        <source>PAL/SECAM</source>
        <translation>PAL/SECAM</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>None but compute</source>
        <translation>无,但是计算</translation>
    </message>
</context>
<context>
    <name>timestamp</name>
    <message>
        <location filename="../ADM_UIs/src/T_timeStamp.cpp" line="+198"/>
        <source> h</source>
        <translation> 小时</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> m</source>
        <translation> 分</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> s</source>
        <translation> 秒</translation>
    </message>
</context>
<context>
    <name>tinypy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_scriptEngines/tinyPy/src/ADM_pyAvidemux.cpp" line="+434"/>
        <source>Save File</source>
        <translation>保存文件</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Open File</source>
        <translation>打开文件</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Select Directory</source>
        <translation>选择目录</translation>
    </message>
</context>
<context>
    <name>tsdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="+278"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="+349"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+105"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexVC1.cpp" line="+74"/>
        <source>Indexing</source>
        <translation>正在索引</translation>
    </message>
    <message>
        <location line="+161"/>
        <source>Size Change</source>
        <translation>尺寸改变</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported, stopping here.</source>
        <translation>视频帧 %u 的尺寸从 %ux%u 改变成了 %ux%u. 这是不支持的, 已在此处停止.</translation>
    </message>
    <message>
        <location line="+10"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+72"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported and will result in a crash.
Proceed nevertheless?
This warning won&apos;t be shown again for this video.</source>
        <translation>视频帧 %u 的尺寸从 %ux%u 改变成了 %ux%u. 这是不支持的,会导致崩溃.
尽管如此, 还要继续处理吗?
针对这个视频的这个警告不会再显示了.</translation>
    </message>
    <message>
        <location line="-184"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="-12"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="-91"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>有一些文件使用顺序文件名称,加载所有这些吗?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_ts.cpp" line="+84"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation>这个索引文件&apos;s 是以前旧版本的avidemux生成的.
这个文件需要重新建立索引.处理吗?</translation>
    </message>
</context>
<context>
    <name>twolame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/twolame/audioencoder_twolame.cpp" line="+205"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>TwoLame Configuration</source>
        <translation>TwoLame的配置</translation>
    </message>
</context>
<context>
    <name>uisupport</name>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="+46"/>
        <source>X11</source>
        <translation>X11</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MS Windows GDI</source>
        <translation>MS Windows GDI</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>OpenGL</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Mac OS X Quartz 2D</source>
        <translation>Mac OS X Quartz 2D</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>MS Windows Direct3D</source>
        <translation>MS Windows Direct3D</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Default Raster</source>
        <translation>默认栅格</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Mac OS X QuickDraw</source>
        <translation>Mac OS X QuickDraw</translation>
    </message>
</context>
<context>
    <name>unstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/unstackField.cpp" line="+47"/>
        <source>Unstack Fields</source>
        <translation>场解堆叠(Unstack)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weave top and bottom halves.</source>
        <translation>编织上半部和下半部.</translation>
    </message>
</context>
<context>
    <name>utvideo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="+108"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Left Neighbour</source>
        <translation>左邻</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Median</source>
        <translation>中间</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Prediction Method:</source>
        <translation>预测方法:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Ut Video Encoder Configuration</source>
        <translation>Ut视频编码器配置</translation>
    </message>
</context>
<context>
    <name>vaEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/directVaEnc/libvaencPlugin.cpp" line="+77"/>
        <source>vaH264 Configuration</source>
        <translation>vaH264配置</translation>
    </message>
</context>
<context>
    <name>vaH264</name>
    <message>
        <location line="-4"/>
        <source>_IDR Period:</source>
        <translation>_IDR 周期:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bitrate(kbps)</source>
        <translation>波特率(kbps)</translation>
    </message>
</context>
<context>
    <name>vaapiDeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="+121"/>
        <source>VA-API Deinterlacer</source>
        <translation>VA-API 去交错器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Deinterlace and optionally resize video using VA-API.</source>
        <translation>使用VA-API去交错和(可选的)视频尺寸调整</translation>
    </message>
    <message>
        <location line="+316"/>
        <source>Bob</source>
        <translation>Bob</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weave</source>
        <translation>Weave</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion-Adaptive</source>
        <translation>运动自适应</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion-Compensated</source>
        <translation>运动补偿</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Top Field First</source>
        <translation>顶场优先</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation>底场优先</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Frame per Frame</source>
        <translation>逐帧(Frame per Frame)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double Framerate</source>
        <translation>双倍帧率</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Field Order:</source>
        <translation>区域顺序:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Output:</source>
        <translation>输出:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deinterlacing</source>
        <translation>去交错</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Resize</source>
        <translation>调整尺寸</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Width:</source>
        <translation>宽度:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height:</source>
        <translation>高度:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Transformation</source>
        <translation>转换</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>VA-API Deinterlacer and Resizer</source>
        <translation>VA-API 去交错器和尺寸调整器</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Unsupported Mode</source>
        <translation>尚未支持的模式</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Specified deinterlacing mode %s is not supported, replaced with %s.</source>
        <translation>指定的去交错模式 %s 是不支持的, 请用 %s 替换.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>VA-API Setup Error</source>
        <translation>VA-API设定错误</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Could not setup VA-API, purely passthrough operation.</source>
        <translation>不能设定VA-API, 使用纯通过模式操作</translation>
    </message>
</context>
<context>
    <name>vaapiResize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="+58"/>
        <source>VA-API Resize</source>
        <translation>VA-API 尺寸调整</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize image using VA-API.</source>
        <translation>使用VA-API调整图像尺寸.</translation>
    </message>
    <message>
        <location line="+131"/>
        <source>mpeg-&gt;PC</source>
        <translation>mpeg-&gt;PC</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vaapi</source>
        <translation>vaapi</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Height :</source>
        <translation>高度 :</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Width :</source>
        <translation>宽度 :</translation>
    </message>
</context>
<context>
    <name>vdpaudeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="+358"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>_Deint Mode:</source>
        <translation>去交错(Deint)模式:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_IVTC</source>
        <translation>_IVTC</translation>
    </message>
    <message>
        <location line="-211"/>
        <source>vdpauDeint</source>
        <translation>vdpau去交错</translation>
    </message>
    <message>
        <location line="+212"/>
        <source>_Resize</source>
        <translation>调整尺寸</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Keep Top Field</source>
        <translation>保持顶场</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep Bottom Field</source>
        <translation>保持底场</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Top Field First</source>
        <translation>顶场优先</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation>底场优先</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Field Order:</source>
        <translation>区域顺序:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Height:</source>
        <translation>高度:</translation>
    </message>
    <message>
        <location line="-214"/>
        <source>VDPAU deinterlacer (+resize).</source>
        <translation>VDPAU 去交错器 (+ 尺寸调整).</translation>
    </message>
    <message>
        <location line="+213"/>
        <source>Width:</source>
        <translation>宽度:</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Double framerate</source>
        <translation>双倍帧率</translation>
    </message>
</context>
<context>
    <name>vdpresize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="+205"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
    <message>
        <location line="-134"/>
        <source>vdpau: Resize image using vdpau.</source>
        <translation>vdpau: 使用vdpau调整图像尺寸.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>vdpau: Resize</source>
        <translation>vdpau: 调整尺寸</translation>
    </message>
    <message>
        <location line="+131"/>
        <source>Height:</source>
        <translation>高度:</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Width:</source>
        <translation>宽度:</translation>
    </message>
</context>
<context>
    <name>vflip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/verticalFlip/verticalFlip.cpp" line="+48"/>
        <source>Vertically flip the image.</source>
        <translation>垂直翻转图像-对X轴翻转.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Vertical Flip</source>
        <translation>上下颠倒</translation>
    </message>
</context>
<context>
    <name>vobSubDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="+74"/>
        <source>Idx File :</source>
        <translation>Idx 文件 :</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Select File</source>
        <translation>选择文件</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>Delay :</source>
        <translation>延迟 :</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Subtitle Font Size and Position</source>
        <translation>字幕字体尺寸和位置</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Language :</source>
        <translation>语言 :</translation>
    </message>
</context>
<context>
    <name>vorbis</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="+331"/>
        <source>VBR</source>
        <translation>VBR</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>_Bitrate:</source>
        <translation>比特率:</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Quality based</source>
        <translation>基本品质</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>_Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Vorbis Configuration</source>
        <translation>Vorbis 配置</translation>
    </message>
</context>
<context>
    <name>vp9encoder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="+28"/>
        <source>Realtime</source>
        <translation>实时</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Good quality</source>
        <translation>好品质</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Best quality</source>
        <translation>最佳品质</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>For optimal quality, select 2-pass average bitrate mode and set target bitrate to zero</source>
        <translation>若追求最优品质, 选择2-通平均比特模式并设置比特率为0</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deadline</source>
        <translation>截至时间</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Speed</source>
        <translation>速度</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threads</source>
        <translation>线程数</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use as many threads as CPU cores</source>
        <translation>使用与CPU核数相同的线程数量</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>GOP Size</source>
        <translation>GOP 尺寸</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use full color range</source>
        <translation>使用全部颜色范围</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Encoding Mode</source>
        <translation>编码方式</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Speed vs Quality</source>
        <translation>速度 VS 品质</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Keyframes</source>
        <translation>关键帧</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>libvpx VP9 Encoder Configuration</source>
        <translation>libvpx VP9 编码器配置</translation>
    </message>
</context>
<context>
    <name>vsWindow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vsProxy_qt4.cpp" line="+85"/>
        <source>Open VapourSynth File</source>
        <translation>打开VapourSynth文件</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>VS Script Files (*.vpy)</source>
        <translation>VS脚本文件 (*.vpy)</translation>
    </message>
</context>
<context>
    <name>waveletDenoise</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/ADM_vidWaveletDenoise.cpp" line="+42"/>
        <source>Wavelet denoiser</source>
        <translation>小波降噪器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Based on Marco Rossini&apos;s denoiser.</source>
        <translation>以Marco Rossini&apos;s 的降噪器为基础.</translation>
    </message>
</context>
<context>
    <name>waveletDenoiseDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="+14"/>
        <source>Wavelet Denoiser</source>
        <translation>小波降噪器</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Threshold</source>
        <translation>阈值</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Softness</source>
        <translation>柔化</translation>
    </message>
    <message>
        <location line="+62"/>
        <source>High quality</source>
        <translation>高品质</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Denoise chroma</source>
        <translation>色度降噪</translation>
    </message>
</context>
<context>
    <name>waveletSharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/ADM_vidWaveletSharp.cpp" line="+42"/>
        <source>Wavelet sharpener</source>
        <translation>小波锐化器</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Based on Marco Rossini&apos;s sharpener.</source>
        <translation>以Marco Rossini&apos;s 的锐化器为基础.</translation>
    </message>
</context>
<context>
    <name>waveletSharpDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="+14"/>
        <source>Wavelet Sharpener</source>
        <translation>小波锐化器</translation>
    </message>
    <message>
        <location line="+124"/>
        <source>Strength</source>
        <translation>强度</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Noise cutoff</source>
        <translation>降噪</translation>
    </message>
    <message>
        <location line="-54"/>
        <source>Radius</source>
        <translation>半径</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>High quality</source>
        <translation>高品质</translation>
    </message>
</context>
<context>
    <name>webmmuxer</name>
    <message>
        <source>Display width</source>
        <translation type="vanished">显示宽度</translation>
    </message>
    <message>
        <source>Force display width</source>
        <translation type="vanished">强制显示宽度</translation>
    </message>
    <message>
        <source>Saving Webm</source>
        <translation type="vanished">保存 Webm</translation>
    </message>
    <message>
        <source>Unsupported Audio.
Only VP8/VP9 video and Vorbis/Opus audio supported</source>
        <translation type="vanished">只支持 VP8/VP9 视频和 Vorbis/s/Opus音频</translation>
    </message>
    <message>
        <source>Unsupported Video.
Only VP8/VP9 video and Vorbis/Opus audio supported</source>
        <translation type="vanished">只支持 VP8/VP9 视频和 Vorbis/Opus音频</translation>
    </message>
    <message>
        <source>Webm Muxer</source>
        <translation type="vanished">Webm复合器</translation>
    </message>
</context>
<context>
    <name>workingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/working.ui" line="+20"/>
        <source>Elapsed:</source>
        <translation>已过时间:</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Time Remaining:</source>
        <translation>剩余时间:</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Processing</source>
        <translation>处理中</translation>
    </message>
</context>
<context>
    <name>x264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="+757"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location line="-495"/>
        <source>none</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="+652"/>
        <location line="+70"/>
        <location line="+14"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location line="-145"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>宏块树优化需要平差自适应量化(AQ)来启用,将自动禁用宏块树优化,您要继续吗?</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Save Profile</source>
        <translation>保存配置文件</translation>
    </message>
    <message>
        <location line="-173"/>
        <source>Target Video Size:</source>
        <translation>目标视频尺寸:</translation>
    </message>
    <message>
        <location line="+246"/>
        <source>Do you really want to delete the </source>
        <translation>你真的打算删除 </translation>
    </message>
    <message>
        <location line="-88"/>
        <source>Cannot load preset</source>
        <translation>无法加载预设</translation>
    </message>
    <message>
        <location line="+90"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location line="-686"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location line="+666"/>
        <source>Cannot save preset</source>
        <translation>无法保存预设</translation>
    </message>
    <message>
        <location line="-237"/>
        <source>Quantiser:</source>
        <translation>量化:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/ADM_x264Setup.cpp" line="+206"/>
        <source>Not coded</source>
        <translation>不编码</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="-4"/>
        <location line="+19"/>
        <source>kbit/s</source>
        <translation>kbit/s</translation>
    </message>
    <message>
        <location line="+213"/>
        <source>Replace the following preset ?:</source>
        <translation>替代以下的预设?:</translation>
    </message>
    <message>
        <location line="-233"/>
        <source>Target Bitrate:</source>
        <translation>目标比特率:</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Average Bitrate:</source>
        <translation>平均比特率:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/ADM_x264Setup.cpp" line="+0"/>
        <source>this mode has not been implemented
</source>
        <translation>这种模式尚未实现
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="-10"/>
        <source>Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+247"/>
        <source>Cannot delete custom profile</source>
        <translation>不能删除自定义的配置文件</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Overwrite</source>
        <translation>覆盖(Overwrite)</translation>
    </message>
    <message>
        <location line="-714"/>
        <source>Auto</source>
        <translation>自动</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location line="+578"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>宏块树优化需要平差自适应量化(AQ)来启用,平差自适应量化(AQ)将自动启用,您要继续吗?</translation>
    </message>
    <message>
        <location line="+163"/>
        <source>Delete preset</source>
        <translation>删除预设</translation>
    </message>
    <message>
        <location line="-1"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> 配置文件 ?.
如果它是一个系统配置文件,它将在下一次建立.</translation>
    </message>
</context>
<context>
    <name>x264ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="+2526"/>
        <location line="+179"/>
        <location line="+307"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location line="-2119"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="-664"/>
        <location line="+669"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location line="-649"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location line="+15"/>
        <location line="+639"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location line="-624"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>5</source>
        <translation>5</translation>
    </message>
    <message>
        <location line="+614"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location line="+2588"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location line="-2583"/>
        <source>15</source>
        <translation>15</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>31</source>
        <translation>31</translation>
    </message>
    <message>
        <location line="-457"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location line="-227"/>
        <source>1.1</source>
        <translation>1.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1.2</source>
        <translation>1.2</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1.3</source>
        <translation>1.3</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>2.1</source>
        <translation>2.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2.2</source>
        <translation>2.2</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>3.1</source>
        <translation>3.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>3.2</source>
        <translation>3.2</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>4.1</source>
        <translation>4.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4.2</source>
        <translation>4.2</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>5.1</source>
        <translation>5.1</translation>
    </message>
    <message>
        <location line="+2540"/>
        <source>Auto Variance</source>
        <translation>自方差</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto Variance Biased</source>
        <translation>自方差偏离</translation>
    </message>
    <message>
        <location line="+437"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation>自定义:</translation>
    </message>
    <message>
        <location line="+688"/>
        <source>CBR</source>
        <translation>CBR</translation>
    </message>
    <message>
        <location line="-763"/>
        <source>Add</source>
        <translation>加入</translation>
    </message>
    <message>
        <location line="+695"/>
        <source>FCC</source>
        <translation>FCC</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>GBR</source>
        <translation>GBR</translation>
    </message>
    <message>
        <location line="-199"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <location line="+257"/>
        <source>VBR</source>
        <translation>VBR</translation>
    </message>
    <message>
        <location line="-3626"/>
        <source>Fast First Pass</source>
        <translation>快速第1通</translation>
    </message>
    <message>
        <location line="-114"/>
        <location line="+1149"/>
        <source>Auto</source>
        <translation>自动</translation>
    </message>
    <message>
        <location line="+2288"/>
        <source>Crop</source>
        <translation>裁剪</translation>
    </message>
    <message>
        <location line="-1309"/>
        <location line="+861"/>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <location line="-1417"/>
        <source>Fast</source>
        <translation>快速</translation>
    </message>
    <message>
        <location line="+1989"/>
        <source>Film</source>
        <translation>电影</translation>
    </message>
    <message>
        <location line="-73"/>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <location line="-2354"/>
        <location line="+2601"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="-303"/>
        <source>Show</source>
        <translation>显示</translation>
    </message>
    <message>
        <location line="-678"/>
        <source>kbit</source>
        <translation>kbit</translation>
    </message>
    <message>
        <location line="-1462"/>
        <source>CABAC</source>
        <translation>CABAC</translation>
    </message>
    <message>
        <location line="+2244"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>BT709</source>
        <translation>BT709</translation>
    </message>
    <message>
        <location line="-3785"/>
        <source>Basic</source>
        <translation>基本</translation>
    </message>
    <message>
        <location line="+1393"/>
        <source>Frame</source>
        <translation>帧</translation>
    </message>
    <message>
        <location line="+412"/>
        <source>Minimum:</source>
        <translation>最小:</translation>
    </message>
    <message>
        <location line="+1801"/>
        <source>SECAM</source>
        <translation>SECAM</translation>
    </message>
    <message>
        <location line="+209"/>
        <source>YCgCo</source>
        <translation>YCgCo</translation>
    </message>
    <message>
        <location line="-740"/>
        <source>Zones</source>
        <translation>区域(Zones)</translation>
    </message>
    <message>
        <location line="-58"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation>每分片最大宏块:</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>bytes</source>
        <translation>字节</translation>
    </message>
    <message>
        <location line="-1801"/>
        <location line="+450"/>
        <location line="+36"/>
        <source>Disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location line="-453"/>
        <source>Direct Prediction Mode:</source>
        <translation>直接预测模式:</translation>
    </message>
    <message>
        <location line="+2275"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation>这些设定只是对播放设备的建议. 您自担使用风险.</translation>
    </message>
    <message>
        <location line="-548"/>
        <source>VBV Buffer Size:</source>
        <translation>VBV 缓冲容量:</translation>
    </message>
    <message>
        <location line="-1720"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation>P-帧的加权预测:</translation>
    </message>
    <message>
        <location line="+1203"/>
        <source>Maximum Quantiser Step:</source>
        <translation>最大量化步数:</translation>
    </message>
    <message>
        <location line="+542"/>
        <source>Maximum Size per Slice:</source>
        <translation>每分片最大尺寸:</translation>
    </message>
    <message>
        <location line="-269"/>
        <source>Variance AQ:</source>
        <translation>可变 AQ:</translation>
    </message>
    <message>
        <location line="-2149"/>
        <source>Advanced Rate Control</source>
        <translation>高级速率控制</translation>
    </message>
    <message>
        <location line="+3012"/>
        <source>Video Format:</source>
        <translation>视频格式:</translation>
    </message>
    <message>
        <location line="-265"/>
        <source>Generate fake interlaced</source>
        <translation>生成假交错格式</translation>
    </message>
    <message>
        <location line="-2252"/>
        <source>Motion Vector</source>
        <translation>运动向量</translation>
    </message>
    <message>
        <location line="-766"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation>恒定量化 (1通)</translation>
    </message>
    <message>
        <location line="+2040"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation>I和P-帧量化比率:</translation>
    </message>
    <message>
        <location line="+877"/>
        <source>Enforce Repeatability</source>
        <translation>强制可重复性</translation>
    </message>
    <message>
        <location line="-736"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation>P和B-帧量化比率:</translation>
    </message>
    <message>
        <location line="-675"/>
        <source>GOP Size:</source>
        <translation>GOP 尺寸:</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>B-frame Bias:</source>
        <translation>B-帧偏移:</translation>
    </message>
    <message>
        <location line="-883"/>
        <source>Hexagonal Search</source>
        <translation>六边形搜索</translation>
    </message>
    <message>
        <location line="-609"/>
        <source>Target Video Size:</source>
        <translation>目标视频尺寸:</translation>
    </message>
    <message>
        <location line="+1060"/>
        <source>8x8 DCT Spatial Transform</source>
        <translation>8 x 8 DCT 空域变换</translation>
    </message>
    <message>
        <location line="-354"/>
        <source>11 (Best)</source>
        <translation>11 (最好)</translation>
    </message>
    <message>
        <location line="-40"/>
        <source>1 (Fast)</source>
        <translation>1 (快速)</translation>
    </message>
    <message>
        <location line="+401"/>
        <source>8x8, 8x16 and 16x8 P-frame Intra-predicted Blocks</source>
        <translation>8x8,8x16和16x8 P-帧内预测块</translation>
    </message>
    <message>
        <location line="+748"/>
        <source>Noise Reduction:</source>
        <translation>降低噪声:</translation>
    </message>
    <message>
        <location line="-433"/>
        <source>Non-strict (Not Blu-ray Compatible)</source>
        <translation>非严格(与蓝光Blu-ray不兼容)</translation>
    </message>
    <message>
        <location line="+634"/>
        <source>Quantiser Control</source>
        <translation>量化控制</translation>
    </message>
    <message>
        <location line="-994"/>
        <source>Constrained Intra Prediction</source>
        <translation>帧内预测约束</translation>
    </message>
    <message>
        <location line="-989"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation>平均比特率 (2通)</translation>
    </message>
    <message>
        <location line="+2996"/>
        <source>BluRay compatibility</source>
        <translation>蓝光BluRay兼容性</translation>
    </message>
    <message>
        <location line="-734"/>
        <source>Quantiser Curve Compression</source>
        <translation>量化曲线压缩(QCComp)</translation>
    </message>
    <message>
        <location line="-1221"/>
        <source>8x8, 8x16 and 16x8 B-frame Intra-predicted Blocks</source>
        <translation>8x8,8x16和16x8 B-帧内预测块</translation>
    </message>
    <message>
        <location line="+442"/>
        <source>I-frames</source>
        <translation>I-帧</translation>
    </message>
    <message>
        <location line="-160"/>
        <source>B-frames</source>
        <translation>B-帧</translation>
    </message>
    <message>
        <location line="+1530"/>
        <source>Auto-detect</source>
        <translation>自动侦测</translation>
    </message>
    <message>
        <location line="-1380"/>
        <source>Adaptive B-frame Decision:</source>
        <translation>自适应B-帧决策:</translation>
    </message>
    <message>
        <location line="-219"/>
        <source>Top Field First</source>
        <translation>顶场优先</translation>
    </message>
    <message>
        <location line="+579"/>
        <source>Inter Luma Quantisation Deadzone:</source>
        <translation>外亮度量化静区:</translation>
    </message>
    <message>
        <location line="-180"/>
        <source>Trellis Quantization:</source>
        <translation>棚架量化:</translation>
    </message>
    <message>
        <location line="+173"/>
        <source>Intra Luma Quantisation Deadzone:</source>
        <translation>内亮度量化静区:</translation>
    </message>
    <message>
        <location line="+489"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation>曲线压缩之前减少波动:</translation>
    </message>
    <message>
        <location line="+971"/>
        <source>Component</source>
        <translation>分量</translation>
    </message>
    <message>
        <location line="+63"/>
        <location line="+63"/>
        <source>BT470M</source>
        <translation>BT470M</translation>
    </message>
    <message>
        <location line="-1787"/>
        <location line="+6"/>
        <source>Analysis</source>
        <translation>分析</translation>
    </message>
    <message>
        <location line="-1716"/>
        <source>Zero Latency</source>
        <translation>零延迟</translation>
    </message>
    <message>
        <location line="+347"/>
        <source>Maximum Constant Rate Factor</source>
        <translation>最大固定速率系数</translation>
    </message>
    <message>
        <location line="+2576"/>
        <source>Multithreading</source>
        <translation>多线程</translation>
    </message>
    <message>
        <location line="-3191"/>
        <location line="+3157"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location line="+311"/>
        <source>Predefined Aspect Ratio:</source>
        <translation>预定义宽高比:</translation>
    </message>
    <message>
        <location line="-2534"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation>非平均多-六边形搜索</translation>
    </message>
    <message>
        <location line="-331"/>
        <source>Advanced RC</source>
        <translation>高级 RC</translation>
    </message>
    <message>
        <location line="-342"/>
        <source>Fast Decode</source>
        <translation>快速解码</translation>
    </message>
    <message>
        <location line="+991"/>
        <source>Weighted References + Duplicates</source>
        <translation>加权参考 + 重复项</translation>
    </message>
    <message>
        <location line="+2528"/>
        <source>LOG100</source>
        <translation>LOG100</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>LOG316</source>
        <translation>LOG316</translation>
    </message>
    <message>
        <location line="-1252"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation>从色度到亮度量化偏移量:</translation>
    </message>
    <message>
        <location line="-2405"/>
        <source>IDC Level:</source>
        <translation>IDC级别:</translation>
    </message>
    <message>
        <location line="+3647"/>
        <source>Linear</source>
        <translation>线性</translation>
    </message>
    <message>
        <location line="-1505"/>
        <source>JVT Matrix</source>
        <translation>JVT 矩阵</translation>
    </message>
    <message>
        <location line="-1058"/>
        <source>Minimum Buffer Between Threads:</source>
        <translation>线程间的最小缓冲区:</translation>
    </message>
    <message>
        <location line="-315"/>
        <source>Motion</source>
        <translation>运动</translation>
    </message>
    <message>
        <location line="+2487"/>
        <source>As Input</source>
        <translation>与输入相同</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>Generate Access Unit Delimiters</source>
        <translation>生成访问单元分隔符</translation>
    </message>
    <message>
        <location line="-571"/>
        <source>Normal</source>
        <translation>普通</translation>
    </message>
    <message>
        <location line="+565"/>
        <source>Output</source>
        <translation>输出</translation>
    </message>
    <message>
        <location line="-1076"/>
        <source>Flat Matrix</source>
        <translation>平面矩阵</translation>
    </message>
    <message>
        <location line="+1457"/>
        <location line="+78"/>
        <location line="+58"/>
        <source>SMPTE240M</source>
        <translation>SMPTE240M</translation>
    </message>
    <message>
        <location line="-141"/>
        <location line="+136"/>
        <source>SMPTE170M</source>
        <translation>SMPTE170M</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>HRD Parameters:</source>
        <translation>HRD 参数:</translation>
    </message>
    <message>
        <location line="-3428"/>
        <location line="+200"/>
        <source>0 (High Quality)</source>
        <translation>0 (高品质)</translation>
    </message>
    <message>
        <location line="+1024"/>
        <source>B-frames as References:</source>
        <translation>B-帧作为参考:</translation>
    </message>
    <message>
        <location line="+2136"/>
        <source>Colour Matrix:</source>
        <translation>颜色矩阵:</translation>
    </message>
    <message>
        <location line="-3485"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation>固定比特率(CBR)(1通)</translation>
    </message>
    <message>
        <location line="+3629"/>
        <source>Full Range Samples</source>
        <translation>全范围采样</translation>
    </message>
    <message>
        <location line="-1710"/>
        <source>Quantisation Matrix</source>
        <translation>量化矩阵</translation>
    </message>
    <message>
        <location line="-1748"/>
        <location line="+200"/>
        <source>51 (Low Quality)</source>
        <translation>51 (低品质)</translation>
    </message>
    <message>
        <location line="+1034"/>
        <source>Optimal</source>
        <translation>优化</translation>
    </message>
    <message>
        <location line="-942"/>
        <location line="+2495"/>
        <source>frames</source>
        <translation>帧</translation>
    </message>
    <message>
        <location line="-1274"/>
        <source>Final Macroblock Only</source>
        <translation>只最终宏块</translation>
    </message>
    <message>
        <location line="-682"/>
        <source>Weighted Prediction for B-frames</source>
        <translation>为B-帧加权预测</translation>
    </message>
    <message>
        <location line="+1645"/>
        <source>kbit/s</source>
        <translation>kbit/s</translation>
    </message>
    <message>
        <location line="-81"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation>初始 VBV 缓冲区占用:</translation>
    </message>
    <message>
        <location line="-1757"/>
        <source>Maximum Motion Vector Length:</source>
        <translation>最大运动向量长度:</translation>
    </message>
    <message>
        <location line="+2565"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>BT470BG</source>
        <translation>BT470BG</translation>
    </message>
    <message>
        <location line="-3773"/>
        <source>Preset:</source>
        <translation>预设:</translation>
    </message>
    <message>
        <location line="+3296"/>
        <source>Pixel Aspect Ratio</source>
        <translation>像素宽高比(PAR)</translation>
    </message>
    <message>
        <location line="-1321"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation>快速跳过检测P-帧</translation>
    </message>
    <message>
        <location line="-484"/>
        <source>Normal Mode</source>
        <translation>普通模式</translation>
    </message>
    <message>
        <location line="-160"/>
        <source>4x4, 4x8 and 8x4 P-frame Intra-predicted Blocks</source>
        <translation>4x4,4x8和8x4 P-帧内预测块</translation>
    </message>
    <message>
        <location line="+589"/>
        <source>Mixed References</source>
        <translation>混合参考</translation>
    </message>
    <message>
        <location line="+882"/>
        <source>Advanced 1</source>
        <translation>高级 1</translation>
    </message>
    <message>
        <location line="+313"/>
        <source>Advanced 2</source>
        <translation>高级 2</translation>
    </message>
    <message>
        <location line="-2704"/>
        <location line="+200"/>
        <location line="+1649"/>
        <source>Quantiser</source>
        <translation>量化</translation>
    </message>
    <message>
        <location line="+1460"/>
        <source>SMPTEL170M</source>
        <translation>SMPTEL170M</translation>
    </message>
    <message>
        <location line="-309"/>
        <source>16:15 (PAL 4:3)</source>
        <translation>16:15 (PAL 4:3)</translation>
    </message>
    <message>
        <location line="-2661"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation>序列参数集标识:</translation>
    </message>
    <message>
        <location line="+1134"/>
        <source>Periodic Intra Refresh</source>
        <translation>周期性帧内刷新</translation>
    </message>
    <message>
        <location line="-480"/>
        <location line="+1333"/>
        <source>Strength:</source>
        <translation>强度:</translation>
    </message>
    <message>
        <location line="-1863"/>
        <source>Hadamard Exhaustive Search</source>
        <translation>Hadamard彻底搜索(TESA)</translation>
    </message>
    <message>
        <location line="+2076"/>
        <source>Slices per Frame:</source>
        <translation>每帧分片数:</translation>
    </message>
    <message>
        <location line="-1134"/>
        <source>Maximum:</source>
        <translation>最大:</translation>
    </message>
    <message>
        <location line="+737"/>
        <source>Quantiser Curve Compression:</source>
        <translation>量化曲线压缩(QCComp):</translation>
    </message>
    <message>
        <location line="+863"/>
        <source>64:45 (PAL 16:9)</source>
        <translation>64:45 (PAL 16:9)</translation>
    </message>
    <message>
        <location line="-3423"/>
        <source>Profile:</source>
        <translation>配置文件:</translation>
    </message>
    <message>
        <location line="+1526"/>
        <source>Interlaced:</source>
        <translation>隔行扫描:</translation>
    </message>
    <message>
        <location line="-650"/>
        <source>Exhaustive Search</source>
        <translation>彻底搜索</translation>
    </message>
    <message>
        <location line="-946"/>
        <source>Save As</source>
        <translation>另存新文件</translation>
    </message>
    <message>
        <location line="+1373"/>
        <source>Partition</source>
        <translation>分割</translation>
    </message>
    <message>
        <location line="-147"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation>最大运动向量搜索范围:</translation>
    </message>
    <message>
        <location line="+243"/>
        <source>Loop Filter:</source>
        <translation>循环过滤器:</translation>
    </message>
    <message>
        <location line="+175"/>
        <source>Maximum Reference Frames:</source>
        <translation>最大参考帧数:</translation>
    </message>
    <message>
        <location line="-713"/>
        <source>Diamond Search</source>
        <translation>菱形搜索</translation>
    </message>
    <message>
        <location line="+2090"/>
        <source>Slicing</source>
        <translation>切片</translation>
    </message>
    <message>
        <location line="-3062"/>
        <source>x264 Configuraton</source>
        <translation>x264 配置</translation>
    </message>
    <message>
        <location line="+1295"/>
        <source>Weighted References</source>
        <translation>加权参考</translation>
    </message>
    <message>
        <location line="-344"/>
        <source>Motion Estimation</source>
        <translation>运动估计</translation>
    </message>
    <message>
        <location line="+397"/>
        <source>Spatial</source>
        <translation>空域</translation>
    </message>
    <message>
        <location line="+1584"/>
        <source>Video Buffer Verifier</source>
        <translation>视频缓冲验证器(VBV)</translation>
    </message>
    <message>
        <location line="+704"/>
        <location line="+46"/>
        <location line="+58"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>Undefined</source>
        <translation>未定义</translation>
    </message>
    <message>
        <location line="-3055"/>
        <source>Macroblock-tree Rate Control</source>
        <translation>宏块-树速率控制</translation>
    </message>
    <message>
        <location line="+2718"/>
        <source>8:9 (NTSC 4:3)</source>
        <translation>8:9 (NTSC 4:3)</translation>
    </message>
    <message>
        <location line="-2260"/>
        <source>Prediction</source>
        <translation>预测</translation>
    </message>
    <message>
        <location line="+1968"/>
        <source>Disable</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location line="-632"/>
        <source>Minimum Quantiser:</source>
        <translation>最小量化:</translation>
    </message>
    <message>
        <location line="-649"/>
        <source>I-frame Threshold:</source>
        <translation>I-帧阈值:</translation>
    </message>
    <message>
        <location line="+1456"/>
        <source>Custom:</source>
        <comment>PAR</comment>
        <translation>自定义:</translation>
    </message>
    <message>
        <location line="-1003"/>
        <source>Maximum Quantiser:</source>
        <translation>最大量化:</translation>
    </message>
    <message>
        <location line="-319"/>
        <source>DCT Decimation on P-frames</source>
        <translation>在P-帧上进行DCT抽取</translation>
    </message>
    <message>
        <location line="-1931"/>
        <source>Tuning:</source>
        <translation>调整:</translation>
    </message>
    <message>
        <location line="+790"/>
        <source>Motion Estimation Method:</source>
        <translation>运动估计方法:</translation>
    </message>
    <message>
        <location line="-563"/>
        <source>Video Size (Two Pass)</source>
        <translation>视频尺寸(2通)</translation>
    </message>
    <message>
        <location line="-294"/>
        <source>Use advanced configuration</source>
        <translation>使用高级配置</translation>
    </message>
    <message>
        <location line="+1494"/>
        <source>Open GOP:</source>
        <translation>打开 GOP:</translation>
    </message>
    <message>
        <location line="-101"/>
        <source>Frame Encoding</source>
        <translation>帧编码</translation>
    </message>
    <message>
        <location line="+119"/>
        <source>Blu-ray Mode</source>
        <translation>Blu-ray模式</translation>
    </message>
    <message>
        <location line="+1930"/>
        <source>32:27 (NTSC 16:9)</source>
        <translation>32:27 (NTSC 16:9)</translation>
    </message>
    <message>
        <location line="-1677"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation>最大连续B-帧数:</translation>
    </message>
    <message>
        <location line="-514"/>
        <source>Temporal</source>
        <translation>时域</translation>
    </message>
    <message>
        <location line="+2273"/>
        <source>Overscan:</source>
        <translation>超扫描:</translation>
    </message>
    <message>
        <location line="-2065"/>
        <source>Threshold:</source>
        <translation>阈值:</translation>
    </message>
    <message>
        <location line="+1817"/>
        <source>Output 1</source>
        <translation>输出 1</translation>
    </message>
    <message>
        <location line="+208"/>
        <source>Output 2</source>
        <translation>输出 2</translation>
    </message>
    <message>
        <location line="-2123"/>
        <source>4x4 Intra-predicted Blocks</source>
        <translation>4x4 内预测块</translation>
    </message>
    <message>
        <location line="+1335"/>
        <source>Adaptive Quantisation</source>
        <translation>自适应量化(AQ)</translation>
    </message>
    <message>
        <location line="-728"/>
        <source>Always On</source>
        <translation>始终打开</translation>
    </message>
    <message>
        <location line="-420"/>
        <source>Bottom Field First</source>
        <translation>底场优先</translation>
    </message>
    <message>
        <location line="+496"/>
        <source>Psychovisual Trellis:</source>
        <translation>心理视觉棚架:</translation>
    </message>
    <message>
        <location line="-2056"/>
        <source>General</source>
        <translation>一般</translation>
    </message>
    <message>
        <location line="+2129"/>
        <source>Luma Quantisation Deadzone</source>
        <translation>亮度量化静区</translation>
    </message>
    <message>
        <location line="-174"/>
        <source>Chroma Motion Estimation</source>
        <translation>色度运动估计(CME)</translation>
    </message>
    <message>
        <location line="+1274"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation>自定义线程前视缓冲区:</translation>
    </message>
    <message>
        <location line="-1863"/>
        <source>8x8 Intra-predicted Blocks</source>
        <translation>8x8 内预测块</translation>
    </message>
    <message>
        <location line="-1096"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="+2580"/>
        <source>Maximum VBV Bitrate:</source>
        <translation>最大VBV比特率:</translation>
    </message>
    <message>
        <location line="-2516"/>
        <source>Encoding Mode:</source>
        <translation>编码模式:</translation>
    </message>
    <message>
        <location line="+1321"/>
        <source>Strictly Hierarchical Pyramid</source>
        <translation>严格分层金字塔</translation>
    </message>
    <message>
        <location line="-325"/>
        <source>Partition Search</source>
        <translation>分割搜索</translation>
    </message>
    <message>
        <location line="+1890"/>
        <source>Slice-based Threading</source>
        <translation>基于分片的线程</translation>
    </message>
    <message>
        <location line="-736"/>
        <source>Average Bitrate Tolerance:</source>
        <translation>平均比特率容许误差:</translation>
    </message>
    <message>
        <location line="-2550"/>
        <source>Configuration:</source>
        <translation>配置:</translation>
    </message>
    <message>
        <location line="+1030"/>
        <source>Subpixel Refinement</source>
        <translation>次像素精细化</translation>
    </message>
    <message>
        <location line="+2739"/>
        <source>Transfer Characteristics:</source>
        <translation>转换特性:</translation>
    </message>
    <message>
        <location line="-1684"/>
        <source>Psychovisual Rate Distortion Optimisation:</source>
        <translation>心理视觉优化(Psy RDO):</translation>
    </message>
    <message>
        <location line="+1483"/>
        <source>Video Usability Information</source>
        <translation>视频可用性信息</translation>
    </message>
    <message>
        <location line="-3201"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation>固定速率系数(1通)</translation>
    </message>
    <message>
        <location line="+439"/>
        <source>Frametype Lookahead:</source>
        <translation>帧类型前视:</translation>
    </message>
    <message>
        <location line="+2900"/>
        <source>Colour Primaries:</source>
        <translation>基色:</translation>
    </message>
    <message>
        <location line="-3398"/>
        <source>Threads </source>
        <translation>线程数 </translation>
    </message>
    <message>
        <location line="+3645"/>
        <source>Chroma Sample Location:</source>
        <translation>色度采样位置:</translation>
    </message>
    <message>
        <location line="-1191"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation>曲线压缩之后减少波动:</translation>
    </message>
    <message>
        <location line="-459"/>
        <source>Custom Matrix</source>
        <translation>自定义矩阵</translation>
    </message>
</context>
<context>
    <name>x264CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="+2374"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location line="-2314"/>
        <location line="+446"/>
        <location line="+446"/>
        <location line="+703"/>
        <source>Luma:</source>
        <translation>亮度:</translation>
    </message>
    <message>
        <location line="-1385"/>
        <location line="+446"/>
        <source>Chroma U/V:</source>
        <translation>色度 U/V:</translation>
    </message>
    <message>
        <location line="+1668"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location line="-30"/>
        <source>Load File</source>
        <translation>加载文件</translation>
    </message>
    <message>
        <location line="-2338"/>
        <source>x264 Custom Matrix</source>
        <translation>x264自定义矩阵</translation>
    </message>
    <message>
        <location line="+462"/>
        <source>Inter 4x4</source>
        <translation>Inter内 4x4</translation>
    </message>
    <message>
        <location line="+1149"/>
        <source>Inter 8x8</source>
        <translation>Inter内 8x8</translation>
    </message>
    <message>
        <location line="-1595"/>
        <source>Intra 4x4</source>
        <translation>Intra内 4x4</translation>
    </message>
    <message>
        <location line="+892"/>
        <source>Intra 8x8</source>
        <translation>Intra内 8x8</translation>
    </message>
</context>
<context>
    <name>x265</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="+732"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location line="-442"/>
        <source>none</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="+627"/>
        <location line="+67"/>
        <location line="+17"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location line="-125"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>宏块树优化需要平差自适应量化(AQ)来启用,将自动禁用宏块树优化,您要继续吗?</translation>
    </message>
    <message>
        <location line="+56"/>
        <source>Save Profile</source>
        <translation>保存配置文件</translation>
    </message>
    <message>
        <location line="-201"/>
        <source>Target Video Size:</source>
        <translation>目标视频尺寸:</translation>
    </message>
    <message>
        <location line="+274"/>
        <source>Do you really want to delete the </source>
        <translation>你真的打算删除 </translation>
    </message>
    <message>
        <location line="-88"/>
        <source>Cannot load preset</source>
        <translation>无法加载预设</translation>
    </message>
    <message>
        <location line="+90"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location line="-642"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location line="+619"/>
        <source>Cannot save preset</source>
        <translation>无法保存预设</translation>
    </message>
    <message>
        <location line="-262"/>
        <source>Quantiser:</source>
        <translation>量化:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/ADM_x265Setup.cpp" line="+238"/>
        <source>Not coded</source>
        <translation>不编码</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>this mode has not been implemented
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="-5"/>
        <location line="+20"/>
        <source>kbit/s</source>
        <translation>kbit/s</translation>
    </message>
    <message>
        <location line="+242"/>
        <source>Replace the following preset ?:</source>
        <translation>替代以下的预设?:</translation>
    </message>
    <message>
        <location line="-263"/>
        <source>Target Bitrate:</source>
        <translation>目标比特率:</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Average Bitrate:</source>
        <translation>平均比特率:</translation>
    </message>
    <message>
        <source>this mode has not been implemented</source>
        <translation type="vanished">此模式尚未实现</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>Quality:</source>
        <translation>品质:</translation>
    </message>
    <message>
        <location line="+275"/>
        <source>Cannot delete custom profile</source>
        <translation>不能删除自定义的配置文件</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Overwrite</source>
        <translation>覆盖(Overwrite)</translation>
    </message>
    <message>
        <location line="-690"/>
        <source>Auto</source>
        <translation>自动</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Default</source>
        <translation>默认值</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location line="+572"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>宏块树优化需要平差自适应量化(AQ)来启用,平差自适应量化(AQ)将自动启用,您要继续吗?</translation>
    </message>
    <message>
        <location line="+143"/>
        <source>Delete preset</source>
        <translation>删除预设</translation>
    </message>
    <message>
        <location line="-1"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> 配置文件 ?.
如果它是一个系统配置文件,它将在下一次建立.</translation>
    </message>
</context>
<context>
    <name>x265ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="+2308"/>
        <location line="+608"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location line="-2065"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <source>2</source>
        <translation type="vanished">2</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <source>4</source>
        <translation type="vanished">4</translation>
    </message>
    <message>
        <source>5</source>
        <translation type="vanished">5</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location line="+346"/>
        <source>Motion Partitions:</source>
        <translation>运动分割:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Rectangular</source>
        <translation>方形</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Asymmetric</source>
        <translation>非对称</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Limit Motion Partition Modes</source>
        <translation>限制运动分割模式</translation>
    </message>
    <message>
        <location line="+613"/>
        <source>RDO in Quantization:</source>
        <translation>量化中的RDO:</translation>
    </message>
    <message>
        <location line="+936"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location line="-1913"/>
        <source>15</source>
        <translation>15</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>31</source>
        <translation>31</translation>
    </message>
    <message>
        <location line="+1312"/>
        <source>Cb</source>
        <translation>Cb</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Cr</source>
        <translation>Cr</translation>
    </message>
    <message>
        <location line="-1789"/>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <source>1.1</source>
        <translation type="vanished">1.1</translation>
    </message>
    <message>
        <source>1.2</source>
        <translation type="vanished">1.2</translation>
    </message>
    <message>
        <source>1.3</source>
        <translation type="vanished">1.3</translation>
    </message>
    <message>
        <source>2.1</source>
        <translation type="vanished">2.1</translation>
    </message>
    <message>
        <source>2.2</source>
        <translation type="vanished">2.2</translation>
    </message>
    <message>
        <source>3.1</source>
        <translation type="vanished">3.1</translation>
    </message>
    <message>
        <source>3.2</source>
        <translation type="vanished">3.2</translation>
    </message>
    <message>
        <source>4.1</source>
        <translation type="vanished">4.1</translation>
    </message>
    <message>
        <source>4.2</source>
        <translation type="vanished">4.2</translation>
    </message>
    <message>
        <source>5.1</source>
        <translation type="vanished">5.1</translation>
    </message>
    <message>
        <location line="-131"/>
        <source>Output Bit Depth:</source>
        <translation>输出位深:</translation>
    </message>
    <message>
        <location line="+889"/>
        <source>Prediction for B-frames:</source>
        <translation>为B-帧预测</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Weighted Prediction</source>
        <translation>加权预测</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Intra Prediction</source>
        <translation>帧内预测</translation>
    </message>
    <message>
        <location line="+124"/>
        <source>Loop Filter</source>
        <translation>循环过滤器:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Open GOP</source>
        <translation>打开 GOP</translation>
    </message>
    <message>
        <location line="+91"/>
        <source>Limit References by:</source>
        <translation>限定参考使用:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>CU</source>
        <translation>CU</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Depth</source>
        <translation>深度</translation>
    </message>
    <message>
        <location line="+141"/>
        <source>Enabled</source>
        <translation>启用</translation>
    </message>
    <message>
        <location line="+189"/>
        <source>Rate Distortion Optimisation:</source>
        <translation>速率失真优化</translation>
    </message>
    <message>
        <location line="+22"/>
        <location line="+88"/>
        <source>Level:</source>
        <translation>级别:</translation>
    </message>
    <message>
        <location line="-54"/>
        <location line="+88"/>
        <source>Psycho-visual Strength:</source>
        <translation>心理视觉强度:</translation>
    </message>
    <message>
        <location line="+86"/>
        <source>Strong Intra Smoothing</source>
        <translation>强内部平滑</translation>
    </message>
    <message>
        <location line="+457"/>
        <source>Auto-Variance Biased</source>
        <translation>自方差偏离</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto-Variance Edge</source>
        <translation>自方差边缘</translation>
    </message>
    <message>
        <location line="+91"/>
        <source>Display</source>
        <translation>显示</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Color Description</source>
        <translation>颜色描述</translation>
    </message>
    <message>
        <location line="+160"/>
        <source>The value set here will almost always be ignored in favor of the aspect ratio stored in the container.  Configure that via the options in Output Format for the muxer chosen.</source>
        <translation>在此处设置的值几乎一直会被忽略, 因为我们更偏向于被存在容器中的宽高比. 使用所选的复用器的输出格式选项来配置它</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Unspecified</source>
        <comment>PAR</comment>
        <translation>未指定</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Custom Aspect Ratio:</source>
        <comment>PAR</comment>
        <translation>自定义宽高比:</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Same as Input</source>
        <translation>与输入相同</translation>
    </message>
    <message>
        <location line="+366"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation>自定义:</translation>
    </message>
    <message>
        <location line="+231"/>
        <source>CBR</source>
        <translation>CBR</translation>
    </message>
    <message>
        <location line="-306"/>
        <source>Add</source>
        <translation>加入</translation>
    </message>
    <message>
        <source>FCC</source>
        <translation type="vanished">FCC</translation>
    </message>
    <message>
        <source>GBR</source>
        <translation type="vanished">GBR</translation>
    </message>
    <message>
        <location line="-517"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <location line="+833"/>
        <source>VBR</source>
        <translation>VBR</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="vanished">自动</translation>
    </message>
    <message>
        <location line="-38"/>
        <source>Crop</source>
        <translation>裁剪</translation>
    </message>
    <message>
        <location line="-1336"/>
        <location line="+1080"/>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <location line="-1589"/>
        <source>Fast</source>
        <translation>快速</translation>
    </message>
    <message>
        <source>Film</source>
        <translation type="vanished">电影</translation>
    </message>
    <message>
        <location line="+1055"/>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <location line="+823"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="-38"/>
        <source>Show</source>
        <translation>显示</translation>
    </message>
    <message>
        <location line="-486"/>
        <source>kbit</source>
        <translation>kbit</translation>
    </message>
    <message>
        <source>BT709</source>
        <translation type="vanished">BT709</translation>
    </message>
    <message>
        <location line="-2771"/>
        <source>Basic</source>
        <translation>基本</translation>
    </message>
    <message>
        <location line="+1195"/>
        <source>Frame</source>
        <translation>帧</translation>
    </message>
    <message>
        <location line="+308"/>
        <source>Minimum:</source>
        <translation>最小:</translation>
    </message>
    <message>
        <location line="+974"/>
        <source>SECAM</source>
        <translation>SECAM</translation>
    </message>
    <message>
        <source>YCgCo</source>
        <translation type="vanished">YCgCo</translation>
    </message>
    <message>
        <location line="+502"/>
        <source>Zones</source>
        <translation>区域(Zones)</translation>
    </message>
    <message>
        <location line="-58"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation>每分片最大宏块:</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>bytes</source>
        <translation>字节</translation>
    </message>
    <message>
        <location line="-2216"/>
        <source>Coding Unit-tree Rate Control</source>
        <translation>编码树单元速率控制</translation>
    </message>
    <message>
        <location line="+460"/>
        <location line="+269"/>
        <location line="+43"/>
        <source>Disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location line="+1759"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation>这些设定只是对播放设备的建议. 您自担使用风险.</translation>
    </message>
    <message>
        <location line="-356"/>
        <source>VBV Buffer Size:</source>
        <translation>VBV 缓冲容量:</translation>
    </message>
    <message>
        <location line="-1725"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation>P-帧的加权预测:</translation>
    </message>
    <message>
        <location line="+925"/>
        <source>Maximum Quantiser Step:</source>
        <translation>最大量化步数:</translation>
    </message>
    <message>
        <location line="+825"/>
        <source>Maximum Size per Slice:</source>
        <translation>每分片最大尺寸:</translation>
    </message>
    <message>
        <location line="-570"/>
        <source>Variance AQ:</source>
        <translation>可变 AQ:</translation>
    </message>
    <message>
        <location line="-1794"/>
        <source>Advanced Rate Control</source>
        <translation>高级速率控制</translation>
    </message>
    <message>
        <location line="+1925"/>
        <source>Video Format:</source>
        <translation>视频格式:</translation>
    </message>
    <message>
        <location line="-1430"/>
        <source>Motion Vector</source>
        <translation>运动向量</translation>
    </message>
    <message>
        <location line="-763"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation>恒定量化 (1通)</translation>
    </message>
    <message>
        <location line="+1764"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation>I和P-帧量化比率:</translation>
    </message>
    <message>
        <location line="+1096"/>
        <source>Enforce Repeatability</source>
        <translation>强制可重复性</translation>
    </message>
    <message>
        <location line="-989"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation>P和B-帧量化比率:</translation>
    </message>
    <message>
        <location line="-628"/>
        <source>GOP Size:</source>
        <translation>GOP 尺寸:</translation>
    </message>
    <message>
        <location line="-126"/>
        <source>B-frame Bias:</source>
        <translation>B-帧偏移:</translation>
    </message>
    <message>
        <location line="-529"/>
        <source>Hexagonal Search</source>
        <translation>六边形搜索</translation>
    </message>
    <message>
        <location line="-368"/>
        <source>Use Strict Constant Bitrate Mode</source>
        <translation>使用严格固定比特率模式(CBR)</translation>
    </message>
    <message>
        <location line="-238"/>
        <source>Target Video Size:</source>
        <translation>目标视频尺寸:</translation>
    </message>
    <message>
        <location line="+703"/>
        <source>7 (Best)</source>
        <translation>7 (最好)</translation>
    </message>
    <message>
        <location line="-40"/>
        <source>1 (Fast)</source>
        <translation>1 (快速)</translation>
    </message>
    <message>
        <source>Noise Reduction:</source>
        <translation type="vanished">降低噪声:</translation>
    </message>
    <message>
        <source>Non-strict (Not Blu-ray Compatible)</source>
        <translation type="vanished">非严格(与蓝光Blu-ray不兼容)</translation>
    </message>
    <message>
        <location line="+1077"/>
        <source>Quantiser Control</source>
        <translation>量化控制</translation>
    </message>
    <message>
        <location line="-881"/>
        <source>Constrained Intra Prediction</source>
        <translation>帧内预测约束</translation>
    </message>
    <message>
        <location line="-826"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation>平均比特率 (2通)</translation>
    </message>
    <message>
        <location line="+1904"/>
        <source>Quantiser Curve Compression</source>
        <translation>量化曲线压缩(QCComp)</translation>
    </message>
    <message>
        <location line="-684"/>
        <source>I-frames</source>
        <translation>I-帧</translation>
    </message>
    <message>
        <location line="-155"/>
        <source>B-frames</source>
        <translation>B-帧</translation>
    </message>
    <message>
        <location line="+1731"/>
        <source>Auto-detect</source>
        <translation>自动侦测</translation>
    </message>
    <message>
        <location line="-1660"/>
        <source>Adaptive B-frame Decision:</source>
        <translation>自适应B-帧决策:</translation>
    </message>
    <message>
        <location line="-166"/>
        <source>Top Field First</source>
        <translation>顶场优先</translation>
    </message>
    <message>
        <source>Trellis Quantization:</source>
        <translation type="vanished">棚架量化:</translation>
    </message>
    <message>
        <location line="+987"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation>曲线压缩之前减少波动:</translation>
    </message>
    <message>
        <location line="+239"/>
        <source>Component</source>
        <translation>分量</translation>
    </message>
    <message>
        <source>BT470M</source>
        <translation type="vanished">BT470M</translation>
    </message>
    <message>
        <location line="-841"/>
        <location line="+6"/>
        <source>Analysis</source>
        <translation>分析</translation>
    </message>
    <message>
        <location line="-1102"/>
        <source>Maximum Constant Rate Factor</source>
        <translation>最大固定速率系数</translation>
    </message>
    <message>
        <location line="+2522"/>
        <source>Multithreading</source>
        <translation>多线程</translation>
    </message>
    <message>
        <location line="-3095"/>
        <location line="+3061"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location line="-393"/>
        <source>Predefined Aspect Ratio:</source>
        <translation>预定义宽高比:</translation>
    </message>
    <message>
        <location line="-1776"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation>非平均多-六边形搜索</translation>
    </message>
    <message>
        <location line="-331"/>
        <source>Advanced RC</source>
        <translation>高级 RC</translation>
    </message>
    <message>
        <location line="+640"/>
        <source>Weighted References + Duplicates</source>
        <translation>加权参考 + 重复项</translation>
    </message>
    <message>
        <source>LOG100</source>
        <translation type="vanished">LOG100</translation>
    </message>
    <message>
        <source>LOG316</source>
        <translation type="vanished">LOG316</translation>
    </message>
    <message>
        <location line="+828"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation>从色度到亮度量化偏移量:</translation>
    </message>
    <message>
        <location line="-1808"/>
        <source>IDC Level:</source>
        <translation>IDC级别:</translation>
    </message>
    <message>
        <source>Linear</source>
        <translation type="vanished">线性</translation>
    </message>
    <message>
        <location line="+1734"/>
        <source>JVT Matrix</source>
        <translation>JVT 矩阵</translation>
    </message>
    <message>
        <location line="-1100"/>
        <source>Motion</source>
        <translation>运动</translation>
    </message>
    <message>
        <source>As Input</source>
        <translation type="vanished">与输入相同</translation>
    </message>
    <message>
        <location line="+2391"/>
        <source>Generate Access Unit Delimiters</source>
        <translation>生成访问单元分隔符</translation>
    </message>
    <message>
        <location line="-872"/>
        <source>Normal</source>
        <translation>普通</translation>
    </message>
    <message>
        <location line="+860"/>
        <location line="+6"/>
        <source>Output</source>
        <translation>输出</translation>
    </message>
    <message>
        <location line="-1295"/>
        <source>Flat Matrix</source>
        <translation>平面矩阵</translation>
    </message>
    <message>
        <source>SMPTE240M</source>
        <translation type="vanished">SMPTE240M</translation>
    </message>
    <message>
        <source>SMPTE170M</source>
        <translation type="vanished">SMPTE170M</translation>
    </message>
    <message>
        <location line="+1388"/>
        <source>HRD Parameters:</source>
        <translation>HRD 参数:</translation>
    </message>
    <message>
        <location line="-2930"/>
        <location line="+213"/>
        <source>0 (High Quality)</source>
        <translation>0 (高品质)</translation>
    </message>
    <message>
        <location line="+877"/>
        <source>B-frames as References:</source>
        <translation>B-帧作为参考:</translation>
    </message>
    <message>
        <location line="+1116"/>
        <source>Colour Matrix:</source>
        <translation>颜色矩阵:</translation>
    </message>
    <message>
        <location line="-2315"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation>固定比特率(CBR)(1通)</translation>
    </message>
    <message>
        <location line="+603"/>
        <source>Star Search</source>
        <translation>星型搜索</translation>
    </message>
    <message>
        <location line="+2512"/>
        <source>Full Range Samples</source>
        <translation>全范围采样</translation>
    </message>
    <message>
        <location line="-1472"/>
        <source>Quantisation Matrix</source>
        <translation>量化矩阵</translation>
    </message>
    <message>
        <location line="-58"/>
        <source>Noise Reduction Intra:</source>
        <translation>内部降噪:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Noise Reduction Inter:</source>
        <translation>外部降噪:</translation>
    </message>
    <message>
        <location line="-1444"/>
        <location line="+213"/>
        <source>51 (Low Quality)</source>
        <translation>51 (低品质)</translation>
    </message>
    <message>
        <location line="+808"/>
        <source>Optimal</source>
        <translation>优化</translation>
    </message>
    <message>
        <location line="-716"/>
        <location line="+2441"/>
        <source>frames</source>
        <translation>帧</translation>
    </message>
    <message>
        <source>Final Macroblock Only</source>
        <translation type="vanished">只最终宏块</translation>
    </message>
    <message>
        <location line="-2999"/>
        <source>Frame Threads </source>
        <translation>帧线程数 </translation>
    </message>
    <message>
        <source>Weighted Prediction for B-frames</source>
        <translation type="vanished">为B-帧加权预测</translation>
    </message>
    <message>
        <location line="+2183"/>
        <source>Auto Variance AQ</source>
        <translation>自方差 AQ</translation>
    </message>
    <message>
        <location line="+505"/>
        <source>kbit/s</source>
        <translation>kbit/s</translation>
    </message>
    <message>
        <location line="-81"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation>初始 VBV 缓冲区占用:</translation>
    </message>
    <message>
        <source>BT470BG</source>
        <translation type="vanished">BT470BG</translation>
    </message>
    <message>
        <location line="-2659"/>
        <source>Preset:</source>
        <translation>预设:</translation>
    </message>
    <message>
        <location line="+2496"/>
        <source>Pixel Aspect Ratio</source>
        <translation>像素宽高比(PAR)</translation>
    </message>
    <message>
        <location line="-959"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation>快速跳过检测P-帧</translation>
    </message>
    <message>
        <source>Normal Mode</source>
        <translation type="vanished">普通模式</translation>
    </message>
    <message>
        <location line="+1095"/>
        <source>Advanced 1</source>
        <translation>高级 1</translation>
    </message>
    <message>
        <location line="+313"/>
        <source>Advanced 2</source>
        <translation>高级 2</translation>
    </message>
    <message>
        <location line="-2663"/>
        <location line="+213"/>
        <location line="+1376"/>
        <source>Quantiser</source>
        <translation>量化</translation>
    </message>
    <message>
        <source>SMPTEL170M</source>
        <translation type="vanished">SMPTEL170M</translation>
    </message>
    <message>
        <source>16:15 (PAL 4:3)</source>
        <translation type="vanished">16:15 (PAL 4:3)</translation>
    </message>
    <message>
        <location line="-1237"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation>序列参数集标识:</translation>
    </message>
    <message>
        <location line="+1637"/>
        <source>Strength:</source>
        <translation>强度:</translation>
    </message>
    <message>
        <location line="+509"/>
        <source>Slices per Frame:</source>
        <translation>每帧分片数:</translation>
    </message>
    <message>
        <location line="-2787"/>
        <source>Pool Threads </source>
        <translation>线程池 </translation>
    </message>
    <message>
        <location line="+1447"/>
        <source>Maximum:</source>
        <translation>最大:</translation>
    </message>
    <message>
        <location line="+642"/>
        <source>Quantiser Curve Compression:</source>
        <translation>量化曲线压缩(QCComp):</translation>
    </message>
    <message>
        <source>64:45 (PAL 16:9)</source>
        <translation type="vanished">64:45 (PAL 16:9)</translation>
    </message>
    <message>
        <location line="-2163"/>
        <source>Profile:</source>
        <translation>配置文件:</translation>
    </message>
    <message>
        <location line="+1208"/>
        <source>Interlaced:</source>
        <translation>隔行扫描:</translation>
    </message>
    <message>
        <location line="-369"/>
        <source>Exhaustive Search</source>
        <translation>彻底搜索</translation>
    </message>
    <message>
        <location line="-909"/>
        <source>Save As</source>
        <translation>另存新文件</translation>
    </message>
    <message>
        <location line="+1104"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation>最大运动向量搜索范围:</translation>
    </message>
    <message>
        <source>Loop Filter:</source>
        <translation type="vanished">循环过滤器:</translation>
    </message>
    <message>
        <location line="+222"/>
        <source>Maximum Reference Frames:</source>
        <translation>最大参考帧数:</translation>
    </message>
    <message>
        <location line="-437"/>
        <source>Diamond Search</source>
        <translation>菱形搜索</translation>
    </message>
    <message>
        <location line="+2036"/>
        <source>Slicing</source>
        <translation>切片</translation>
    </message>
    <message>
        <location line="-2966"/>
        <source>x265 Configuration</source>
        <translation>x265 配置</translation>
    </message>
    <message>
        <location line="+1244"/>
        <source>Weighted References</source>
        <translation>加权参考</translation>
    </message>
    <message>
        <location line="-335"/>
        <source>Motion Estimation</source>
        <translation>运动估计</translation>
    </message>
    <message>
        <location line="+1927"/>
        <source>Video Buffer Verifier</source>
        <translation>视频缓冲验证器(VBV)</translation>
    </message>
    <message>
        <location line="-283"/>
        <location line="+795"/>
        <source>Undefined</source>
        <translation>未定义</translation>
    </message>
    <message>
        <source>8:9 (NTSC 4:3)</source>
        <translation type="vanished">8:9 (NTSC 4:3)</translation>
    </message>
    <message>
        <location line="-2191"/>
        <source>Prediction</source>
        <translation>预测</translation>
    </message>
    <message>
        <location line="+1994"/>
        <source>Disable</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location line="-1487"/>
        <source>I-frame Threshold:</source>
        <translation>I-帧阈值:</translation>
    </message>
    <message>
        <source>Custom:</source>
        <comment>PAR</comment>
        <translation type="vanished">自定义:</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>DCT Decimation on P-frames</source>
        <translation>在P-帧上进行DCT抽取</translation>
    </message>
    <message>
        <location line="-1558"/>
        <source>Tuning:</source>
        <translation>调整:</translation>
    </message>
    <message>
        <location line="+739"/>
        <source>Motion Estimation Method:</source>
        <translation>运动估计方法:</translation>
    </message>
    <message>
        <location line="-560"/>
        <source>Video Size (Two Pass)</source>
        <translation>视频尺寸(2通)</translation>
    </message>
    <message>
        <location line="-255"/>
        <source>Use advanced configuration</source>
        <translation>使用高级配置</translation>
    </message>
    <message>
        <source>Open GOP:</source>
        <translation type="vanished">打开 GOP:</translation>
    </message>
    <message>
        <location line="+1195"/>
        <source>Frame Encoding</source>
        <translation>帧编码</translation>
    </message>
    <message>
        <source>Blu-ray Mode</source>
        <translation type="vanished">Blu-ray模式</translation>
    </message>
    <message>
        <source>32:27 (NTSC 16:9)</source>
        <translation type="vanished">32:27 (NTSC 16:9)</translation>
    </message>
    <message>
        <location line="+136"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation>最大连续B-帧数:</translation>
    </message>
    <message>
        <location line="+1905"/>
        <source>Overscan:</source>
        <translation>超扫描:</translation>
    </message>
    <message>
        <source>Output 1</source>
        <translation type="vanished">输出 1</translation>
    </message>
    <message>
        <source>Output 2</source>
        <translation type="vanished">输出 2</translation>
    </message>
    <message>
        <location line="-937"/>
        <source>Adaptive Quantisation</source>
        <translation>自适应量化(AQ)</translation>
    </message>
    <message>
        <source>Always On</source>
        <translation type="vanished">始终打开</translation>
    </message>
    <message>
        <location line="-1064"/>
        <source>Bottom Field First</source>
        <translation>底场优先</translation>
    </message>
    <message>
        <location line="-1247"/>
        <source>General</source>
        <translation>一般</translation>
    </message>
    <message>
        <location line="+3133"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation>自定义线程前视缓冲区:</translation>
    </message>
    <message>
        <location line="-2915"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="+2536"/>
        <source>Maximum VBV Bitrate:</source>
        <translation>最大VBV比特率:</translation>
    </message>
    <message>
        <location line="-2459"/>
        <source>Encoding Mode:</source>
        <translation>编码模式:</translation>
    </message>
    <message>
        <source>Strictly Hierarchical Pyramid</source>
        <translation type="vanished">严格分层金字塔</translation>
    </message>
    <message>
        <location line="+2829"/>
        <source>Slice-based Threading</source>
        <translation>基于分片的线程</translation>
    </message>
    <message>
        <source>Average Bitrate Tolerance:</source>
        <translation type="vanished">平均比特率容许误差:</translation>
    </message>
    <message>
        <location line="-3190"/>
        <source>Configuration:</source>
        <translation>配置:</translation>
    </message>
    <message>
        <location line="+988"/>
        <source>Subpixel Refinement</source>
        <translation>次像素精细化</translation>
    </message>
    <message>
        <location line="+1617"/>
        <source>Transfer Characteristics:</source>
        <translation>转换特性:</translation>
    </message>
    <message>
        <source>Psychovisual Rate Distortion Optimisation:</source>
        <translation type="vanished">心理视觉优化(Psy RDO):</translation>
    </message>
    <message>
        <location line="+675"/>
        <source>Video Usability Information</source>
        <translation>视频可用性信息</translation>
    </message>
    <message>
        <location line="-2952"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation>固定速率系数(1通)</translation>
    </message>
    <message>
        <location line="+436"/>
        <source>Frametype Lookahead:</source>
        <translation>帧类型前视:</translation>
    </message>
    <message>
        <location line="+1813"/>
        <source>Colour Primaries:</source>
        <translation>基色:</translation>
    </message>
    <message>
        <location line="+823"/>
        <source>Chroma Sample Location:</source>
        <translation>色度采样位置:</translation>
    </message>
    <message>
        <location line="-1035"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation>曲线压缩之后减少波动:</translation>
    </message>
    <message>
        <location line="-377"/>
        <source>Custom Matrix</source>
        <translation>自定义矩阵</translation>
    </message>
</context>
<context>
    <name>x265CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="+2372"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location line="-2314"/>
        <location line="+446"/>
        <location line="+446"/>
        <location line="+703"/>
        <source>Luma:</source>
        <translation>亮度:</translation>
    </message>
    <message>
        <location line="-1385"/>
        <location line="+446"/>
        <source>Chroma U/V:</source>
        <translation>色度 U/V:</translation>
    </message>
    <message>
        <location line="+1668"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location line="-30"/>
        <source>Load File</source>
        <translation>加载文件</translation>
    </message>
    <message>
        <location line="-2338"/>
        <source>x265 Custom Matrix</source>
        <translation>x265 自定义矩阵</translation>
    </message>
    <message>
        <location line="+462"/>
        <source>Inter 4x4</source>
        <translation>Inter内 4x4</translation>
    </message>
    <message>
        <location line="+1149"/>
        <source>Inter 8x8</source>
        <translation>Inter内 8x8</translation>
    </message>
    <message>
        <location line="-1595"/>
        <source>Intra 4x4</source>
        <translation>Intra内 4x4</translation>
    </message>
    <message>
        <location line="+892"/>
        <source>Intra 8x8</source>
        <translation>Intra内 8x8</translation>
    </message>
</context>
<context>
    <name>xvid4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="+66"/>
        <source>Three threads</source>
        <translation>三个线程</translation>
    </message>
    <message>
        <location line="-9"/>
        <source>DCT</source>
        <translation>DCT</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>Low</source>
        <translation>低</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Full</source>
        <translation>全部</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="-8"/>
        <location line="+24"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>_Trellis quantization</source>
        <translation>棚架量化</translation>
    </message>
    <message>
        <location line="-52"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Qpel8</source>
        <translation>Qpel8</translation>
    </message>
    <message>
        <location line="+99"/>
        <source>Xvid4 MPEG-4 ASP configuration</source>
        <translation>Xvid4 MPEG-4 ASP配置</translation>
    </message>
    <message>
        <location line="-47"/>
        <source>_Gop Size:</source>
        <translation>Gop 尺寸:</translation>
    </message>
    <message>
        <location line="-38"/>
        <source>4:3 (NTSC)</source>
        <translation>4:3 (NTSC)</translation>
    </message>
    <message>
        <location line="+77"/>
        <source>Aspect Ratio</source>
        <translation>宽高比</translation>
    </message>
    <message>
        <location line="-83"/>
        <source>Auto (#cpu)</source>
        <translation>自动 (#cpu)</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>16:9 (NTSC)</source>
        <translation>16:9 (NTSC)</translation>
    </message>
    <message>
        <location line="-34"/>
        <source>Custom</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Mi_n. quantizer:</source>
        <translation>最小量化:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>4:3 (PAL)</source>
        <translation>4:3 (PAL)</translation>
    </message>
    <message>
        <location line="-38"/>
        <source>Medium</source>
        <translation>中</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Qpel16</source>
        <translation>Qpel16</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Square</source>
        <translation>正方形</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>_Drop identical frames (this disables B-frames)</source>
        <translation>丢弃相同的帧(这会导致禁止B-帧)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Framedrop _Ratio:</source>
        <translation>弃帧率:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quantization type:</source>
        <translation>量化型式:</translation>
    </message>
    <message>
        <location line="+20"/>
        <location line="+17"/>
        <source>Encoding Mode</source>
        <translation>编码方式</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Frame Settings</source>
        <translation>帧设定</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Quantization</source>
        <translation>量化</translation>
    </message>
    <message>
        <location line="-75"/>
        <source>One thread</source>
        <translation>一个线程</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Threading</source>
        <translation>线程</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>_Number of B frames:</source>
        <translation>B帧数量:</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Profile:</source>
        <translation>配置文件:</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>Two threads</source>
        <translation>两个线程</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Motion Estimation</source>
        <translation>运动估计</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Threads</source>
        <translation>线程数</translation>
    </message>
    <message>
        <location line="-69"/>
        <source>16:9 (PAL)</source>
        <translation>16:9 (PAL)</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>_Macroblock decision:</source>
        <translation>宏块决定:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Aspect Ratio:</source>
        <translation>宽高比:</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>1:1 (PC)</source>
        <translation>1:1 (PC)</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Use XVID fcc (else DIVX)</source>
        <translation>使用 XVID fcc (否则 DIVX)</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Rate Control</source>
        <translation>速率控制</translation>
    </message>
    <message>
        <location line="-68"/>
        <source>Ma_x. quantizer:</source>
        <translation>最大量化:</translation>
    </message>
</context>
<context>
    <name>yadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="+132"/>
        <source>Yadif</source>
        <translation>Yadif</translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Frame : Temporal &amp; spatial check</source>
        <translation>帧:时空检查</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field :  Temporal &amp; spatial check</source>
        <translation>场:时空检查</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame : Skip spatial temporal check</source>
        <translation>帧:跳过时空检查</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field : Skip spatial temporal check</source>
        <translation>场:跳过时空检查</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Deint all</source>
        <translation>去交错所有</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Deint interlaced</source>
        <translation>去交错的</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>_Deint:</source>
        <translation>去交错:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>yadif</source>
        <translation>yadif</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Top field first</source>
        <translation>顶场优先</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>_Order:</source>
        <translation>顺序:</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>_Mode:</source>
        <translation>模式:</translation>
    </message>
    <message>
        <location line="-80"/>
        <source>Yadif, port of avisynth version (c) Fizick.</source>
        <translation>Yadif, 移植于Avisynth版本 (c) Fizick.</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Bottom field first</source>
        <translation>底场优先</translation>
    </message>
</context>
<context>
    <name>zoom</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/ADM_vidZoom.cpp" line="+69"/>
        <source>Zoom</source>
        <translation>缩放</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Partializable crop filter.</source>
        <translation>可局部化裁剪过滤器</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/DIA_flyZoom.cpp" line="+480"/>
        <location line="+431"/>
        <source>Selection: </source>
        <translation>选择: </translation>
    </message>
    <message>
        <location line="-333"/>
        <location line="+186"/>
        <source>Preferences</source>
        <translation>偏好设定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation>新过滤器的默认设定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation>调整尺寸方式:</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+18"/>
        <source>Most recently accepted</source>
        <translation>最近使用的</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos</source>
        <translation>Lanczos算法</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation>样条(Spline)</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Padding type:</source>
        <translation>填充类型:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Black Bars</source>
        <translation>黑条</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation>回显(Echo)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None</source>
        <translation>无</translation>
    </message>
</context>
<context>
    <name>zoomDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+14"/>
        <source>Zoom</source>
        <translation>缩放</translation>
    </message>
    <message>
        <location line="+38"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+105"/>
        <source>Right:</source>
        <translation>右:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+42"/>
        <source>Top:</source>
        <translation>上:</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
    <message>
        <location line="+21"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="-28"/>
        <source>Bottom:</source>
        <translation>下:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+45"/>
        <source>Left:</source>
        <translation>左:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="-124"/>
        <source>Resize Method:</source>
        <translation>调整尺寸方式:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>双线性(Bilinear)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>双三次方(Bicubic)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lanczos-3</source>
        <translation>Lanczos-3算法</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation>样条(Spline)</translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Lock Aspect Ratio:</source>
        <translation>锁定宽高比:</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>隐藏橡皮筋(&amp;H)</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Selection: </source>
        <translation>选择: </translation>
    </message>
    <message>
        <location line="+16"/>
        <location line="+4"/>
        <source>Do not lock</source>
        <translation>不要锁定</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Current selection</source>
        <translation>当前所选</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Source</source>
        <translation>源视频</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>21:9</source>
        <translation>21:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>18:9</source>
        <translation>18:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>16:9</source>
        <translation>16:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4:3</source>
        <translation>4:3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>9:16</source>
        <translation>9:16</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Padding:</source>
        <translation>填充:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>black bars</source>
        <translation>黑条</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>echo</source>
        <translation>回显(echo)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>none (stretch)</source>
        <translation>无 (拉伸)</translation>
    </message>
</context>
</TS>
