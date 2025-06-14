// src/directives/intersect.js
export default {
    mounted(el, binding) {
        const { name, callback } = binding.value;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(name);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(el);
    }
}
