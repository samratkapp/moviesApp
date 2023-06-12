import mongoose from 'mongoose';

const conStr = 'mongodb+srv://<usename>:<password>@cluster5-eeev8.mongodb.net/test?retryWrites=true&w=majority'

const connect=()=>{
    mongoose.connect(conStr,
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        }
      ).then(() => console.log('Connected!'))
      .catch((err)=>{
        console.log('Error Connected!')
      })
}
 


export default connect;
