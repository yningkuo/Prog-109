namespace Name
{
    class Program
    {
        static  void main(string[] args){
            string evenOrOdd  = Ka(2); // Pick up what Ka returned back and saved it in evenOrOdd.
            WriteLine(evenOrOdd);
            int fruitLength = Lee("Banana");
            WriteLine(fruitLength);
            
        }

        // if returning nothing : static void; if returning string to the main function : static string 
        static string Ka(int x){
            if(x%2 == 0){
                return "Even";
            }
            else
            {
                return "Odd";
            }
        
       }
       //     return data type / function name / (input data type & input data name)
       static int Lee(string str){
           int l = str.Length;
           return l;
       }
    }

    
    
}
//Some important notes about the function : 
//1. Method must be inside the class, outside the main function (can be)
//2. has to be static
//3. Two main types of method : void (return nothing), int/string/Boolean/Double....(returm the thing)
//????? Error: 4. Not all pad return the value