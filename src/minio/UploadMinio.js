var Minio = require('minio')



var minioClient = new Minio.Client({
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
});

var myinvoice = {};
var userdata = {}


   minioClient.makeBucket('demo-invoice', 'us-east-1', function(err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully in "us-east-1".')

 
});

export const PutFile = (file, name) => {
  let metaData = {
    'Content-Type':'application/pdf'
    };
    minioClient.putObject('demo-invoice', name , file,metaData, function(err, etag) {
        if (err) return console.log(err)
        console.log('File uploaded successfully.')
      });
}

export const GetFile = (filename) => {
    var size = 0
minioClient.getObject('demo-invoice', filename, function(err, dataStream) {
  if (err) {
    return console.log(err)
  }
  dataStream.on('data', function(chunk) {
    size += chunk.length
  })
  dataStream.on('end', function() {
    console.log('End. Total size = ' + size)
  })
  dataStream.on('error', function(err) {
    console.log(err)
  })
 
})

}

export const DeleteFile = (filetobedeleted) => {
    minioClient.removeObject('demo-invoice', filetobedeleted, function(err) {
        if (err) {
          return console.log('Unable to remove object', err)
        }
        console.log('Removed the object')
      })
}

export const GetListofFile = () => {
    var stream = minioClient.listObjects('demo-invoice','', true)
   
     stream.on('data', function(obj) {
       console.log(obj)
     })
     stream.on('error', function(err) { console.log(err) } )
     ;
     
}

export const SetInvoice = (invoice) => {
   myinvoice = invoice;
}
export const getInvoice = () => {
  return myinvoice;
}
export const SetUserData = (data) => {
   userdata = data;
}
export const GetUserData = () => {
  return userdata;
}