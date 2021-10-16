import React from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { convertToRaw } from 'draft-js'
import draftToMarkdown from 'draftjs-to-markdown'

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TextEditor = ({ postData, setPostData }) => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  )

  const handleEditorChange = (editorState) => {
    setEditorState(editorState)
    setPostData({
      ...postData,
      jobDescriptions:
        editorState &&
        draftToMarkdown(convertToRaw(editorState.getCurrentContent())),
    })
  }
  return (
    <div>
      <Editor
        toolbarClassName='toolbarClassName'
        wrapperClassName='wrapperClassName'
        editorClassName='editorClassName'
        editorState={editorState}
        editorStyle={{
          border: '1px solid #ECECEC',
          height: '160px',
          background: '#FBFBFB',
        }}
        onEditorStateChange={handleEditorChange}
      />
      {/* <textarea
          disabled
           value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
        /> */}
    </div>
  )
}

export default TextEditor
