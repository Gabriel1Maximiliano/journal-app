

export const fileUpload = async ( file ) => {
    if( !file ){
        throw Error('No hay archivo');
    };

  const cloudURL = 'https://api.cloudinary.com/v1_1/dkgtcfce7/upload';

  const formData = new FormData();
  

  formData.append('upload_preset','react-journal');

  formData.append('file',file);

    try {

        const resp = await fetch( cloudURL,{
            method:'POST',
            body:formData
        } );
        console.log(resp)
        if( !resp.ok ){
            throw new Error('No se pudo realizar petición');

        };

        const cloudResp = await resp.json();
       
        return cloudResp.secure_url;
        
    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }
}
