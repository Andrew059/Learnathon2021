public class MoveZeroes {
    if(nums.length==1)
    return;
int i=0;
for(int k:nums)
{
    if(k==0)
        i++;
}
    
if(i==0 || i==nums.length)
    return;

int m=0;

for(int j=0;j<nums.length;j++)
{
    if(nums[j]!=0)
        nums[m++]=nums[j];
}

for(int j=nums.length-i;j<nums.length;j++)
{
    nums[j]=0;
}


}
