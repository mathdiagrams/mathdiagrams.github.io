const e=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/MagicStack/MagicPython/blob/master/grammars/MagicPython.tmLanguage","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/MagicStack/MagicPython/commit/7d0f2b22a5ad8fccbd7341bc7b7a715169283044",name:"python",scopeName:"source.python",patterns:[{include:"#statement"},{include:"#expression"}],repository:{impossible:{comment:"This is a special rule that should be used where no match is desired. It is not a good idea to match something like '1{0}' because in some cases that can result in infinite loops in token generation. So the rule instead matches and impossible expression to allow a match to fail and move to the next token.",match:"$.^"},statement:{patterns:[{include:"#import"},{include:"#class-declaration"},{include:"#function-declaration"},{include:"#generator"},{include:"#statement-keyword"},{include:"#assignment-operator"},{include:"#decorator"},{include:"#docstring-statement"},{include:"#semicolon"}]},semicolon:{patterns:[{name:"invalid.deprecated.semicolon.python",match:"\\;$"}]},comments:{patterns:[{name:"comment.line.number-sign.python",contentName:"meta.typehint.comment.python",begin:`(?x)
  (?:
    \\# \\s* (type:)
    \\s*+ (?# we want \`\\s*+\` which is possessive quantifier since
             we do not actually want to backtrack when matching
             whitespace here)
    (?! $ | \\#)
  )
`,end:"(?:$|(?=\\#))",beginCaptures:{0:{name:"meta.typehint.comment.python"},1:{name:"comment.typehint.directive.notation.python"}},patterns:[{name:"comment.typehint.ignore.notation.python",match:`(?x)
  \\G ignore
  (?= \\s* (?: $ | \\#))
`},{name:"comment.typehint.type.notation.python",match:`(?x)
  (?<!\\.)\\b(
    bool | bytes | float | int | object | str
    | List | Dict | Iterable | Sequence | Set
    | FrozenSet | Callable | Union | Tuple
    | Any | None
  )\\b
`},{name:"comment.typehint.punctuation.notation.python",match:"([\\[\\]\\(\\),\\.\\=\\*]|(->))"},{name:"comment.typehint.variable.notation.python",match:"([[:alpha:]_]\\w*)"}]},{include:"#comments-base"}]},"docstring-statement":{begin:`^(?=\\s*[rR]?(\\'\\'\\'|\\"\\"\\"|\\'|\\"))`,comment:"the string either terminates correctly or by the beginning of a new line (this is for single line docstrings that aren't terminated) AND it's not followed by another docstring",end:`((?<=\\1)|^)(?!\\s*[rR]?(\\'\\'\\'|\\"\\"\\"|\\'|\\"))`,patterns:[{include:"#docstring"}]},docstring:{patterns:[{name:"string.quoted.docstring.multi.python",begin:`(\\'\\'\\'|\\"\\"\\")`,end:"(\\1)",beginCaptures:{1:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"}},patterns:[{include:"#docstring-prompt"},{include:"#codetags"},{include:"#docstring-guts-unicode"}]},{name:"string.quoted.docstring.raw.multi.python",begin:`([rR])(\\'\\'\\'|\\"\\"\\")`,end:"(\\2)",beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"}},patterns:[{include:"#string-consume-escape"},{include:"#docstring-prompt"},{include:"#codetags"}]},{name:"string.quoted.docstring.single.python",begin:`(\\'|\\")`,end:"(\\1)|(\\n)",beginCaptures:{1:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#codetags"},{include:"#docstring-guts-unicode"}]},{name:"string.quoted.docstring.raw.single.python",begin:`([rR])(\\'|\\")`,end:"(\\2)|(\\n)",beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-consume-escape"},{include:"#codetags"}]}]},"docstring-guts-unicode":{patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"docstring-prompt":{match:`(?x)
  (?:
    (?:^|\\G) \\s* (?# '\\G' is necessary for ST)
    ((?:>>>|\\.\\.\\.) \\s) (?=\\s*\\S)
  )
`,captures:{1:{name:"keyword.control.flow.python"}}},"statement-keyword":{patterns:[{name:"storage.type.function.python",match:"\\b((async\\s+)?\\s*def)\\b"},{name:"keyword.control.flow.python",comment:`if \`as\` is eventually followed by \`:\` or line continuation
it's probably control flow like:
    with foo as bar, \\
         Foo as Bar:
      try:
        do_stuff()
      except Exception as e:
        pass
`,match:"\\b(?<!\\.)as\\b(?=.*[:\\\\])"},{name:"keyword.control.import.python",comment:"other legal use of `as` is in an import",match:"\\b(?<!\\.)as\\b"},{name:"keyword.control.flow.python",match:`(?x)
  \\b(?<!\\.)(
    async | continue | del | assert | break | finally | for
    | from | elif | else | if | except | pass | raise
    | return | try | while | with
  )\\b
`},{name:"storage.modifier.declaration.python",match:`(?x)
  \\b(?<!\\.)(
    global | nonlocal
  )\\b
`},{name:"storage.type.class.python",match:"\\b(?<!\\.)(class)\\b"},{match:`(?x)
  ^\\s*(
    case | match
  )(?=\\s*([-+\\w\\d(\\[{'":#]|$))\\b
`,captures:{1:{name:"keyword.control.flow.python"}}}]},"expression-bare":{comment:"valid Python expressions w/o comments and line continuation",patterns:[{include:"#backticks"},{include:"#illegal-anno"},{include:"#literal"},{include:"#regexp"},{include:"#string"},{include:"#lambda"},{include:"#generator"},{include:"#illegal-operator"},{include:"#operator"},{include:"#curly-braces"},{include:"#item-access"},{include:"#list"},{include:"#odd-function-call"},{include:"#round-braces"},{include:"#function-call"},{include:"#builtin-functions"},{include:"#builtin-types"},{include:"#builtin-exceptions"},{include:"#magic-names"},{include:"#special-names"},{include:"#illegal-names"},{include:"#special-variables"},{include:"#ellipsis"},{include:"#punctuation"},{include:"#line-continuation"}]},"expression-base":{comment:"valid Python expressions with comments and line continuation",patterns:[{include:"#comments"},{include:"#expression-bare"},{include:"#line-continuation"}]},expression:{comment:"All valid Python expressions",patterns:[{include:"#expression-base"},{include:"#member-access"},{comment:"Tokenize identifiers to help linters",match:"(?x) \\b ([[:alpha:]_]\\w*) \\b"}]},"member-access":{name:"meta.member.access.python",begin:"(\\.)\\s*(?!\\.)",end:`(?x)
  # stop when you've just read non-whitespace followed by non-word
  # i.e. when finished reading an identifier or function call
  (?<=\\S)(?=\\W) |
  # stop when seeing the start of something that's not a word,
  # i.e. when seeing a non-identifier
  (^|(?<=\\s))(?=[^\\\\\\w\\s]) |
  $
`,beginCaptures:{1:{name:"punctuation.separator.period.python"}},patterns:[{include:"#function-call"},{include:"#member-access-base"},{include:"#member-access-attribute"}]},"member-access-base":{patterns:[{include:"#magic-names"},{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#special-names"},{include:"#line-continuation"},{include:"#item-access"}]},"member-access-attribute":{comment:"Highlight attribute access in otherwise non-specialized cases.",name:"meta.attribute.python",match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`},"special-names":{name:"constant.other.caps.python",match:`(?x)
  \\b
    # we want to see "enough", meaning 2 or more upper-case
    # letters in the beginning of the constant
    #
    # for more details refer to:
    #   https://github.com/MagicStack/MagicPython/issues/42
    (
      _* [[:upper:]] [_\\d]* [[:upper:]]
    )
    [[:upper:]\\d]* (_\\w*)?
  \\b
`},"curly-braces":{begin:"\\{",end:"\\}",beginCaptures:{0:{name:"punctuation.definition.dict.begin.python"}},endCaptures:{0:{name:"punctuation.definition.dict.end.python"}},patterns:[{name:"punctuation.separator.dict.python",match:":"},{include:"#expression"}]},list:{begin:"\\[",end:"\\]",beginCaptures:{0:{name:"punctuation.definition.list.begin.python"}},endCaptures:{0:{name:"punctuation.definition.list.end.python"}},patterns:[{include:"#expression"}]},"odd-function-call":{comment:`A bit obscured function call where there may have been an
arbitrary number of other operations to get the function.
E.g. "arr[idx](args)"
`,begin:`(?x)
  (?<= \\] | \\) ) \\s*
  (?=\\()
`,end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},patterns:[{include:"#function-arguments"}]},"round-braces":{begin:"\\(",end:"\\)",beginCaptures:{0:{name:"punctuation.parenthesis.begin.python"}},endCaptures:{0:{name:"punctuation.parenthesis.end.python"}},patterns:[{include:"#expression"}]},"line-continuation":{patterns:[{match:"(\\\\)\\s*(\\S.*$\\n?)",captures:{1:{name:"punctuation.separator.continuation.line.python"},2:{name:"invalid.illegal.line.continuation.python"}}},{begin:"(\\\\)\\s*$\\n?",end:`(?x)
  (?=^\\s*$)
  |
  (?! (\\s* [rR]? (\\'\\'\\'|\\"\\"\\"|\\'|\\"))
      |
      (\\G $)  (?# '\\G' is necessary for ST)
  )
`,beginCaptures:{1:{name:"punctuation.separator.continuation.line.python"}},patterns:[{include:"#regexp"},{include:"#string"}]}]},"assignment-operator":{name:"keyword.operator.assignment.python",match:`(?x)
     <<= | >>= | //= | \\*\\*=
    | \\+= | -= | /= | @=
    | \\*= | %= | ~= | \\^= | &= | \\|=
    | =(?!=)
`},operator:{match:`(?x)
    \\b(?<!\\.)
      (?:
        (and | or | not | in | is)                         (?# 1)
        |
        (for | if | else | await | (?:yield(?:\\s+from)?))  (?# 2)
      )
    (?!\\s*:)\\b

    | (<< | >> | & | \\| | \\^ | ~)                          (?# 3)

    | (\\*\\* | \\* | \\+ | - | % | // | / | @)                (?# 4)

    | (!= | == | >= | <= | < | >)                          (?# 5)

    | (:=)                                                 (?# 6)
`,captures:{1:{name:"keyword.operator.logical.python"},2:{name:"keyword.control.flow.python"},3:{name:"keyword.operator.bitwise.python"},4:{name:"keyword.operator.arithmetic.python"},5:{name:"keyword.operator.comparison.python"},6:{name:"keyword.operator.assignment.python"}}},punctuation:{patterns:[{name:"punctuation.separator.colon.python",match:":"},{name:"punctuation.separator.element.python",match:","}]},literal:{patterns:[{name:"constant.language.python",match:"\\b(True|False|None|NotImplemented|Ellipsis)\\b"},{include:"#number"}]},number:{name:"constant.numeric.python",patterns:[{include:"#number-float"},{include:"#number-dec"},{include:"#number-hex"},{include:"#number-oct"},{include:"#number-bin"},{include:"#number-long"},{name:"invalid.illegal.name.python",match:"\\b[0-9]+\\w+"}]},"number-float":{name:"constant.numeric.float.python",match:`(?x)
  (?<! \\w)(?:
    (?:
      \\.[0-9](?: _?[0-9] )*
      |
      [0-9](?: _?[0-9] )* \\. [0-9](?: _?[0-9] )*
      |
      [0-9](?: _?[0-9] )* \\.
    ) (?: [eE][+-]?[0-9](?: _?[0-9] )* )?
    |
    [0-9](?: _?[0-9] )* (?: [eE][+-]?[0-9](?: _?[0-9] )* )
  )([jJ])?\\b
`,captures:{1:{name:"storage.type.imaginary.number.python"}}},"number-dec":{name:"constant.numeric.dec.python",match:`(?x)
  (?<![\\w\\.])(?:
      [1-9](?: _?[0-9] )*
      |
      0+
      |
      [0-9](?: _?[0-9] )* ([jJ])
      |
      0 ([0-9]+)(?![eE\\.])
  )\\b
`,captures:{1:{name:"storage.type.imaginary.number.python"},2:{name:"invalid.illegal.dec.python"}}},"number-hex":{name:"constant.numeric.hex.python",match:`(?x)
  (?<![\\w\\.])
    (0[xX]) (_?[0-9a-fA-F])+
  \\b
`,captures:{1:{name:"storage.type.number.python"}}},"number-oct":{name:"constant.numeric.oct.python",match:`(?x)
  (?<![\\w\\.])
    (0[oO]) (_?[0-7])+
  \\b
`,captures:{1:{name:"storage.type.number.python"}}},"number-bin":{name:"constant.numeric.bin.python",match:`(?x)
  (?<![\\w\\.])
    (0[bB]) (_?[01])+
  \\b
`,captures:{1:{name:"storage.type.number.python"}}},"number-long":{name:"constant.numeric.bin.python",comment:"this is to support python2 syntax for long ints",match:`(?x)
  (?<![\\w\\.])
    ([1-9][0-9]* | 0) ([lL])
  \\b
`,captures:{2:{name:"storage.type.number.python"}}},regexp:{patterns:[{include:"#regexp-single-three-line"},{include:"#regexp-double-three-line"},{include:"#regexp-single-one-line"},{include:"#regexp-double-one-line"}]},string:{patterns:[{include:"#string-quoted-multi-line"},{include:"#string-quoted-single-line"},{include:"#string-bin-quoted-multi-line"},{include:"#string-bin-quoted-single-line"},{include:"#string-raw-quoted-multi-line"},{include:"#string-raw-quoted-single-line"},{include:"#string-raw-bin-quoted-multi-line"},{include:"#string-raw-bin-quoted-single-line"},{include:"#fstring-fnorm-quoted-multi-line"},{include:"#fstring-fnorm-quoted-single-line"},{include:"#fstring-normf-quoted-multi-line"},{include:"#fstring-normf-quoted-single-line"},{include:"#fstring-raw-quoted-multi-line"},{include:"#fstring-raw-quoted-single-line"}]},"string-unicode-guts":{patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"},{include:"#string-brace-formatting"}]},"string-consume-escape":{match:`\\\\['"\\n\\\\]`},"string-raw-guts":{patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"},{include:"#string-brace-formatting"}]},"string-raw-bin-guts":{patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-entity":{patterns:[{include:"#escape-sequence"},{include:"#string-line-continuation"},{include:"#string-formatting"}]},"fstring-guts":{patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"},{include:"#fstring-formatting"}]},"fstring-raw-guts":{patterns:[{include:"#string-consume-escape"},{include:"#fstring-formatting"}]},"fstring-illegal-single-brace":{comment:"it is illegal to have a multiline brace inside a single-line string",begin:"(\\{)(?=[^\\n}]*$\\n?)",end:"(\\})|(?=\\n)",beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-single"},{include:"#f-expression"}]},"fstring-illegal-multi-brace":{patterns:[{include:"#impossible"}]},"f-expression":{comment:"All valid Python expressions, except comments and line continuation",patterns:[{include:"#expression-bare"},{include:"#member-access"},{comment:"Tokenize identifiers to help linters",match:"(?x) \\b ([[:alpha:]_]\\w*) \\b"}]},"escape-sequence-unicode":{patterns:[{name:"constant.character.escape.python",match:`(?x)
  \\\\ (
        u[0-9A-Fa-f]{4}
        | U[0-9A-Fa-f]{8}
        | N\\{[\\w\\s]+?\\}
     )
`}]},"escape-sequence":{name:"constant.character.escape.python",match:`(?x)
  \\\\ (
        x[0-9A-Fa-f]{2}
        | [0-7]{1,3}
        | [\\\\"'abfnrtv]
     )
`},"string-line-continuation":{name:"constant.language.python",match:"\\\\$"},"string-formatting":{name:"meta.format.percent.python",match:`(?x)
  (
    % (\\([\\w\\s]*\\))?
      [-+#0 ]*
      (\\d+|\\*)? (\\.(\\d+|\\*))?
      ([hlL])?
      [diouxXeEfFgGcrsab%]
  )
`,captures:{1:{name:"constant.character.format.placeholder.other.python"}}},"string-brace-formatting":{patterns:[{name:"meta.format.brace.python",match:`(?x)
  (
    {{ | }}
    | (?:
      {
        \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]'"]+\\])*
        (![rsa])?
        ( : \\w? [<>=^]? [-+ ]? \\#?
          \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )?
      })
  )
`,captures:{1:{name:"constant.character.format.placeholder.other.python"},3:{name:"storage.type.format.python"},4:{name:"storage.type.format.python"}}},{name:"meta.format.brace.python",match:`(?x)
  (
    {
      \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]'"]+\\])*
      (![rsa])?
      (:)
        [^'"{}\\n]* (?:
          \\{ [^'"}\\n]*? \\} [^'"{}\\n]*
        )*
    }
  )
`,captures:{1:{name:"constant.character.format.placeholder.other.python"},3:{name:"storage.type.format.python"},4:{name:"storage.type.format.python"}}}]},"fstring-formatting":{patterns:[{include:"#fstring-formatting-braces"},{include:"#fstring-formatting-singe-brace"}]},"fstring-formatting-singe-brace":{name:"invalid.illegal.brace.python",match:"(}(?!}))"},import:{comment:"Import statements used to correctly mark `from`, `import`, and `as`\n",patterns:[{begin:"\\b(?<!\\.)(from)\\b(?=.+import)",end:"$|(?=import)",beginCaptures:{1:{name:"keyword.control.import.python"}},patterns:[{name:"punctuation.separator.period.python",match:"\\.+"},{include:"#expression"}]},{begin:"\\b(?<!\\.)(import)\\b",end:"$",beginCaptures:{1:{name:"keyword.control.import.python"}},patterns:[{name:"keyword.control.import.python",match:"\\b(?<!\\.)as\\b"},{include:"#expression"}]}]},"class-declaration":{patterns:[{name:"meta.class.python",begin:`(?x)
  \\s*(class)\\s+
    (?=
      [[:alpha:]_]\\w* \\s* (:|\\()
    )
`,end:"(:)",beginCaptures:{1:{name:"storage.type.class.python"}},endCaptures:{1:{name:"punctuation.section.class.begin.python"}},patterns:[{include:"#class-name"},{include:"#class-inheritance"}]}]},"class-name":{patterns:[{include:"#illegal-object-name"},{include:"#builtin-possible-callables"},{name:"entity.name.type.class.python",match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`}]},"class-inheritance":{name:"meta.class.inheritance.python",begin:"(\\()",end:"(\\))",beginCaptures:{1:{name:"punctuation.definition.inheritance.begin.python"}},endCaptures:{1:{name:"punctuation.definition.inheritance.end.python"}},patterns:[{name:"keyword.operator.unpacking.arguments.python",match:"(\\*\\*|\\*)"},{name:"punctuation.separator.inheritance.python",match:","},{name:"keyword.operator.assignment.python",match:"=(?!=)"},{name:"support.type.metaclass.python",match:"\\bmetaclass\\b"},{include:"#illegal-names"},{include:"#class-kwarg"},{include:"#call-wrapper-inheritance"},{include:"#expression-base"},{include:"#member-access-class"},{include:"#inheritance-identifier"}]},"class-kwarg":{match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\s*(=)(?!=)
`,captures:{1:{name:"entity.other.inherited-class.python variable.parameter.class.python"},2:{name:"keyword.operator.assignment.python"}}},"inheritance-identifier":{match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`,captures:{1:{name:"entity.other.inherited-class.python"}}},"member-access-class":{name:"meta.member.access.python",begin:"(\\.)\\s*(?!\\.)",end:"(?<=\\S)(?=\\W)|$",beginCaptures:{1:{name:"punctuation.separator.period.python"}},patterns:[{include:"#call-wrapper-inheritance"},{include:"#member-access-base"},{include:"#inheritance-identifier"}]},lambda:{patterns:[{match:"((?<=\\.)lambda|lambda(?=\\s*[\\.=]))",captures:{1:{name:"keyword.control.flow.python"}}},{match:"\\b(lambda)\\s*?(?=[,\\n]|$)",captures:{1:{name:"storage.type.function.lambda.python"}}},{name:"meta.lambda-function.python",begin:`(?x)
  \\b (lambda) \\b
`,end:"(:)|(\\n)",beginCaptures:{1:{name:"storage.type.function.lambda.python"}},endCaptures:{1:{name:"punctuation.section.function.lambda.begin.python"}},contentName:"meta.function.lambda.parameters.python",patterns:[{name:"keyword.operator.positional.parameter.python",match:"/"},{name:"keyword.operator.unpacking.parameter.python",match:"(\\*\\*|\\*)"},{include:"#lambda-nested-incomplete"},{include:"#illegal-names"},{match:"([[:alpha:]_]\\w*)\\s*(?:(,)|(?=:|$))",captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.parameters.python"}}},{include:"#comments"},{include:"#backticks"},{include:"#illegal-anno"},{include:"#lambda-parameter-with-default"},{include:"#line-continuation"},{include:"#illegal-operator"}]}]},"lambda-incomplete":{name:"storage.type.function.lambda.python",match:"\\blambda(?=\\s*[,)])"},"lambda-nested-incomplete":{name:"storage.type.function.lambda.python",match:"\\blambda(?=\\s*[:,)])"},"lambda-parameter-with-default":{begin:`(?x)
  \\b
  ([[:alpha:]_]\\w*) \\s* (=)
`,end:"(,)|(?=:|$)",beginCaptures:{1:{name:"variable.parameter.function.language.python"},2:{name:"keyword.operator.python"}},endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"}]},generator:{comment:`Match "for ... in" construct used in generators and for loops to
correctly identify the "in" as a control flow keyword.
`,begin:"\\bfor\\b",beginCaptures:{0:{name:"keyword.control.flow.python"}},end:"\\bin\\b",endCaptures:{0:{name:"keyword.control.flow.python"}},patterns:[{include:"#expression"}]},"function-declaration":{name:"meta.function.python",begin:`(?x)
  \\s*
  (?:\\b(async) \\s+)? \\b(def)\\s+
    (?=
      [[:alpha:]_][[:word:]]* \\s* \\(
    )
`,end:`(:|(?=[#'"\\n]))`,beginCaptures:{1:{name:"storage.type.function.async.python"},2:{name:"storage.type.function.python"}},endCaptures:{1:{name:"punctuation.section.function.begin.python"}},patterns:[{include:"#function-def-name"},{include:"#parameters"},{include:"#line-continuation"},{include:"#return-annotation"}]},"function-def-name":{patterns:[{include:"#illegal-object-name"},{include:"#builtin-possible-callables"},{name:"entity.name.function.python",match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`}]},parameters:{name:"meta.function.parameters.python",begin:"(\\()",end:"(\\))",beginCaptures:{1:{name:"punctuation.definition.parameters.begin.python"}},endCaptures:{1:{name:"punctuation.definition.parameters.end.python"}},patterns:[{name:"keyword.operator.positional.parameter.python",match:"/"},{name:"keyword.operator.unpacking.parameter.python",match:"(\\*\\*|\\*)"},{include:"#lambda-incomplete"},{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#parameter-special"},{match:`(?x)
  ([[:alpha:]_]\\w*)
    \\s* (?: (,) | (?=[)#\\n=]))
`,captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.parameters.python"}}},{include:"#comments"},{include:"#loose-default"},{include:"#annotated-parameter"}]},"parameter-special":{match:`(?x)
  \\b ((self)|(cls)) \\b \\s*(?:(,)|(?=\\)))
`,captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"variable.parameter.function.language.special.self.python"},3:{name:"variable.parameter.function.language.special.cls.python"},4:{name:"punctuation.separator.parameters.python"}}},"loose-default":{begin:"(=)",end:"(,)|(?=\\))",beginCaptures:{1:{name:"keyword.operator.python"}},endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"}]},"annotated-parameter":{begin:`(?x)
  \\b
  ([[:alpha:]_]\\w*) \\s* (:)
`,end:"(,)|(?=\\))",beginCaptures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.annotation.python"}},endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"},{name:"keyword.operator.assignment.python",match:"=(?!=)"}]},"return-annotation":{begin:"(->)",end:"(?=:)",beginCaptures:{1:{name:"punctuation.separator.annotation.result.python"}},patterns:[{include:"#expression"}]},"item-access":{patterns:[{name:"meta.item-access.python",begin:`(?x)
  \\b(?=
    [[:alpha:]_]\\w* \\s* \\[
  )
`,end:"(\\])",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},patterns:[{include:"#item-name"},{include:"#item-index"},{include:"#expression"}]}]},"item-name":{patterns:[{include:"#special-variables"},{include:"#builtin-functions"},{include:"#special-names"},{name:"meta.indexed-name.python",match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`}]},"item-index":{begin:"(\\[)",end:"(?=\\])",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.python"}},contentName:"meta.item-access.arguments.python",patterns:[{name:"punctuation.separator.slice.python",match:":"},{include:"#expression"}]},decorator:{name:"meta.function.decorator.python",begin:`(?x)
  ^\\s*
  ((@)) \\s* (?=[[:alpha:]_]\\w*)
`,end:`(?x)
  ( \\) )
    # trailing whitespace and comments are legal
    (?: (.*?) (?=\\s*(?:\\#|$)) )
  | (?=\\n|\\#)
`,beginCaptures:{1:{name:"entity.name.function.decorator.python"},2:{name:"punctuation.definition.decorator.python"}},endCaptures:{1:{name:"punctuation.definition.arguments.end.python"},2:{name:"invalid.illegal.decorator.python"}},patterns:[{include:"#decorator-name"},{include:"#function-arguments"}]},"decorator-name":{patterns:[{include:"#builtin-callables"},{include:"#illegal-object-name"},{name:"entity.name.function.decorator.python",match:`(?x)
  ([[:alpha:]_]\\w*) | (\\.)
`,captures:{2:{name:"punctuation.separator.period.python"}}},{include:"#line-continuation"},{name:"invalid.illegal.decorator.python",match:`(?x)
  \\s* ([^([:alpha:]\\s_\\.#\\\\] .*?) (?=\\#|$)
`,captures:{1:{name:"invalid.illegal.decorator.python"}}}]},"call-wrapper-inheritance":{comment:"same as a function call, but in inheritance context",name:"meta.function-call.python",begin:`(?x)
  \\b(?=
    ([[:alpha:]_]\\w*) \\s* (\\()
  )
`,end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},patterns:[{include:"#inheritance-name"},{include:"#function-arguments"}]},"inheritance-name":{patterns:[{include:"#lambda-incomplete"},{include:"#builtin-possible-callables"},{include:"#inheritance-identifier"}]},"function-call":{name:"meta.function-call.python",comment:'Regular function call of the type "name(args)"',begin:`(?x)
  \\b(?=
    ([[:alpha:]_]\\w*) \\s* (\\()
  )
`,end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},patterns:[{include:"#special-variables"},{include:"#function-name"},{include:"#function-arguments"}]},"function-name":{patterns:[{include:"#builtin-possible-callables"},{comment:"Some color schemas support meta.function-call.generic scope",name:"meta.function-call.generic.python",match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`}]},"function-arguments":{begin:"(\\()",end:"(?=\\))(?!\\)\\s*\\()",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.python"}},contentName:"meta.function-call.arguments.python",patterns:[{name:"punctuation.separator.arguments.python",match:"(,)"},{match:`(?x)
  (?:(?<=[,(])|^) \\s* (\\*{1,2})
`,captures:{1:{name:"keyword.operator.unpacking.arguments.python"}}},{include:"#lambda-incomplete"},{include:"#illegal-names"},{match:"\\b([[:alpha:]_]\\w*)\\s*(=)(?!=)",captures:{1:{name:"variable.parameter.function-call.python"},2:{name:"keyword.operator.assignment.python"}}},{name:"keyword.operator.assignment.python",match:"=(?!=)"},{include:"#expression"},{match:"\\s*(\\))\\s*(\\()",captures:{1:{name:"punctuation.definition.arguments.end.python"},2:{name:"punctuation.definition.arguments.begin.python"}}}]},"builtin-callables":{patterns:[{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#builtin-exceptions"},{include:"#builtin-functions"},{include:"#builtin-types"}]},"builtin-possible-callables":{patterns:[{include:"#builtin-callables"},{include:"#magic-names"}]},"builtin-exceptions":{name:"support.type.exception.python",match:`(?x) (?<!\\.) \\b(
  (
    Arithmetic | Assertion | Attribute | Buffer | BlockingIO
    | BrokenPipe | ChildProcess
    | (Connection (Aborted | Refused | Reset)?)
    | EOF | Environment | FileExists | FileNotFound
    | FloatingPoint | IO | Import | Indentation | Index | Interrupted
    | IsADirectory | NotADirectory | Permission | ProcessLookup
    | Timeout
    | Key | Lookup | Memory | Name | NotImplemented | OS | Overflow
    | Reference | Runtime | Recursion | Syntax | System
    | Tab | Type | UnboundLocal | Unicode(Encode|Decode|Translate)?
    | Value | Windows | ZeroDivision | ModuleNotFound
  ) Error
|
  ((Pending)?Deprecation | Runtime | Syntax | User | Future | Import
    | Unicode | Bytes | Resource
  )? Warning
|
  SystemExit | Stop(Async)?Iteration
  | KeyboardInterrupt
  | GeneratorExit | (Base)?Exception
)\\b
`},"builtin-functions":{patterns:[{name:"support.function.builtin.python",match:`(?x)
  (?<!\\.) \\b(
    __import__ | abs | aiter | all | any | anext | ascii | bin
    | breakpoint | callable | chr | compile | copyright | credits
    | delattr | dir | divmod | enumerate | eval | exec | exit
    | filter | format | getattr | globals | hasattr | hash | help
    | hex | id | input | isinstance | issubclass | iter | len
    | license | locals | map | max | memoryview | min | next
    | oct | open | ord | pow | print | quit | range | reload | repr
    | reversed | round | setattr | sorted | sum | vars | zip
  )\\b
`},{name:"variable.legacy.builtin.python",match:`(?x)
  (?<!\\.) \\b(
    file | reduce | intern | raw_input | unicode | cmp | basestring
    | execfile | long | xrange
  )\\b
`}]},"builtin-types":{name:"support.type.python",match:`(?x)
  (?<!\\.) \\b(
    bool | bytearray | bytes | classmethod | complex | dict
    | float | frozenset | int | list | object | property
    | set | slice | staticmethod | str | tuple | type

    (?# Although 'super' is not a type, it's related to types,
        and is special enough to be highlighted differently from
        other built-ins)
    | super
  )\\b
`},"magic-function-names":{comment:`these methods have magic interpretation by python and are generally called
indirectly through syntactic constructs
`,match:`(?x)
  \\b(
    __(?:
      abs | add | aenter | aexit | aiter | and | anext
      | await | bool | call | ceil | class_getitem
      | cmp | coerce | complex | contains | copy
      | deepcopy | del | delattr | delete | delitem
      | delslice | dir | div | divmod | enter | eq
      | exit | float | floor | floordiv | format | ge
      | get | getattr | getattribute | getinitargs
      | getitem | getnewargs | getslice | getstate | gt
      | hash | hex | iadd | iand | idiv | ifloordiv |
      | ilshift | imod | imul | index | init
      | instancecheck | int | invert | ior | ipow
      | irshift | isub | iter | itruediv | ixor | le
      | len | long | lshift | lt | missing | mod | mul
      | ne | neg | new | next | nonzero | oct | or | pos
      | pow | radd | rand | rdiv | rdivmod | reduce
      | reduce_ex | repr | reversed | rfloordiv |
      | rlshift | rmod | rmul | ror | round | rpow
      | rrshift | rshift | rsub | rtruediv | rxor | set
      | setattr | setitem | set_name | setslice
      | setstate | sizeof | str | sub | subclasscheck
      | truediv | trunc | unicode | xor | matmul
      | rmatmul | imatmul | init_subclass | set_name
      | fspath | bytes | prepare | length_hint
    )__
  )\\b
`,captures:{1:{name:"support.function.magic.python"}}},"magic-variable-names":{comment:"magic variables which a class/module may have.",match:`(?x)
  \\b(
    __(?:
      all | annotations | bases | builtins | class
      | closure | code | debug | defaults | dict | doc | file | func
      | globals | kwdefaults | match_args | members | metaclass | methods
      | module | mro | mro_entries | name | qualname | post_init | self
      | signature | slots | subclasses | version | weakref | wrapped
      | classcell | spec | path | package | future | traceback
    )__
  )\\b
`,captures:{1:{name:"support.variable.magic.python"}}},"magic-names":{patterns:[{include:"#magic-function-names"},{include:"#magic-variable-names"}]},"illegal-names":{match:`(?x)
  \\b(?:
    (
      and | assert | async | await | break | class | continue | def
      | del | elif | else | except | finally | for | from | global
      | if | in | is | (?<=\\.)lambda | lambda(?=\\s*[\\.=])
      | nonlocal | not | or | pass | raise | return | try | while | with
      | yield
    ) | (
      as | import
    )
  )\\b
`,captures:{1:{name:"keyword.control.flow.python"},2:{name:"keyword.control.import.python"}}},"special-variables":{match:`(?x)
  \\b (?<!\\.) (?:
    (self) | (cls)
  )\\b
`,captures:{1:{name:"variable.language.special.self.python"},2:{name:"variable.language.special.cls.python"}}},ellipsis:{name:"constant.other.ellipsis.python",match:"\\.\\.\\."},backticks:{name:"invalid.deprecated.backtick.python",begin:"\\`",end:"(?:\\`|(?<!\\\\)(\\n))",patterns:[{include:"#expression"}]},"illegal-operator":{patterns:[{name:"invalid.illegal.operator.python",match:"&&|\\|\\||--|\\+\\+"},{name:"invalid.illegal.operator.python",match:"[?$]"},{name:"invalid.illegal.operator.python",comment:"We don't want `!` to flash when we're typing `!=`",match:"!\\b"}]},"illegal-object-name":{comment:`It's illegal to name class or function "True"`,name:"keyword.illegal.name.python",match:"\\b(True|False|None)\\b"},"illegal-anno":{name:"invalid.illegal.annotation.python",match:"->"},"regexp-base-expression":{patterns:[{include:"#regexp-quantifier"},{include:"#regexp-base-common"}]},"fregexp-base-expression":{patterns:[{include:"#fregexp-quantifier"},{include:"#fstring-formatting-braces"},{match:"\\{.*?\\}"},{include:"#regexp-base-common"}]},"fstring-formatting-braces":{patterns:[{comment:"empty braces are illegal",match:"({)(\\s*?)(})",captures:{1:{name:"constant.character.format.placeholder.other.python"},2:{name:"invalid.illegal.brace.python"},3:{name:"constant.character.format.placeholder.other.python"}}},{name:"constant.character.escape.python",match:"({{|}})"}]},"regexp-base-common":{patterns:[{name:"support.other.match.any.regexp",match:"\\."},{name:"support.other.match.begin.regexp",match:"\\^"},{name:"support.other.match.end.regexp",match:"\\$"},{name:"keyword.operator.quantifier.regexp",match:"[+*?]\\??"},{name:"keyword.operator.disjunction.regexp",match:"\\|"},{include:"#regexp-escape-sequence"}]},"regexp-quantifier":{name:"keyword.operator.quantifier.regexp",match:`(?x)
  \\{(
    \\d+ | \\d+,(\\d+)? | ,\\d+
  )\\}
`},"fregexp-quantifier":{name:"keyword.operator.quantifier.regexp",match:`(?x)
  \\{\\{(
    \\d+ | \\d+,(\\d+)? | ,\\d+
  )\\}\\}
`},"regexp-backreference-number":{name:"meta.backreference.regexp",match:"(\\\\[1-9]\\d?)",captures:{1:{name:"entity.name.tag.backreference.regexp"}}},"regexp-backreference":{name:"meta.backreference.named.regexp",match:`(?x)
  (\\()  (\\?P= \\w+(?:\\s+[[:alnum:]]+)?)  (\\))
`,captures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.begin.regexp"},2:{name:"entity.name.tag.named.backreference.regexp"},3:{name:"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.end.regexp"}}},"regexp-flags":{name:"storage.modifier.flag.regexp",match:"\\(\\?[aiLmsux]+\\)"},"regexp-escape-special":{name:"support.other.escape.special.regexp",match:"\\\\([AbBdDsSwWZ])"},"regexp-escape-character":{name:"constant.character.escape.regexp",match:`(?x)
  \\\\ (
        x[0-9A-Fa-f]{2}
        | 0[0-7]{1,2}
        | [0-7]{3}
     )
`},"regexp-escape-unicode":{name:"constant.character.unicode.regexp",match:`(?x)
  \\\\ (
        u[0-9A-Fa-f]{4}
        | U[0-9A-Fa-f]{8}
     )
`},"regexp-escape-catchall":{name:"constant.character.escape.regexp",match:"\\\\(.|\\n)"},"regexp-escape-sequence":{patterns:[{include:"#regexp-escape-special"},{include:"#regexp-escape-character"},{include:"#regexp-escape-unicode"},{include:"#regexp-backreference-number"},{include:"#regexp-escape-catchall"}]},"regexp-charecter-set-escapes":{patterns:[{name:"constant.character.escape.regexp",match:"\\\\[abfnrtv\\\\]"},{include:"#regexp-escape-special"},{name:"constant.character.escape.regexp",match:"\\\\([0-7]{1,3})"},{include:"#regexp-escape-character"},{include:"#regexp-escape-unicode"},{include:"#regexp-escape-catchall"}]},codetags:{match:"(?:\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\b)",captures:{1:{name:"keyword.codetag.notation.python"}}},"comments-base":{name:"comment.line.number-sign.python",begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:"($)",patterns:[{include:"#codetags"}]},"comments-string-single-three":{name:"comment.line.number-sign.python",begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:"($|(?='''))",patterns:[{include:"#codetags"}]},"comments-string-double-three":{name:"comment.line.number-sign.python",begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:'($|(?="""))',patterns:[{include:"#codetags"}]},"single-one-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#single-one-regexp-character-set"},{include:"#single-one-regexp-comments"},{include:"#regexp-flags"},{include:"#single-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-one-regexp-lookahead"},{include:"#single-one-regexp-lookahead-negative"},{include:"#single-one-regexp-lookbehind"},{include:"#single-one-regexp-lookbehind-negative"},{include:"#single-one-regexp-conditional"},{include:"#single-one-regexp-parentheses-non-capturing"},{include:"#single-one-regexp-parentheses"}]},"single-one-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{name:"meta.character.set.regexp",begin:"(\\[)(\\^)?(\\])?",end:"(\\]|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#regexp-charecter-set-escapes"},{name:"constant.character.set.regexp",match:"[^\\n]"}]}]},"single-one-regexp-named-group":{name:"meta.named.regexp",begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-comments":{name:"comment.regexp",begin:"\\(\\?#",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#codetags"}]},"single-one-regexp-lookahead":{begin:"(\\()\\?=",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookahead-negative":{begin:"(\\()\\?!",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookbehind":{begin:"(\\()\\?<=",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookbehind-negative":{begin:"(\\()\\?<!",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-parentheses-non-capturing":{begin:"\\(\\?:",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-parentheses":{begin:"\\(",end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-three-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#single-three-regexp-character-set"},{include:"#single-three-regexp-comments"},{include:"#regexp-flags"},{include:"#single-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-three-regexp-lookahead"},{include:"#single-three-regexp-lookahead-negative"},{include:"#single-three-regexp-lookbehind"},{include:"#single-three-regexp-lookbehind-negative"},{include:"#single-three-regexp-conditional"},{include:"#single-three-regexp-parentheses-non-capturing"},{include:"#single-three-regexp-parentheses"},{include:"#comments-string-single-three"}]},"single-three-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{name:"meta.character.set.regexp",begin:"(\\[)(\\^)?(\\])?",end:"(\\]|(?=\\'\\'\\'))",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#regexp-charecter-set-escapes"},{name:"constant.character.set.regexp",match:"[^\\n]"}]}]},"single-three-regexp-named-group":{name:"meta.named.regexp",begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-comments":{name:"comment.regexp",begin:"\\(\\?#",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#codetags"}]},"single-three-regexp-lookahead":{begin:"(\\()\\?=",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookahead-negative":{begin:"(\\()\\?!",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookbehind":{begin:"(\\()\\?<=",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookbehind-negative":{begin:"(\\()\\?<!",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-parentheses-non-capturing":{begin:"\\(\\?:",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-parentheses":{begin:"\\(",end:"(\\)|(?=\\'\\'\\'))",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"double-one-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#double-one-regexp-character-set"},{include:"#double-one-regexp-comments"},{include:"#regexp-flags"},{include:"#double-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-one-regexp-lookahead"},{include:"#double-one-regexp-lookahead-negative"},{include:"#double-one-regexp-lookbehind"},{include:"#double-one-regexp-lookbehind-negative"},{include:"#double-one-regexp-conditional"},{include:"#double-one-regexp-parentheses-non-capturing"},{include:"#double-one-regexp-parentheses"}]},"double-one-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{name:"meta.character.set.regexp",begin:"(\\[)(\\^)?(\\])?",end:'(\\]|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#regexp-charecter-set-escapes"},{name:"constant.character.set.regexp",match:"[^\\n]"}]}]},"double-one-regexp-named-group":{name:"meta.named.regexp",begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-comments":{name:"comment.regexp",begin:"\\(\\?#",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#codetags"}]},"double-one-regexp-lookahead":{begin:"(\\()\\?=",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookahead-negative":{begin:"(\\()\\?!",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookbehind":{begin:"(\\()\\?<=",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookbehind-negative":{begin:"(\\()\\?<!",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-parentheses-non-capturing":{begin:"\\(\\?:",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-parentheses":{begin:"\\(",end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-three-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#double-three-regexp-character-set"},{include:"#double-three-regexp-comments"},{include:"#regexp-flags"},{include:"#double-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-three-regexp-lookahead"},{include:"#double-three-regexp-lookahead-negative"},{include:"#double-three-regexp-lookbehind"},{include:"#double-three-regexp-lookbehind-negative"},{include:"#double-three-regexp-conditional"},{include:"#double-three-regexp-parentheses-non-capturing"},{include:"#double-three-regexp-parentheses"},{include:"#comments-string-double-three"}]},"double-three-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{name:"meta.character.set.regexp",begin:"(\\[)(\\^)?(\\])?",end:'(\\]|(?="""))',beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#regexp-charecter-set-escapes"},{name:"constant.character.set.regexp",match:"[^\\n]"}]}]},"double-three-regexp-named-group":{name:"meta.named.regexp",begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,end:'(\\)|(?="""))',beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-comments":{name:"comment.regexp",begin:"\\(\\?#",end:'(\\)|(?="""))',beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#codetags"}]},"double-three-regexp-lookahead":{begin:"(\\()\\?=",end:'(\\)|(?="""))',beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookahead-negative":{begin:"(\\()\\?!",end:'(\\)|(?="""))',beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookbehind":{begin:"(\\()\\?<=",end:'(\\)|(?="""))',beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookbehind-negative":{begin:"(\\()\\?<!",end:'(\\)|(?="""))',beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",end:'(\\)|(?="""))',beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-parentheses-non-capturing":{begin:"\\(\\?:",end:'(\\)|(?="""))',beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-parentheses":{begin:"\\(",end:'(\\)|(?="""))',beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"regexp-single-one-line":{name:"string.regexp.quoted.single.python",begin:"\\b(([uU]r)|([bB]r)|(r[bB]?))(\\')",end:"(\\')|(?<!\\\\)(\\n)",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"regexp-single-three-line":{name:"string.regexp.quoted.multi.python",begin:"\\b(([uU]r)|([bB]r)|(r[bB]?))(\\'\\'\\')",end:"(\\'\\'\\')",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"}]},"regexp-double-one-line":{name:"string.regexp.quoted.single.python",begin:'\\b(([uU]r)|([bB]r)|(r[bB]?))(")',end:'(")|(?<!\\\\)(\\n)',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"regexp-double-three-line":{name:"string.regexp.quoted.multi.python",begin:'\\b(([uU]r)|([bB]r)|(r[bB]?))(""")',end:'(""")',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"}]},"string-raw-quoted-single-line":{name:"string.quoted.raw.single.python",begin:`\\b(([uU]R)|(R))((['"]))`,end:"(\\4)|((?<!\\\\)\\n)",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-single-bad-brace1-formatting-raw"},{include:"#string-single-bad-brace2-formatting-raw"},{include:"#string-raw-guts"}]},"string-bin-quoted-single-line":{name:"string.quoted.binary.single.python",begin:`(\\b[bB])((['"]))`,end:"(\\2)|((?<!\\\\)\\n)",beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-entity"}]},"string-raw-bin-quoted-single-line":{name:"string.quoted.raw.binary.single.python",begin:`(\\b(?:R[bB]|[bB]R))((['"]))`,end:"(\\2)|((?<!\\\\)\\n)",beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-raw-bin-guts"}]},"string-quoted-single-line":{name:"string.quoted.single.python",begin:`(?:\\b([rR])(?=[uU]))?([uU])?((['"]))`,end:"(\\3)|((?<!\\\\)\\n)",beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-single-bad-brace1-formatting-unicode"},{include:"#string-single-bad-brace2-formatting-unicode"},{include:"#string-unicode-guts"}]},"string-single-bad-brace1-formatting-unicode":{comment:"template using {% ... %}",begin:`(?x)
    (?= \\{%
          ( .*? (?!(['"])|((?<!\\\\)\\n)) )
        %\\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"string-single-bad-brace1-formatting-raw":{comment:"template using {% ... %}",begin:`(?x)
    (?= \\{%
          ( .*? (?!(['"])|((?<!\\\\)\\n)) )
        %\\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#string-consume-escape"}]},"string-single-bad-brace2-formatting-unicode":{comment:"odd format or format-like syntax",begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!(['"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]
           )
        .*?(?!(['"])|((?<!\\\\)\\n))
        \\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"}]},"string-single-bad-brace2-formatting-raw":{comment:"odd format or format-like syntax",begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!(['"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]
           )
        .*?(?!(['"])|((?<!\\\\)\\n))
        \\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-raw-quoted-multi-line":{name:"string.quoted.raw.multi.python",begin:`\\b(([uU]R)|(R))('''|""")`,end:"(\\4)",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-multi-bad-brace1-formatting-raw"},{include:"#string-multi-bad-brace2-formatting-raw"},{include:"#string-raw-guts"}]},"string-bin-quoted-multi-line":{name:"string.quoted.binary.multi.python",begin:`(\\b[bB])('''|""")`,end:"(\\2)",beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-entity"}]},"string-raw-bin-quoted-multi-line":{name:"string.quoted.raw.binary.multi.python",begin:`(\\b(?:R[bB]|[bB]R))('''|""")`,end:"(\\2)",beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-raw-bin-guts"}]},"string-quoted-multi-line":{name:"string.quoted.multi.python",begin:`(?:\\b([rR])(?=[uU]))?([uU])?('''|""")`,end:"(\\3)",beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#string-multi-bad-brace1-formatting-unicode"},{include:"#string-multi-bad-brace2-formatting-unicode"},{include:"#string-unicode-guts"}]},"string-multi-bad-brace1-formatting-unicode":{comment:"template using {% ... %}",begin:`(?x)
    (?= \\{%
          ( .*? (?!'''|""") )
        %\\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"string-multi-bad-brace1-formatting-raw":{comment:"template using {% ... %}",begin:`(?x)
    (?= \\{%
          ( .*? (?!'''|""") )
        %\\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#string-consume-escape"}]},"string-multi-bad-brace2-formatting-unicode":{comment:"odd format or format-like syntax",begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!'''|""") [^!:\\.\\[}\\w]
           )
        .*?(?!'''|""")
        \\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"}]},"string-multi-bad-brace2-formatting-raw":{comment:"odd format or format-like syntax",begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!'''|""") [^!:\\.\\[}\\w]
           )
        .*?(?!'''|""")
        \\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"fstring-fnorm-quoted-single-line":{name:"meta.fstring.python",begin:`(\\b[fF])([bBuU])?((['"]))`,end:"(\\3)|((?<!\\\\)\\n)",beginCaptures:{1:{name:"string.interpolated.python string.quoted.single.python storage.type.string.python"},2:{name:"invalid.illegal.prefix.python"},3:{name:"punctuation.definition.string.begin.python string.interpolated.python string.quoted.single.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-single-core"}]},"fstring-normf-quoted-single-line":{name:"meta.fstring.python",begin:`(\\b[bBuU])([fF])((['"]))`,end:"(\\3)|((?<!\\\\)\\n)",beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"string.interpolated.python string.quoted.single.python storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python string.quoted.single.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-single-core"}]},"fstring-raw-quoted-single-line":{name:"meta.fstring.python",begin:`(\\b(?:[rR][fF]|[fF][rR]))((['"]))`,end:"(\\2)|((?<!\\\\)\\n)",beginCaptures:{1:{name:"string.interpolated.python string.quoted.raw.single.python storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python string.quoted.raw.single.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.single.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#fstring-raw-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-raw-single-core"}]},"fstring-single-core":{name:"string.interpolated.python string.quoted.single.python",match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|(['"])|((?<!\\\\)\\n))
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`},"fstring-raw-single-core":{name:"string.interpolated.python string.quoted.raw.single.python",match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|(['"])|((?<!\\\\)\\n))
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`},"fstring-single-brace":{comment:"value interpolation using { ... }",begin:"(\\{)",end:`(?x)
  (\\})|(?=\\n)
`,beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-single"},{include:"#f-expression"}]},"fstring-terminator-single":{patterns:[{name:"storage.type.format.python",match:"(=(![rsa])?)(?=})"},{name:"storage.type.format.python",match:"(=?![rsa])(?=})"},{match:`(?x)
  ( (?: =?) (?: ![rsa])? )
    ( : \\w? [<>=^]? [-+ ]? \\#?
      \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})
`,captures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}}},{include:"#fstring-terminator-single-tail"}]},"fstring-terminator-single-tail":{begin:"((?:=?)(?:![rsa])?)(:)(?=.*?{)",end:"(?=})|(?=\\n)",beginCaptures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},patterns:[{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{name:"storage.type.format.python",match:"([bcdeEfFgGnosxX%])(?=})"},{name:"storage.type.format.python",match:"(\\.\\d+)"},{name:"storage.type.format.python",match:"(,)"},{name:"storage.type.format.python",match:"(\\d+)"},{name:"storage.type.format.python",match:"(\\#)"},{name:"storage.type.format.python",match:"([-+ ])"},{name:"storage.type.format.python",match:"([<>=^])"},{name:"storage.type.format.python",match:"(\\w)"}]},"fstring-fnorm-quoted-multi-line":{name:"meta.fstring.python",begin:`(\\b[fF])([bBuU])?('''|""")`,end:"(\\3)",beginCaptures:{1:{name:"string.interpolated.python string.quoted.multi.python storage.type.string.python"},2:{name:"invalid.illegal.prefix.python"},3:{name:"punctuation.definition.string.begin.python string.interpolated.python string.quoted.multi.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-multi-core"}]},"fstring-normf-quoted-multi-line":{name:"meta.fstring.python",begin:`(\\b[bBuU])([fF])('''|""")`,end:"(\\3)",beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"string.interpolated.python string.quoted.multi.python storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python string.quoted.multi.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-multi-core"}]},"fstring-raw-quoted-multi-line":{name:"meta.fstring.python",begin:`(\\b(?:[rR][fF]|[fF][rR]))('''|""")`,end:"(\\2)",beginCaptures:{1:{name:"string.interpolated.python string.quoted.raw.multi.python storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python string.quoted.raw.multi.python"}},endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.multi.python"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#fstring-raw-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-raw-multi-core"}]},"fstring-multi-core":{name:"string.interpolated.python string.quoted.multi.python",match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|'''|""")
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`},"fstring-raw-multi-core":{name:"string.interpolated.python string.quoted.raw.multi.python",match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|'''|""")
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`},"fstring-multi-brace":{comment:"value interpolation using { ... }",begin:"(\\{)",end:`(?x)
  (\\})
`,beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-multi"},{include:"#f-expression"}]},"fstring-terminator-multi":{patterns:[{name:"storage.type.format.python",match:"(=(![rsa])?)(?=})"},{name:"storage.type.format.python",match:"(=?![rsa])(?=})"},{match:`(?x)
  ( (?: =?) (?: ![rsa])? )
    ( : \\w? [<>=^]? [-+ ]? \\#?
      \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})
`,captures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}}},{include:"#fstring-terminator-multi-tail"}]},"fstring-terminator-multi-tail":{begin:"((?:=?)(?:![rsa])?)(:)(?=.*?{)",end:"(?=})",beginCaptures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},patterns:[{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{name:"storage.type.format.python",match:"([bcdeEfFgGnosxX%])(?=})"},{name:"storage.type.format.python",match:"(\\.\\d+)"},{name:"storage.type.format.python",match:"(,)"},{name:"storage.type.format.python",match:"(\\d+)"},{name:"storage.type.format.python",match:"(\\#)"},{name:"storage.type.format.python",match:"([-+ ])"},{name:"storage.type.format.python",match:"([<>=^])"},{name:"storage.type.format.python",match:"(\\w)"}]}},displayName:"Python",aliases:["py"]});var n=[e];export{n as default};
