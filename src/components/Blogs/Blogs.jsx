import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question-section'>

            <div className="section">
                <div className="question">
                    <h3>What is the purpose of context API</h3>
                    <hr />
                    <p>Answer :  In react we use props for sending data from one component to another componet. In this case we just send data like the drilling procedure in every component. But contextAPI in react makes an way to send data from parent element to child element by using context hook</p>
                </div>
                <div className="question">
                    <h3>Describe semantic tags.</h3>
                    <hr />
                    <p>Answer : Semantic HTML is a markup  that introduces meaning to the web page rather then just presentation it also give information about how they will look like in the page. Semantic tags make easiest to show the element in the browser. Examples :
                        <br />
                        1.Header; <br />
                        2.BlockeQuote; <br />
                        3.code <br />
                        4.em

                    </p>
                </div>
                <div className="question">
                    <h3>What is the difference between inline block,inline and block element ?</h3>
                    <hr />
                    <p>Answer :  Block element acts like it takes full space Whatever browser declared but inline element takes only the space it need.Block level element takes hight width margin padding but inline element only take padding and width but never takes margin</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;