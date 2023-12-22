import e from"./html-Kvqpyljp.js";import t from"./markdown-jImLVJCr.js";import n from"./pug-il8Qt7QW.js";import a from"./stylus-aGAdADZ6.js";import i from"./sass-1Dap1FUI.js";import s from"./css-cVFo_mI8.js";import u from"./scss-_qa-H7oD.js";import m from"./less-LKyCm7sz.js";import r from"./javascript-7J2veyI3.js";import o from"./typescript-QAuFTZd1.js";import c from"./jsx-SUR04Kh6.js";import p from"./tsx-pbM8-TT4.js";import l from"./json-qWJ4hy6o.js";import g from"./jsonc-mCpcbXUO.js";import d from"./json5-zXpWJLP9.js";import b from"./yaml-UFfxM7wP.js";import v from"./toml-c-UUrH8k.js";import h from"./graphql-y-OLK9Wi.js";import"./ini-ifyMFJtG.js";import"./java-wlNvj5tG.js";import"./lua-NZRhvDns.js";import"./c-s4so_vbd.js";import"./make-W37JWQBI.js";import"./perl-4bwv6hcP.js";import"./xml-SOvDKexM.js";import"./sql-GJM9b2fM.js";import"./r-TeJYVD88.js";import"./ruby-gURMr2uP.js";import"./shellscript-updAn_cf.js";import"./php-fK0FRqSC.js";import"./vb-O72KijaU.js";import"./xsl-L5GVJmWE.js";import"./bat-zkj8bRjt.js";import"./clojure-G3_M1L1_.js";import"./coffee-pjqvLZj5.js";import"./cpp-wM0Fs9-r.js";import"./glsl-h1ErcZJc.js";import"./diff--usZrqOv.js";import"./docker-n41mOtw1.js";import"./git-commit-mV-h6Ci9.js";import"./git-rebase-rn6n1XbX.js";import"./go-UhwZfQWQ.js";import"./groovy-XwPgzIai.js";import"./objective-c-J5LYTqIb.js";import"./swift-0JOzzeTr.js";import"./raku-PvGy_Zzn.js";import"./powershell-zRvR43do.js";import"./python-wWPHzWW1.js";import"./julia-VSduXScQ.js";import"./rust-TPeNg91F.js";import"./scala-7g9fXhNk.js";import"./csharp-oGM0DdAc.js";import"./fsharp-bj0IiJH9.js";import"./dart-tSGAlr7I.js";import"./handlebars-lIZ5ca3C.js";import"./erlang-UnoDSYbn.js";import"./elixir-2oICv91A.js";import"./latex-px2YOCjy.js";import"./tex-TNV0S0xw.js";import"./haskell-ToChjnBe.js";import"./gnuplot-ZHpxqAby.js";import"./bibtex-Acg21231.js";var f=[{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:text.html.markdown",patterns:[{include:"#vue-code-block"}],repository:{"vue-code-block":{begin:"(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(vue)((\\s+|:|,|\\{|\\?)[^`~]*)?$)",name:"markup.fenced_code.block.markdown",end:"(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",beginCaptures:{3:{name:"punctuation.definition.markdown"},4:{name:"fenced_code.block.language.markdown"},5:{name:"fenced_code.block.language.attributes.markdown"}},endCaptures:{3:{name:"punctuation.definition.markdown"}},patterns:[{include:"source.vue"}]}},scopeName:"markdown.vue.codeblock",name:"vue-injection-markdown",injectTo:["text.html.markdown"]},{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:meta.tag -meta.attribute -entity.name.tag.pug -attribute_value -source.tsx -source.js.jsx, L:meta.element -meta.attribute",patterns:[{include:"source.vue#vue-directives"}],scopeName:"vue.directives",name:"vue-directives",injectTo:["source.vue","text.html.markdown","text.html.derivative","text.pug"]},{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:text.pug -comment -string.comment, L:text.html.derivative -comment.block, L:text.html.markdown -comment.block",patterns:[{include:"source.vue#vue-interpolations"}],scopeName:"vue.interpolations",name:"vue-interpolations",injectTo:["source.vue","text.html.markdown","text.html.derivative","text.pug"]},{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:[],injectionSelector:"L:source.css -comment, L:source.postcss -comment, L:source.sass -comment, L:source.stylus -comment",patterns:[{include:"#vue-sfc-style-variable-injection"}],repository:{"vue-sfc-style-variable-injection":{begin:"\\b(v-bind)\\s*\\(",name:"vue.sfc.style.variable.injection.v-bind",end:"\\)",beginCaptures:{1:{name:"entity.name.function"}},patterns:[{begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.tag.end.html"}},name:"source.ts.embedded.html.vue",patterns:[{include:"source.js"}]},{include:"source.js"}]}},scopeName:"vue.sfc.style.variable.injection",name:"vue-sfc-style-variable-injection",injectTo:["source.vue"]}];const y=Object.freeze({$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"vue",scopeName:"source.vue",patterns:[{include:"text.html.basic#comment"},{include:"#self-closing-tag"},{begin:"(<)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"}},end:"(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},patterns:[{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)md\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.html.markdown",patterns:[{include:"text.html.markdown"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)html\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.html.derivative",patterns:[{include:"#html-stuff"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)pug\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.pug",patterns:[{include:"text.pug"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)stylus\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.stylus",patterns:[{include:"source.stylus"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)postcss\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.postcss",patterns:[{include:"source.postcss"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)sass\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.sass",patterns:[{include:"source.sass"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)css\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css",patterns:[{include:"source.css"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)scss\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css.scss",patterns:[{include:"source.css.scss"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)less\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css.less",patterns:[{include:"source.css.less"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)js\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.js",patterns:[{include:"source.js"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)ts\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.ts",patterns:[{include:"source.ts"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsx\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.js.jsx",patterns:[{include:"source.js.jsx"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)tsx\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.tsx",patterns:[{include:"source.tsx"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json",patterns:[{include:"source.json"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsonc\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json.comments",patterns:[{include:"source.json.comments"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json5\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json5",patterns:[{include:"source.json5"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)yaml\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.yaml",patterns:[{include:"source.yaml"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)toml\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.toml",patterns:[{include:"source.toml"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)(gql|graphql)\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.graphql",patterns:[{include:"source.graphql"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)vue\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.vue",patterns:[{include:"source.vue"}]}]},{begin:"(template)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/template\\b)",name:"text.html.derivative",patterns:[{include:"#html-stuff"}]}]},{begin:"(script)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/script\\b)",name:"source.js",patterns:[{include:"source.js"}]}]},{begin:"(style)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/style\\b)",name:"source.css",patterns:[{include:"source.css"}]}]},{begin:"([a-zA-Z0-9:-]+)",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text"}]}]}],repository:{"self-closing-tag":{begin:"(<)([a-zA-Z0-9:-]+)(?=([^>]+/>))",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},end:"(/>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"self-closing-tag",patterns:[{include:"#tag-stuff"}]},"template-tag":{patterns:[{include:"#template-tag-1"},{include:"#template-tag-2"}]},"template-tag-1":{begin:"(<)(template)\\b(>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"},3:{name:"punctuation.definition.tag.end.html.vue"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.template-tag.start",patterns:[{begin:"\\G",end:"(?=/>)|((</)(template)\\b)",endCaptures:{2:{name:"punctuation.definition.tag.begin.html.vue"},3:{name:"entity.name.tag.$3.html.vue"}},name:"meta.template-tag.end",patterns:[{include:"#html-stuff"}]}]},"template-tag-2":{begin:"(<)(template)\\b",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.template-tag.start",patterns:[{begin:"\\G",end:"(?=/>)|((</)(template)\\b)",endCaptures:{2:{name:"punctuation.definition.tag.begin.html.vue"},3:{name:"entity.name.tag.$3.html.vue"}},name:"meta.template-tag.end",patterns:[{include:"#tag-stuff"},{include:"#html-stuff"}]}]},"html-stuff":{patterns:[{include:"#template-tag"},{include:"text.html.derivative"},{include:"text.html.basic"}]},"tag-stuff":{begin:"\\G",end:"(?=/>)|(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.tag-stuff",patterns:[{include:"#vue-directives"},{include:"text.html.basic#attribute"}]},"vue-directives":{patterns:[{include:"#vue-directives-control"},{include:"#vue-directives-style-attr"},{include:"#vue-directives-original"},{include:"#vue-directives-generic-attr"}]},"vue-directives-original":{begin:"(?:\\b(v-)|([:\\.])|(@)|(#))(\\[?)([\\w\\-]*)(\\]?)(?:\\.([\\w\\-]*))*",beginCaptures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.attribute-shorthand.bind.html.vue"},3:{name:"punctuation.attribute-shorthand.event.html.vue"},4:{name:"punctuation.attribute-shorthand.slot.html.vue"},5:{name:"punctuation.separator.key-value.html.vue"},6:{name:"entity.other.attribute-name.html.vue"},7:{name:"punctuation.separator.key-value.html.vue"},8:{name:"entity.other.attribute-name.html.vue"},9:{name:"punctuation.separator.key-value.html.vue"}},end:"(?=\\s*+[^=\\s])",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"meta.attribute.directive.vue",patterns:[{include:"#vue-directives-expression"}]},"vue-directives-control":{begin:"(v-for)|(v-if|v-else-if|v-else)",captures:{1:{name:"keyword.control.loop.vue"},2:{name:"keyword.control.conditional.vue"}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.directive.control.vue",patterns:[{include:"#vue-directives-expression"}]},"vue-directives-expression":{patterns:[{begin:"(=)\\s*('|\"|`)",beginCaptures:{1:{name:"punctuation.separator.key-value.html.vue"},2:{name:"punctuation.definition.string.begin.html.vue"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},patterns:[{begin:"(?<=('|\"|`))",end:"(?=\\1)",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]},{begin:"(=)\\s*(?=[^'\"`])",beginCaptures:{1:{name:"punctuation.separator.key-value.html.vue"}},end:"(?=(\\s|>|\\/>))",patterns:[{begin:"(?=[^'\"`])",end:"(?=(\\s|>|\\/>))",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]}]},"vue-directives-style-attr":{begin:"\\b(style)\\s*(=)",captures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.separator.key-value.html.vue"}},end:`(?<='|")`,name:"meta.attribute.style.vue",patterns:[{comment:"Copy from source.css#rule-list-innards",begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.html.vue"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"source.css.embedded.html.vue",patterns:[{include:"source.css#comment-block"},{include:"source.css#escapes"},{include:"source.css#font-features"},{match:`(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier
  |\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.css"},{begin:"(?<![-a-zA-Z])(?=[-a-zA-Z])",end:"$|(?![-a-zA-Z])",name:"meta.property-name.css",patterns:[{include:"source.css#property-names"}]},{comment:"Modify end to fix #199. TODO: handle ' character.",begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.key-value.css"}},end:`\\s*(;)|\\s*(?='|")`,endCaptures:{1:{name:"punctuation.terminator.rule.css"}},contentName:"meta.property-value.css",patterns:[{include:"source.css#comment-block"},{include:"source.css#property-values"}]},{match:";",name:"punctuation.terminator.rule.css"}]}]},"vue-directives-generic-attr":{begin:"\\b(generic)\\s*(=)",captures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.separator.key-value.html.vue"}},end:`(?<='|")`,name:"meta.attribute.generic.vue",patterns:[{begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.html.vue"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"meta.type.parameters.vue",comment:"https://github.com/microsoft/vscode/blob/fd4346210f59135fad81a8b8c4cea7bf5a9ca6b4/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json#L4002-L4020",patterns:[{include:"source.ts#comment"},{name:"storage.modifier.ts",match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"},{include:"source.ts#type"},{include:"source.ts#punctuation-comma"},{name:"keyword.operator.assignment.ts",match:"(=)(?!>)"}]}]},"vue-interpolations":{patterns:[{begin:"(\\{\\{)",beginCaptures:{1:{name:"punctuation.definition.interpolation.begin.html.vue"}},end:"(\\}\\})",endCaptures:{1:{name:"punctuation.definition.interpolation.end.html.vue"}},name:"expression.embedded.vue",patterns:[{begin:"\\G",end:"(?=\\}\\})",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]}]}},displayName:"Vue",embeddedLangs:["html","markdown","pug","stylus","sass","css","scss","less","javascript","typescript","jsx","tsx","json","jsonc","json5","yaml","toml","graphql"]});var C=[...e,...t,...n,...a,...i,...s,...u,...m,...r,...o,...c,...p,...l,...g,...d,...b,...v,...h,...f,y];export{C as default};