import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import { faker } from '@faker-js/faker';
import call from "./icons8-call-50.png";
import video from "./icons8-video-24.png";
import chat from "./icons8-chat-50.png";
import data from "./data.json";
import {HTML5Backend} from "react-dnd-html5-backend";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const Card = (props) => {
    const levelColor = randomcolor();

const handleDragEnd = (result) => {
        if (!result.destination) 
    return;
        const items = Array.from(Card);
        const [reorderedCard] = items.splice(result.source.index,1);
        items.splice(result.destination.index,0 ,reorderedCard);
        console.log(result)
    };
    return (
        <DragDropContext onDragEnd={handleDragEnd} backend={HTML5Backend}>
            <Droppable 
            droppableId="Card">
                {(provided,snapshot) => (
                    <ul 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                        >
                            {props.data.map((item, index) => (
                                  console.log("++++++ item ",item.name),
                                   console.log("++++++ index ",index),
                                //   console.log()
                                // item.children.forEach((childData,i)=>(
                                //     console.log("++++++ item ",childData.name),
                                //     console.log("++++++ index ",i)     
                                // )
                                
                             
                        
                            <React.Fragment key={item.name+index}>
                            <Draggable key={item.name+index} draggableId={item.name+index} index={index}>
                                    {(provided,snapshot) => (
                                      
                                        <li {...provided.draggableProps}
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                            >
                                            <div className="card">
                                                <div className="image">
                                                    <img
                                                        src={
                                                            "https://randomuser.me/api/portraits/men/" +
                                                            randomIntFromInterval(1, 100) +
                                                            ".jpg"
                                                        }
                                                        alt="Profile"
                                                        style={{ borderColor: levelColor }}
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h4>{faker.name.fullName()}</h4>
                                                    <p>{faker.name.jobTitle()}</p>
                                                </div>
                                                <div
                                                    className="card-footer"
                                                    style={{ background: levelColor }}
                                                >
                                                    <img src={chat} alt="Chat" />
                                                    <img src={call} alt="Call" />
                                                    <img src={video} alt="Video" />
                                                </div>
                                                <div></div>
                                            </div>

                                            {item.children?.length && <Card data={item.children} />}
                                        </li>
                                        )}
                                        </Draggable>
                                  
                            </React.Fragment>
                             
                              
                              ))}
                       
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

const Chart = () => {
    return (
        
        <div className="org-tree">
            <Card data={data} />
        </div>
        
    );
};

export default Chart;
