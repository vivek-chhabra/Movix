import './helpers.scss'

// error message component
export function ErrorMsg({ error }) {
    return (
        <div class="alert error alert-danger alert-dismissible fade show" role="alert">
            <strong>Oops!</strong> {error}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

// success message component
export function SuccessMsg({ msg }) {
    return (
        <div class="alert success alert-success alert-dismissible fade show" role="alert">
            <strong>WooHoo!</strong> {msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

// pending message component
export function PendingMsg({ msg }) {
    return (
        <div class="alert primary alert-primary alert-dismissible fade show" role="alert">
            <strong>Loading...</strong> {msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}
