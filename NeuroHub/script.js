// Tab System for Sensory Page
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Feedback Modal
    const feedbackBtn = document.getElementById('feedback-btn');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Suggest a Resource</h3>
            <form>
                <input type="text" placeholder="Resource name" required>
                <textarea placeholder="Why is this helpful?"></textarea>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    `;
    
    feedbackBtn.addEventListener('click', () => {
        document.body.appendChild(modal);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
});