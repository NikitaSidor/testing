import axios from 'axios';

const SubmitForm = async (fullName, email) => {
    console.log(email);
    try {
        const response = await axios.post('https://cubiklink.ru/form/index.php', {
            fullname: fullName,
            email: email,
            phone: '+7',
            campaign: 'testcampaign'
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default SubmitForm;
