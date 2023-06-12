import User from './model.js'

export const  getUser = async (req,res)=>{
    
    try {
        let findObj={};
        if(req.params.id){
            findObj[id]=req.params.id;
        }
        const users = await User.find(findObj);
        res.send({status:200,users});
      } catch (error) {
        res.status(500).send(error);
      }
}


export const saveUser= async (req,res)=>{
  
    try {
      let  objUser = req.body
      let user = new User(objUser);
      let result =  await user.save();
      res.send({status:200,result});
    } catch (error) {
      res.status(500).send(error);
    }
}

export const updateUser = async (req,res)=>{
    let  objUser = req.body;
    let id= req.params.id;
    
     try {
      const result =  await User.update({_id:id},{$set:objUser},{multi:true,new:true});
       
       res.send({status:200,result});
     } catch (error) {
       res.status(500).send(error);
     }
 }
 