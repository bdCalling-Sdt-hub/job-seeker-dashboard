import React, { useRef, useState } from 'react'
import JoditEditor from "jodit-react";
import { Button } from 'antd';

const AboutUs = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.");
    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => {
                    setContent(newContent);
                }}
            />

            <Button
                block
                style={{
                    marginTop: "30px",
                    backgroundColor: "#436FB6",
                    color: "#fff",
                    height: "42px",
                    borderRadius: "90px"
                }}
            >
                Update
            </Button>
        </div>
    )
}

export default AboutUs