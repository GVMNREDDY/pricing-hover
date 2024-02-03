function togglePlan(planId) {
    const selectedPlan = document.getElementById(planId);
    const allPlans = document.querySelectorAll('.pricing-plan');

    allPlans.forEach(plan => {
        plan.classList.remove('selected');
    });

    selectedPlan.classList.add('selected');
}
