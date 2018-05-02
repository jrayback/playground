using Xunit;
using Prime.Services;

namespace Prime.UnitTests.Services
{
    public class PrimeService_IsPrimeShould
    {
        private readonly PrimeService _primeService;

        public PrimeService_IsPrimeShould()
        {
            _primeService = new PrimeService();
        }

        [Theory]
        [InlineData(-1)]
        [InlineData(0)]
        [InlineData(1)]
        public void ReturnFalseGivenValueLessThan2(int value)
        {
            var result = _primeService.IsPrime(value);

            Assert.False(result, $"{value} should not be prime");
        }

        [Fact]
        public void ReturnTrueGivenValueIs2()
        {
            var result = _primeService.IsPrime(2);

            Assert.True(result, "2 should be prime");
        }

        [Fact]
        public void ReturnTrueGivenValueIs3()
        {
            var result = _primeService.IsPrime(3);

            Assert.True(result, "3 should be prime");
        }

        [Theory]
        [InlineData(4)]
        [InlineData(6)]
        [InlineData(100)]
        public void ReturnFalseGivenValueGreaterThan2DivisibleBy2(int value)
        {
            var result = _primeService.IsPrime(value);

            Assert.False(result, $"{value} should not be prime");
        }

        [Fact]
        public void ReturnFalseForFirstOddNotPrime()
        {
            var result = _primeService.IsPrime(9);

            Assert.False(result, "9 should not be prime");
        }

        [Theory]
        [InlineData(3)]
        [InlineData(5)]
        [InlineData(7)]
        [InlineData(11)]
        [InlineData(13)]
        public void ReturnTrueGivenValueIsFirstFewPrime(int value)
        {
            var result = _primeService.IsPrime(value);

            Assert.True(result, $"{value} should be prime");
        }

        [Fact]
        public void ReturnFalseFor25()
        {
            var result = _primeService.IsPrime(25);

            Assert.False(result, "25 should not be prime");
        }
    }
}