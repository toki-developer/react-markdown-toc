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
      <div>
        <h2  id={node.position?.start.line.toString()}>{props.children}</h2>
      </div>
    );
  }

  const ankerLink = ({ node, ...props }) => {
    return (
        <a className="list-item hover:bg-gray-200" href={"#"+node.position?.start.line.toString()}>{props.children}</a>
    );
  }

  return (
    <div className="w-full max-w-3xl m-auto">

      {/* 目次 */}
      <div className="m-10 p-3 bg-gray-100 border border-black border-dashed">
        目次
        <ol className="list-decimal list-inside p-2">
        <ReactMarkdown
          allowedElements={["h2"]}
          components={{
            h2: ankerLink,
          }}
        >
          {body}
        </ReactMarkdown>
        </ol>

      </div>

      {/* 本文 */}
      <div className="markdown">
      <ReactMarkdown
        components={{
          h2: H2,
        }}
      >
          {body}
      </ReactMarkdown>
      </div>
    </div>
  )
}
