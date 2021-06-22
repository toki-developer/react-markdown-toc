import ReactMarkdown from "react-markdown";

const body = `
## タイトル1
* おはよう。
* おはよう。
* おはよう。
* おはよう。
* おはよう。
* おはよう。
* おはよう。
* おはよう。
* おはよう。
## タイトル2
1. こんにちは。
2. こんにちは。
3. こんにちは。
1. こんにちは。
2. こんにちは。
3. こんにちは。
1. こんにちは。
2. こんにちは。
3. こんにちは。
## タイトル3
#### こんばんは
#### こんばんは　
#### こんばんは
#### こんばんは　
#### こんばんは　
#### こんばんは`

export default function Home() {
  const H2 = ({ node, ...props }) => {
    return (
        <h2 id={node.position?.start.line.toString()}>{props.children}</h2>
    );
  }

  const ankerLink = ({ node, ...props }) => {
    return (
        <a href={"#"+node.position?.start.line.toString()}>{props.children}</a>
    );
  }

  return (
    <div>

      {/* 目次 */}
      <ReactMarkdown
      allowedElements={["h2"]}
      components={{
          h2: ankerLink,
        }}>
          {body}
      </ReactMarkdown>

      {/* 本文 */}
      <ReactMarkdown
        components={{
          h2: H2,
        }}
      >
          {body}
      </ReactMarkdown>

    </div>
  )
}
