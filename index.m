file = fopen("output.txt", "w");

Umax_algae = 0.5; 
Ks_algae = 0.1;   
Xmax_algae = 20;  

Umax_yeast = 0.4;  
Ks_glucose = 0.1;  
Y_biomass = 0.5;   
Y_ethanol = 0.45;  

disp("Carbon Capture Simulator - By Tamir Omer")
disp("===================================================")
X_algae = input("Input Initial Algae Biomass (X_algae): "); 
X_yeast = input("Input Initial Yeast Biomass (X_yeast): "); 
S_glucose = 2; 
P_ethanol = 0; 
P_CO2 = input("Input Initial CO2 (P_CO2): ");
time = 0;      

dt = 0.1;         
t_end = input("Input Duration (t): ");
time_vector = 0:dt:t_end; 

X_algae_array = zeros(size(time_vector));
X_yeast_array = zeros(size(time_vector));  
P_ethanol_array = zeros(size(time_vector)); 
P_CO2_array = zeros(size(time_vector));    

biomass_to_glucose_factor = 0.5; 
total_glucose_produced = 0;

for i = 1:length(time_vector)
    X_algae_array(i) = X_algae;
    u_algae = Umax_algae * (1); 
    dX_algae = u_algae * X_algae * (1 - (X_algae / Xmax_algae));
    X_algae = X_algae + dX_algae * dt;
    
    glucose_produced = biomass_to_glucose_factor * dX_algae; 
    total_glucose_produced = total_glucose_produced + glucose_produced;  % Accumulate total glucose produced
end

X_algae = X_algae_array(end);  
X_yeast = 5; 
S_glucose = total_glucose_produced;  
P_ethanol = 0; 
P_CO2 = 0; 

for i = 1:length(time_vector)
    if S_glucose > 0
        u_yeast = Umax_yeast * (S_glucose / (Ks_glucose + S_glucose)); 
        
        dX_yeast = u_yeast * X_yeast * dt;
        X_yeast = X_yeast + dX_yeast;
        
        glucose_consumed = dX_yeast / Y_biomass; 
        S_glucose = max(S_glucose - glucose_consumed, 0); 
        ethanol_produced = glucose_consumed * Y_ethanol; 
        P_ethanol = P_ethanol + ethanol_produced; 
        
        P_CO2 = P_CO2 + ethanol_produced;
    end
    
    X_yeast_array(i) = X_yeast;
    P_ethanol_array(i) = P_ethanol;
    P_CO2_array(i) = P_CO2;
end

efficiency = (P_ethanol / P_CO2) * 100;

disp("Results: ");
disp("===========================================");
disp(['Total Glucose Produced: ', num2str(total_glucose_produced), 'g/l']);
disp(['Final Algal Biomass: ', num2str(X_algae), 'g/l'] );
disp(['Total Ethanol Production: ', num2str(P_ethanol), 'g/l']);
disp(['Total CO2 Production: ', num2str(P_CO2), 'g/l']);
disp(['Efficiency: ', num2str(efficiency(end)), '%']);

fprintf(file, "Results\n");
fprintf(file, "===========================================\n");
fprintf(file, ['Total Glucose Produced: ', num2str(total_glucose_produced), ' g/l', '\n']);
fprintf(file, ['Final Algal Biomass: ', num2str(X_algae), ' g/l', '\n'] );
fprintf(file, ['Total Ethanol Production: ', num2str(P_ethanol), ' g/l', '\n']);
fprintf(file, ['Total CO2 Production: ', num2str(P_CO2), ' g/l', '\n']);
fprintf(file, ['Efficiency: ', num2str(efficiency(end)), '%', '\n']); 
fclose(file);

figure(1);
plot(time_vector, total_glucose_produced * ones(size(time_vector)), 'b', 'LineWidth', 2);
title('Total Glucose Production Over Time');
xlabel('Time (h)');
ylabel('Total Glucose Produced (g/l)');
grid on;

figure(2);
subplot(4, 1, 1);
plot(time_vector, P_ethanol_array, 'g', 'LineWidth', 2);
title('Ethanol Production Over Time');
xlabel('Time (h)');
ylabel('Ethanol Concentration (g/l)');
grid on;

subplot(4, 1, 2);
plot(time_vector, P_CO2_array, 'r', 'LineWidth', 2);
title('CO2 Production Over Time');
xlabel('Time (h)');
ylabel('CO2 Concentration (g/l)');
grid on;

subplot(4, 1, 3);
plot(time_vector, X_yeast_array, 'b', 'LineWidth', 2);
title('Yeast Biomass Concentration Over Time');
xlabel('Time (h)');
ylabel('Yeast Biomass Concentration (g/l)');
grid on;

sgtitle('Fermentation Process Results');