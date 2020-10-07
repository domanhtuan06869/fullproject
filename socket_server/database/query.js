module.exports = async (conn, query) => new Promise(
    (resolve, reject) => {
      const handler = (error, result) => {
        if (error) {
          reject(error);
          
          return;
        }
        resolve(result);
      };
      conn.query(query, handler);
      conn.end(()=>{
        console.log('close connect mysql');
      });
    });