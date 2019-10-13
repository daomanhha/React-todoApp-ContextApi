import React,{Component} from 'react';
import Context from './../ContextApi/Context';

class TaskElement extends Component {
    render(){
        let {element, index} = this.props;
       return (
            <Context.Consumer>
                {(context)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{element.name}</td>
                            <td className="text-center">
                                <span 
                                      className="label label-success" 
                                      onClick={()=>context.changeStatus(element.id)}
                                >
                                    {element.status ? 'kích hoạt' : 'ẩn'}
                                </span>
                            </td>
                            <td className="text-center">
                                <button type="button" 
                                        className="btn btn-warning"
                                        onClick={()=>context.updateData(element.id)} 
                                        >
                                    <span className="fa fa-pencil mr-5"
                                    ></span>Sửa
                                </button>
                                &nbsp;
                                <button type="button" 
                                        className="btn btn-danger"
                                        onClick={()=>context.deleteData(element.id)}>
                                    <span className="fa fa-trash mr-5"></span>Xóa
                                </button>
                            </td>
                        </tr>
)
                }}
            </Context.Consumer>
      );
    }
}

export default TaskElement;
