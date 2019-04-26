import React, { Component, useCallback, useMemo } from 'react'
import { Image, Header, Button, Icon } from 'semantic-ui-react'
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
      <Header as='h5'>{file.path} <Icon color='green' name='checkmark' /></Header>
  ));

  return (
    <section className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div>
        <h4>{files}</h4>
      </div>
    </section>
  );
}

export class importData extends Component {
  render() {
    return (
      <div className = "page">
          
          <Header as='h1' style={{fontSize: '30px'}}>Import Data</Header>
          <div className = "importData">
            <div className = "src">
            <Image src='/images/trackman.jpg' size='medium'/>
            <Basic/>
            </div>
            <div className = "src">
            <Image src='/images/rapsodo-baseball.png' width= '225px'/>
            <Basic/>
            </div>
            
          </div>
      </div>
    )
  }
}

export default importData
