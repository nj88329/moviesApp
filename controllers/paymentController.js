// const axios = require('axios');


// function generateTransactionID(){

//    const timestamp = Date.now();
//    let randomNum = Math.floor(Math.random()*1000000);
//    let merchantPrefix = 'T';
//    let transactionId = `${merchantPrefix}${timestamp}${randomNum}`
//     return  transactionId;

// }


// const payment = async(req, res)=>{

//     const  { name , amount , mobileNumber }= req.body;

//     try{
        
//         let data = {
//           merchantId : 'PGTESTPAYUAT',
//           merchantTransactionId : generateTransactionID(),
//           merchantUserId : `MUID9EFWBE9F89EWFBC`,
//           name ,
//           amount,
//           mobileNumber,
//           redirectUrl : `http://localhost:3000/api/phonepe/status`,
//           redirectmode : 'POST',
//           paymentInstrument : {
//             type : 'PAY_PAGE'
//           }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex ;

//         const URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
//         const options = {
//            method : 'POST',
//            url : URL,
//            headers : {
//             accept : 'application/json',
//             'Content-Type' : 'application/json',
//             'X-VERIFY' : checksum
//            }, 
//            data :{
//             request : payloadMain
//            }
//         };
        
//          axios
//          .request(options)
//          .then(function(response){
//             return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url)
//          })
//          .catch(function (err){
//            console.error(err);
//          })

//     }catch(error){
//         res.status(500).send({
//             message : error.message,
//             success: false
//         })
//     }
// }



// const checkStatus = async(req, res) =>{
//      return console.log(res.req.body)
//      const merchantTransactionId = res.req.body.transactionId
//      const merchantId = res.req.body.merchantId
//      const keyIndex = 1;
//      const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
//      const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}`+ key;
//      const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//      const checksum = sha256 + "###" + keyIndex;

//      const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`
     
//      const options = {
//          method : 'GET',
//          url : URL,
//      }

//     }


// module.exports = { payment , checkStatus }