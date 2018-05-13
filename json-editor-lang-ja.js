JSONEditor.defaults.languages.ja = {
  /**
   * When a property is not set
   */
  error_notset: "このプロパティは必ず入力してください",
  /**
   * When a string must not be empty
   */
  error_notempty: "入力してください",
  /**
   * When a value is not one of the enumerated values
   */
  error_enum: "入力値は、規定の値のいずれかにしてください",
  /**
   * When a value doesn't validate any schema of a 'anyOf' combination
   */
  error_anyOf: "入力値は、規定の形式の少なくとも１つに適合する必要があります",
  /**
   * When a value doesn't validate
   * @variables This key takes one variable: The number of schemas the value does not validate
   */
  error_oneOf: '入力値は、規定の形式の１つだけに適合する必要があります。(現在、{{0}}個の形式に適合)',
  /**
   * When a value does not validate a 'not' schema
   */
  error_not: "入力値は、規定の形式に適合しないようにしてください",
  /**
   * When a value does not match any of the provided types
   */
  error_type_union: "入力値は、規定の型のいずれかにしてください",
  /**
   * When a value does not match the given type
   * @variables This key takes one variable: The type the value should be of
   */
  error_type: "入力値のデータ型は「{{0}}」にしてください",
  /**
   *  When the value validates one of the disallowed types
   */
  error_disallow_union: "入力値は、受付可能なデータ型にしてください",
  /**
   *  When the value validates a disallowed type
   * @variables This key takes one variable: The type the value should not be of
   */
  error_disallow: "入力値のデータ型は「{{0}}」以外にしてください",
  /**
   * When a value is not a multiple of or divisible by a given number
   * @variables This key takes one variable: The number mentioned above
   */
  error_multipleOf: "入力値は、{{0}} の倍数にしてください",
  /**
   * When a value is greater than it's supposed to be (exclusive)
   * @variables This key takes one variable: The maximum
   */
  error_maximum_excl: "入力値は、{{0}} より小さくしてください",
  /**
   * When a value is greater than it's supposed to be (inclusive
   * @variables This key takes one variable: The maximum
   */
  error_maximum_incl: "入力値は、{{0}} 以下にしてください",
  /**
   * When a value is lesser than it's supposed to be (exclusive)
   * @variables This key takes one variable: The minimum
   */
  error_minimum_excl: "入力値は、{{0}} より大きくしてください",
  /**
   * When a value is lesser than it's supposed to be (inclusive)
   * @variables This key takes one variable: The minimum
   */
  error_minimum_incl: "入力値は、{{0}} 以上にしてください",
  /**
   * When a value have too many characters
   * @variables This key takes one variable: The maximum character count
   */
  error_maxLength: "入力値は、{{0}} 文字以下にしてください",
  /**
   * When a value does not have enough characters
   * @variables This key takes one variable: The minimum character count
   */
  error_minLength: "入力値は、{{0}} 文字以上にしてください",
  /**
   * When a value does not match a given pattern
   */
  error_pattern: "入力値は、パターン「{{0}}」に適合させてください",
  /**
   * When an array has additional items whereas it is not supposed to
   */
  error_additionalItems: "この配列は、追加の要素を入れられません",
  /**
   * When there are to many items in an array
   * @variables This key takes one variable: The maximum item count
   */
  error_maxItems: "この配列の要素は、上限 {{0}} 個までです",
  /**
   * When there are not enough items in an array
   * @variables This key takes one variable: The minimum item count
   */
  error_minItems: "この配列には、少なくとも {{0}} 個の要素が必要です",
  /**
   * When an array is supposed to have unique items but has duplicates
   */
  error_uniqueItems: "この配列の要素は、全て異なる値にする必要があります",
  /**
   * When there are too many properties in an object
   * @variables This key takes one variable: The maximum property count
   */
  error_maxProperties: "このオブジェクトのプロパティは、上限 {{0}} 個までです",
  /**
   * When there are not enough properties in an object
   * @variables This key takes one variable: The minimum property count
   */
  error_minProperties: "このオブジェクトには、少なくとも {{0}} 個のプロパティが必要です",
  /**
   * When a required property is not defined
   * @variables This key takes one variable: The name of the missing property
   */
  error_required: "このオブジェクトに必要なプロパティ '{{0}}' がありません",
  /**
   * When there is an additional property is set whereas there should be none
   * @variables This key takes one variable: The name of the additional property
   */
  error_additional_properties: "「{{0}}」などの追加のプロパティは認められません",
  /**
   * When a dependency is not resolved
   * @variables This key takes one variable: The name of the missing property for the dependency
   */
  error_dependency: "プロパティに「{{0}}」が必要です",
  /**
   * Text on Delete All buttons
   */
  button_delete_all: "全て",
  /**
   * Title on Delete All buttons
   */
  button_delete_all_title: "全て削除",
  /**
   * Text on Delete Last buttons
   * @variable This key takes one variable: The title of object to delete
   */
  button_delete_last: "最後の{{0}}",
  /**
   * Title on Delete Last buttons
   * @variable This key takes one variable: The title of object to delete
   */
  button_delete_last_title: "最後の{{0}}を削除",
  /**
   * Title on Add Row buttons
   * @variable This key takes one variable: The title of object to add
   */
  button_add_row_title: "{{0}}を追加",
  /**
   * Title on Move Down buttons
   */
  button_move_down_title: "下に移動",
  /**
   * Title on Move Up buttons
   */
  button_move_up_title: "上に移動",
  /**
   * Title on Delete Row buttons
   * @variable This key takes one variable: The title of object to delete
   */
  button_delete_row_title: "{{0}}を削除",
  /**
   * Title on Delete Row buttons, short version (no parameter with the object title)
   */
  button_delete_row_title_short: "削除",
  /**
   * Title on Collapse buttons
   */
  button_collapse: "折り畳む",
  /**
   * Title on Expand buttons
   */
  button_expand: "展開する"
};
