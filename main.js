// Task 2  Fetch Tickets Using Async/Await and Handle Errors
document.addEventListener('DOMContentLoaded', () => {
    fetchTickets();
});
async function fetchTickets() {
    const ticketsContainer = document.getElementById('tickets');
    const errorContainer = document.getElementById('error');
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const tickets = await response.json();
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available');
        }
        displayTickets(tickets);
    } catch (error) {
        errorContainer.textContent = `Error: ${error.message}`;
    } finally {
        // Hide any loading indicators if present
        console.log('Fetch attempt finished.');
    }
}
