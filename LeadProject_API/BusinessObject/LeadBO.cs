namespace LeadProject_API.BusinessObject
{
    public class LeadBO
    {
        public required int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string PhoneNumber { get; set; }
        public required string Suburb { get; set; }
        public required string Category { get; set; }
        public required string Description { get; set; }
        public decimal Price { get; set; }
        public string Status { get; set; } = "invited";
        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    }
}
