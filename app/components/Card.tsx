"use client";

import { ITask } from "@/types/tasks";


interface TaskProps {
    tasks: ITask[];
}

const Card: React.FC<TaskProps> = ({ tasks }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>tes</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">sub</button>
                </div>
            </div>
        </div>
    );
  };
  
  export default Card;