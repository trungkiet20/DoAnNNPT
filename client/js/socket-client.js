const socketClient = {
    socket: null,

    init() {
        const user = auth.getUser();
        if (!user) return;

        // Initialize socket connection
        this.socket = io();

        this.socket.on('connect', () => {
            console.log('Connected to server via Socket.io');
            // Join private room for notifications
            this.socket.emit('join_user_room', user.id);
        });

        // Listen for new messages
        this.socket.on('receive_message', (data) => {
            console.log('New message received:', data);
            // Dispatch a custom event so other components can listen
            window.dispatchEvent(new CustomEvent('socket_new_message', { detail: data }));
            
            // Show a generic toast if not in chat
            if (typeof showToast === 'function') {
                showToast(`Bạn có tin nhắn mới trong phòng ${data.roomId}`, 'info');
            }
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    }
};

// Initialize after auth is checked
document.addEventListener('DOMContentLoaded', () => {
    // Wait for auth to be ready
    if (typeof auth !== 'undefined' && auth.getToken()) {
        socketClient.init();
    }
});
