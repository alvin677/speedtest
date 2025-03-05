using System;
using System.Threading.Tasks;

namespace CsSpeedTest
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[100_000_000];
            DateTime startAt = DateTime.Now;
            for(int i = 0; i < 100_000_000; i++)
            {
                arr[i] = i;
            }
            Console.WriteLine(DateTime.Now - startAt);
            Console.ReadLine();
        }
    }
}