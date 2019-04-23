import React, { Component, useCallback, useMemo } from 'react'
import { Image, Header, Button } from 'semantic-ui-react'
import { useDropzone } from 'react-dropzone'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function Basic(props) {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log(binaryStr)
      const data = new FormData();
      data.append('filedata', binaryStr);

      fetch('http://localhost:8080/api/upload', {
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify({
          filedata: binaryStr,
        })
      })
    }

    acceptedFiles.forEach(file => reader.readAsBinaryString(file))
  }, [])


  const {acceptedFiles, getRootProps, getInputProps, isDragActive,
    isDragAccept,
    isDragReject} = useDropzone({onDrop});

    const style = useMemo(() => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isDragActive,
      isDragReject
    ]);
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export class importData extends Component {
  // handleFileUpload(ev) {
  //   ev.preventDefault();

  //   const data = new FormData();
  //   data.append('filedata', this.uploadInput.filedata);
  //   data.append('filename', this.uploadInput.filename);

  //   fetch('http://localhost:8080/upload', {
  //     method: 'POST',
  //     body: data,
  //   });
  // }

    
  render() {
    return (
      <div className = "page">
          <Header as='h1' style={{fontSize: '30px'}}>Import Data</Header>
          <Image src='/images/trackman.jpg' size='medium'/>
          <Basic/>
      </div>
    )
  }
}

export default importData
