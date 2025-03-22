
Umax_algae = 0.5; 
Ks_algae = 0.1;   
Xmax_algae = 20;  

Umax_yeast = 0.4; 
Ks_yeast = 0.05;  
alpha = 0.1;      
beta = 0.05;      


X_algae = 1;      
S = 10;          
P = 0;            
time = 0;        


dt = 0.1;         
t_end = 48;       
time_vector = 0:dt:t_end; 


X_algae_array = zeros(size(time_vector));
S_array = zeros(size(time_vector));
P_array = zeros(size(time_vector));


for i = 1:length(time_vector)
    X_algae_array(i) = X_algae;
    S_array(i) = S;
    P_array(i) = P;
   
    u_algae = Umax_algae * (S / (Ks_algae + S));
    
 
    dX_algae = u_algae * X_algae * (1 - (X_algae / Xmax_algae));
    X_algae = X_algae + dX_algae * dt;
    
   
    S_consumed = 0.5 * dX_algae; 
    S = S - S_consumed;
    
    if S < 0
        S = 0;
    end
    
    if P > 0 
        u_yeast = Umax_yeast * (S / (Ks_yeast + S));
        
      
        dX_yeast = u_yeast * (S / (Ks_yeast + S)); 
        X_yeast = dX_yeast * dt; 
        dP = alpha * dX_yeast + beta * X_yeast;
        P = P + dP * dt;
    end
    
    time = time + dt;
end

figure;
subplot(3,1,1);
plot(time_vector, X_algae_array, 'g', 'LineWidth', 2);
title('Algal Biomass Concentration Over Time');
xlabel('Time (h)');
ylabel('Biomass Concentration (g/l)');
grid on;

subplot(3,1,2);
plot(time_vector, S_array, 'b', 'LineWidth', 2);
title('Substrate Concentration Over Time');
xlabel('Time (h)');
ylabel('Substrate Concentration (g/l)');
grid on;

subplot(3,1,3);
plot(time_vector, P_array, 'r', 'LineWidth', 2);
title('Ethanol Concentration Over Time');
xlabel('Time (h)');
ylabel('Ethanol Concentration (g/l)');
grid on;

disp(['Final Algal Biomass: ', num2str(X_algae)]);
disp(['Final Substrate Concentration: ', num2str(S)]);
disp(['Final Ethanol Concentration: ', num2str(P)]);