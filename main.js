// Task 2  Fetch Tickets Using Async/Await and Handle Errors 
// & Task 4 ussing finally at the end line
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
        // Hide any loading indicators if present~~~
        console.log('Fetch attempt finished.');
    }
}

// Task 3 Display Tickets Dynamically on the Page
function displayTickets(tickets) {
    const ticketsContainer = document.getElementById('tickets');
    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.className = 'ticket';
        ticketElement.innerHTML = `
            <p><strong>Ticket ID:</strong> ${ticket.id}</p>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
        `;
        ticketsContainer.appendChild(ticketElement);
    });
}
