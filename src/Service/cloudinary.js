

async function HandleImage(e){
   

    const file=e.target.files[0]
    if(!file){
        return alert('add atleast one image')
    }
    const data=new formData()
      data.append('file',file)
      data.append('upload_preset','first_clodinary')
      data.append('cloud_name','dturnth9t')

      const result=await fetch('https://api.cloudinary.com/v1_1/dturnth9t/image/upload',{
        method:'post',
        body:data
      })
      const uploadedImage=await result.json()

   }

export default HandleImage   