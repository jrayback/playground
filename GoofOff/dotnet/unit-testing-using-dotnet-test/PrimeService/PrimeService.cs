using System;

namespace Prime.Services
{
    public class PrimeService
    {
        public bool IsPrime(int candidate)
        {
            // algorithm from first pseudocode example in wikipedia article on
            // primality tests. https://en.wikipedia.org/wiki/Primality_test
            if (candidate <= 1)
            {
                return false;
            }
            else if (candidate <= 3)
            {
                return true;
            }
            else if (candidate % 2 == 0 || candidate % 3 == 0)
            {
                return false;
            }
            int i = 5;
            while(i * i <= candidate)
            {
                if(candidate % i == 0 || candidate % (i + 2) == 0)
                {
                    return false;
                }
                i += 6;
            }
            return true;
        }
    }
}
