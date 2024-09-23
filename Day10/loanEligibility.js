const prompt = require('prompt-sync')();

const jobType = prompt('Enter your job type (government/business/private): ').toLowerCase();

if (jobType === 'government') 
{
    const salary = parseFloat(prompt('Enter your salary: '));
    if (salary > 50000) 
    {
        console.log('You can apply for a loan');
    } 
    else 
    {
        console.log('You cannot apply for a loan');
    }
} 
else if (jobType === 'business') 
{
    const turnover = parseFloat(prompt('Enter your yearly turnover: '));
    if (turnover > 2000000) 
    {
        console.log('You can apply for a loan');
    }
    else
    {
        console.log('You cannot apply for a loan');
    }
} 
else if (jobType === 'private') 
{
    console.log('No loan available for you');
} 
else 
{
    console.log('Invalid job type');
}
