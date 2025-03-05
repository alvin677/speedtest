using System;
using System.Threading.Tasks;

namespace CsSpeedTest
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Collections.Generic.List<int> arr = new System.Collections.Generic.List<int>();
            DateTime startAt = DateTime.Now;
            for(int i = 0; i < 100_000_000; i++)
            {
                arr.Add(i);
            }
            Console.WriteLine(DateTime.Now - startAt);
            Console.ReadLine();
        }
    }
}