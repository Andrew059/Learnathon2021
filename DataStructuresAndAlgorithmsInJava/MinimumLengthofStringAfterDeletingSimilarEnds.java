public class MinimumLengthofStringAfterDeletingSimilarEnds {
    public int minimumLength(String s) {
        int n = s.length();
        int i = 0, j = n-1;
        
        while(i<j){
            char ch1 = s.charAt(i);
            char ch2 = s.charAt(j);
            if(ch1!=ch2) return j-i+1;
            while(i<j && s.charAt(i) == ch1) i++;
            while(j>=i && s.charAt(j) == ch1) j--;
        }
        return j-i+1;
    }
}
