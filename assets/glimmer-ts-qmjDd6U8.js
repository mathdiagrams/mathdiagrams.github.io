import t from"./typescript-QAuFTZd1.js";import e from"./handlebars-lIZ5ca3C.js";import"./html-Kvqpyljp.js";import"./javascript-7J2veyI3.js";import"./css-cVFo_mI8.js";import"./yaml-UFfxM7wP.js";const n=Object.freeze({$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"glimmer-ts",scopeName:"source.gts",patterns:[{include:"source.ts"}],injections:{"L:source.gts -comment -string":{patterns:[{name:"meta.js.embeddedTemplateWithoutArgs",begin:"\\s*(<)(template)\\s*(>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"},3:{name:"punctuation.definition.tag.html"}},end:"(</)(template)(>)",endCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"},3:{name:"punctuation.definition.tag.html"}},patterns:[{include:"text.html.handlebars"}]},{name:"meta.js.embeddedTemplateWithArgs",begin:"(<)(template)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"}},end:"(</)(template)(>)",endCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"},3:{name:"punctuation.definition.tag.html"}},patterns:[{begin:"(?<=\\<template)",end:"(?=\\>)",patterns:[{include:"text.html.handlebars#tag-stuff"}]},{begin:"(>)",beginCaptures:{1:{name:"punctuation.definition.tag.end.js"}},end:"(?=</template>)",contentName:"meta.html.embedded.block",patterns:[{include:"text.html.handlebars"}]}]}]}},displayName:"Glimmer TS",aliases:["gts"],embeddedLangs:["typescript","handlebars"]});var a=[...t,...e,n];export{a as default};