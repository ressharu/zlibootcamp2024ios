---
title: 'キックオフ'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'May 12 2024'
heroImage: '/kickoff.jpg'
---

## まず初めに

このコースを終了する頃には、以下のようなアプリを作成することができるようになっているはずです！

<video width="300" height="600" controls>
  <source src="/zlibootcamp2024ios/cyber.mp4" type="video/mp4">
  お使いのブラウザでは動画タグがサポートされていません。
</video>

## 基本文法

### 変数とは

変数とは、プログラムで使う「値をいれておける入れ物」です。入れ物には名前のラベルが貼ってあって、中には数字や文字列などの値を入れることができます。一度作った変数は、入れた値を取り出したり、変更したりできます。

### Swiftプログラミングの基本

型とは、数字しか入力できなくしたり、文字列しか入力できなくしたり、、  
さらには、最初に設定した内容を変更できるようにしたり、できなくしたり、、、
といったことが可能です！

Swiftでは以下のように書きます。

```
変更可否 名前: 型 = 式
```

具体的には、

```swift
let value1: Int = 10

var value2: String = "わいわい"
```

となります！では、" 変更可否 変数名: 型 = 式 "を左から順にどんな種類があるかを解説していきます！

変更可否

- let: 値を最初に設定したものから変更できないもの
- var: 値を最初に設定したものから変更できるもの

### 名前(定数名、変数名)

名前には、Unicode 文字も含めた、ほとんどの文字を含めることができます。

```swift
let π = 3.14159
let 你好 = "你好世界"
let 🐶🐮 = "dogcow"
```

定数名と変数名に、ホワイトスペース、数学記号、矢印、公式ではない Unicode スカラ値、罫線素片、書式文字は含められません。また、数字から始めることはできません(他の位置に数字を含めることはできます)

一度ある型の定数や変数を定義すると、同じ名前で再定義することはできません。また、異なる型の値を保持することもできません。定数を変数に、変数を定数に変換することもできません。

**以下が使えない命名たちです**  
ここは読み飛ばしても大丈夫です  
[「型について」へ飛ぶ](part1#型について)

*** 例 ***

#### ホワイトスペース (Whitespace)

ホワイトスペースは、見た目には空白に見えるが、実際には文字として認識されるものを指します。これには以下が含まれます：

- スペース (space) (` `)
- タブ (tab) (`\t`)
- 改行 (newline) (`\n`)
- キャリッジリターン (carriage return) (`\r`)
- 垂直タブ (vertical tab) (`\v`)
- フォームフィード (form feed) (`\f`)

#### 数学記号 (Mathematical Symbols)

数学記号は、数学や論理学で使われる特殊な記号です。以下はその一部です：

- 加算 (`+`)
- 減算 (`-`)
- 乗算 (`*`)
- 除算 (`/`)
- 等号 (`=`)
- 不等号 (`<`, `>`, `<=`, `>=`)
- パーセント (`%`)
- ルート (`√`)
- 積分 (`∫`)
- 微分 (`∂`)

#### 矢印 (Arrows)

矢印は方向や関係を示すために使用される記号です。以下はその一部です：

- 右矢印 (`→`)
- 左矢印 (`←`)
- 上矢印 (`↑`)
- 下矢印 (`↓`)
- ダブル矢印 (`⇒`, `⇐`, `⇔`)

#### 公式ではない Unicode スカラ値 (Non-standard Unicode Scalar Values)

公式ではない Unicode スカラ値は、標準的な文字セットに含まれない特殊な文字です。例えば：

特殊な絵文字や記号  
特殊なアルファベットや数字のバリエーション (`𝒜`, `𝒞`, `ℤ`など)

#### 罫線素片 (Line Drawing Characters)

罫線素片は、罫線やボックスの描画に使用される文字です。以下はその一部です：

- 水平線 (`─`)
- 垂直線 (`│`)
- コーナー (`┌`, `┐`, `└`, `┘`)
- 交差点 (`┼`)

#### 書式文字 (Formatting Characters)

書式文字は、テキストの形式やレイアウトを制御するための非表示文字です。以下はその一部です：

- 改行 (`\n`)
- タブ (`\t`)
- 改ページ (`\f`)
- キャリッジリターン (`\r`)

#### 数字から始めることはできません

変数名や定数名は数字で始めることができません。ただし、途中に数字を含めることは可能です。例えば：  

有効な名前: var1, count2, value3  
無効な名前: 1var, 2count, 3value

### 型について


- Int : 整数
- Double: 浮動小数点の値(例: -17.454)
- Bool: 真偽値(true, false)
- String: 文字列(例: わいわい)

その他にも、UIntといった型もありますが、今回は省力します。もし知りたい場合は、以下のリンクを踏んでみてください！  
https://www.swiftlangjp.com/language-guide/the-basics.html　　

### Optional 型

#### オプショナルの生成とアンラップ

```swift
let optional1: Int? = nil
let optional2: Int? = 1
print(optional2!) // 1
```

**説明**: 
オプショナルは、値が存在するかどうかを表す特別な型です。`Int?`のように書くと、その変数には整数（`Int`）か、値がないことを示す`nil`が入る可能性があります。`nil`は値が存在しないことを意味します。`!`を使ってアンラップすると、オプショナルの中身を取り出すことができます。ただし、値が`nil`の場合にアンラップするとクラッシュします。

**使われる場面**: 
- 値が存在しない可能性がある場合
- データが欠けている可能性がある場合

#### オプショナルバインディング

```swift
let optional: Int? = 1
if let value = optional {
    print(value) // 1
}
```

**説明**: 
オプショナルバインディングは、オプショナルの値を安全に取り出す方法です。`if let`構文を使うと、オプショナルの中身が`nil`でない場合に、その値を取り出して使用することができます。もしオプショナルが`nil`であれば、`if`ブロックの中は実行されません。

**使われる場面**: 
- オプショナルの値が存在するかを確認し、その値を安全に使用する場合

---

### もう少し詳しく

#### オプショナルの生成とアンラップの例

1. **オプショナルの宣言**
    ```swift
    let optional1: Int? = nil
    let optional2: Int? = 1
    ```
    - `optional1`は`nil`、つまり値がないことを意味します。
    - `optional2`は`1`という値を持っています。

2. **強制アンラップ**
    ```swift
    print(optional2!) // 1
    ```
    - `optional2`の中身を取り出して表示しています。`optional2`が`nil`でないことがわかっているので、このように書いても安全です。

#### オプショナルバインディングの例

1. **オプショナルの宣言**
    ```swift
    let optional: Int? = 1
    ```
    - `optional`は`1`という値を持っています。

2. **オプショナルバインディング**
    ```swift
    if let value = optional {
        print(value) // 1
    }
    ```
    - `if let`構文を使って、`optional`の中身が`nil`でないことを確認し、中身を`value`に取り出しています。この場合、`value`は`1`となり、`print`で表示されます。

このようにして、オプショナルの値を安全に取り出して使うことができます。これにより、クラッシュを避けつつ、値が存在する場合にはその値を利用できます。

### 式について

式とは、変数に代入するための値を計算するための記述です。式は、定数や変数、演算子、関数呼び出しなどを組み合わせて作られます。Swiftでは、さまざまな種類の式を使用して複雑な計算や操作を行うことができます。以下に、いくつかの基本的な式の種類を紹介します。

#### 値

ここでは、式と言っていますが、値を直接入力することができます。

```
let value : Int = 8
print(value) //8
```

#### 算術式

算術式は、数値の計算を行うための式です。加算、減算、乗算、除算、剰余などの基本的な算術演算を行うことができます。

**例:**
```swift
let sum = 5 + 3       // 加算: 8
let difference = 10 - 4 // 減算: 6
let product = 7 * 6   // 乗算: 42
let quotient = 20 / 4  // 除算: 5
let remainder = 15 % 4 // 剰余: 3
```

#### 比較式

比較式は、2つの値を比較して、真（true）または偽（false）を返す式です。比較演算子には、等号（==）、不等号（!=）、大なり（>）、小なり（<）、大なりイコール（>=）、小なりイコール（<=）があります。

**例:**
```swift
let isEqual = (5 == 5)       // true
let isNotEqual = (10 != 8)   // true
let isGreater = (7 > 3)      // true
let isLesser = (2 < 6)       // true
let isGreaterOrEqual = (4 >= 4) // true
let isLesserOrEqual = (9 <= 10) // true
```

#### 論理式
論理式は、ブール値（真偽値）を操作するための式です。論理演算子には、論理積（AND、&&）、論理和（OR、||）、論理否定（NOT、!）があります。

**例:**
```swift
let isTrue = true && true   // true
let isFalse = true && false // false
let eitherTrue = true || false // true
let notTrue = !true          // false
```

#### 文字列結合式
文字列結合式は、文字列を連結するための式です。文字列連結演算子（+）を使用して、複数の文字列を1つの文字列に結合します。

**例:**
```swift
let greeting = "こんにちは" + " " + "世界" // "こんにちは 世界"
```

#### 条件式（条件演算子）

条件式は、条件に基づいて異なる値を返す式です。条件演算子（条件 ? 真の値 : 偽の値）を使用します。

**例:**
```swift
let isEven = (4 % 2 == 0) ? "偶数" : "奇数" // "偶数"
let isOdd = (7 % 2 != 0) ? "奇数" : "偶数" // "奇数"
```

### 配列

### Mutable（可変）な配列

```swift
var 変数名: [型] = [値]
```

### Immutable（不変）な配列

```swift
let 変数名: [型]　= [値]
```

```swift
//Mutableな配列
var array1: [String] = [String]()
array1.append("iPhone6")
array1 += ["iPhone6s"]
//Immutableな配列
let array2: [String] = []
array2.append("iPhone7") //要素を追加できない
//Immutableな配列
let array3: [String] = ["iPhoneSE", "iPhone6plus"]
```

### 辞書

```swift
// Mutableな配列
var dict1: [String : String] = [String : String]()
```

- `var dict1: [String : String]`：これは`dict1`という名前の変数を宣言し、その型が`[String: String]`であることを示しています。これは、キーと値の両方が`String`型の辞書を表しています。
- `= [String : String]()`：これは空の辞書を作成しています。辞書の初期化にはこのように記述します。

```swift
dict1["iPhone6s"] = "docomo"
dict1["iPhone7"] = "au"
```

- `dict1["iPhone6s"] = "docomo"`：この行は、キー`"iPhone6s"`に対して値`"docomo"`を設定しています。辞書にこのペアが追加されます。
- `dict1["iPhone7"] = "au"`：この行も同様に、キー`"iPhone7"`に対して値`"au"`を設定しています。

最終的に、`dict1`には以下のような内容が含まれます：

```swift
[
    "iPhone6s": "docomo",
    "iPhone7": "au"
]
```

このようにして、キーと値のペアを動的に追加できる可変の辞書を作成しています。

### if文


if文は、条件によってプログラムの流れを制御するための基本的な構文です。特定の条件が真（True）である場合に、指定されたコードブロックを実行し、条件が偽（False）である場合には別のコードブロックを実行します。

```swift
if 条件1 {
    // 条件1が真の場合に実行されるコード
}else if 条件2 {
    // 条件1が偽かつ条件2が真の場合に実行されるコード
}else{
    //　どの条件にも当てはまらない場合に実行されるコード
}
```

では、コードの例を見てみましょう

```swift
let value: Int = 1523

if value 0 < value && value <= 1000 {
    print("The number is between 0 and 1000")
}else if value 1000 < value && value <= 2000 {
    print("The number is between 1001 and 2000")
}else{
    print("The number is out of the specified range")
}
```

### switch文

### switch文とは

`switch`文は、ある変数の値に基づいて複数の条件分岐を行うための構文です。`if`文とは異なり、`switch`文は通常、特定の値に対して直接マッチする場合に使用されます。`switch`文の利点は、コードが見やすく、複数の条件を簡潔に表現できる点です。

`switch`文の基本構造は以下の通りです：

```swift
switch 変数 {
case 値1:
    // 値1にマッチした場合に実行されるコード
case 値2:
    // 値2にマッチした場合に実行されるコード
default:
    // どのケースにもマッチしない場合に実行されるコード
}
```

### コード例

次に、`switch`文を使った具体的なコードの例を示します。

```swift
let grade: String = "B"

switch grade {
case "A":
    print("Excellent!")
case "B":
    print("Good job!")
case "C":
    print("Well done!")
case "D":
    print("You passed")
case "F":
    print("Better try again")
default:
    print("Invalid grade")
}
```

この例では、文字列型の変数 `grade` に基づいて異なるメッセージを表示します。

1. `grade` が "A" の場合、「Excellent!」と表示されます。
2. `grade` が "B" の場合、「Good job!」と表示されます。
3. `grade` が "C" の場合、「Well done!」と表示されます。
4. `grade` が "D" の場合、「You passed」と表示されます。
5. `grade` が "F" の場合、「Better try again」と表示されます。
6. 上記のいずれのケースにもマッチしない場合、「Invalid grade」と表示されます。

### Swift特有の`switch`文の特徴

- **全ケースの網羅**：Swiftの`switch`文では、すべての可能な値を網羅する必要があります。網羅していない場合、コンパイルエラーが発生します。網羅性を保証するために、`default`ケースを使用します。
- **範囲の使用**：`switch`文では範囲を使用することができます。例えば、数値の範囲による分岐を行うことが可能です。
- **タプルの使用**：タプルを使った分岐もサポートされています。

#### 数値の範囲を使った例

```swift
let score: Int = 85

switch score {
case 0..<50:
    print("Failed")
case 50..<75:
    print("Passed")
case 75...100:
    print("Excellent")
default:
    print("Invalid score")
}
```

この例では、数値の範囲を用いて`score`の値に基づいた分岐を行っています。

`switch`文は、特に多くのケースがある場合や、値の範囲による分岐を行いたい場合に非常に便利です。読みやすさとメンテナンス性を向上させるために、適切な場面で`switch`文を活用しましょう。

### for文

`for`ループは、特定の回数だけ繰り返し処理を実行するための構文です。Swiftでは、いくつかの方法で`for`ループを使うことができます。以下に例を示します。

#### 基本的な`for`ループ

指定した範囲内の数値を繰り返します。`..<`は終点を含まず、`...`は終点を含みます。

```swift
// 終点を含まないループ
for i in 0..<10 {
    print(i)
}
// 出力: 0 1 2 3 4 5 6 7 8 9

// 終点を含むループ
for i in 0...10 {
    print(i)
}
// 出力: 0 1 2 3 4 5 6 7 8 9 10
```

#### 降順でのループ

`reversed()`を使うことで、範囲を逆順にしてループすることができます。

```swift
for i in (0..<10).reversed() {
    print(i)
}
// 出力: 9 8 7 6 5 4 3 2 1 0
```

#### `forEach`を使ったループ

`forEach`メソッドを使うと、クロージャ内でループ処理を行うことができます。クロージャは、コードの一部を引数として他の関数に渡すことができる無名関数のことです。

```swift
(0..<10).forEach { i in
    print(i)
}
// 出力: 0 1 2 3 4 5 6 7 8 9
```

#### 数値が1ずつ増加しない場合のループ

`stride`を使うと、指定したステップ幅でループを実行できます。`from`は開始点、`to`は終点を含まない、`through`は終点を含むことを意味します。

```swift
// 終点を含まないループ
for i in stride(from: 0, to: 10, by: 2) {
    print(i)
}
// 出力: 0 2 4 6 8

// 終点を含むループ
for i in stride(from: 0, through: 10, by: 2) {
    print(i)
}
// 出力: 0 2 4 6 8 10
```

Swiftのメソッド（関数）について解説します。メソッドは一連の処理をまとめて名前を付けたもので、必要に応じて何度でも呼び出して使うことができます。

### メソッド

```swift
func メソッド名(引数名: 型) -> 戻り値の型 {
    //処理
}
```

#### 例1: 引数が一つのメソッド

```swift
func show(name: String) {
    print("\(name)さん")
}

show(year: "taku") // メソッド呼び出し
```

この例では、`show`というメソッドを定義しています。このメソッドは引数として`name`を受け取り、その年を含む文字列を出力します。メソッドを呼び出す際は、`show(name: "taku")`のように呼び出します。

#### 例2: 引数に別名を付けたメソッド

```swift
func show(nickname name: String) {
    print("\(name)さん")
}

show(nickname: "taku") // メソッド呼び出し
```

この例では、引数に`nickname`という別名を付けています。これにより、呼び出し側では引数の意味が明確になります。例えば、`show(nickname: "taku")`と呼び出すと、takuさんと表示されます。

#### 例3: 引数のラベルを省略したメソッド

```swift
func showYear(_ name: String) {
    print("\(name)さん")
}

showYear("taku") // メソッド呼び出し
```

この例では、引数のラベルを省略しています。引数の前にアンダースコア（`_`）を付けることで、呼び出し時にラベルを省略できます。例えば、`showYear("taku")`と呼び出すと、そのままtakuと渡すことができます。

### 疲れた、、、

疲れたので、classとstructの解説はtakuくんのレポジトリを見ましょう

[https://zliworkspace.slack.com/archives/C072RTC7M52/p1715571746353839](https://zliworkspace.slack.com/archives/C072RTC7M52/p1715571746353839)

### class,とstructの違い

- **コピーの仕方**: クラスは「参照」をコピーし、構造体は「値」をコピーします。
- **継承**: クラスは継承できますが、構造体はできません。
- **デストラクタ**: クラスにはデストラクタがありますが、構造体にはありません。

### enum

疲れたので、classとstructの解説はtakuくんのレポジトリを見ましょう

[https://zliworkspace.slack.com/archives/C072RTC7M52/p1715571746353839](https://zliworkspace.slack.com/archives/C072RTC7M52/p1715571746353839)

### tuple

疲れたので、classとstructの解説はtakuくんのレポジトリを見ましょう

[https://zliworkspace.slack.com/archives/C072RTC7M52/p1715571746353839](https://zliworkspace.slack.com/archives/C072RTC7M52/p1715571746353839)
