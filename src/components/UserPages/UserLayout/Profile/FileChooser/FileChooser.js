import React, {useState} from "react";
import {useDropzone} from "react-dropzone";
import styled from "styled-components";

const FileChooser = (props) => {

    const [yourImage, setImage] = useState([]);
    const [b, setB] = useState(true)
    yourImage.push(props.avatar);
    const {getRootProps, getInputProps, isDragActive, open} = useDropzone({
        accept: {
            'image': ['image/*']
        },
        noClick: true,
        onDrop: (acceptedFiles) => {
            // setImage([])
            setB(false)
            props.avatarSetter(acceptedFiles[0])
            setImage(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })

    console.log(props.avatar)
    console.log(yourImage)

    yourImage.push({preview: props.avatar})

    const renderImage = () => {
        if (b) {
            return (
                yourImage.map((upFile, index) => {
                    return (
                        <div key={index}>
                            <img src={upFile.preview}
                                 style={{width: '120px', height: '120px'}}
                                 alt="preview"/>
                        </div>
                    );
                }).pop()
            );
        } else {

            return (
                yourImage.map((upFile, index) => {
                    return (
                        <div key={index}>
                            <img src={upFile.preview}
                                 style={{width: '120px', height: '120px'}}
                                 alt="preview"/>
                        </div>
                    );
                })[0]
            );
        }
    }

    return (
        <div>
            <AvatarDiv {...getRootProps()} onClick={open}>
                <div className="Image-Box">
                    {
                        renderImage()
                    }
                </div>
                <input {...getInputProps()}/>
                {
                    isDragActive ? <p>?????? ???? ?????? ????????</p> :
                        <p>???????? ???????? ?????????????????? ?????? <span>??????????????</span> ???? ?????????? ?????????? ???? ???????? ????????!</p>
                }
            </AvatarDiv>
        </div>
    );
}

const AvatarDiv = styled.div`
  border: 1px dashed #ccc;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  padding-bottom: 20px;

  .Image-Box {
    border: 1px solid #ccc;
    padding: 5px;
    width: fit-content;
    border-radius: 5px;
    margin: 40px auto 15px auto;
  }

  p {
    color: rgba(151, 143, 143, 1);
    font-size: 14px;
    text-align: center;
  }

  span {
    color: rgba(122, 195, 240, 1);
  }
`;

export default FileChooser;