/**
 * marked - a markdown parser
 * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

const classPrefix$1 = 'editormd-';
const titleDefault = 'Editor.md';

const settingDefault = {
    mode                 : "gfm",          //gfm or markdown
    name                 : "",             // Form element name
    value                : "",             // value for CodeMirror, if mode not gfm/markdown
    theme                : "",             // Editor.md self themes, before v1.5.0 is CodeMirror theme, default empty
    editorTheme          : "default",      // Editor area, this is CodeMirror theme at v1.5.0
    previewTheme         : "",             // Preview area theme, default empty
    markdown             : "",             // Markdown source code
    appendMarkdown       : "",             // if in init textarea value not empty, append markdown to textarea
    width                : "100%",
    height               : "100%",
    path                 : "./lib/",       // Dependents module file directory
    pluginPath           : "",             // If this empty, default use settings.path + "../plugins/"
    delay                : 300,            // Delay parse markdown to html, Uint : ms
    autoLoadModules      : true,           // Automatic load dependent module files
    watch                : true,
    placeholder          : "Enjoy Markdown! coding now...",
    gotoLine             : true,
    codeFold             : false,
    autoHeight           : false,
    autoFocus            : true,
    autoCloseTags        : true,
    searchReplace        : true,
    syncScrolling        : true,           // true | false | "single", default true
    readOnly             : false,
    tabSize              : 4,
    indentUnit           : 4,
    lineNumbers          : true,
    lineWrapping         : true,
    autoCloseBrackets    : true,
    showTrailingSpace    : true,
    matchBrackets        : true,
    indentWithTabs       : true,
    styleSelectedText    : true,
    matchWordHighlight   : true,           // options: true, false, "onselected"
    styleActiveLine      : true,           // Highlight the current line
    dialogLockScreen     : true,
    dialogShowMask       : true,
    dialogDraggable      : true,
    dialogMaskBgColor    : "#fff",
    dialogMaskOpacity    : 0.1,
    fontSize             : "13px",
    saveHTMLToTextarea   : false,
    disabledKeyMaps      : [],
    
    onload               : function() {},
    onresize             : function() {},
    onchange             : function() {},
    onwatch              : null,
    onunwatch            : null,
    onpreviewing         : function() {},
    onpreviewed          : function() {},
    onfullscreen         : function() {},
    onfullscreenExit     : function() {},
    onscroll             : function() {},
    onpreviewscroll      : function() {},
    
    imageUpload          : false,
    imageFormats         : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
    imageUploadURL       : "",
    crossDomainUpload    : false,
    uploadCallbackURL    : "",
    
    toc                  : true,           // Table of contents
    tocm                 : false,           // Using [TOCM], auto create ToC dropdown menu
    tocTitle             : "",             // for ToC dropdown menu btn
    tocDropdown          : false,
    tocContainer         : "",
    tocStartLevel        : 1,              // Said from H1 to create ToC
    htmlDecode           : false,          // Open the HTML tag identification 
    pageBreak            : true,           // Enable parse page break [========]
    atLink               : true,           // for @link
    emailLink            : true,           // for email address auto link
    taskList             : false,          // Enable Github Flavored Markdown task lists
    emoji                : false,          // :emoji: , Support Github emoji, Twitter Emoji (Twemoji);
                                           // Support FontAwesome icon emoji :fa-xxx: > Using fontAwesome icon web fonts;
                                           // Support Editor.md logo icon emoji :editormd-logo: :editormd-logo-1x: > 1~8x;
    tex                  : false,          // TeX(LaTeX), based on KaTeX
    flowChart            : false,          // flowChart.js only support IE9+
    sequenceDiagram      : false,          // sequenceDiagram.js only support IE9+
    previewCodeHighlight : true,
            
    toolbar              : true,           // show/hide toolbar
    toolbarAutoFixed     : true,           // on window scroll auto fixed position
    toolbarIcons         : "full",
    toolbarTitles        : {},
    toolbarHandlers      : {
        ucwords : function() {
            return editormd.toolbarHandlers.ucwords;
        },
        lowercase : function() {
            return editormd.toolbarHandlers.lowercase;
        }
    },
    toolbarCustomIcons   : {               // using html tag create toolbar icon, unused default <a> tag.
        lowercase        : "<a href=\"javascript:;\" title=\"Lowercase\" unselectable=\"on\"><i class=\"fa\" name=\"lowercase\" style=\"font-size:24px;margin-top: -10px;\">a</i></a>",
        "ucwords"        : "<a href=\"javascript:;\" title=\"ucwords\" unselectable=\"on\"><i class=\"fa\" name=\"ucwords\" style=\"font-size:20px;margin-top: -3px;\">Aa</i></a>"
    }, 
    toolbarIconsClass    : {
        undo             : "fa-undo",
        redo             : "fa-repeat",
        bold             : "fa-bold",
        del              : "fa-strikethrough",
        italic           : "fa-italic",
        quote            : "fa-quote-left",
        uppercase        : "fa-font",
        h1               : classPrefix$1 + "bold",
        h2               : classPrefix$1 + "bold",
        h3               : classPrefix$1 + "bold",
        h4               : classPrefix$1 + "bold",
        h5               : classPrefix$1 + "bold",
        h6               : classPrefix$1 + "bold",
        "list-ul"        : "fa-list-ul",
        "list-ol"        : "fa-list-ol",
        hr               : "fa-minus",
        link             : "fa-link",
        "reference-link" : "fa-anchor",
        image            : "fa-picture-o",
        code             : "fa-code",
        "preformatted-text" : "fa-file-code-o",
        "code-block"     : "fa-file-code-o",
        table            : "fa-table",
        datetime         : "fa-clock-o",
        emoji            : "fa-smile-o",
        "html-entities"  : "fa-copyright",
        pagebreak        : "fa-newspaper-o",
        "goto-line"      : "fa-terminal", // fa-crosshairs
        watch            : "fa-eye-slash",
        unwatch          : "fa-eye",
        preview          : "fa-desktop",
        search           : "fa-search",
        fullscreen       : "fa-arrows-alt",
        clear            : "fa-eraser",
        help             : "fa-question-circle",
        info             : "fa-info-circle"
    },        
    toolbarIconTexts     : {},
    
    lang : {
        name        : "zh-cn",
        description : "开源在线Markdown编辑器<br/>Open source online Markdown editor.",
        tocTitle    : "目录",
        toolbar     : {
            undo             : "撤销（Ctrl+Z）",
            redo             : "重做（Ctrl+Y）",
            bold             : "粗体",
            del              : "删除线",
            italic           : "斜体",
            quote            : "引用",
            ucwords          : "将每个单词首字母转成大写",
            uppercase        : "将所选转换成大写",
            lowercase        : "将所选转换成小写",
            h1               : "标题1",
            h2               : "标题2",
            h3               : "标题3",
            h4               : "标题4",
            h5               : "标题5",
            h6               : "标题6",
            "list-ul"        : "无序列表",
            "list-ol"        : "有序列表",
            hr               : "横线",
            link             : "链接",
            "reference-link" : "引用链接",
            image            : "添加图片",
            code             : "行内代码",
            "preformatted-text" : "预格式文本 / 代码块（缩进风格）",
            "code-block"     : "代码块（多语言风格）",
            table            : "添加表格",
            datetime         : "日期时间",
            emoji            : "Emoji表情",
            "html-entities"  : "HTML实体字符",
            pagebreak        : "插入分页符",
            "goto-line"      : "跳转到行",
            watch            : "关闭实时预览",
            unwatch          : "开启实时预览",
            preview          : "全窗口预览HTML（按 Shift + ESC还原）",
            fullscreen       : "全屏（按ESC还原）",
            clear            : "清空",
            search           : "搜索",
            help             : "使用帮助",
            info             : "关于" + titleDefault
        },
        buttons : {
            enter  : "确定",
            cancel : "取消",
            close  : "关闭"
        },
        dialog : {
            link : {
                title    : "添加链接",
                url      : "链接地址",
                urlTitle : "链接标题",
                urlEmpty : "错误：请填写链接地址。"
            },
            referenceLink : {
                title    : "添加引用链接",
                name     : "引用名称",
                url      : "链接地址",
                urlId    : "链接ID",
                urlTitle : "链接标题",
                nameEmpty: "错误：引用链接的名称不能为空。",
                idEmpty  : "错误：请填写引用链接的ID。",
                urlEmpty : "错误：请填写引用链接的URL地址。"
            },
            image : {
                title    : "添加图片",
                url      : "图片地址",
                link     : "图片链接",
                alt      : "图片描述",
                uploadButton     : "本地上传",
                imageURLEmpty    : "错误：图片地址不能为空。",
                uploadFileEmpty  : "错误：上传的图片不能为空。",
                formatNotAllowed : "错误：只允许上传图片文件，允许上传的图片文件格式有："
            },
            preformattedText : {
                title             : "添加预格式文本或代码块", 
                emptyAlert        : "错误：请填写预格式文本或代码的内容。"
            },
            codeBlock : {
                title             : "添加代码块",                    
                selectLabel       : "代码语言：",
                selectDefaultText : "请选择代码语言",
                otherLanguage     : "其他语言",
                unselectedLanguageAlert : "错误：请选择代码所属的语言类型。",
                codeEmptyAlert    : "错误：请填写代码内容。"
            },
            htmlEntities : {
                title : "HTML 实体字符"
            },
            help : {
                title : "使用帮助"
            }
        }
    }
};

var SettingDefault = {
    classPrefix: classPrefix$1,
    settingDefault
};
var SettingDefault_2 = SettingDefault.settingDefault;

class EditorMdObject {
    constructor(id, options) {
        this.state = {
            watching: false,
            loaded: false,
            preview: false,
            fullscreen: false
        };

        this.init(id, options);
    }

    init(id, options) {
        options = options || {};
        if (typeof id === 'object') {
            options = id;
        }
        // var classPrefix      = classPrefix;
        const settings = $.extend(true, {}, SettingDefault_2, options);

        if (options.imageFormats) {
            settings.imageFormats = options.imageFormats;
        }

    if (options.emojiCategories) {
        settings.emojiCategories = options.emojiCategories;
    }

    var editor;
    if( id instanceof HTMLElement ){
        let element = id;
        editor           = this.editor       = $(element);
        id               = element.id.length > 0 ? element.id : settings.id;
    } else {
        id               = (typeof id === "object") ? settings.id : id;
        editor           = this.editor       = $("#" + id);
    }
    this.id              = id;
    this.lang            = settings.lang;

    var classNames       = this.classNames   = {
        textarea : {
            html     : `${classPrefix}html-textarea`,
            markdown : `${classPrefix}markdown-textarea`
        }
    };
    
    settings.pluginPath = (settings.pluginPath === "") ? settings.path + "../plugins/" : settings.pluginPath; 
    console.log(`this`,this);
    this.state.watching = (settings.watch) ? true : false;
    
    if ( !editor.hasClass("editormd") ) {
        editor.addClass("editormd");
    }
    
    editor.css({
        width  : (typeof settings.width  === "number") ? settings.width  + "px" : settings.width,
        height : (typeof settings.height === "number") ? settings.height + "px" : settings.height
    });
    
    if (settings.autoHeight)
    {
        editor.css("height", "auto");
    }
                
    var markdownTextarea = this.markdownTextarea = editor.children("textarea");
    
    if (markdownTextarea.length < 1)
    {
        editor.append("<textarea></textarea>");
        markdownTextarea = this.markdownTextarea = editor.children("textarea");
    }
    
    markdownTextarea.addClass(classNames.textarea.markdown).attr("placeholder", settings.placeholder);
    
    if (typeof markdownTextarea.attr("name") === "undefined" || markdownTextarea.attr("name") === "")
    {
        markdownTextarea.attr("name", (settings.name !== "") ? settings.name : id + "-markdown-doc");
    }
    
    var appendElements = [
        (!settings.readOnly) ? "<a href=\"javascript:;\" class=\"fa fa-close " + classPrefix + "preview-close-btn\"></a>" : "",
        ( (settings.saveHTMLToTextarea) ? "<textarea class=\"" + classNames.textarea.html + "\" name=\"" + id + "-html-code\"></textarea>" : "" ),
        "<div class=\"" + classPrefix + "preview\"><div class=\"markdown-body " + classPrefix + "preview-container\"></div></div>",
        "<div class=\"" + classPrefix + "container-mask\" style=\"display:block;\"></div>",
        "<div class=\"" + classPrefix + "mask\"></div>"
    ].join("\n");
    
    editor.append(appendElements).addClass(classPrefix + "vertical");
    
    if (settings.theme !== "") 
    {
        editor.addClass(classPrefix + "theme-" + settings.theme);
    }
    
    this.mask          = editor.children("." + classPrefix + "mask");    
    this.containerMask = editor.children("." + classPrefix  + "container-mask");
    
    if (settings.markdown !== "")
    {
        markdownTextarea.val(settings.markdown);
    }
    
    if (settings.appendMarkdown !== "")
    {
        markdownTextarea.val(markdownTextarea.val() + settings.appendMarkdown);
    }
    
    this.htmlTextarea     = editor.children("." + classNames.textarea.html);            
    this.preview          = editor.children("." + classPrefix + "preview");
    this.previewContainer = this.preview.children("." + classPrefix + "preview-container");
    
    if (settings.previewTheme !== "") 
    {
        this.preview.addClass(classPrefix + "preview-theme-" + settings.previewTheme);
    }
    
    if (typeof define === "function" && define.amd)
    {
        if (typeof window.katex !== "undefined") 
        {
            editormd$1.$katex = window.katex;
        }
        
        if (settings.searchReplace && !settings.readOnly) 
        {
            editormd$1.loadCSS(settings.path + "codemirror/addon/dialog/dialog");
            editormd$1.loadCSS(settings.path + "codemirror/addon/search/matchesonscrollbar");
        }
    }

    editormd$1.settings = settings;
    this.settings = settings;
console.log(`====ddd`,{settings});
    if (
        (typeof define === "function" && define.amd) || 
        !settings.autoLoadModules)
    {
        if (typeof window.CodeMirror !== "undefined") {
            editormd$1.$CodeMirror = window.CodeMirror;
        }

        if (typeof window.marked !== "undefined") {
            editormd$1.$marked = window.marked;
        }

        this.setCodeMirror().setToolbar().loadedDisplay();
    } 
    else
    {
        this.loadQueues();
    }
    // editorTheme.call(this);

    return this;
    }
}

function editormd$1(id, options) {
  return new EditorMdObject(id, options);
}

module.exports = editormd$1;
