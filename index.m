Umax_algae = 0.5; 
Ks_algae = 0.1;   
Xmax_algae = 20;  


X_algae = 1;      
time = 0;      

% Time settings

prompt1 = "What is your time step (/hr)?";
dt = fix(input(prompt1, "s"));         
prompt2 = "What is your duration (in hours)?";
t_end = fix(input(prompt2, "s"));      
time_vector = 0:dt:t_end; 


X_algae_array = zeros(size(time_vector));
glucose_array = zeros(size(time_vector)); 


biomass_to_glucose_factor = 0.5; 

% Simulation loop
for i = 1:length(time_vector)

    X_algae_array(i) = X_algae;
    
    u_algae = Umax_algae * (1); 
    dX_algae = u_algae * X_algae * (1 - (X_algae / Xmax_algae));
    X_algae = X_algae + dX_algae * dt;
    
    glucose_produced = biomass_to_glucose_factor * dX_algae; 
    if i > 1
        glucose_array(i) = glucose_array(i-1) + glucose_produced; 
    else
        glucose_array(i) = glucose_produced;
    end
end

figure;
subplot(2,1,1);
plot(time_vector, X_algae_array, 'g', 'LineWidth', 2);
title('Algal Biomass Concentration Over Time');
xlabel('Time (h)');
ylabel('Concentration (g/l)');
grid on;

subplot(2,1,2);
plot(time_vector, glucose_array, 'b', 'LineWidth', 2);
title('Glucose Production Over Time');
xlabel('Time (h)');
ylabel('Glucose Concentration (g/l)');
grid on;

% Display final results
disp(['Final Algal Biomass: ', num2str(X_algae)]);
disp(['Total Glucose Production: ', num2str(glucose_array(end))]);