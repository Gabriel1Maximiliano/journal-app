import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { fileUpload } from "../../helpers/fileUpload"


 
describe('fileUpload tests', () => {
    test('It smust upload the file correctly to cloudinary', async () => {

        const imageUrl = ' https://cdn.dribbble.com/users/1436617/screenshots/3883259/media/8445fb293e4fab14c731220687269359.png?compress=1&resize=320x240&vertical=top';
        
        const reps = await axios.get( imageUrl ); 
        
        const blob = await resp.blob();

        const file = new File([blob],'photo.jpg');

        const url = await fileUpload(file);
 
        expect( typeof url ).toBe('string');

    })
}) 